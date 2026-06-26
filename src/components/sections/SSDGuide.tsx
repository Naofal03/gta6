"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Zap, HardDrive, Clock, FileText } from "lucide-react";
import Link from "next/link";
import { PRODUCTS_FULL } from "@/data/products-full";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

export default function SSDGuide() {
  const ssdProducts = PRODUCTS_FULL.filter(p => p.category === 'ssd').slice(0, 2);

  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 px-4 py-2 rounded-sm mb-6">
            <AlertTriangle size={14} className="text-orange" />
            <span className="text-orange text-xs font-mono uppercase tracking-widest font-bold">ATTENTION REQUISE</span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">
            GTA 6 PÈSE <span className="text-orange">150 GB.</span><br />
            <span className="text-white/60 text-4xl md:text-5xl">Votre PS5 de base ne suffira pas.</span>
          </h2>
          <p className="text-muted text-lg font-inter max-w-3xl leading-relaxed">
            La PS5 Digital de base dispose de 667 GB de stockage utilisable. Avec le système, les mises à jour et vos jeux actuels,
            il ne vous reste probablement pas 150 GB. Et même si c&apos;est le cas — un SSD externe change tout à l&apos;expérience de jeu.
          </p>
        </motion.div>

        {/* Visual infographic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-sm"
          >
            <h3 className="text-2xl font-bebas mb-6 text-white">SANS SSD ADDITIONNEL</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-muted">Stockage PS5 utilisable</span>
                  <span className="text-white">667 GB</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-trust to-cyan rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-muted">Après système + jeux moyens</span>
                  <span className="text-orange">~150 GB restants</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-orange rounded-full" style={{ width: "22%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-muted">Espace requis GTA 6</span>
                  <span className="text-orange">150 GB</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-orange/50 rounded-full" style={{ width: "22%" }} />
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange/10 border border-orange/20 rounded-sm flex items-start gap-3">
                <AlertTriangle size={16} className="text-orange flex-shrink-0 mt-0.5" />
                <p className="text-sm text-orange/90">Espace insuffisant — impossible d&apos;installer GTA 6 sans supprimer d&apos;autres jeux.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 rounded-sm border border-cyan/20"
          >
            <h3 className="text-2xl font-bebas mb-6 text-cyan">AVEC SSD 2 TO RECOMMANDÉ</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-muted">SSD additionnel (1 850 GB utilisables)</span>
                  <span className="text-trust">+1 850 GB</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan to-trust rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-muted">GTA 6 installé</span>
                  <span className="text-white">150 GB utilisés</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-cyan rounded-full" style={{ width: "8%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-muted">Encore disponibles</span>
                  <span className="text-trust">1 700 GB libres</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-trust rounded-full" style={{ width: "92%" }} />
                </div>
              </div>
              <div className="mt-6 p-4 bg-trust/10 border border-trust/20 rounded-sm flex items-start gap-3">
                <Zap size={16} className="text-trust flex-shrink-0 mt-0.5" />
                <p className="text-sm text-trust/90">Parfait — GTA 6 installé + 1 700 GB pour tous vos autres jeux.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Speed comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-sm mb-16 border border-cyan/10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex items-center gap-4 flex-1">
              <Clock size={24} className="text-muted flex-shrink-0" />
              <div>
                <p className="text-sm text-muted font-mono uppercase tracking-widest mb-1">SSD PS5 Interne</p>
                <div className="h-4 bg-border rounded-full overflow-hidden w-64 max-w-full">
                  <div className="h-full bg-muted rounded-full" style={{ width: "40%" }} />
                </div>
                <p className="text-xs text-muted mt-1">~5 500 Mo/s — Chargements en 8-10 secondes</p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-1">
              <Zap size={24} className="text-cyan flex-shrink-0" />
              <div>
                <p className="text-sm text-cyan font-mono uppercase tracking-widest mb-1">Lexar EQ790 Recommandé</p>
                <div className="h-4 bg-border rounded-full overflow-hidden w-64 max-w-full">
                  <div className="h-full bg-gradient-to-r from-cyan to-trust rounded-full" style={{ width: "100%" }} />
                </div>
                <p className="text-xs text-cyan mt-1">7 400 Mo/s — Chargements en 3-4 secondes</p>
              </div>
            </div>
            <div className="flex-shrink-0 text-center">
              <span className="text-4xl font-bebas text-gold">3×</span>
              <p className="text-xs text-muted font-mono uppercase tracking-widest">Plus rapide</p>
            </div>
          </div>
        </motion.div>

        {/* SSD Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {ssdProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-sm border border-border/50 flex gap-6 items-center"
            >
              <div className="w-24 h-24 flex-shrink-0 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted font-mono uppercase tracking-widest mb-1">{product.category.toUpperCase()}</p>
                <h4 className="text-lg font-bebas tracking-wider mb-2 truncate">{product.name}</h4>
                <p className="text-gold font-mono text-xl font-bold mb-3">{formatPrice(product.price)}</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="nofollow sponsored"
                    aria-label={`Commander ${product.name} sur Amazon`}
                    className="inline-flex items-center gap-1.5 bg-orange text-white text-xs font-bold px-4 py-2 rounded-sm hover:bg-[#FF5712] transition-colors shimmer-btn"
                  >
                    <HardDrive size={12} />
                    COMMANDER
                  </a>
                  <Link
                    href={`/produits/${product.id}`}
                    className="inline-flex items-center gap-1.5 border border-cyan/30 text-cyan text-xs font-bold px-4 py-2 rounded-sm hover:bg-cyan/10 hover:border-cyan transition-colors"
                  >
                    <FileText size={12} />
                    VOIR LA FICHE →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/guides/meilleur-ssd-gta6"
            className="inline-flex items-center gap-2 text-cyan font-bold text-sm hover:underline"
          >
            Lire notre guide complet SSD pour GTA 6 →
          </Link>
        </div>
      </div>
    </section>
  );
}
