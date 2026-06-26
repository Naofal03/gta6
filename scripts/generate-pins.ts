import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://gta6-pi-cyan.vercel.app';

interface GuideContext {
  slug: string;
  topic: string;
  seoKeywords: string[];
  productName: string;
}

const guides: GuideContext[] = [
  { slug: 'precommande-gta6-ps5', topic: 'Précommande PS5', seoKeywords: ['gta 6 ps5', 'precommande', 'jeu ps5'], productName: 'GTA 6 sur PS5' },
  { slug: 'precommande-gta6-xbox', topic: 'Précommande Xbox', seoKeywords: ['gta 6 xbox', 'precommande', 'xbox series x'], productName: 'GTA 6 sur Xbox Series' },
  { slug: 'meilleur-pack-ps5-gta6', topic: 'Pack Console', seoKeywords: ['pack ps5 gta 6', 'bundle ps5', 'console gta 6'], productName: 'Pack PS5 + GTA 6' },
  { slug: 'gta6-ssd-ps5-requis', topic: 'Stockage SSD', seoKeywords: ['ssd ps5', 'stockage gta 6', 'disque dur ps5'], productName: 'SSD PS5 2To' },
  { slug: 'ps5-pro-vs-ps5-slim-gta6', topic: 'PS5 Pro vs Slim', seoKeywords: ['ps5 pro', 'ps5 slim', 'comparatif ps5 gta 6'], productName: 'PS5 Pro' },
  { slug: 'meilleur-casque-gta6', topic: 'Casque Audio', seoKeywords: ['casque gta 6', 'casque ps5', 'audio 3d'], productName: 'Casque Pulse Elite' },
  { slug: 'config-pc-gta6', topic: 'Configuration PC', seoKeywords: ['config pc gta 6', 'pc gamer', 'rtx 4070'], productName: 'PC Gamer' },
  { slug: 'accessoires-indispensables-ps5', topic: 'Accessoires PS5', seoKeywords: ['accessoires ps5', 'manette gta 6', 'dualsense edge'], productName: 'Accessoires PS5' },
  { slug: 'meilleure-tv-4k-gta6', topic: 'TV 4K Gaming', seoKeywords: ['tv 4k ps5', 'tv gta 6', 'hdmi 2.1'], productName: 'TV 4K HDMI 2.1' },
  { slug: 'gta-online-2-preparation', topic: 'Routeur / Réseau', seoKeywords: ['routeur gaming', 'gta online 2', 'connexion ps5'], productName: 'Routeur Gaming' }
];

function generatePinsForGuide(guide: GuideContext) {
  const pins = [];
  
  // 70% SEO Propre (7 pins)
  pins.push({
    title: `Guide Complet : Le meilleur ${guide.topic} pour GTA 6 en 2026`,
    description: `Découvrez notre sélection ultime pour choisir votre ${guide.topic}. Test complet, comparatif de prix et conseils d'achat pour jouer à GTA VI dans les meilleures conditions. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'SEO / Guide'
  });
  pins.push({
    title: `Comparatif 2026 : Quel ${guide.topic} choisir pour GTA VI ?`,
    description: `Ne vous trompez pas ! Voici le grand comparatif définitif concernant : ${guide.topic}. Lisez notre avis détaillé avant de passer commande. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'SEO / Comparatif'
  });
  pins.push({
    title: `Avis & Test : Faut-il craquer pour ce ${guide.topic} ?`,
    description: `Notre review honnête sur le choix d'un(e) ${guide.topic} pour le lancement de GTA 6. Avantages, inconvénients et budget à prévoir. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'SEO / Review'
  });
  pins.push({
    title: `Top 3 des meilleurs choix pour votre ${guide.topic}`,
    description: `Notre classement mis à jour des meilleures options concernant : ${guide.topic}. Idéal pour se préparer à la sortie de Vice City. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'SEO / Top'
  });
  pins.push({
    title: `Tutoriel : Tout savoir sur votre ${guide.topic} avant GTA 6`,
    description: `L'article de référence pour comprendre comment bien choisir et optimiser son ${guide.topic}. Cliquez pour lire le guide complet. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'SEO / Tuto'
  });
  pins.push({
    title: `${guide.productName} : La configuration recommandée par les experts`,
    description: `Pourquoi les joueurs pros recommandent ce ${guide.topic} ? Les détails techniques et l'analyse de rentabilité. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'SEO / Expert'
  });
  pins.push({
    title: `Budget ${guide.topic} : Combien dépenser pour GTA 6 ?`,
    description: `Dossier spécial budget : découvrez combien il faut réellement investir dans un(e) ${guide.topic} pour jouer sans se ruiner. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'SEO / Budget'
  });

  // 20% Curiosité / FOMO (2 pins)
  pins.push({
    title: `🤫 L'astuce cachée pour avoir votre ${guide.topic} beaucoup moins cher`,
    description: `Un secret bien gardé par les revendeurs pour faire baisser le prix de votre ${guide.topic}. Lisez l'astuce avant qu'elle ne soit corrigée. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'Curiosité'
  });
  pins.push({
    title: `⚠️ L'erreur fatale que 80% des joueurs font avec leur ${guide.topic}`,
    description: `Avertissement crucial : ne gâchez pas votre expérience de jeu sur GTA 6. Vérifiez ce réglage lié à votre ${guide.topic} immédiatement. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'Alerte'
  });

  // 10% Promo / Urgent (1 pin)
  pins.push({
    title: `🔥 ALERTE RUPTURE : Stock très faible pour ${guide.productName} !`,
    description: `Les stocks fondent ! Sécurisez votre ${guide.topic} dès aujourd'hui au meilleur prix garanti Amazon avant la pénurie générale. ${guide.seoKeywords.map(k => '#'+k.replace(/ /g,'')).join(' ')}`,
    angle: 'Urgence / Promo'
  });

  return pins;
}

function generateAdvancedCsv() {
  const csvHeaders = '"Title","Link","Description","Angle Psychologique"\n';
  let csvContent = csvHeaders;

  guides.forEach(guide => {
    const pins = generatePinsForGuide(guide);
    const destinationUrl = `${SITE_URL}/guides/${guide.slug}`;
    
    pins.forEach(pin => {
      const title = pin.title.replace(/"/g, '""');
      const description = pin.description.replace(/"/g, '""');
      const angleName = pin.angle.replace(/"/g, '""');
      
      csvContent += `"${title}","${destinationUrl}","${description}","${angleName}"\n`;
    });
  });

  const exportPath = path.join(process.cwd(), 'pins-export.csv');
  fs.writeFileSync(exportPath, csvContent, 'utf-8');
  console.log(`\n🎉 Succès ! Script mis à jour (Stratégie Pinterest 70/20/10).`);
  console.log(`Fichier CSV exporté ici : ${exportPath}`);
  console.log(`Contient 100 épingles (10 par page) prêtes à être publiées.\n`);
}

generateAdvancedCsv();
