import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS_FULL, ProductFull } from "@/data/products-full";
import ProductHero from "@/components/product/ProductHero";
import VerdictCard from "@/components/product/VerdictCard";
import SpecsTable from "@/components/product/SpecsTable";
import LongformContent from "@/components/product/LongformContent";
import ValueAnalysis from "@/components/product/ValueAnalysis";
import ReviewsSection from "@/components/product/ReviewsSection";
import AlternativesTable from "@/components/product/AlternativesTable";
import CrossSell from "@/components/product/CrossSell";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductCTA from "@/components/product/ProductCTA";
import StickyProductBar from "@/components/product/StickyProductBar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 20 products
export async function generateStaticParams() {
  return PRODUCTS_FULL.map((product) => ({
    slug: product.id,
  }));
}

// Dynamic SEO metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_FULL.find((p) => p.id === slug);

  if (!product) {
    return {
      title: "Produit non trouvé | GTA6HQ",
    };
  }

  const title = `${product.name} — Test & Avis pour GTA 6 | GTA6HQ`;
  const description = `Notre test complet du ${product.name} pour GTA 6. ${product.sellingPoint} Prix, avis, comparaison. Commandez au meilleur prix sur Amazon.`;

  return {
    title,
    description: description.substring(0, 155),
    alternates: {
      canonical: `https://gta6hq.fr/produits/${product.id}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: product.image.startsWith("/") ? `https://gta6hq.fr${product.image}` : product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const productIndex = PRODUCTS_FULL.findIndex((p) => p.id === slug);

  if (productIndex === -1) {
    notFound();
  }

  const product = PRODUCTS_FULL[productIndex];

  // Navigation Logic: Previous and Next products (wrap around)
  const prevProduct = PRODUCTS_FULL[productIndex === 0 ? PRODUCTS_FULL.length - 1 : productIndex - 1];
  const nextProduct = PRODUCTS_FULL[productIndex === PRODUCTS_FULL.length - 1 ? 0 : productIndex + 1];

  // Schema.org Product markup JSON-LD
  const schemaProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image.startsWith("/") ? `https://gta6hq.fr${product.image}` : product.image,
    "sku": product.id,
    "mpn": product.id,
    "brand": {
      "@type": "Brand",
      "name": product.category === "jeu" ? "Rockstar Games" : "Sony"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": product.amazonUrl,
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  };

  return (
    <div className="pt-28 pb-20 bg-background min-h-screen text-foreground font-inter">
      {/* Schema.org Product metadata injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }}
      />

      {/* Hero product details */}
      <ProductHero product={product} />

      {/* Editorial review */}
      <VerdictCard product={product} />

      {/* Specs table */}
      <SpecsTable product={product} />

      {/* Argumentative body */}
      <LongformContent product={product} />

      {/* Pricing / value assessment */}
      <ValueAnalysis product={product} />

      {/* Amazon ratings & buyer reviews */}
      <ReviewsSection product={product} />

      {/* Alternatives comparison */}
      <AlternativesTable product={product} />

      {/* Complete your setup */}
      <CrossSell product={product} />

      {/* Product FAQ */}
      <ProductFAQ product={product} />

      {/* Closing CTA */}
      <ProductCTA product={product} />

      {/* Sticky purchase bar for desktop */}
      <StickyProductBar product={product} />

      {/* Category Level pagination & maillage */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
        <Link 
          href={`/produits/${prevProduct.id}`}
          className="text-muted hover:text-cyan transition-colors flex items-center gap-2"
        >
          ← {prevProduct.name}
        </Link>
        
        <Link 
          href="/produits"
          className="text-cyan font-mono hover:underline uppercase"
        >
          Retour au catalogue complet
        </Link>

        <Link 
          href={`/produits/${nextProduct.id}`}
          className="text-muted hover:text-cyan transition-colors flex items-center gap-2 text-right"
        >
          {nextProduct.name} →
        </Link>
      </div>

      {/* Internal maillage shortcuts */}
      <div className="max-w-xl mx-auto px-6 mt-10 text-center text-xs text-muted flex justify-center gap-6">
        <Link href="/setup" className="hover:text-white hover:underline transition-colors">Configurateur Setup</Link>
        <span className="text-border">|</span>
        <Link href="/precommande" className="hover:text-white hover:underline transition-colors">Guide Précommande</Link>
        <span className="text-border">|</span>
        <Link href="/histoire-gta" className="hover:text-white hover:underline transition-colors">Histoire de la Saga</Link>
      </div>
    </div>
  );
}
