"use client";

import { useLaunchPhase } from "@/lib/launch";

const MESSAGES = {
  prelaunch: [
    "🔥 Précommandes ouvertes",
    "Sortie le jeudi 19/11/2026",
    "PS5 & Xbox Series X|S",
    "Prévoyez ~150 Go d'espace libre",
  ],
  launched: [
    "🎮 GTA VI est disponible",
    "PS5 & Xbox Series X|S",
    "Vérifiez votre espace disque avant l'installation",
    "Nos guides pour bien démarrer",
  ],
};

export default function StickyBar() {
  const phase = useLaunchPhase();
  const items = phase === "prelaunch" ? MESSAGES.prelaunch : MESSAGES.launched;

  return (
    <div className="relative z-[100]">
      <div
        className="w-full bg-gradient-to-r from-orange to-cyan h-10 flex items-center overflow-hidden"
        aria-label={items.join(" · ")}
      >
        <div className="flex whitespace-nowrap animate-marquee" aria-hidden="true">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="flex items-center text-white text-xs font-bold px-4 uppercase tracking-widest">
                {items.map((msg, j) => (
                  <span key={j} className="flex items-center">
                    <span className="mr-2">{msg}</span>
                    <span className="mx-2 opacity-50">•</span>
                  </span>
                ))}
              </span>
            ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
