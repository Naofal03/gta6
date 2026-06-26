"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FlipClock from "./FlipClock";
import Button from "../ui/Button";
import { ChevronDown } from "lucide-react";
import NeonText from "../ui/NeonText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full overflow-hidden">
      {/* Background Video */}
      <motion.div style={{ scale }} className="sticky top-0 h-screen w-full">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero_bg.png"
          className="h-full w-full object-cover"
        >
          <source src="https://videos.rockstargames.com/v3/V-gta-vi-trailer-1-en_us-1080p.mp4" type="video/mp4" />
        </video>
        
        {/* Parallax Layers */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
           <h1 className="text-[15vw] font-bebas text-white/5 whitespace-nowrap select-none">
             VICE CITY 2026
           </h1>
        </motion.div>
      </motion.div>

      {/* Content Layer */}
      <div className="sticky top-0 h-screen w-full z-30 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-5xl"
        >
          <motion.div style={{ opacity }} className="mb-4">
             <span className="text-cyan text-xs font-mono tracking-[0.3em] font-bold uppercase">
               L'attente est terminée
             </span>
          </motion.div>
          
          <NeonText className="text-5xl md:text-8xl lg:text-[120px] leading-none mb-8">
            GTA VI — 19 NOVEMBRE 2026
          </NeonText>

          <motion.p 
            style={{ opacity }}
            className="text-muted text-sm md:text-xl max-w-2xl mx-auto mb-10 font-inter"
          >
            Rejoignez Lucia et Jason dans la plus grande aventure de l&apos;histoire de Rockstar Games. Vice City vous attend.
          </motion.p>

          <motion.div style={{ opacity }} className="mb-16 flex justify-center">
            <FlipClock />
          </motion.div>

          <motion.div 
            style={{ opacity }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <a href="/guides/precommande-gta6-ps5" className="inline-flex items-center justify-center rounded-sm px-10 py-5 text-2xl font-bebas tracking-wider bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300 active:scale-95 shimmer-btn">
              🎮 Précommander sur PS5 — 79,99€
            </a>
            <a href="/guides/precommande-gta6-xbox" className="inline-flex items-center justify-center rounded-sm px-10 py-5 text-2xl font-bebas tracking-wider bg-background border border-border text-white hover:bg-neutral-900 transition-all duration-300 active:scale-95">
              🎮 Précommander sur Xbox — 79,99€
            </a>
          </motion.div>
          
          <div className="mt-4 flex gap-6 justify-center text-[10px] text-muted/60 font-mono">
            <span>✓ Prix Amazon garanti</span>
            <span>✓ Annulation gratuite</span>
            <span>✓ Livré le jour J</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-[10px] uppercase tracking-widest">En savoir plus</span>
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
