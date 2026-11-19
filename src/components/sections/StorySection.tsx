"use client";

import { motion } from "framer-motion";
import LaunchLabel from "@/components/ui/LaunchLabel";
import { TrendingUp, Shield, Zap } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: TrendingUp,
    value: "13 ANS",
    label: "L'attente la plus longue de l'histoire Rockstar",
    color: "#FF4500",
  },
  {
    icon: Zap,
    value: "4K / 60FPS",
    label: "Performances cibles sur PS5 et Xbox Series X",
    color: "#00FFCC",
  },
  {
    icon: Shield,
    value: "2× PLUS",
    label: "Grande map que GTA V — Leonida (Floride fictive)",
    color: "#FFD700",
  },
];

export default function StorySection() {
  return (
    <section
      id="story"
      className="py-24 px-6 bg-background overflow-hidden relative"
      aria-labelledby="story-heading"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* Background aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/4 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/3 blur-[120px] rounded-full" />
      </div>

      <meta itemProp="headline" content="GTA 6 : 13 ans d'attente — L'histoire de Rockstar Games" />
      <meta itemProp="datePublished" content="2026-11-19" />
      <meta itemProp="author" content="GTA6HQ" />
      <meta itemProp="inLanguage" content="fr-FR" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text side */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase font-bold block mb-4">
              L&apos;histoire derrière l&apos;attente
            </span>
            <h2
              id="story-heading"
              className="text-5xl md:text-8xl leading-none mb-10"
              itemProp="name"
            >
              13 ANS <br />
              <span className="text-cyan">D&apos;ATTENTE.</span>
            </h2>

            <div
              className="space-y-6 font-inter text-base md:text-lg leading-relaxed"
              itemProp="articleBody"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-muted"
              >
                C&apos;était 2013. <strong className="text-white">GTA V</strong> venait de sortir et le monde du jeu vidéo s&apos;arrêtait. En 72 heures, le jeu générait 1 milliard de dollars. Depuis, 13 années se sont écoulées — la plus longue attente de l&apos;histoire de Rockstar Games.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted"
              >
                Aujourd&apos;hui, le rêve devient réalité.{" "}
                <strong className="text-white">GTA VI</strong> nous ramène à Vice City, dans une version magnifiée, brutale et viscérale de la Floride contemporaine (<strong className="text-white">Leonida</strong>). Deux protagonistes, <strong className="text-white">Lucia et Jason</strong>, une map deux fois plus grande, et un moteur RAGE totalement repensé.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted"
              >
                Mais voilà le problème : GTA 6 tourne en{" "}
                <strong className="text-cyan">4K/60fps avec audio spatial 3D</strong>. Il pèse <strong className="text-white">150 Go</strong>. Il a été conçu pour tirer parti de chaque watt de puissance de la PS5 et de la Xbox Series X. Et si votre setup date d&apos;avant 2020 — vous allez passer à côté.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted"
              >
                C&apos;est pour ça que <strong className="text-white">GTA6HQ</strong> existe. Pour vous dire exactement ce qu&apos;il vous faut, au prix juste, sans blabla. Parce que 13 ans d&apos;attente méritent une expérience parfaite.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="https://amzn.to/4aiof6B"
                target="_blank"
                rel="nofollow sponsored noopener"
                aria-label="Acheter GTA 6 sur Amazon"
                className="inline-flex items-center justify-center rounded-sm px-8 py-4 text-lg font-bebas tracking-wider bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] hover:shadow-[0_0_40px_rgba(255,69,0,0.7)] transition-all duration-300 shimmer-btn"
              >
                🎮 <LaunchLabel pre="PRÉCOMMANDER GTA 6 →" post="ACHETER GTA 6 →" />
              </a>
              <a
                href="/setup"
                className="inline-flex items-center justify-center rounded-sm px-8 py-4 text-lg font-bebas tracking-wider border border-cyan/40 text-cyan hover:bg-cyan/10 hover:border-cyan transition-all duration-300"
              >
                VOIR MON SETUP
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Image + stats side */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden group border border-white/5 hover:border-white/15 transition-all duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero_bg.png"
                alt="Lucia et Jason — protagonistes de GTA 6 à Vice City, Leonida"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                itemProp="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

              {/* Overlay badge */}
              <div className="absolute top-4 right-4 glass border border-orange/30 rounded-sm px-3 py-1.5">
                <span className="text-orange text-xs font-mono font-bold uppercase tracking-widest">
                  Vice City 2026
                </span>
              </div>

              {/* Overlay stats row */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                {[
                  { value: "13", label: "ans d'attente" },
                  { value: "2×", label: "map plus grande" },
                  { value: "4K", label: "60fps natif" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-black/70 backdrop-blur-sm border border-white/10 hover:border-cyan/30 rounded-sm p-2.5 text-center transition-all duration-300"
                  >
                    <span className="block text-lg font-bebas text-cyan">{stat.value}</span>
                    <span className="block text-[9px] text-muted uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights row */}
            <div className="grid grid-cols-1 gap-3">
              {HIGHLIGHTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="glass border border-border/50 hover:border-transparent rounded-sm p-4 flex items-center gap-4 group transition-all duration-300"
                    style={{
                      "--hover-border": item.color,
                    } as React.CSSProperties}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <span className="font-bebas text-xl" style={{ color: item.color }}>
                        {item.value}
                      </span>
                      <p className="text-muted text-xs font-inter leading-tight">{item.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
