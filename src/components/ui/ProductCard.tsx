"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProductFull } from "@/data/products-full";
import { formatPrice } from "@/lib/utils";
import Button from "../ui/Button";
import StarRating from "./StarRating";
import Badge from "./Badge";
import { ShoppingCart, CheckCircle2, FileText } from "lucide-react";

interface ProductCardProps {
  product: ProductFull;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 h-[450px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div 
          className="absolute inset-0 glass p-6 flex flex-col bg-surface"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {product.badge && <Badge type={product.badge} className="absolute top-4 right-4" />}
          
          <div className="h-48 mb-6 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-full object-contain mb-4 transform transition-transform duration-500"
            />
          </div>

          <div className="flex-grow">
            <Link href={`/produits/${product.id}`} onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl mb-2 line-clamp-2 hover:text-cyan transition-colors">{product.name}</h3>
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-[10px] text-muted">({product.reviewCount.toLocaleString()})</span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {product.specs.slice(0, 3).map((spec, i) => (
                <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-muted uppercase">
                  {spec.label}: {spec.value}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-end mt-4">
             <div className="flex flex-col">
               <span className="text-gold font-mono text-2xl font-bold">{formatPrice(product.price)}</span>
               {product.originalPrice && (
                 <span className="text-muted line-through text-xs">{formatPrice(product.originalPrice)}</span>
               )}
             </div>
             <a 
               href={product.amazonUrl}
               target="_blank"
               rel="nofollow sponsored"
               onClick={(e) => e.stopPropagation()}
               className="flex items-center gap-1 bg-orange text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-sm hover:bg-[#FF5712] transition-colors"
             >
               <ShoppingCart size={12} />
               ACHETER
             </a>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 glass p-8 flex flex-col justify-center items-center text-center bg-surface"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-2xl mb-4 text-cyan uppercase tracking-wider">Pourquoi pour GTA 6 ?</h3>
          <p className="text-sm text-foreground mb-8 leading-relaxed italic">
            &quot;{product.sellingPoint}&quot;
          </p>
          
          <div className="space-y-3 mb-8 w-full text-left">
            {product.trustSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted">
                <CheckCircle2 size={14} className="text-trust" />
                <span>{signal}</span>
              </div>
            ))}
          </div>

          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored"
            onClick={(e) => e.stopPropagation()}
            className="w-full inline-flex items-center justify-center rounded-sm px-8 py-3.5 text-lg font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300 shimmer-btn"
          >
            <ShoppingCart size={18} className="mr-2" />
            COMMANDER SUR AMAZON
          </a>

          <Link
            href={`/produits/${product.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-full mt-3 inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3 text-sm font-bebas border border-cyan/30 text-cyan hover:bg-cyan/10 hover:border-cyan transition-all duration-300"
          >
            <FileText size={14} />
            VOIR LA FICHE COMPLÈTE →
          </Link>

          <p className="mt-3 text-[9px] text-muted/60 uppercase tracking-widest font-mono">
            Test · Avis · Specs complètes
          </p>
        </div>
      </motion.div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
