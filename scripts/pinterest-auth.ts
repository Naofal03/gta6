import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

// Load env manually
const envPath = path.join(process.cwd(), '.env');
const envVars: Record<string, string> = {};
fs.readFileSync(envPath, 'utf-8').split('\n').forEach(line => {
  const match = line.match(/^([^=]+)="?([^"]*)"?$/);
  if (match) envVars[match[1].trim()] = match[2].trim();
});

const APP_ID = envVars['PINTEREST_APP_ID'];
const APP_SECRET = envVars['PINTEREST_APP_SECRET'];
const REDIRECT_URI = 'https://gta6-pi-cyan.vercel.app/';

async function main() {
  // Step 1: Show the authorization URL
  const authUrl = `https://www.pinterest.com/oauth/?client_id=${APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=pins:read,pins:write,boards:read,boards:write`;

  console.log('\n✅ Étape 1 : Ouvre ce lien dans ton navigateur :');
  console.log('\n' + authUrl + '\n');
  console.log('Autorise l\'application "GTA6" sur Pinterest.');
  console.log('Tu seras redirigé vers ton site. L\'URL ressemblera à :');
  console.log('   https://gta6-pi-cyan.vercel.app/?code=XXXXX...\n');

  // Step 2: Ask for the code
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const code = await new Promise<string>(resolve => {
    rl.question('Colle ici le code "code=..." que tu vois dans l\'URL : ', answer => {
      rl.close();
      resolve(answer.trim().replace(/^code=/, ''));
    });
  });

  if (!code) {
    console.error('❌ Aucun code fourni.');
    process.exit(1);
  }

  // Step 3: Exchange code for access token
  console.log('\n🔄 Échange du code contre un token...');

  const credentials = Buffer.from(`${APP_ID}:${APP_SECRET}`).toString('base64');

  const response = await fetch('https://api.pinterest.com/v5/oauth/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }).toString(),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error('\n❌ Erreur lors de l\'échange du token :', JSON.stringify(result, null, 2));
    process.exit(1);
  }

  const accessToken = result.access_token;
  const refreshToken = result.refresh_token;

  console.log('\n🎉 Token obtenu avec succès !');
  console.log('Access Token :', accessToken);
  if (refreshToken) console.log('Refresh Token :', refreshToken);

  // Step 4: Update .env
  let envContent = fs.readFileSync(envPath, 'utf-8');
  envContent = envContent.replace(/PINTEREST_ACCESS_TOKEN=".*?"/, `PINTEREST_ACCESS_TOKEN="${accessToken}"`);
  if (refreshToken && !envContent.includes('PINTEREST_REFRESH_TOKEN')) {
    envContent += `\nPINTEREST_REFRESH_TOKEN="${refreshToken}"\n`;
  } else if (refreshToken) {
    envContent = envContent.replace(/PINTEREST_REFRESH_TOKEN=".*?"/, `PINTEREST_REFRESH_TOKEN="${refreshToken}"`);
  }
  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Le fichier .env a été mis à jour avec ton nouveau token !');
  console.log('Tu peux maintenant lancer : npx tsx --env-file=.env scripts/publish-pins.ts');
}

main().catch(console.error);
