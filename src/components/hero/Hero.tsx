"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, ShoppingCart } from "lucide-react";
import FlipClock from "./FlipClock";
import { useLaunchPhase } from "@/lib/launch";
import { PRODUCTS } from "@/data/products";

const PS5_URL = PRODUCTS.find((p) => p.id === "gta-6-ps5")?.amazonUrl ?? "/guides/precommande-gta6-ps5";
const XBOX_URL = PRODUCTS.find((p) => p.id === "gta-6-xbox")?.amazonUrl ?? "/guides/precommande-gta6-xbox";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const released = useLaunchPhase() !== "prelaunch";
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-[#07050f]" aria-label="GTA 6 — Vice City">
      {/* Cinematic background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <video autoPlay muted loop playsInline poster="/images/bg_vice_city.jpg" className="h-full w-full object-cover">
          <source src="https://videos.rockstargames.com/v3/V-gta-vi-trailer-1-en_us-1080p.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07050f]/70 via-[#2a0a3a]/30 to-[#07050f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,45,149,0.35),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(0,229,255,0.25),transparent_55%)] mix-blend-screen" />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="hero-scanlines pointer-events-none absolute inset-0 opacity-20" />
      {/* Synthwave sun */}
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[38vmin] w-[38vmin] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ffb347] via-[#ff2d95] to-transparent opacity-40 blur-2xl" />

      <motion.div style={{ opacity: fade, y: textY }} className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pt-24 pb-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff2d95] shadow-[0_0_10px_#ff2d95]" />
          {released ? "Disponible maintenant · PS5 & Xbox Series" : "Sortie le 19 novembre 2026"}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-glitch font-bebas text-[17vw] leading-[0.85] tracking-tight md:text-[150px] lg:text-[190px]"
          data-text="VICE CITY T'ATTEND"
        >
          <span className="bg-gradient-to-b from-[#ffd1e8] via-[#ff2d95] to-[#ff7a18] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,45,149,0.45)]">
            VICE CITY<br />T&apos;ATTEND
          </span>
        </motion.h1>
        <p className="sr-only">GTA 6 : précommande, prix, éditions et setup idéal sur PS5 et Xbox Series X|S</p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg"
        >
          {released
            ? "Lucia et Jason vous attendent à Leonida. Le jeu, le stockage, l'écran, le son : tout ce qu'il faut pour vivre GTA VI à fond."
            : "Précommandez GTA VI au meilleur prix et préparez les ~150 Go d'installation avant le jour J."}
        </motion.p>

        {!released && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-10">
            <FlipClock />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={PS5_URL} target="_blank" rel="nofollow sponsored noopener" id="hero-cta-ps5"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#ff2d95] to-[#ff7a18] px-9 py-4 text-lg font-semibold text-white shadow-[0_0_40px_rgba(255,45,149,0.55)] transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <ShoppingCart className="h-5 w-5" />
            {released ? "Acheter sur PS5" : "Précommander PS5"}
          </a>
          <a
            href="#trailer" id="hero-cta-trailer"
            className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition-all hover:border-cyan-300/60 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
          >
            Voir le trailer
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/40"><Play className="h-3.5 w-3.5 fill-white" /></span>
          </a>
        </motion.div>
        <a href={XBOX_URL} target="_blank" rel="nofollow sponsored noopener" className="mt-4 text-sm text-white/50 underline-offset-4 hover:text-cyan-300 hover:underline">
          Version Xbox Series X|S →
        </a>
        <p className="mt-3 font-mono text-[10px] text-white/40">Liens affiliés Amazon · prix à vérifier sur Amazon</p>
      </motion.div>

      <motion.a
        href="#story" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 hover:text-cyan-300" aria-label="Défiler vers le contenu"
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
}
