"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Zap, Trophy, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gta6-pi-cyan.vercel.app";

const STANDARD_FEATURES = [
  { text: "Le jeu Grand Theft Auto VI complet", included: true },
  { text: "Mode histoire complet (Lucia & Jason)", included: true },
  { text: "Accès à GTA Online", included: true },
  { text: "Pack Vintage Vice City (précommande)", included: true },
  { text: "Véhicules exclusifs supplémentaires", included: false },
  { text: "Armes et tenues bonus", included: false },
];

const ULTIMATE_FEATURES = [
  { text: "Le jeu Grand Theft Auto VI complet", included: true },
  { text: "Mode histoire complet (Lucia & Jason)", included: true },
  { text: "Accès à GTA Online", included: true },
  { text: "Pack Vintage Vice City (précommande)", included: true },
  { text: "Véhicules exclusifs supplémentaires", included: true },
  { text: "Armes, tenues et contenus bonus", included: true },
];

const COMPARISON_TABLE = [
  { feature: "Jeu complet GTA VI", standard: true, ultimate: true },
  { feature: "Mode histoire (Lucia & Jason)", standard: true, ultimate: true },
  { feature: "GTA Online inclus", standard: true, ultimate: true },
  { feature: "Pack Vintage Vice City", standard: true, ultimate: true },
  { feature: "Véhicules exclusifs", standard: false, ultimate: true },
  { feature: "Armes & tenues bonus", standard: false, ultimate: true },
  { feature: "Crédits GTA Online bonus", standard: false, ultimate: true },
  { feature: "Contenus DLC progressifs", standard: false, ultimate: true },
];

