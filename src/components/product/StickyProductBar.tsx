"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ProductFull } from "@/data/products-full";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

interface StickyProductBarProps {
  product: ProductFull;
}

export default function StickyProductBar({ product }: StickyProductBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Show after scrolling 600px, hide when close to the bottom CTA (e.g., 900px from bottom)
      const showThreshold = 600;
      const hideThreshold = docHeight - winHeight - 800;

      if (scrollY > showThreshold && scrollY < hideThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border py-4 px-6 transition-all duration-300 hidden md:block ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Product preview */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative flex items-center justify-center p-1 bg-surface rounded-sm border border-white/5">
            <Image
              src={product.image}
              alt={product.name}
              width={48}
              height={48}
              unoptimized
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div>
            <span className="block font-bebas text-lg tracking-wider text-white uppercase">
              {product.name}
            </span>
            <span className="text-[10px] text-muted font-mono uppercase tracking-widest block">
              {product.category}
            </span>
          </div>
        </div>

        {/* Right Side: Price & CTA */}
        <div className="flex items-center gap-6">
          <span className="text-xl font-mono font-bold text-gold">
            {formatPrice(product.price)}
          </span>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-flex items-center justify-center rounded-sm px-6 py-2.5 text-base font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_15px_rgba(255,69,0,0.3)] transition-all duration-300 shimmer-btn"
          >
            <ShoppingCart size={16} className="mr-2" />
            Commander →
          </a>
        </div>
      </div>
    </div>
  );
}
