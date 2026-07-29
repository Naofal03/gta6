import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

// ─── Config ───────────────────────────────────────────────────
const TWEETS_PER_RUN = 10;
const CSV_FILE = path.join(process.cwd(), 'pins-export.csv');
const TRACKING_FILE = path.join(process.cwd(), 'published-tweets.json');
const IMAGES_DIR = path.join(process.cwd(), 'pinterest-export');

const API_KEY = process.env.TWITTER_API_KEY!;
const API_SECRET = process.env.TWITTER_API_SECRET!;
const ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN!;
const ACCESS_SECRET = process.env.TWITTER_ACCESS_SECRET!;

// ─── OAuth 1.0a Signature ─────────────────────────────────────
function percentEncode(str: string): string {
  return encodeURIComponent(str).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase());
}

function generateOAuthSignature(
  method: string,
  url: string,
  params: Record<string, string>,
  consumerSecret: string,
  tokenSecret: string
): string {
  const sortedParams = Object.keys(params).sort().map(k => `${percentEncode(k)}=${percentEncode(params[k])}`).join('&');
  const baseString = `${method.toUpperCase()}&${percentEncode(url)}&${percentEncode(sortedParams)}`;
  const signingKey = `${percentEncode(consumerSecret)}&${percentEncode(tokenSecret)}`;
  return crypto.createHmac('sha1', signingKey).update(baseString).digest('base64');
}

function buildOAuthHeader(method: string, url: string, extraParams: Record<string, string> = {}): string {
  const oauthParams: Record<string, string> = {
    oauth_consumer_key: API_KEY,
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: ACCESS_TOKEN,
    oauth_version: '1.0',
  };

  const allParams = { ...oauthParams, ...extraParams };
  oauthParams.oauth_signature = generateOAuthSignature(method, url, allParams, API_SECRET, ACCESS_SECRET);

  const header = Object.keys(oauthParams)
    .sort()
    .map(k => `${percentEncode(k)}="${percentEncode(oauthParams[k])}"`)
    .join(', ');

  return `OAuth ${header}`;
}

// ─── Twitter API Calls ────────────────────────────────────────

// Step 1: Upload media (uses v1.1 endpoint)
async function uploadMedia(imagePath: string): Promise<string | null> {
  const UPLOAD_URL = 'https://upload.twitter.com/1.1/media/upload.json';
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString('base64');
  const mediaType = imagePath.endsWith('.jpg') || imagePath.endsWith('.jpeg') ? 'image/jpeg' : 'image/png';

  const formParams: Record<string, string> = {
    media_data: base64Image,
    media_category: 'tweet_image',
  };

  const authHeader = buildOAuthHeader('POST', UPLOAD_URL, formParams);

  const formBody = Object.entries(formParams)
    .map(([k, v]) => `${percentEncode(k)}=${percentEncode(v)}`)
    .join('&');

  try {
    const response = await fetch(UPLOAD_URL, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('   ❌ Media upload failed:', JSON.stringify(result));
      return null;
    }

    return result.media_id_string;
  } catch (err: any) {
    console.error('   ❌ Media upload error:', err.message);
    return null;
  }
}

// Step 2: Post tweet with media (uses v2 endpoint)
async function postTweet(text: string, mediaId: string): Promise<boolean> {
  const TWEET_URL = 'https://api.twitter.com/2/tweets';

  const payload = {
    text,
    media: { media_ids: [mediaId] },
  };

  const authHeader = buildOAuthHeader('POST', TWEET_URL);

  try {
    const response = await fetch(TWEET_URL, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('   ❌ Tweet failed:', JSON.stringify(result));
      return false;
    }

    console.log(`   ✅ Tweet publié ! ID: ${result.data.id}`);
    return true;
  } catch (err: any) {
    console.error('   ❌ Tweet error:', err.message);
    return false;
  }
}

// ─── CSV Parser ───────────────────────────────────────────────
interface TweetRow {
  index: string;
  title: string;
  description: string;
  link: string;
  imageFileName: string;
}

