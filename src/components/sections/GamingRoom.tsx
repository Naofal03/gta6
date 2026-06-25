"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function GamingRoom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-[-20%] z-0">
        <img
          src="/images/hero_bg.png"
          alt="Setup gaming GTA 6 Vice City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan text-xs font-mono tracking-[0.4em] uppercase block mb-6">
            VICE CITY MÉRITE LE MEILLEUR
          </span>
          <h2 className="text-5xl md:text-8xl lg:text-[100px] leading-none mb-8 font-bebas">
            CRÉE<br />
            <span className="text-gradient">L&apos;EXPÉRIENCE</span><br />
            ULTIME.
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 font-inter leading-relaxed">
            Chaque centimètre de Vice City mérite d&apos;être vécu dans les meilleures conditions.
            Notre guide setup vous dit exactement ce qu&apos;il vous faut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/setup"
              className="inline-flex items-center justify-center rounded-sm px-10 py-4 text-xl font-bebas tracking-wider bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_30px_rgba(255,69,0,0.5)] transition-all duration-300 shimmer-btn"
            >
              VOIR LE SETUP COMPLET →
            </Link>
            <Link
              href="/produits"
              className="inline-flex items-center justify-center rounded-sm px-10 py-4 text-xl font-bebas tracking-wider border border-cyan/50 text-cyan hover:bg-cyan/10 transition-all duration-300"
            >
              TOUS LES PRODUITS
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none opacity-30"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-matter.png')" }}
      />
    </section>
  );
}
