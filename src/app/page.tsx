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
import VideoShowcase from "@/components/sections/VideoShowcase";
import BentoGrid from "@/components/sections/BentoGrid";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gta6-pi-cyan.vercel.app";

export const metadata: Metadata = {
  title: "GTA 6 (19 novembre 2026) : Prix, Éditions, Setup & Guides — GTA6HQ",
  description:
    "GTA 6 est sorti le 19 novembre 2026 sur PS5 et Xbox Series X|S. Meilleur prix (79,99 €), Standard vs Ultimate, 150 Go d'espace requis, meilleur SSD PS5, TV 4K 120fps et casque audio : tous nos guides experts.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "GTA 6 (19 novembre 2026) — Prix, Éditions & Setup Idéal | GTA6HQ",
    description:
      "GTA 6 sorti sur PS5 et Xbox Series X|S. Où acheter au meilleur prix, quelle édition choisir, et quel setup préparer pour Vice City à Leonida. Guides experts en français.",
    images: [{ url: `${SITE_URL}/images/hero_bg.png`, width: 1200, height: 630, alt: "GTA 6 — Lucia et Jason à Vice City" }],
    type: "website",
    url: SITE_URL,
  },
};

export default function Home() {
  const featuredProducts = PRODUCTS_FULL.slice(0, 6);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "GTA 6 (19 novembre 2026) : Prix, Éditions, Setup & Guides — GTA6HQ",
    description:
      "GTA 6 est sorti le 19 novembre 2026 sur PS5 et Xbox Series X|S. Guides experts pour acheter au meilleur prix, choisir la bonne édition et préparer son setup.",
    url: SITE_URL,
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      name: "GTA6HQ",
      url: SITE_URL,
    },
    about: {
      "@type": "VideoGame",
      name: "Grand Theft Auto VI",
      alternateName: ["GTA 6", "GTA VI"],
      description:
        "GTA 6 est un jeu d'action-aventure en monde ouvert développé par Rockstar Games, sorti le 19 novembre 2026 sur PS5 et Xbox Series X/S. Il se déroule à Leonida (Floride fictive) avec deux protagonistes : Lucia et Jason.",
      gamePlatform: ["PlayStation 5", "Xbox Series X", "Xbox Series S"],
      operatingSystem: ["PlayStation 5", "Xbox Series X/S"],
      publisher: {
        "@type": "Organization",
        name: "Rockstar Games",
        url: "https://www.rockstargames.com",
      },
      genre: ["Action-Aventure", "Monde ouvert", "Crime"],
      datePublished: "2026-11-19",
      offers: [
        {
          "@type": "Offer",
          name: "GTA 6 Édition Standard PS5",
          price: "79.99",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: "https://amzn.to/4aiof6B",
          seller: {
            "@type": "Organization",
            name: "Amazon",
          },
        },
        {
          "@type": "Offer",
          name: "GTA 6 Édition Standard Xbox Series",
          price: "79.99",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: "https://amzn.to/4oIMhxq",
          seller: {
            "@type": "Organization",
            name: "Amazon",
          },
        },
        {
          "@type": "Offer",
          name: "GTA 6 Édition Ultimate",
          price: "99.99",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: "https://amzn.to/4aiof6B",
          seller: {
            "@type": "Organization",
            name: "Amazon",
          },
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "9.5",
        bestRating: "10",
        worstRating: "0",
        ratingCount: "10000",
        reviewCount: "5000",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil — GTA6HQ",
          item: SITE_URL,
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="relative">
        <Hero />
        <SocialProofTicker />
        <BentoGrid />
        <StatsCounter />
        <StorySection />

        {/* Video showcase — nouvelle section */}
        <VideoShowcase />

        <GTATimeline />

        {/* Featured Products */}
        <section
          className="py-24 px-6 bg-background"
          aria-labelledby="essentiels-heading"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <meta itemProp="name" content="Sélection produits essentiels pour GTA 6" />
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase font-bold block mb-3">
                  SÉLECTION EXPERTISE
                </span>
                <h2 id="essentiels-heading" className="text-5xl md:text-7xl mb-4">
                  LES <span className="text-orange">ESSENTIELS</span>
                </h2>
                <p className="text-muted">Notre sélection pour jouer à GTA 6 dans les meilleures conditions, du jeu au matériel.</p>
              </div>
              <a
                href="/produits"
                className="hidden md:inline-flex items-center gap-2 border border-border text-muted hover:text-cyan hover:border-cyan px-6 py-2 text-sm font-bold tracking-widest transition-all duration-300"
              >
                VOIR TOUT LE CATALOGUE →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={product.id} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content={String(index + 1)} />
                  <ProductCard product={product} />
                </div>
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
    </>
  );
}
