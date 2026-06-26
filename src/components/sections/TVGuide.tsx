"use client";

import { motion } from "framer-motion";
import { Monitor, Zap, Eye, Volume2, FileText } from "lucide-react";
import Link from "next/link";
import { PRODUCTS_FULL } from "@/data/products-full";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

const TV_FEATURES = [
  { icon: Eye, title: "4K HDR", desc: "GTA 6 tourne nativement en 4K. Chaque détail de Vice City — le reflet du soleil sur l'eau, les néons la nuit — n'existe que sur un écran 4K." },
  { icon: Zap, title: "60+ FPS", desc: "120 Hz sur PS5 Pro, 60 Hz stable sur PS5. La fluidité compte dans chaque course-poursuite, chaque fusillade." },
  { icon: Volume2, title: "HDMI 2.1", desc: "Requis pour 4K/120fps en simultané. Sans HDMI 2.1, vous êtes limités à 4K/60fps ou 1080p/120fps." },
];

export default function TVGuide() {
  const tvProducts = PRODUCTS_FULL.filter(p => p.category === 'tv').slice(0, 2);

  return (
    <section className="py-24 px-6 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase font-bold block mb-4">VISUEL & IMMERSION</span>
          <h2 className="text-5xl md:text-7xl mb-6">
            L&apos;IMAGE QUE<br />
            <span className="text-gradient">GTA 6 MÉRITE.</span>
          </h2>
          <p className="text-muted text-lg font-inter max-w-3xl leading-relaxed">
            Rockstar Games a conçu GTA 6 pour la 4K HDR 60fps. Si votre TV ne supporte pas ces standards,
            vous manquez 30% de l&apos;expérience visuelle que le studio a passé des années à créer.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TV_FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-sm border border-border/50 group hover:border-cyan/30 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-cyan/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
                <feat.icon size={20} className="text-cyan" />
              </div>
              <h3 className="text-xl font-bebas tracking-wider text-cyan mb-2">{feat.title}</h3>
              <p className="text-muted text-sm font-inter leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TV Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {tvProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-sm border border-border/50 flex gap-6 items-center group hover:border-cyan/20 transition-all duration-300"
            >
              <div className="w-28 h-20 flex-shrink-0 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={112}
                  height={80}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted font-mono uppercase tracking-widest mb-1">{product.category.toUpperCase()}</p>
                <h4 className="text-lg font-bebas tracking-wider mb-1 truncate">{product.name}</h4>
                <p className="text-xs text-muted mb-3 truncate">{product.sellingPoint}</p>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-gold font-mono text-xl font-bold">{formatPrice(product.price)}</span>
                  <div className="flex gap-2">
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="nofollow sponsored"
                      aria-label={`Commander ${product.name} sur Amazon`}
                      className="inline-flex items-center gap-1.5 bg-orange text-white text-xs font-bold px-3 py-2 rounded-sm hover:bg-[#FF5712] transition-colors shimmer-btn"
                    >
                      <Monitor size={12} />
                      AMAZON
                    </a>
                    <Link
                      href={`/produits/${product.id}`}
                      className="inline-flex items-center gap-1.5 border border-cyan/30 text-cyan text-xs font-bold px-3 py-2 rounded-sm hover:bg-cyan/10 hover:border-cyan transition-colors"
                    >
                      <FileText size={12} />
                      FICHE →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/guides/meilleure-tv-gta6"
            className="inline-flex items-center gap-2 text-cyan font-bold text-sm hover:underline"
          >
            Lire notre guide complet TV 4K pour GTA 6 →
          </Link>
        </div>
      </div>
    </section>
  );
}
