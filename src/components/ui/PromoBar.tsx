"use client";

import { useState, useEffect } from "react";
import { X, Zap, Clock } from "lucide-react";
import Link from "next/link";

export default function PromoBar() {
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 47, s: 12 });

  useEffect(() => {
    // Show only if not dismissed this session
    const dismissed = sessionStorage.getItem("promobar_dismissed");
    if (!dismissed) setVisible(true);

    // Countdown tick
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; } // loops daily
        return { h, m, s };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("promobar_dismissed", "1");
  };

  if (!visible) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="relative z-[100] w-full bg-gradient-to-r from-orange/90 via-[#cc3700] to-orange/90 text-white text-sm font-inter">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Zap size={14} className="flex-shrink-0 animate-pulse" />
          <span className="font-bold uppercase tracking-wide text-xs">OFFRE LANCEMENT GTA 6</span>
          <span className="hidden sm:inline text-white/80 text-xs">— Livraison gratuite + prix garantis jusqu&apos;au lancement</span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-sm">
          <Clock size={12} />
          <span className="text-xs font-mono font-bold">
            EXPIRE DANS&nbsp;
            <span className="text-gold">{pad(timeLeft.h)}</span>h&nbsp;
            <span className="text-gold">{pad(timeLeft.m)}</span>m&nbsp;
            <span className="text-gold">{pad(timeLeft.s)}</span>s
          </span>
        </div>

        <Link
          href="/produits"
          className="text-xs font-bold underline underline-offset-2 hover:text-gold transition-colors hidden md:inline"
        >
          Voir les offres →
        </Link>
      </div>

      <button
        onClick={dismiss}
        aria-label="Fermer"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-black/20 rounded transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
