"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductFull } from "@/data/products-full";
import StarRating from "../ui/StarRating";
import Badge from "../ui/Badge";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import ProductUrgency from "./ProductUrgency";

interface ProductHeroProps {
  product: ProductFull;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = product.images && product.images.length > 1
    ? product.images.slice(0, 5)
    : [product.image];
  const showGallery = images.length > 1;

  const handleReviewScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("reviews");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCompareScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("alternatives");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const economy = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      {/* Schema.org BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://gta6hq.fr"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Produits",
                "item": "https://gta6hq.fr/produits"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": product.name,
                "item": `https://gta6hq.fr/produits/${product.id}`
              }
            ]
          })
        }}
      />

      {/* Breadcrumb visual */}
      <nav className="text-xs text-muted mb-8 font-inter" aria-label="Fil d'Ariane">
        <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
        <span className="mx-2">&gt;</span>
        <Link href="/produits" className="hover:text-white transition-colors">Produits</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Gallery */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="relative aspect-square glass rounded-sm overflow-hidden group bg-surface border border-white/5 flex items-center justify-center p-8">
            {product.badge && (
              <Badge type={product.badge} className="absolute top-4 left-4 z-10" />
            )}
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src={images[activeImageIndex]}
                alt={`${product.name} - Vue ${activeImageIndex + 1}`}
                width={500}
                height={500}
                priority
                unoptimized
                className="max-h-full max-w-full object-contain transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Miniature List — only shown when there are multiple distinct images */}
          {showGallery && (
            <div className={`grid gap-3 ${images.length <= 4 ? 'grid-cols-4' : 'grid-cols-5'}`}>
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square rounded-sm border p-1.5 glass bg-surface transition-all duration-300 overflow-hidden flex items-center justify-center ${
                    activeImageIndex === index ? "border-cyan shadow-[0_0_8px_rgba(0,255,204,0.3)]" : "border-border hover:border-muted"
                  }`}
                  title={`Vue ${index + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} vue ${index + 1}`}
                    width={100}
                    height={100}
                    unoptimized
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Decision Block */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-2 uppercase text-white">
              {product.name}
            </h1>
            <p className="text-sm font-inter italic text-muted">
              Notre recommandation {product.category} pour GTA 6
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} />
            <a
              href="#reviews"
              onClick={handleReviewScroll}
              className="text-xs text-muted hover:text-cyan hover:underline transition-colors"
            >
              ({product.reviewCount.toLocaleString()} avis Amazon)
            </a>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-4 py-2 border-y border-border">
            {product.originalPrice ? (
              <>
                <span className="text-3xl font-mono font-bold text-gold">
                  {formatPrice(product.price)}
                </span>
                <span className="text-lg text-muted line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-xs px-2.5 py-1 rounded-sm uppercase font-bold tracking-wider">
                  ÉCONOMIE -{formatPrice(economy)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-mono font-bold text-gold">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Primary Pitch */}
          <p className="text-lg text-foreground font-inter font-semibold border-l-2 border-orange pl-4 py-1 leading-relaxed">
            {product.sellingPoint}
          </p>

          {/* Bullet Points */}
          <ul className="flex flex-col gap-3 font-inter text-sm">
            {product.bullets.map((bullet, i) => (
              <li key={i} className="text-muted flex items-start gap-2">
                <span className="text-cyan font-bold">✓</span>
                <span>
                  <strong className="text-foreground">{bullet.feature}</strong> — {bullet.outcome}
                </span>
              </li>
            ))}
          </ul>

          {/* Trust Badges */}
          <div className="flex flex-col gap-1.5 p-4 bg-white/5 border border-white/10 rounded-sm text-[11px] font-mono text-muted">
            {product.trustSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-cyan">✓</span>
                <span>{signal}</span>
              </div>
            ))}
          </div>

          {/* Live urgency signals */}
          <ProductUrgency price={product.price} productName={product.name} />

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="nofollow sponsored"
              className="flex-1 inline-flex items-center justify-center rounded-sm px-8 py-4 text-xl font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300 shimmer-btn"
            >
              <ShoppingCart size={20} className="mr-2" />
              VOIR LE PRIX ET COMMANDER SUR AMAZON →
            </a>

            <a
              href="#alternatives"
              onClick={handleCompareScroll}
              className="inline-flex items-center justify-center rounded-sm px-6 py-4 text-lg font-bebas border border-cyan/30 text-cyan hover:bg-cyan/10 hover:border-cyan transition-all duration-300"
            >
              Comparer les alternatives
            </a>
          </div>

          {/* Affiliate Disclaimer */}
          <p className="text-[10px] text-muted/60 leading-relaxed italic">
            En tant que Partenaire Amazon, je perçois une commission sur les achats remplissant les conditions requises, sans coût supplémentaire pour vous.
          </p>
        </div>
      </div>
    </section>
  );
}
