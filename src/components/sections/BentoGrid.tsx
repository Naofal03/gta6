"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Crown, HardDrive, Headphones } from "lucide-react";

const card =
  "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#ff2d95]/40 hover:shadow-[0_20px_60px_-20px_rgba(255,45,149,0.45)]";

const reveal = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function BentoGrid() {
  return (
    <section aria-labelledby="bento-heading" className="relative bg-[#07050f] px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,45,149,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <h2 id="bento-heading" className="mb-12 text-center font-bebas text-5xl tracking-wide text-white md:text-7xl">
          Tout pour <span className="bg-gradient-to-r from-[#ff2d95] to-[#00e5ff] bg-clip-text text-transparent">Leonida</span>
        </h2>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-4">
          {/* Editions */}
          <motion.div {...reveal(0)} className={`${card} md:col-span-2 md:row-span-2`}>
            <Link href="/precommande" className="flex h-full flex-col justify-end p-8" id="bento-editions">
              <Image src="/images/bg_ps5_gta6.jpg" alt="Éditions de GTA 6" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07050f] via-[#07050f]/60 to-transparent" />
              <div className="relative">
                <Crown className="mb-4 h-8 w-8 text-[#ffb347]" />
                <h3 className="font-bebas text-4xl text-white md:text-5xl">Standard ou Ultimate ?</h3>
                <p className="mt-2 max-w-md text-white/65">Comparatif complet des éditions, bonus et prix pour choisir sans te tromper.</p>
                <span className="mt-5 inline-flex items-center gap-2 font-medium text-[#ff2d95]">Comparer les éditions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </div>
            </Link>
          </motion.div>

          {/* PS5 Pro */}
          <motion.div {...reveal(1)} className={`${card} md:col-span-2`}>
            <Link href="/produits/ps5-pro" className="flex h-full items-center gap-6 p-6" id="bento-ps5pro">
              <div className="relative h-full w-2/5 shrink-0">
                <Image src="/images/ps5_pro.png" alt="PlayStation 5 Pro" fill sizes="200px" className="object-contain drop-shadow-[0_10px_30px_rgba(0,229,255,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
              </div>
              <div>
                <span className="rounded-full bg-cyan-400/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-300">4K · 60 fps</span>
                <h3 className="mt-3 font-bebas text-4xl text-white">PS5 Pro</h3>
                <p className="text-sm text-white/55">La meilleure console pour GTA VI</p>
                <p className="mt-2 text-2xl font-semibold text-white">dès 799,99 €</p>
              </div>
            </Link>
          </motion.div>

          {/* Trailer */}
          <motion.div {...reveal(2)} className={card}>
            <a href="#trailer" className="flex h-full items-center justify-center" id="bento-trailer">
              <Image src="/images/bg_vice_city.jpg" alt="Trailer GTA 6" fill sizes="25vw" className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" />
              <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/40 transition-transform group-hover:scale-110">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#ff2d95]/30" />
                <Play className="h-6 w-6 fill-white text-white" />
              </span>
              <span className="absolute bottom-4 left-5 font-bebas text-xl text-white">Trailer officiel</span>
            </a>
          </motion.div>

          {/* Stat */}
          <motion.div {...reveal(3)} className={`${card} flex flex-col items-center justify-center text-center`}>
            <p className="bg-gradient-to-b from-[#ff8fc7] to-[#ff2d95] bg-clip-text font-bebas text-7xl text-transparent">13 ans</p>
            <p className="text-white/70">d&apos;attente depuis GTA V</p>
          </motion.div>

          {/* SSD */}
          <motion.div {...reveal(4)} className={`${card} md:col-span-2`}>
            <Link href="/guides/accessoires-indispensables-ps5" className="flex h-full flex-col justify-between p-7" id="bento-ssd">
              <HardDrive className="h-8 w-8 text-cyan-300" />
              <div>
                <h3 className="font-bebas text-3xl text-white">~150 Go à installer</h3>
                <p className="text-white/55">Les meilleurs SSD NVMe compatibles PS5 pour ne rien supprimer.</p>
              </div>
            </Link>
          </motion.div>

          {/* Setup */}
          <motion.div {...reveal(5)} className={`${card} md:col-span-2 bg-gradient-to-br from-[#ff2d95]/20 to-[#00e5ff]/10`}>
            <Link href="/setup" className="flex h-full items-center justify-between p-7" id="bento-setup">
              <div>
                <Headphones className="mb-3 h-8 w-8 text-[#ffb347]" />
                <h3 className="font-bebas text-3xl text-white">Configure ton setup ultime</h3>
                <p className="text-white/60">TV, casque, manette : on compose ton setup selon ton budget.</p>
              </div>
              <ArrowUpRight className="h-10 w-10 shrink-0 text-white/40 transition-all group-hover:rotate-45 group-hover:text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
