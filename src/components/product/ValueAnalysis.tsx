"use client";

import { ProductFull } from "@/data/products-full";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

interface ValueAnalysisProps {
  product: ProductFull;
}

export default function ValueAnalysis({ product }: ValueAnalysisProps) {
  // Compute durability years and cost per year based on category
  let lifespanYears = 5;
  if (product.category === 'jeu') lifespanYears = 3;
  if (product.category === 'console' || product.category === 'tv') lifespanYears = 6;
  if (product.category === 'chaise' || product.category === 'bureau') lifespanYears = 7;
  if (product.category === 'manette' || product.category === 'casque') lifespanYears = 4;

  const costPerYear = product.price / lifespanYears;

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bebas tracking-wider mb-8 text-white uppercase text-center md:text-left">
        Est-ce que ça vaut le prix ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
        {/* Cost calculation card */}
        <div className="glass p-6 rounded-sm border border-white/5 bg-surface/50">
          <h3 className="text-lg font-bebas text-cyan tracking-wider uppercase mb-4">Calcul de la valeur réelle</h3>
          <div className="flex flex-col gap-3 font-mono text-sm">
            <div className="flex justify-between border-b border-border/40 pb-2">
              <span className="text-muted">Prix d&apos;achat :</span>
              <span className="text-white font-bold">{formatPrice(product.price)}</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-2">
              <span className="text-muted">Niveau de performance :</span>
              <span className="text-white font-bold">{product.scores.performances}/10</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-2">
              <span className="text-muted">Durée de vie estimée :</span>
              <span className="text-white font-bold">{lifespanYears} ans</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-cyan">Coût d&apos;usage amorti :</span>
              <span className="text-gold font-bold">{costPerYear.toFixed(2)}€ / an</span>
            </div>
          </div>
        </div>

        {/* Alternatives summary list */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bebas text-cyan tracking-wider uppercase">Comparatif budget</h3>
          <div className="flex flex-col gap-3 text-sm font-inter">
            <div className="p-3 bg-cyan/5 border border-cyan/20 rounded-sm flex justify-between items-center">
              <div>
                <span className="block font-semibold text-white">Ce produit ({product.name})</span>
                <span className="text-xs text-muted">Le compromis idéal pour GTA 6</span>
              </div>
              <span className="font-mono text-gold font-bold">{formatPrice(product.price)}</span>
            </div>

            {product.alternatives.map((alt, i) => (
              <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-sm flex justify-between items-center">
                <div>
                  <a 
                    href={alt.amazonUrl} 
                    target="_blank" 
                    rel="nofollow sponsored" 
                    className="block font-semibold text-foreground/90 hover:text-cyan transition-colors"
                  >
                    {alt.name}
                  </a>
                  <span className="text-xs text-muted leading-tight block pr-4">{alt.reason}</span>
                </div>
                <span className="font-mono text-muted">{formatPrice(alt.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass p-6 rounded-sm border border-border/60 text-center mb-8 bg-surface/30">
        <p className="text-lg text-foreground font-inter italic font-medium leading-relaxed">
          &quot;{product.valueStatement}&quot;
        </p>
      </div>

      <div className="text-center">
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="nofollow sponsored"
          className="inline-flex items-center justify-center rounded-sm px-10 py-4 text-xl font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300 shimmer-btn"
        >
          <ShoppingCart size={20} className="mr-2" />
          VOIR LE PRIX SUR AMAZON →
        </a>
      </div>
    </section>
  );
}
