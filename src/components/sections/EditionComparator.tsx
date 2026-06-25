"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Zap, Trophy } from "lucide-react";
import Link from "next/link";

const STANDARD_FEATURES = [
  "Le jeu Grand Theft Auto VI complet",
  "Accès au mode histoire complet (Lucia & Jason)",
  "Accès au mode GTA Online",
  "Pack Vintage Vice City (bonus précommande)",
  "Véhicule historique exclusif",
  "Tenues exclusives Vice City",
];

const ULTIMATE_FEATURES = [
  "Tout le contenu de l'édition Standard",
  "Pack de démarrage Vice City (5 000 000 GTA$)",
  "Garage de luxe Leonida (5 emplacements)",
  "5 véhicules de collection premium exclusifs",
  "Pack d'armes Vice City (4 armes exclusives)",
  "Tenues et livrées supplémentaires",
];

export default function EditionComparator() {
  return (
    <section className="py-24 px-6 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan text-xs font-mono tracking-[0.3em] font-bold uppercase block mb-4">
            OFFICIEL ROCKSTAR GAMES
          </span>
          <h2 className="text-5xl md:text-8xl mb-6">
            QUELLE <span className="text-gradient">ÉDITION</span> CHOISIR ?
          </h2>
          <p className="text-muted max-w-2xl mx-auto font-inter text-lg">
            Standard ou Ultimate : voici exactement ce que vous obtenez pour chaque euro dépensé.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Standard Edition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 rounded-sm border border-border/50 relative"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bebas tracking-wider text-white">ÉDITION STANDARD</h3>
                <p className="text-muted text-sm mt-1">Pour tous les joueurs</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-mono text-gold font-bold">79,99€</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {STANDARD_FEATURES.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 size={16} className="text-trust mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://amzn.to/4aiof6B"
              target="_blank"
              rel="nofollow sponsored"
              aria-label="Précommander GTA 6 Edition Standard sur Amazon"
              className="w-full inline-flex items-center justify-center rounded-sm px-8 py-4 text-lg font-bebas tracking-wider bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300 shimmer-btn"
            >
              🛒 PRÉCOMMANDER — 79,99€
            </a>
            <p className="text-[9px] text-muted/60 text-center mt-3 font-mono">
              Prix Amazon garanti · Annulation gratuite · Livraison jour J
            </p>
          </motion.div>

          {/* Ultimate Edition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-gold text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                <Trophy size={10} />
                MEILLEURE VALEUR
              </span>
            </div>

            <div className="glass p-8 rounded-sm border-2 border-gold/40 shadow-[0_0_40px_rgba(255,215,0,0.08)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/3 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between mb-6 relative">
                <div>
                  <h3 className="text-3xl font-bebas tracking-wider text-gold">ÉDITION ULTIMATE</h3>
                  <p className="text-muted text-sm mt-1">Pour les vrais fans de Vice City</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-mono text-gold font-bold">99,99€</span>
                  <p className="text-[10px] text-muted/60 font-mono">soit +20€ seulement</p>
                </div>
              </div>

              <ul className="space-y-4 mb-6 relative">
                {ULTIMATE_FEATURES.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Star
                      size={16}
                      className={i < 2 ? "text-gold fill-gold mt-0.5 flex-shrink-0" : "text-gold mt-0.5 flex-shrink-0"}
                    />
                    <span className={i < 2 ? "text-white font-medium" : "text-muted"}>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gold/10 border border-gold/20 rounded-sm p-4 mb-6 flex items-start gap-3 relative">
                <Zap size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gold/90 font-inter">
                  <strong>Notre calcul :</strong> Les bonus Ultimate valent ~45€ au détail. Vous les obtenez pour seulement 20€ de plus. C&apos;est mathématiquement le meilleur choix.
                </p>
              </div>

              <a
                href="https://amzn.to/4aiof6B"
                target="_blank"
                rel="nofollow sponsored"
                aria-label="Précommander GTA 6 Edition Ultimate sur Amazon"
                className="w-full inline-flex items-center justify-center rounded-sm px-8 py-4 text-lg font-bebas tracking-wider bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.5)] transition-all duration-300 shimmer-btn relative"
              >
                🛒 PRÉCOMMANDER — 99,99€
              </a>
              <p className="text-[9px] text-muted/60 text-center mt-3 font-mono relative">
                Prix Amazon garanti · Annulation gratuite · Livraison jour J
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-muted text-sm font-inter">
            💡 <strong className="text-white">Notre conseil :</strong> L&apos;édition Ultimate à 99,99€ offre des bonus d&apos;une valeur estimée à 45€ pour seulement 20€ de plus.{" "}
            <Link href="/guides/edition-standard-vs-ultimate" className="text-cyan hover:underline">
              Lire notre analyse complète →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
