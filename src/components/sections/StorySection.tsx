"use client";

import { motion } from "framer-motion";

const paragraphs = [
  {
    text: "C'était 2013. GTA V venait de sortir et le monde du jeu vidéo s'arrêtait. En 72 heures, le jeu générait 1 milliard de dollars. Depuis, 13 années se sont écoulées — la plus longue attente de l'histoire de Rockstar Games.",
  },
  {
    text: "Aujourd'hui, le rêve devient réalité. GTA VI nous ramène à Vice City, dans une version magnifiée, brutale et viscérale de la Floride contemporaine (Leonida). Deux protagonistes, Lucia et Jason, une map deux fois plus grande, et un moteur RAGE totalement repensé.",
  },
  {
    text: "Mais voilà le problème : GTA 6 tourne en 4K/60fps avec audio spatial 3D. Il pèse 150 GB. Il a été conçu pour tirer parti de chaque watt de puissance de la PS5 et de la Xbox Series X. Et si votre setup date d'avant 2020 — vous allez passer à côté.",
  },
  {
    text: "C'est pour ça que GTA6HQ existe. Pour vous dire exactement ce qu'il vous faut, au prix juste, sans bullshit. Parce que 13 ans d'attente méritent une expérience parfaite.",
  },
];

export default function StorySection() {
  return (
    <section className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-8xl leading-none mb-10">
              13 ANS <br />
              <span className="text-cyan">D&apos;ATTENTE.</span>
            </h2>

            <div className="space-y-6 font-inter text-base md:text-lg leading-relaxed">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                  className="text-muted"
                >
                  {i === 1 && (
                    <>
                      Aujourd&apos;hui, le rêve devient réalité.{" "}
                      <span className="text-white font-semibold">GTA VI</span> nous ramène à Vice City, dans une version magnifiée, brutale et viscérale de la Floride contemporaine (Leonida). Deux protagonistes, Lucia et Jason, une map deux fois plus grande, et un moteur RAGE totalement repensé.
                    </>
                  )}
                  {i === 2 && (
                    <>
                      Mais voilà le problème : GTA 6 tourne en{" "}
                      <span className="text-cyan font-semibold">4K/60fps avec audio spatial 3D</span>. Il pèse 150 GB. Il a été conçu pour tirer parti de chaque watt de puissance de la PS5 et de la Xbox Series X. Et si votre setup date d&apos;avant 2020 — vous allez passer à côté.
                    </>
                  )}
                  {i === 0 && p.text}
                  {i === 3 && (
                    <>
                      C&apos;est pour ça que <span className="text-white font-semibold">GTA6HQ</span> existe. Pour vous dire exactement ce qu&apos;il vous faut, au prix juste, sans bullshit. Parce que 13 ans d&apos;attente méritent une expérience parfaite.
                    </>
                  )}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              <a
                href="https://amzn.to/4aiof6B"
                target="_blank"
                rel="nofollow sponsored"
                aria-label="Précommander GTA 6 sur Amazon"
                className="inline-flex items-center justify-center rounded-sm px-8 py-4 text-lg font-bebas tracking-wider bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300 shimmer-btn"
              >
                🎮 PRÉCOMMANDER GTA 6 →
              </a>
              <a
                href="/setup"
                className="inline-flex items-center justify-center rounded-sm px-8 py-4 text-lg font-bebas tracking-wider border border-cyan/40 text-cyan hover:bg-cyan/10 transition-all duration-300"
              >
                VOIR MON SETUP
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Image side */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] glass rounded-sm overflow-hidden group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero_bg.png"
              alt="Lucia et Jason — GTA 6 protagonistes Vice City"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

            {/* Overlay stats */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              {[
                { value: "13", label: "ans d'attente" },
                { value: "2×", label: "map plus grande" },
                { value: "4K", label: "60fps natif" },
              ].map((stat, i) => (
                <div key={i} className="flex-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-sm p-3 text-center">
                  <span className="block text-xl font-bebas text-cyan">{stat.value}</span>
                  <span className="block text-[9px] text-muted uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