export default function EditionComparator() {
  const productSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "GTA 6 — Édition Standard PS5",
      description:
        "Grand Theft Auto VI Édition Standard pour PlayStation 5. Inclut le jeu complet, le mode histoire avec Lucia et Jason, l'accès à GTA Online et le Pack Vintage Vice City.",
      brand: { "@type": "Brand", name: "Rockstar Games" },
      sku: "GTA6-STD-PS5",
      category: "Jeux vidéo > PS5",
      image: `${SITE_URL}/images/gta6_ps5.png`,
      offers: {
        "@type": "Offer",
        price: "79.99",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://amzn.to/4aiof6B",
        priceValidUntil: "2027-12-31",
        seller: { "@type": "Organization", name: "Amazon" },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "EUR" },
          deliveryTime: { "@type": "ShippingDeliveryTime", handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1 } },
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "GTA 6 — Édition Ultimate",
      description:
        "Grand Theft Auto VI Édition Ultimate pour PS5 et Xbox Series. Inclut tout le contenu Standard plus des véhicules exclusifs, des armes, des tenues et des contenus bonus pour GTA Online.",
      brand: { "@type": "Brand", name: "Rockstar Games" },
      sku: "GTA6-ULT-PS5",
      category: "Jeux vidéo",
      image: `${SITE_URL}/images/gta6_ps5.png`,
      offers: {
        "@type": "Offer",
        price: "99.99",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://amzn.to/4aiof6B",
        priceValidUntil: "2027-12-31",
        seller: { "@type": "Organization", name: "Amazon" },
      },
    },
  ];

  return (
    <>
      <Script
        id="schema-products"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemas) }}
      />

      <section
        className="py-24 px-6 bg-surface border-y border-border relative overflow-hidden"
        aria-labelledby="editions-heading"
        id="editions"
      >
        {/* Background aurora */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/4 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-orange/4 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-cyan text-xs font-mono tracking-[0.3em] font-bold uppercase block mb-4">
              LES 2 ÉDITIONS OFFICIELLES
            </span>
            <h2 id="editions-heading" className="text-5xl md:text-8xl mb-6">
              QUELLE <span className="text-gradient">ÉDITION</span> CHOISIR ?
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-inter text-base md:text-lg">
              Standard (79,99 €) ou Ultimate (99,99 €) : voici exactement ce qui change, pour qui l&apos;Ultimate vaut le surcoût de <strong className="text-gold">20 €</strong>.
            </p>
          </motion.div>

          {/* Edition cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
            {/* Standard Edition */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass p-8 rounded-sm border border-border/50 hover:border-white/20 transition-all duration-300 relative"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="name" content="GTA 6 Édition Standard" />
              <meta itemProp="description" content="GTA 6 édition standard, inclut le jeu complet, mode histoire et GTA Online" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bebas tracking-wider text-white" itemProp="name">
                    ÉDITION STANDARD
                  </h3>
                  <p className="text-muted text-sm mt-1">Pour tous les joueurs</p>
                </div>
                <div className="text-right" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="priceCurrency" content="EUR" />
                  <meta itemProp="price" content="79.99" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <span className="text-3xl font-mono text-gold font-bold">79,99€</span>
                  <span className="block text-muted text-xs font-mono">prix public conseillé</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8" aria-label="Contenu de l'édition standard">
                {STANDARD_FEATURES.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    {feat.included ? (
                      <CheckCircle2 size={16} className="text-trust flex-shrink-0" />
                    ) : (
                      <X size={16} className="text-muted/40 flex-shrink-0" />
                    )}
                    <span className={feat.included ? "text-muted" : "text-muted/40 line-through"}>
                      {feat.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://amzn.to/4aiof6B"
                target="_blank"
                rel="nofollow sponsored noopener"
                aria-label="Acheter GTA 6 édition Standard sur Amazon — 79,99€"
                className="w-full inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-lg font-bebas tracking-wider bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] hover:shadow-[0_0_30px_rgba(255,69,0,0.6)] transition-all duration-300 shimmer-btn"
              >
                🛒 ACHETER L&apos;ÉDITION STANDARD → 79,99€
              </a>
              <p className="text-[9px] text-muted/60 text-center mt-3 font-mono">
                Lien affilié Amazon · Prix public conseillé · Prix du jour affiché sur Amazon
              </p>
            </motion.div>

            {/* Ultimate Edition */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="name" content="GTA 6 Édition Ultimate" />
              <meta itemProp="description" content="GTA 6 édition ultimate avec véhicules, armes et tenues exclusifs pour GTA Online" />

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-gold text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                  <Trophy size={10} />
                  MEILLEURE VALEUR
                </span>
              </div>

              <div className="glass p-8 rounded-sm border-2 border-gold/40 shadow-[0_0_60px_rgba(255,215,0,0.08)] hover:shadow-[0_0_80px_rgba(255,215,0,0.15)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />

                <div className="flex items-center justify-between mb-6 relative">
                  <div>
                    <h3 className="text-3xl font-bebas tracking-wider text-gold">
                      ÉDITION ULTIMATE
                    </h3>
                    <p className="text-muted text-sm mt-1">Pour les vrais fans de Vice City</p>
                  </div>
                  <div className="text-right" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="EUR" />
                    <meta itemProp="price" content="99.99" />
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <span className="text-3xl font-mono text-gold font-bold">99,99€</span>
                    <p className="text-[10px] text-muted/60 font-mono">soit +20€ seulement</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 relative" aria-label="Contenu de l'édition ultimate">
                  {ULTIMATE_FEATURES.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Star
                        size={16}
                        className={i < 4 ? "text-gold fill-gold flex-shrink-0" : "text-gold flex-shrink-0"}
                      />
                      <span className={i < 4 ? "text-muted" : "text-white font-medium"}>
                        {feat.text}
                      </span>
                      {i >= 4 && (
                        <span className="text-[9px] text-gold font-mono bg-gold/10 border border-gold/20 px-1.5 py-0.5 rounded-sm flex-shrink-0">
                          EXCLU
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="bg-gold/10 border border-gold/20 rounded-sm p-4 mb-6 flex items-start gap-3 relative">
                  <Zap size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gold/90 font-inter">
                    <strong>Pour qui ?</strong> Si vous comptez passer des dizaines d&apos;heures sur GTA Online, les bonus Ultimate font gagner du temps et de l&apos;argent en jeu. Pour le mode histoire seul, l&apos;édition Standard suffit largement.
                  </p>
                </div>

                <a
                  href="https://amzn.to/4aiof6B"
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  aria-label="Acheter GTA 6 édition Ultimate sur Amazon — 99,99€"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-lg font-bebas tracking-wider bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.5)] hover:shadow-[0_0_40px_rgba(255,69,0,0.7)] transition-all duration-300 shimmer-btn relative"
                >
                  🛒 ACHETER L&apos;ÉDITION ULTIMATE → 99,99€
                </a>
                <p className="text-[9px] text-muted/60 text-center mt-3 font-mono relative">
                  Lien affilié Amazon · Prix public conseillé · Prix du jour affiché sur Amazon
                </p>
              </div>
            </motion.div>
          </div>

          {/* Comparison table — sémantique HTML pour SEO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-4xl font-bebas text-center mb-8 text-white">
              TABLEAU COMPARATIF : <span className="text-cyan">STANDARD</span> VS <span className="text-gold">ULTIMATE</span>
            </h3>

            <div className="overflow-x-auto">
              <table
                className="w-full glass rounded-sm border border-border/50 overflow-hidden"
                aria-label="Comparaison des éditions Standard et Ultimate de GTA 6"
              >
                <thead>
                  <tr className="border-b border-border/50">
                    <th scope="col" className="text-left px-6 py-4 text-sm font-mono uppercase tracking-widest text-muted w-1/2">
                      Contenu / Fonctionnalité
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-sm font-mono uppercase tracking-widest text-white w-1/4">
                      Standard
                      <span className="block text-muted text-xs font-mono normal-case tracking-normal mt-0.5">79,99€</span>
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-sm font-mono uppercase tracking-widest text-gold w-1/4">
                      Ultimate
                      <span className="block text-gold/60 text-xs font-mono normal-case tracking-normal mt-0.5">99,99€</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/30 hover:bg-white/2 transition-colors duration-150"
                    >
                      <td className="px-6 py-3.5 text-sm text-muted font-inter">
                        {row.feature}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {row.standard ? (
                          <CheckCircle2 size={18} className="text-trust mx-auto" aria-label="Inclus" />
                        ) : (
                          <X size={18} className="text-muted/40 mx-auto" aria-label="Non inclus" />
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {row.ultimate ? (
                          <Star size={18} className={`mx-auto ${i >= 4 ? "text-gold fill-gold" : "text-trust"}`} aria-label="Inclus" />
                        ) : (
                          <X size={18} className="text-muted/40 mx-auto" aria-label="Non inclus" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <p className="text-muted text-sm font-inter mb-4">
              💡 <strong className="text-white">Notre conseil :</strong> Standard pour l&apos;histoire, Ultimate si vous visez GTA Online. Rockstar prévoit de vendre la mise à niveau séparément après la sortie.
            </p>
            <Link
              href="/guides/edition-standard-vs-ultimate"
              className="inline-flex items-center gap-2 text-cyan text-sm font-mono hover:underline underline-offset-4"
            >
              Lire notre analyse complète Standard vs Ultimate
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
