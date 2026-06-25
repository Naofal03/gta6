"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Button from "../ui/Button";
import StarRating from "./StarRating";
import Badge from "./Badge";
import { ShoppingCart, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
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
        <div className="absolute inset-0 backface-hidden glass p-6 flex flex-col">
          {product.badge && <Badge type={product.badge} className="absolute top-4 right-4" />}
          
          <div className="h-48 mb-6 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex-grow">
            <h3 className="text-xl mb-2 line-clamp-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-[10px] text-muted">({product.reviewCount.toLocaleString()})</span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {product.specs.map((spec, i) => (
                <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-muted uppercase">
                  {spec}
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
             <div className="flex items-center gap-1 text-[10px] text-trust uppercase font-bold">
               <CheckCircle2 size={12} />
               EN STOCK
             </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden glass p-8 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)]">
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

          <Button 
            variant="amazon" 
            size="lg" 
            className="w-full" 
            shimmer 
            onClick={(e) => {
              e.stopPropagation();
              window.open(product.amazonUrl, '_blank');
            }}
          >
            <ShoppingCart size={18} className="mr-2" />
            VOIR SUR AMAZON
          </Button>
          
          <p className="mt-4 text-[9px] text-muted/60 uppercase tracking-widest font-mono">
            Expédié par Amazon
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
