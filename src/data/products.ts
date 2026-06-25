export interface Product {
  id: string;
  name: string;
  category: 'jeu' | 'console' | 'manette' | 'casque' | 'ssd' | 'tv' | 'chaise' | 'bureau';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  amazonUrl: string;
  badge?: 'HOT' | 'MEILLEURE VENTE' | 'MEILLEURE VALEUR' | 'NOUVEAU';
  description: string;
  sellingPoint: string;
  specs: string[];
  budgetTier: (500 | 1000 | 2000)[];
  trustSignals: string[];
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'gta-6-ps5',
    name: 'Grand Theft Auto VI - PS5',
    category: 'jeu',
    price: 79.99,
    rating: 4.9,
    reviewCount: 15420,
    amazonUrl: 'https://amzn.to/4aiof6B',
    badge: 'HOT',
    description: 'Vivez l\'expérience ultime dans Vice City. Précommandez dès maintenant pour obtenir le Pack Vintage Vice City.',
    sellingPoint: 'Date de sortie garantie. Pack bonus exclusif offert.',
    specs: ['Optimisé PS5 Pro', '4K Natif', 'Audio 3D'],
    budgetTier: [500, 1000, 2000],
    trustSignals: ['Livraison Jour-1', 'Prix Garanti'],
    image: 'https://m.media-amazon.com/images/I/71-08A2+ySL._AC_SL1500_.jpg', // Placeholder
  },
  {
    id: 'gta-6-xbox',
    name: 'Grand Theft Auto VI - Xbox Series X',
    category: 'jeu',
    price: 79.99,
    rating: 4.8,
    reviewCount: 12150,
    amazonUrl: 'https://amzn.to/4oIMhxq',
    badge: 'HOT',
    description: 'La prochaine évolution du monde ouvert sur Xbox Series X.',
    sellingPoint: 'Fluidité maximale. Temps de chargement réduits.',
    specs: ['Smart Delivery', 'Ray Tracing', 'Temps de chargement éclair'],
    budgetTier: [500, 1000, 2000],
    trustSignals: ['Livraison Jour-1', 'Prix Garanti'],
    image: 'https://m.media-amazon.com/images/I/71-08A2+ySL._AC_SL1500_.jpg', // Placeholder
  },
  {
    id: 'ps5-pro',
    name: 'PlayStation 5 Pro',
    category: 'console',
    price: 799.99,
    rating: 4.7,
    reviewCount: 3500,
    amazonUrl: 'https://amzn.to/4eJ7enk',
    badge: 'NOUVEAU',
    description: 'La console la plus puissante pour jouer à GTA 6 en 4K/60fps constants.',
    sellingPoint: 'Technologie PSSR pour un rendu cinématographique.',
    specs: ['GPU amélioré', 'Ray Tracing Avancé', 'SSD 2To'],
    budgetTier: [2000],
    trustSignals: ['En stock', 'Livraison Express'],
    image: 'https://m.media-amazon.com/images/I/51AALQ71QRL._AC_SL1500_.jpg', // Placeholder
  },
  {
    id: 'dualsense-edge',
    name: 'Manette sans fil DualSense Edge',
    category: 'manette',
    price: 239.99,
    rating: 4.6,
    reviewCount: 4200,
    amazonUrl: 'https://amzn.to/4g50sLd',
    badge: 'MEILLEURE VENTE',
    description: 'Prenez l\'avantage avec des commandes personnalisables et des gâchettes réglables.',
    sellingPoint: 'Précision chirurgicale pour les phases de shoot.',
    specs: ['Boutons arrière', 'Gâchettes réglables', 'Joysticks remplaçables'],
    budgetTier: [1000, 2000],
    trustSignals: ['Livraison gratuite', 'Garantie Sony'],
    image: 'https://m.media-amazon.com/images/I/61s-y+9l2fL._AC_SL1500_.jpg', // Placeholder
  },
  {
    id: 'lexar-eq790-2to',
    name: 'Lexar NM790 2To SSD avec Dissipateur',
    category: 'ssd',
    price: 159.99,
    rating: 4.8,
    reviewCount: 5600,
    amazonUrl: 'https://amzn.to/3T2b8jZ',
    badge: 'MEILLEURE VALEUR',
    description: 'Ne manquez jamais de place pour GTA 6 (~150GB) avec ce SSD ultra-rapide.',
    sellingPoint: 'Vitesse de lecture 7400Mo/s. Chargement instantané.',
    specs: ['Gen4x4', '7400 Mo/s', 'Compatible PS5'],
    budgetTier: [1000, 2000],
    trustSignals: ['Meilleur Prix', 'Installation Facile'],
    image: 'https://m.media-amazon.com/images/I/61G+h-Gk7UL._AC_SL1500_.jpg', // Placeholder
  },
  {
    id: 'tcl-65q6c',
    name: 'TCL 65Q6C QLED 4K 65"',
    category: 'tv',
    price: 549.00,
    rating: 4.4,
    reviewCount: 1800,
    amazonUrl: 'https://amzn.to/4b3Ep3V',
    badge: 'MEILLEURE VALEUR',
    description: 'Profitez des couleurs vibrantes de Vice City sur un écran géant QLED.',
    sellingPoint: 'Game Master 2.0. HDR10+. Prix imbattable.',
    specs: ['Quantum Dot', 'Dolby Vision', 'HDMI 2.1'],
    budgetTier: [1000, 2000],
    trustSignals: ['Livraison Installation', 'Garantie 2 ans'],
    image: 'https://m.media-amazon.com/images/I/81C5X1D+w+L._AC_SL1500_.jpg', // Placeholder
  }
];
