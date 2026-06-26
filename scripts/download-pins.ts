import fs from 'fs';
import path from 'path';
import http from 'http';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Use raw http.get to avoid Node fetch issues with IPv6/IPv4 resolution
function httpGet(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const timeoutMs = 60_000; // 60s timeout per image
    const req = http.get(url, { timeout: timeoutMs }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode}`));
        res.resume();
        return;
      }
      const chunks: Buffer[] = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    });
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timed out'));
    });
  });
}

// Simple CSV line parser that handles quoted fields
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

async function downloadPins() {
  const csvPath = path.join(process.cwd(), 'pins-export.csv');
  const exportDir = path.join(process.cwd(), 'pinterest-export');

  if (!fs.existsSync(csvPath)) {
    console.error('❌ pins-export.csv introuvable. Lance generate-pins.ts d\'abord.');
    process.exit(1);
  }

  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }

  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const lines = csvContent.split('\n').filter(l => l.trim() !== '');
  // Skip header
  const dataLines = lines.slice(1);

  console.log(`🚀 Génération de ${dataLines.length} images Pinterest...`);
  console.log(`📂 Dossier : ${exportDir}\n`);

  let success = 0;
  let failures = 0;
  const MAX_RETRIES = 2;

  for (let i = 0; i < dataLines.length; i++) {
    const fields = parseCSVLine(dataLines[i]);
    if (fields.length < 4) {
      console.log(`⏭️  Ligne ${i + 2} ignorée (champs insuffisants)`);
      continue;
    }

    const title = fields[0];
    const link = fields[1] || '';
    const angle = fields[3];

    // Detect background theme from page URL
    let theme = 'ps5_gta6';
    if (link.includes('precommande-gta6-ps5')) theme = 'ps5_gta6';
    else if (link.includes('precommande-gta6-xbox')) theme = 'xbox_gta6';
    else if (link.includes('meilleur-pack-ps5-gta6')) theme = 'pack_ps5';
    else if (link.includes('gta6-ssd-ps5-requis')) theme = 'ssd_ps5';
    else if (link.includes('ps5-pro-vs-ps5-slim-gta6')) theme = 'ps5_pro_slim';
    else if (link.includes('meilleur-casque-gta6')) theme = 'casque_audio';
    else if (link.includes('config-pc-gta6')) theme = 'pc_gamer';
    else if (link.includes('accessoires-indispensables-ps5')) theme = 'accessoires_ps5';
    else if (link.includes('meilleure-tv-4k-gta6')) theme = 'tv_4k';
    else if (link.includes('gta-online-2-preparation')) theme = 'routeur_gaming';

    const filename = `pin-${(i + 1).toString().padStart(3, '0')}.png`;
    const filepath = path.join(exportDir, filename);

    // Skip if already downloaded
    if (fs.existsSync(filepath) && fs.statSync(filepath).size > 1000) {
      console.log(`⏭️  [${i + 1}/${dataLines.length}] ${filename} existe déjà, skip`);
      success++;
      continue;
    }

    let downloaded = false;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const params = new URLSearchParams({ title, angle, bg: theme });
        const url = `http://127.0.0.1:3000/api/pinterest?${params.toString()}`;

        console.log(`📸 [${i + 1}/${dataLines.length}] ${filename} (essai ${attempt})...`);
        const buffer = await httpGet(url);

        if (buffer.length < 500) {
          throw new Error(`Image trop petite (${buffer.length} bytes)`);
        }

        fs.writeFileSync(filepath, buffer);
        console.log(`   ✅ ${filename} — ${(buffer.length / 1024).toFixed(0)} KB`);
        success++;
        downloaded = true;
        break;
      } catch (err: any) {
        console.error(`   ❌ Erreur: ${err.message}`);
        if (attempt < MAX_RETRIES) {
          console.log(`   ⏳ Retry dans 2s...`);
          await sleep(2000);
        }
      }
    }

    if (!downloaded) {
      failures++;
    }

    // Give the Next.js server breathing room
    await sleep(500);
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Succès: ${success}/${dataLines.length}`);
  if (failures > 0) console.log(`❌ Échecs: ${failures}`);
  console.log(`📂 Images dans : ${exportDir}`);
}

downloadPins();
