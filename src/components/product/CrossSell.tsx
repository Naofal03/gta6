"use client";

import Link from "next/link";
import Image from "next/image";
import { ProductFull, PRODUCTS_FULL } from "@/data/products-full";
import StarRating from "../ui/StarRating";
import { formatPrice } from "@/lib/utils";

interface CrossSellProps {
  product: ProductFull;
}

export default function CrossSell({ product }: CrossSellProps) {
  // Find the complementary products from the database
  const complementaryProducts = PRODUCTS_FULL.filter((p) =>
    product.complementaryProductIds.includes(p.id)
  ).slice(0, 3);

  if (complementaryProducts.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-surface/20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bebas tracking-wider text-white uppercase mb-2">
            Complète ton setup GTA 6
          </h2>
          <p className="text-muted text-sm font-inter">
            Les joueurs qui ont configuré ce produit ont également choisi ces accessoires :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {complementaryProducts.map((p) => (
            <div 
              key={p.id}
              className="glass p-6 rounded-sm border border-white/5 bg-surface/50 flex flex-col justify-between h-[400px] hover:border-cyan/30 transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="h-40 mb-4 flex items-center justify-center relative overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={200}
                  height={200}
                  unoptimized
                  className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow flex flex-col gap-2">
                <span className="text-[10px] text-cyan font-mono uppercase tracking-wider block">
                  {p.category}
                </span>
                <h3 className="text-base text-foreground font-semibold line-clamp-2 hover:text-cyan transition-colors">
                  <Link href={`/produits/${p.id}`}>{p.name}</Link>
                </h3>

                <div className="flex items-center gap-2">
                  <StarRating rating={p.rating} />
                  <span className="text-[10px] text-muted font-mono">
                    ({p.reviewCount})
                  </span>
                </div>
              </div>

              {/* Bottom Panel */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/40">
                <span className="text-gold font-mono font-bold text-lg">
                  {formatPrice(p.price)}
                </span>
                
                <Link 
                  href={`/produits/${p.id}`}
                  className="bg-white/5 border border-white/10 hover:border-cyan hover:bg-cyan/10 text-cyan text-xs font-mono tracking-wider font-bold py-2 px-4 rounded-sm transition-all"
                >
                  DÉCOUVRIR →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
