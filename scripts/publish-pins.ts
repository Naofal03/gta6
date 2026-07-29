import * as fs from 'fs';
import * as path from 'path';

// Number of pins to publish per script execution (batch size)
const PINS_PER_RUN = 10;
const CSV_FILE = path.join(process.cwd(), 'pins-export.csv');
const TRACKING_FILE = path.join(process.cwd(), 'published-pins.json');
const IMAGES_DIR = path.join(process.cwd(), 'pinterest-export');

const ACCESS_TOKEN = process.env.PINTEREST_ACCESS_TOKEN;
const BOARD_ID = process.env.PINTEREST_BOARD_ID;

// Pinterest API v5 endpoint
const PINTEREST_API_URL = 'https://api.pinterest.com/v5/pins';

interface PinRow {
  index: string;
  angle: string;
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

// Parse CSV
function parseCSV(filePath: string): PinRow[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(l => l.trim().length > 0);
  const rows: PinRow[] = [];

  // Skip header (i === 0)
  for (let i = 1; i < lines.length; i++) {
    const columns = parseCSVLine(lines[i]);
    if (columns.length >= 4) {
      rows.push({
        index: i.toString().padStart(3, '0'),
        title: columns[0].trim(),
        link: columns[1].trim(),
        description: columns[2].trim(),
        angle: columns[3].trim(),
        imageFileName: `pin-${i.toString().padStart(3, '0')}.png`
      });
    }
  }
  return rows;
}

// Load previously published pins
function loadPublishedPins(): string[] {
  if (fs.existsSync(TRACKING_FILE)) {
    const data = fs.readFileSync(TRACKING_FILE, 'utf-8');
    try {
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  }
  return [];
}

// Save published pins
function savePublishedPins(published: string[]) {
  fs.writeFileSync(TRACKING_FILE, JSON.stringify(published, null, 2));
}

async function publishPin(pin: PinRow): Promise<boolean> {
  try {
    const imagePath = path.join(IMAGES_DIR, pin.imageFileName);
    if (!fs.existsSync(imagePath)) {
      console.error(`❌ Image not found: ${imagePath}`);
      return false;
    }

    // Read image to base64
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    // Basic content type inference
    const contentType = pin.imageFileName.endsWith('.jpg') || pin.imageFileName.endsWith('.jpeg') ? 'image/jpeg' : 'image/png';

    // Construct Pinterest API payload
    const payload = {
      board_id: BOARD_ID,
      title: pin.title,
      description: pin.description,
      link: pin.link,
      media_source: {
        source_type: 'image_base64',
        content_type: contentType,
        data: base64Image
      }
    };

    console.log(`🚀 Publishing [${pin.imageFileName}]...`);
    
    const response = await fetch(PINTEREST_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Failed to publish ${pin.imageFileName}. Status: ${response.status} ${response.statusText}`);
      console.error(`Response: ${errorText.substring(0, 500)}`);
      return false;
    }

    const result = await response.json();

    console.log(`✅ Success! Pin ID: ${result.id}`);
    return true;

  } catch (e) {
    console.error(`❌ Error publishing ${pin.imageFileName}:`, e);
    return false;
  }
}

async function main() {
  if (!ACCESS_TOKEN || !BOARD_ID) {
    console.error('🚨 Missing PINTEREST_ACCESS_TOKEN or PINTEREST_BOARD_ID in .env file.');
    console.log('Veuillez configurer vos clés API Pinterest dans le fichier .env.');
    process.exit(1);
  }

  console.log('📊 Loading pins and tracking history...');
  const allPins = parseCSV(CSV_FILE);
  const publishedPins = loadPublishedPins();

  // Filter out already published pins
  const pendingPins = allPins.filter(p => !publishedPins.includes(p.imageFileName));

  console.log(`Found ${allPins.length} total pins.`);
  console.log(`Found ${pendingPins.length} pending pins ready to be published.`);

  if (pendingPins.length === 0) {
    console.log('🎉 All pins have already been published!');
    return;
  }

  // Take the next batch
  const batch = pendingPins.slice(0, PINS_PER_RUN);
  console.log(`\n🔥 Starting publication batch of ${batch.length} pins...\n`);

  for (const pin of batch) {
    const success = await publishPin(pin);
    if (success) {
      publishedPins.push(pin.imageFileName);
      savePublishedPins(publishedPins);
    }
    // Respect rate limits, wait 2 seconds between pins
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\n🏁 Batch completed.');
  console.log(`${pendingPins.length - batch.length} pins remaining for future runs.`);
}

main();
