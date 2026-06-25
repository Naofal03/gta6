export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  platform: string;
  fact: string;
  color: string;
  image?: string;
}

export const GTA_TIMELINE: TimelineItem[] = [
  {
    id: 'gta1',
    year: '1997',
    title: 'Grand Theft Auto',
    platform: 'PC, PS1',
    fact: 'Le début de la légende avec une vue de dessus révolutionnaire.',
    color: '#4A4A4A',
    image: '/images/gta1_classic.png',
  },
  {
    id: 'gta-vc',
    year: '2002',
    title: 'GTA Vice City',
    platform: 'PS2, Xbox, PC',
    fact: 'L\'esthétique néon des années 80 et la première fois à Vice City.',
    color: '#FF00CC',
    image: '/images/gta_vice_city.png',
  },
  {
    id: 'gta-sa',
    year: '2004',
    title: 'GTA San Andreas',
    platform: 'PS2, Xbox, PC',
    fact: 'Une map immense pour l\'époque et des mécaniques RPG uniques.',
    color: '#006400',
    image: '/images/gta_san_andreas.png',
  },
  {
    id: 'gta-iv',
    year: '2008',
    title: 'GTA IV',
    platform: 'PS3, Xbox 360, PC',
    fact: 'Un nouveau moteur physique (RAGE) et une ambiance sombre à Liberty City.',
    color: '#4682B4',
    image: '/images/gta_iv_liberty.png',
  },
  {
    id: 'gta-v',
    year: '2013',
    title: 'GTA V',
    platform: 'PS3, PS4, PS5, Xbox, PC',
    fact: 'Le jeu de tous les records avec 3 protagonistes et GTA Online.',
    color: '#228B22',
    image: '/images/gta_v_los_santos.png',
  },
  {
    id: 'gta-6',
    year: '2026',
    title: 'GTA VI',
    platform: 'PS5, Xbox Series X/S',
    fact: 'Le retour à Vice City avec un réalisme jamais atteint. Sortie le 19 Nov.',
    color: '#00FFCC',
    image: '/images/hero_bg.png',
  },
];
