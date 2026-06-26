import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import GTATimeline from "@/components/sections/GTATimeline";
import EditionComparator from "@/components/sections/EditionComparator";
import SetupBuilder from "@/components/sections/SetupBuilder";
import SSDGuide from "@/components/sections/SSDGuide";
import TVGuide from "@/components/sections/TVGuide";
import AudioGuide from "@/components/sections/AudioGuide";
import GamingRoom from "@/components/sections/GamingRoom";
import SetupQuiz from "@/components/sections/SetupQuiz";
import ReadinessChecker from "@/components/sections/ReadinessChecker";
import FAQ from "@/components/sections/FAQ";
import SocialProofTicker from "@/components/conversion/SocialProofTicker";
import { PRODUCTS_FULL } from "@/data/products-full";
import ProductCard from "@/components/ui/ProductCard";
import StorySection from "@/components/sections/StorySection";
import PopularGuides from "@/components/sections/PopularGuides";

export const metadata: Metadata = {
  title: "GTA 6 Date de Sortie, Précommande & Setup — GTA6HQ",
  description:
    "Tout sur GTA 6 : date de sortie 19 novembre 2026, précommandes Amazon, meilleur setup gaming, SSD PS5 et guides Vice City. Le site de référence français.",
  openGraph: {
    title: "GTA6HQ — Le site de référence français sur GTA 6",
    description:
      "Précommandez GTA 6, préparez votre setup et découvrez tous nos guides pour vivre Vice City dans les meilleures conditions.",
    images: [{ url: "https://gta6-pi-cyan.vercel.app/images/hero_bg.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  const featuredProducts = PRODUCTS_FULL.slice(0, 6);

  return (
    <div className="relative">
      <Hero />
      <SocialProofTicker />
      <StatsCounter />
      <StorySection />
      <GTATimeline />

      {/* Featured Products */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase font-bold block mb-3">
                SÉLECTION EXPERTISE
              </span>
              <h2 className="text-5xl md:text-7xl mb-4">
                LES <span className="text-orange">ESSENTIELS</span>
              </h2>
              <p className="text-muted">La sélection ultime testée et approuvée pour GTA 6.</p>
            </div>
            <a
              href="/produits"
              className="hidden md:inline-flex items-center gap-2 border border-border text-muted hover:text-cyan hover:border-cyan px-6 py-2 text-sm font-bold tracking-widest transition-all duration-300"
            >
              VOIR TOUT LE CATALOGUE →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <a
              href="/produits"
              className="inline-flex items-center gap-2 border border-border text-muted hover:text-cyan hover:border-cyan px-6 py-3 text-sm font-bold tracking-widest transition-all duration-300"
            >
              VOIR TOUT LE CATALOGUE →
            </a>
          </div>
        </div>
      </section>

      <SocialProofTicker />
      <EditionComparator />
      <SetupBuilder />
      <SSDGuide />
      <TVGuide />
      <AudioGuide />
      <GamingRoom />
      <SetupQuiz />
      <PopularGuides />
      <ReadinessChecker />
      <FAQ />
    </div>
  );
}
