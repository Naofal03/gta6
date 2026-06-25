"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShoppingCart, AlertCircle } from "lucide-react";

export default function StickyBar() {
  const [isShaking, setIsShaking] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setIsShaking(true);
        setShowExitIntent(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        setTimeout(() => setIsShaking(false), 500);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="relative z-[100]">
      <motion.div
        animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="w-full bg-gradient-to-right from-orange to-cyan h-10 flex items-center overflow-hidden"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(10).fill(null).map((_, i) => (
            <span key={i} className="flex items-center text-white text-xs font-bold px-4 uppercase tracking-widest">
              <span className="mr-2">🔥 PRECOMMANDES OUVERTES</span>
              <span className="mx-2 opacity-50">•</span>
              <span className="mr-2">Pack Vintage Vice City OFFERT</span>
              <span className="mx-2 opacity-50">•</span>
              <span className="mr-2">Sortie 19/11/2026</span>
              <span className="mx-2 opacity-50">•</span>
              <span className="mr-2">Prix garanti Amazon</span>
              <span className="mx-4 opacity-50 text-white/30">|</span>
            </span>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {showExitIntent && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 glass p-4 rounded-lg shadow-2xl border-orange flex items-center gap-4 max-w-md w-[90vw]"
          >
            <div className="bg-orange/20 p-3 rounded-full">
              <AlertCircle className="text-orange w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Attendez !</p>
              <p className="text-muted text-xs">Le Pack Vice City (valeur 25€) est OFFERT pour toute précommande aujourd'hui.</p>
              <button 
                onClick={() => setShowExitIntent(false)}
                className="mt-2 text-cyan text-xs font-bold hover:underline"
              >
                Continuer la visite →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
