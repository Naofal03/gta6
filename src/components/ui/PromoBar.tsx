"use client";

import { useState, useEffect } from "react";
import { X, Zap } from "lucide-react";
import Link from "next/link";
import { useLaunchPhase } from "@/lib/launch";

export default function PromoBar() {
  const [visible, setVisible] = useState(false);
  const phase = useLaunchPhase();

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("promobar_dismissed")) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem("promobar_dismissed", "1");
    } catch {
      /* stockage indisponible : on ferme quand même */
    }
  };

  if (!visible) return null;

  const content =
    phase === "prelaunch"
      ? {
          label: "SORTIE LE 19 NOVEMBRE",
          text: "Dernière ligne droite : vérifiez vos 150 Go libres et précommandez pour une livraison le jour J.",
          href: "/guides/gta6-taille-telechargement",
          cta: "Checklist de lancement →",
        }
      : {
          label: "GTA 6 EST SORTI",
          text: "Disponible sur PS5 et Xbox Series X|S. Nos guides pour bien démarrer à Vice City.",
          href: "/produits",
          cta: "Voir les offres →",
        };

  return (
    <div className="relative z-[100] w-full bg-gradient-to-r from-orange/90 via-[#cc3700] to-orange/90 text-white text-sm font-inter">
      <div className="max-w-7xl mx-auto pl-4 pr-10 py-2 flex items-center justify-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Zap size={14} className="flex-shrink-0" />
          <span className="font-bold uppercase tracking-wide text-xs">{content.label}</span>
          <span className="hidden sm:inline text-white/85 text-xs">— {content.text}</span>
        </div>

        <Link
          href={content.href}
          className="text-xs font-bold underline underline-offset-2 hover:text-gold transition-colors"
        >
          {content.cta}
        </Link>
      </div>

      <button
        onClick={dismiss}
        aria-label="Fermer le bandeau"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-black/20 rounded transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
