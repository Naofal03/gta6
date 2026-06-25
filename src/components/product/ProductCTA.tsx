"use client";

import { ProductFull } from "@/data/products-full";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

interface ProductCTAProps {
  product: ProductFull;
}

export default function ProductCTA({ product }: ProductCTAProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-surface to-background border-t border-border">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bebas tracking-wider text-white uppercase">
          Prêt à optimiser ton setup pour GTA 6 ?
        </h2>

        {/* Short Summary */}
        <p className="text-muted text-base font-inter leading-relaxed">
          En résumé : <strong className="text-white">{product.name}</strong> est {product.sellingPoint.toLowerCase()} C&apos;est le choix idéal pour les joueurs qui veulent s&apos;assurer des performances maximales.
        </p>

        {/* Pricing display */}
        <div className="my-4">
          <span className="text-5xl font-mono font-bold text-gold">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xl text-muted/60 line-through ml-4">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Trust Badges list */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-muted mb-4">
          {product.trustSignals.map((signal, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="text-cyan">✓</span>
              {signal}
            </span>
          ))}
        </div>

        {/* Call to action button */}
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="nofollow sponsored"
          className="w-full inline-flex items-center justify-center rounded-sm px-10 py-5 text-2xl font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_30px_rgba(255,69,0,0.4)] transition-all duration-300 shimmer-btn"
        >
          <ShoppingCart size={24} className="mr-3" />
          🛒 Commander {product.name} sur Amazon — {formatPrice(product.price)} →
        </a>

        {/* FTC Disclaimer */}
        <p className="text-[11px] text-muted/50 leading-relaxed italic mt-4">
          En tant que Partenaire Amazon, je perçois une commission sur les achats remplissant les conditions requises, sans coût supplémentaire pour vous.
        </p>
      </div>
    </section>
  );
}
