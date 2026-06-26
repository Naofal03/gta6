import Link from "next/link";
import { BookOpen, Flame, ArrowRight, HardDrive, Monitor, ShieldAlert, ShoppingBag } from "lucide-react";

interface GuideCard {
  title: string;
  description: string;
  category: string;
  slug: string;
  readTime: string;
  icon: any;
  accentColor: string;
}
const POPULAR_GUIDES: GuideCard[] = [
  {
    title: "Précommande GTA 6 PS5 — Guide d'achat 2026",
    description: "Réservez votre édition physique ou numérique au meilleur prix et découvrez les accessoires indispensables.",
    category: "Précommande PS5",
    slug: "precommande-gta6-ps5",
    readTime: "4 min",
    icon: ShoppingBag,
    accentColor: "from-orange to-red-500",
  },
  {
    title: "SSD Requis pour GTA 6 sur PS5",
    description: "GTA 6 pèsera environ 150 Go. Quel SSD NVMe PCIe 4.0 ultra-rapide choisir pour ne pas saturer votre console ?",
    category: "SSD PS5",
    slug: "gta6-ssd-ps5-requis",
    readTime: "5 min",
    icon: HardDrive,
    accentColor: "from-cyan to-blue-500",
  },
  {
    title: "PS5 Pro vs PS5 Slim pour GTA 6",
    description: "GPU boosté, PSSR, Ray-Tracing avancé... Quelle version de la PS5 offre la meilleure expérience sur GTA VI ?",
    category: "Comparatif Console",
    slug: "ps5-pro-vs-ps5-slim-gta6",
    readTime: "5 min",
    icon: Monitor,
    accentColor: "from-pink-500 to-purple-500",
  },
  {
    title: "Configuration PC requise pour GTA 6",
    description: "Specs minimales, recommandées et estimations matérielles pour faire tourner GTA VI en 4K 60 FPS sur PC.",
    category: "Configuration PC",
    slug: "config-pc-gta6",
    readTime: "6 min",
    icon: ShieldAlert,
    accentColor: "from-blue-500 to-indigo-600",
  },
];
export default function PopularGuides() {
  return (
    <section className="py-24 px-6 bg-surface border-y border-border/50 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase font-bold flex items-center gap-2 mb-3">
              <Flame size={12} className="text-orange fill-orange animate-pulse" />
              Ressources indispensables
            </span>
            <h2 className="text-5xl md:text-7xl mb-4 font-bebas tracking-wide uppercase text-white">
              NOS GUIDES <span className="text-orange">POPULAIRES</span>
            </h2>
            <p className="text-muted max-w-lg font-inter">
              Des dossiers complets rédigés par nos experts pour optimiser vos achats et préparer le lancement de GTA VI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POPULAR_GUIDES.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group glass p-8 rounded-sm border border-border/50 hover:border-orange/20 hover:bg-white/1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glow border line on top hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${guide.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[10px] font-mono text-cyan uppercase tracking-widest bg-cyan/5 border border-cyan/20 px-2 py-0.5 rounded-sm">
                      {guide.category}
                    </span>
                    <span className="text-[10px] font-mono text-muted flex items-center gap-1">
                      <BookOpen size={10} />
                      {guide.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bebas text-white tracking-wide uppercase mb-3 group-hover:text-orange transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="text-muted text-sm font-inter leading-relaxed mb-8">
                    {guide.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-white text-xs font-mono font-bold uppercase tracking-wider group-hover:text-cyan transition-colors self-start mt-auto">
                  Lire le guide complet
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Background watermark icon */}
                <div className="absolute right-4 bottom-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none">
                  <Icon size={120} className="text-white" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
