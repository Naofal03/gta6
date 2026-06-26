"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, ChevronUp } from "lucide-react";

interface StickyBuyBarProps {
  productName: string;
  price: string;
  amazonUrl: string;
}

export default function StickyBuyBar({ productName, price, amazonUrl }: StickyBuyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the first viewport height
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Glassmorphism backdrop */}
      <div className="bg-background/90 backdrop-blur-xl border-t border-orange/20 shadow-[0_-4px_30px_rgba(255,69,0,0.15)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          {/* Left: Product info */}
          <div className="hidden md:flex flex-col min-w-0">
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
              🥇 Recommandé pour GTA 6
            </span>
            <span className="text-white font-bebas text-lg tracking-wide truncate">
              {productName}
            </span>
          </div>

          {/* Center: Price */}
          <div className="flex items-center gap-2">
            <span className="text-gold font-mono text-xl md:text-2xl font-bold">{price}</span>
            <span className="text-[10px] text-muted font-mono hidden sm:block">
              Prix garanti
            </span>
          </div>

          {/* Right: CTA Button */}
          <a
            href={amazonUrl}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-flex items-center gap-2 bg-orange text-white font-bebas text-base md:text-lg px-6 md:px-8 py-3 rounded-sm hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300 active:scale-95 shimmer-btn whitespace-nowrap"
          >
            <ShoppingCart size={16} />
            ACHETER SUR AMAZON →
          </a>
        </div>
      </div>
    </div>
  );
}
