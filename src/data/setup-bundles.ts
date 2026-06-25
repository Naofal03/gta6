export interface SetupBundle {
  tier: 500 | 1000 | 2000;
  name: string;
  description: string;
  productIds: string[];
}

export const SETUP_BUNDLES: SetupBundle[] = [
  {
    tier: 500,
    name: "Essentiel",
    description: "Le strict nécessaire pour commencer l'aventure à Vice City.",
    productIds: ['gta-6-ps5', 'dualsense'],
  },
  {
    tier: 1000,
    name: "Optimisé",
    description: "Le meilleur rapport performance/prix pour jouer en 4K.",
    productIds: ['gta-6-ps5', 'lexar-eq790-2to', 'tcl-65q6c', 'dualsense-edge'],
  },
  {
    tier: 2000,
    name: "Ultime",
    description: "L'expérience absolue. Rien n'est laissé au hasard.",
    productIds: ['gta-6-ps5', 'ps5-pro', 'lexar-eq790-2to', 'tcl-65q6c', 'dualsense-edge'],
  },
];
