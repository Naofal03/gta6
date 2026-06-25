"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SETUP_BUNDLES } from "@/data/setup-bundles";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Button from "../ui/Button";
import ProductCard from "../ui/ProductCard";

export default function SetupBuilder() {
  const [activeTier, setActiveTier] = useState<500 | 1000 | 2000>(1000);

  const currentBundle = SETUP_BUNDLES.find((b) => b.tier === activeTier)!;
  const bundleProducts = PRODUCTS.filter((p) => currentBundle.productIds.includes(p.id));
  const totalPrice = bundleProducts.reduce((acc, p) => acc + p.price, 0);

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl mb-4">CONSTRUIS TON <span className="text-cyan text-gradient">SETUP GTA 6</span></h2>
          <p className="text-muted max-w-2xl mx-auto">Choisissez votre budget et découvrez notre sélection optimisée d&apos;accessoires pour vivre Vice City dans les meilleures conditions.</p>
        </div>

        {/* Tier Selector */}
        <div className="flex justify-center gap-4 mb-16">
          {( [500, 1000, 2000] as const ).map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              className={cn(
                "px-8 py-3 font-bebas text-xl border transition-all duration-300",
                activeTier === tier 
                  ? "border-cyan bg-cyan/10 text-cyan shadow-[0_0_20px_rgba(0,255,204,0.1)]" 
                  : "border-border text-muted hover:border-muted"
              )}
            >
              {tier === 2000 ? "ULTIME (2000€+)" : tier === 1000 ? "OPTIMISÉ (1000€)" : "ESSENTIEL (500€)"}
            </button>
          ))}
        </div>

        {/* Bundle Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {bundleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="glass p-8 rounded-sm sticky top-24">
            <h3 className="text-3xl mb-6">RÉSUMÉ DU SETUP</h3>
            <p className="text-muted text-sm mb-6 pb-6 border-b border-border">
              {currentBundle.description}
            </p>
            
            <div className="space-y-4 mb-8">
              {bundleProducts.map((p) => (
                <div key={p.id} className="flex justify-between text-sm">
                  <span className="text-muted">{p.name}</span>
                  <span className="font-mono">{formatPrice(p.price)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-8 pt-6 border-t border-border">
              <span className="text-xl font-bebas">TOTAL ESTIMÉ</span>
              <span className="text-3xl font-mono text-gold">{formatPrice(totalPrice)}</span>
            </div>

            <Button variant="amazon" size="lg" className="w-full" shimmer onClick={() => window.open('https://amzn.to/4aiof6B', '_blank')}>
              TOUT COMMANDER SUR AMAZON
            </Button>
            <p className="text-[10px] text-center text-muted mt-4 font-mono">
              ✓ Livraison rapide disponible sur tous les articles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