// Basic CSV Line Parser
function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"';
          i++; // skip escaped quote
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        fields.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
  }
  fields.push(current);
  return fields;
}

function parseCSV(filePath: string): TweetRow[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(l => l.trim().length > 0);
  const rows: TweetRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const columns = parseCSVLine(lines[i]);
    if (columns.length >= 4) {
      rows.push({
        index: i.toString().padStart(3, '0'),
        title: columns[0].trim(),
        link: columns[1].trim(),
        description: columns[2].trim(),
        imageFileName: `pin-${i.toString().padStart(3, '0')}.png`,
      });
    }
  }
  return rows;
}

// ─── Tweet Text Generator ─────────────────────────────────────
// Twitter limit: 280 characters. We craft a short, engaging tweet.
function buildTweetText(title: string, link: string): string {
  const hashtags = '#GTA6 #GamingSetup';
  const maxTitleLen = 280 - link.length - hashtags.length - 6; // 6 for spacing/newlines
  const truncatedTitle = title.length > maxTitleLen ? title.substring(0, maxTitleLen - 1) + '…' : title;
  return `${truncatedTitle}\n\n${hashtags}\n${link}`;
}

// ─── Tracking ─────────────────────────────────────────────────
function loadPublishedTweets(): string[] {
  if (fs.existsSync(TRACKING_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(TRACKING_FILE, 'utf-8'));
    } catch { return []; }
  }
  return [];
}

function savePublishedTweets(published: string[]) {
  fs.writeFileSync(TRACKING_FILE, JSON.stringify(published, null, 2));
}

// ─── Main ─────────────────────────────────────────────────────
async function main() {
  if (!API_KEY || !API_SECRET || !ACCESS_TOKEN || !ACCESS_SECRET) {
    console.error('🚨 Variables manquantes dans .env :');
    console.error('   TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET');
    console.error('\n📝 Pour les obtenir :');
    console.error('   1. Va sur https://developer.x.com/en/portal');
    console.error('   2. Crée un projet + app (gratuit)');
    console.error('   3. Va dans "Keys and tokens"');
    console.error('   4. Génère Consumer Keys (API Key + Secret)');
    console.error('   5. Génère Access Token & Secret (avec Read & Write)');
    process.exit(1);
  }

  console.log('📊 Chargement des tweets à publier...\n');
  const allTweets = parseCSV(CSV_FILE);
  const publishedTweets = loadPublishedTweets();

  const pendingTweets = allTweets.filter(t => !publishedTweets.includes(t.imageFileName));

  console.log(`📋 Total: ${allTweets.length} | Publiés: ${publishedTweets.length} | En attente: ${pendingTweets.length}`);

  if (pendingTweets.length === 0) {
    console.log('🎉 Tous les tweets ont déjà été publiés !');
    return;
  }

  const batch = pendingTweets.slice(0, TWEETS_PER_RUN);
  console.log(`\n🔥 Publication de ${batch.length} tweets...\n`);

  let success = 0;
  for (const tweet of batch) {
    const imagePath = path.join(IMAGES_DIR, tweet.imageFileName);
    if (!fs.existsSync(imagePath)) {
      console.log(`⏭️  Image introuvable : ${tweet.imageFileName}`);
      continue;
    }

    console.log(`🐦 [${tweet.index}] ${tweet.title.substring(0, 50)}...`);

    // 1. Upload image
    const mediaId = await uploadMedia(imagePath);
    if (!mediaId) continue;

    // 2. Post tweet
    const tweetText = buildTweetText(tweet.title, tweet.link);
    const posted = await postTweet(tweetText, mediaId);

    if (posted) {
      publishedTweets.push(tweet.imageFileName);
      savePublishedTweets(publishedTweets);
      success++;
    }

    // Rate limit: wait 3s between tweets
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Publiés: ${success}/${batch.length}`);
  console.log(`📋 Restants: ${pendingTweets.length - success}`);
}

main();
