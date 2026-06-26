"use client";

import { motion } from "framer-motion";
import { Headphones, Music, Star, FileText } from "lucide-react";
import Link from "next/link";
import { PRODUCTS_FULL } from "@/data/products-full";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";

export default function AudioGuide() {
  const headsetProducts = PRODUCTS_FULL.filter(p => p.category === 'casque').slice(0, 3);

  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-gold text-xs font-mono tracking-[0.3em] uppercase font-bold block mb-4">SON & IMMERSION</span>
          <h2 className="text-5xl md:text-7xl mb-6">
            ENTENDS<br />
            <span className="text-gradient">VICE CITY.</span>
          </h2>
          <p className="text-muted text-lg font-inter max-w-3xl mx-auto leading-relaxed">
            Rockstar a travaillé 3 ans sur la bande sonore et le mixage audio 3D de GTA 6.
            Le moteur Tempest 3D de la PS5 est conçu pour les casques. Ne passez pas à côté
            d&apos;une dimension entière du jeu.
          </p>
        </motion.div>

        {/* Highlight box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-sm border border-gold/20 mb-16 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-shrink-0 text-center md:text-left">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
              <Music size={28} className="text-gold" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bebas tracking-wider text-gold mb-2">TEMPEST 3D AUDIO — PS5 NATIF</h3>
            <p className="text-muted text-sm font-inter leading-relaxed">
              L&apos;audio spatial Tempest 3D de la PS5 positionne chaque son dans un espace tridimensionnel réaliste.
              Dans GTA 6 : entendez les sirènes arriver de derrière vous, les pas sur votre gauche, les hélicoptères au-dessus.
              Cette fonctionnalité ne fonctionne qu&apos;avec un casque compatible — pas avec des enceintes.
            </p>
          </div>
          <div className="flex-shrink-0 text-center">
            <span className="text-4xl font-bebas text-gold block">100%</span>
            <span className="text-xs text-muted font-mono uppercase tracking-widest">Immersion audio</span>
          </div>
        </motion.div>

        {/* Headset grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {headsetProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass p-6 rounded-sm border transition-all duration-300 flex flex-col ${
                i === 1 ? 'border-gold/40 shadow-[0_0_20px_rgba(255,215,0,0.05)]' : 'border-border/50 hover:border-cyan/20'
              }`}
            >
              {i === 1 && (
                <div className="mb-3 -mt-3 -mx-3">
                  <span className="bg-gold/10 text-gold text-[9px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1">
                    <Star size={8} className="fill-gold" />
                    NOTRE RECOMMANDATION
                  </span>
                </div>
              )}
              <div className="h-32 flex items-center justify-center mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={120}
                  height={128}
                  className="object-contain max-h-full"
                  unoptimized
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <StarRating rating={product.rating} />
                <span className="text-[10px] text-muted">({product.reviewCount.toLocaleString()})</span>
              </div>
              <h4 className="text-lg font-bebas tracking-wider mb-2">{product.name}</h4>
              <p className="text-xs text-muted font-inter leading-relaxed mb-4 flex-1">{product.sellingPoint}</p>
              <div className="mt-auto space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gold font-mono text-xl font-bold">{formatPrice(product.price)}</span>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="nofollow sponsored"
                    aria-label={`Commander ${product.name} sur Amazon`}
                    className="inline-flex items-center gap-1.5 bg-orange text-white text-xs font-bold px-3 py-2 rounded-sm hover:bg-[#FF5712] transition-colors shimmer-btn"
                  >
                    <Headphones size={11} />
                    AMAZON
                  </a>
                </div>
                <Link
                  href={`/produits/${product.id}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 border border-cyan/30 text-cyan text-xs font-bold px-3 py-2 rounded-sm hover:bg-cyan/10 hover:border-cyan transition-colors"
                >
                  <FileText size={11} />
                  VOIR LA FICHE COMPLÈTE →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/accessoires"
            className="inline-flex items-center gap-2 text-cyan font-bold text-sm hover:underline"
          >
            Voir tous les casques gaming →
          </Link>
        </div>
      </div>
    </section>
  );
}
