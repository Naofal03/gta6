import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS_FULL } from "@/data/products-full";
import { CheckCircle2, AlertTriangle, Zap, HardDrive, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Meilleur SSD PS5 pour GTA 6 — Comparatif 2026 | GTA6HQ",
  description:
    "GTA 6 pèse 150 GB et nécessite un SSD rapide. Notre comparatif des meilleurs SSD PS5 pour GTA 6 en 2026 : Lexar EQ790, Crucial P310. Prix, tests, recommandations.",
  alternates: { canonical: "https://gta6hq.fr/guides/meilleur-ssd-gta6" },
  openGraph: {
    title: "Meilleur SSD PS5 pour GTA 6 — Comparatif 2026",
    description:
      "Quel SSD choisir pour GTA 6 ? Notre guide complet avec comparatif, tests et recommandations pour ne pas manquer une seconde de Vice City.",
    images: [{ url: "https://gta6hq.fr/images/hero_bg.png", width: 1200, height: 630 }],
  },
};

const ssdProducts = PRODUCTS_FULL.filter((p) => p.category === "ssd");

const COMPARISON = [
  { label: "Interface", lexar: "PCIe 4.0 x4 NVMe", crucial: "PCIe 4.0 x4 NVMe" },
  { label: "Vitesse lecture", lexar: "7 400 Mo/s", crucial: "7 100 Mo/s" },
  { label: "Vitesse écriture", lexar: "6 500 Mo/s", crucial: "6 500 Mo/s" },
  { label: "Cache DRAM", lexar: "✓ Inclus", crucial: "✓ Inclus" },
  { label: "Compatible PS5", lexar: "✓ Certifié", crucial: "✓ Certifié" },
  { label: "Garantie", lexar: "5 ans", crucial: "5 ans" },
  { label: "Prix (2 To)", lexar: "~89€", crucial: "~85€" },
];

export default function MeilleurSSDPage() {
  return (
    <div className="pt-40 pb-24 bg-background min-h-screen">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gta6hq.fr" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://gta6hq.fr/guides" },
              { "@type": "ListItem", position: 3, name: "Meilleur SSD GTA 6", item: "https://gta6hq.fr/guides/meilleur-ssd-gta6" },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted mb-8 font-mono">
          <Link href="/" className="hover:text-cyan transition-colors">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/accessoires" className="hover:text-cyan transition-colors">Accessoires</Link>
          <span className="mx-2">›</span>
          <span className="text-white">Meilleur SSD GTA 6</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 px-3 py-1.5 rounded-sm mb-6">
            <AlertTriangle size={12} className="text-orange" />
            <span className="text-orange text-[10px] font-mono uppercase tracking-widest font-bold">Guide Essentiel</span>
          </div>
          <h1 className="text-5xl md:text-7xl leading-none mb-6 font-bebas">
            MEILLEUR SSD PS5<br />
            <span className="text-cyan">POUR GTA 6</span>
          </h1>
          <p className="text-muted text-lg font-inter leading-relaxed mb-6">
            GTA 6 pèse environ <strong className="text-white">150 GB</strong> et exploite pleinement le SSD ultra-rapide de la PS5.
            Choisir le bon SSD additionnel, c&apos;est réduire vos temps de chargement de moitié
            et avoir l&apos;espace pour stocker GTA 6 <em>plus</em> votre bibliothèque de jeux.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted font-mono">
            <span>✓ Mis à jour : juin 2026</span>
            <span>✓ 3 SSD testés</span>
            <span>✓ Compatible PS5 certifié</span>
          </div>
        </div>

        {/* Alert box */}
        <div className="glass p-6 rounded-sm border border-orange/30 mb-12 flex gap-4">
          <AlertTriangle size={20} className="text-orange flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-bold mb-2">Pourquoi c&apos;est urgent</p>
            <p className="text-muted text-sm font-inter leading-relaxed">
              La PS5 Digital Edition embarque 667 GB de stockage utilisable. Après le firmware système et vos jeux actuels,
              il vous reste souvent moins de 150 GB. Sans SSD additionnel, vous ne pourrez peut-être pas installer GTA 6
              sans supprimer d&apos;autres jeux.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <h2 className="text-3xl md:text-5xl font-bebas mb-6">QUEL SSD POUR GTA 6 ?</h2>
        <p className="text-muted font-inter leading-relaxed mb-6">
          Tous les SSD M.2 NVMe ne se valent pas pour la PS5. Sony impose des critères précis :
          le SSD doit être au format M.2 2280, utiliser l&apos;interface PCIe Gen 4 x4, et atteindre
          au minimum 5 500 Mo/s en lecture. En pratique, les meilleurs modèles du marché dépassent
          7 000 Mo/s — soit plus rapide que le SSD interne de la PS5 elle-même.
        </p>
        <p className="text-muted font-inter leading-relaxed mb-6">
          Pour GTA 6 spécifiquement, la vitesse de lecture séquentielle est le facteur critique.
          C&apos;est elle qui détermine la vitesse de chargement des zones de Vice City.
          Avec un bon SSD, le chargement initial passe de 8-10 secondes à 3-4 secondes.
          Multipliez ça par le nombre de sessions de jeu dans l&apos;année, et vous comprenez l&apos;enjeu.
        </p>

        {/* Products */}
        <div className="space-y-8 mb-12">
          {ssdProducts.map((product, i) => (
            <div key={product.id} className={`glass p-8 rounded-sm border ${i === 0 ? "border-gold/40" : "border-border/50"} relative`}>
              {i === 0 && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gold text-black text-[9px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1">
                    <Star size={8} className="fill-black" />
                    NOTRE CHOIX N°1
                  </span>
                </div>
              )}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={128}
                    height={128}
                    className="object-contain"
                    unoptimized={product.image.startsWith("http")}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bebas mb-2">{product.name}</h3>
                  <p className="text-muted text-sm font-inter mb-4 leading-relaxed">{product.verdict}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {product.specs.slice(0, 3).map((spec, j) => (
                      <div key={j} className="bg-white/5 border border-white/5 rounded-sm p-2 text-center">
                        <span className="block text-[9px] text-muted font-mono uppercase tracking-widest mb-1">{spec.label}</span>
                        <span className="block text-sm font-bold text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-gold font-mono text-2xl font-bold">{formatPrice(product.price)}</span>
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="nofollow sponsored"
                      aria-label={`Commander ${product.name} sur Amazon`}
                      className="inline-flex items-center gap-2 bg-orange text-white font-bebas text-lg px-6 py-3 rounded-sm hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300 shimmer-btn"
                    >
                      <HardDrive size={16} />
                      VOIR SUR AMAZON →
                    </a>
                  </div>
                  <p className="text-[9px] text-muted/60 font-mono mt-2">
                    ✓ Prix Amazon garanti · ✓ Livraison express · ✓ Retours 30 jours
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2 */}
        <h2 className="text-3xl md:text-5xl font-bebas mb-6">COMPARATIF TECHNIQUE</h2>
        <div className="glass rounded-sm border border-border/50 overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="text-left py-3 px-4 font-mono text-xs text-muted uppercase tracking-widest">Critère</th>
                <th className="text-center py-3 px-4 font-mono text-xs text-gold uppercase tracking-widest">Lexar EQ790 2 To</th>
                <th className="text-center py-3 px-4 font-mono text-xs text-muted uppercase tracking-widest">Crucial P310 2 To</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/1" : "bg-white/3"}>
                  <td className="py-3 px-4 text-muted font-inter">{row.label}</td>
                  <td className="py-3 px-4 text-center text-white font-mono text-xs">{row.lexar}</td>
                  <td className="py-3 px-4 text-center text-muted font-mono text-xs">{row.crucial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 3 — Quel SSD choisir */}
        <h2 className="text-3xl md:text-5xl font-bebas mb-6">POUR QUI RECOMMANDONS-NOUS QUOI ?</h2>
        <div className="space-y-6 mb-12">
          <div className="glass p-6 rounded-sm border border-trust/20 flex gap-4">
            <CheckCircle2 size={20} className="text-trust flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-bold mb-1">Lexar EQ790 2 To — Notre recommandation principale</p>
              <p className="text-muted text-sm font-inter leading-relaxed">
                Le meilleur rapport performances/prix du marché. 7 400 Mo/s en lecture, cache DRAM pour les gros fichiers,
                certifié PS5 par Sony. Pour 89€, vous obtenez 2 To de stockage ultra-rapide qui durera facilement 5 à 7 ans.
                Idéal pour les joueurs qui veulent le meilleur sans se ruiner.
              </p>
            </div>
          </div>
          <div className="glass p-6 rounded-sm border border-border/50 flex gap-4">
            <Zap size={20} className="text-cyan flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-bold mb-1">Crucial P310 2 To — La bonne alternative</p>
              <p className="text-muted text-sm font-inter leading-relaxed">
                Légèrement moins rapide (7 100 vs 7 400 Mo/s) mais souvent moins cher. Si vous trouvez le Crucial
                en promotion, la différence de vitesse ne se ressent pas dans le jeu. Même garantie 5 ans, même compatibilité PS5.
              </p>
            </div>
          </div>
          <div className="glass p-6 rounded-sm border border-border/50 flex gap-4">
            <AlertTriangle size={20} className="text-orange flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-bold mb-1">SSD 1 To — Si votre budget est serré</p>
              <p className="text-muted text-sm font-inter leading-relaxed">
                Le Lexar EQ790 1 To existe aussi à ~55€. Il vous donne 850 GB utilisables après formatage —
                assez pour GTA 6 + 3-4 autres jeux. En revanche, vous remplirez ce SSD rapidement.
                Si vous pouvez vous permettre 30€ de plus, prenez directement le 2 To.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quel SSD pour GTA 6 sur PS5 ?",
                  acceptedAnswer: { "@type": "Answer", text: "Le Lexar EQ790 2 To est notre recommandation principale. PCIe 4.0, 7 400 Mo/s, certifié PS5, 5 ans de garantie." },
                },
                {
                  "@type": "Question",
                  name: "Faut-il un dissipateur thermique pour le SSD PS5 ?",
                  acceptedAnswer: { "@type": "Answer", text: "La PS5 inclut un connecteur pour radiateur sur son slot M.2. Sony recommande d'en installer un (vendu séparément, environ 10€) pour les sessions longues comme GTA 6. Certains SSD comme le Lexar EQ790 en incluent un." },
                },
                {
                  "@type": "Question",
                  name: "GTA 6 charge-t-il vraiment plus vite avec un SSD externe ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui. Avec un SSD PCIe 4.0 de 7 400 Mo/s, les chargements dans GTA 6 sont environ 2 à 3 fois plus courts qu'avec un SSD interne de base. Sur un SSD PCIe 3.0 ou un disque dur USB, les chargements seraient plus longs car la PS5 ne supporte que les SSD M.2 dans son slot dédié." },
                },
              ],
            }),
          }}
        />

        <h2 className="text-3xl md:text-5xl font-bebas mb-6">QUESTIONS FRÉQUENTES</h2>
        <div className="space-y-4 mb-16">
          {[
            {
              q: "Quel SSD pour GTA 6 sur PS5 ?",
              a: "Le Lexar EQ790 2 To est notre recommandation principale. PCIe 4.0, 7 400 Mo/s, certifié PS5, 5 ans de garantie. Pour un budget plus serré, le Crucial P310 2 To offre des performances similaires à prix légèrement inférieur.",
            },
            {
              q: "Faut-il un dissipateur thermique pour le SSD PS5 ?",
              a: "Sony recommande d'en installer un pour les sessions longues. Certains SSD comme le Lexar EQ790 en incluent un. Si ce n'est pas le cas, comptez 8-12€ supplémentaires pour un dissipateur compatible M.2 2280.",
            },
            {
              q: "GTA 6 charge-t-il vraiment plus vite avec un SSD externe ?",
              a: "Oui. Avec un SSD PCIe 4.0 de 7 400 Mo/s, les temps de chargement dans GTA 6 sont 2 à 3 fois plus courts. Attention : la PS5 ne supporte que les SSD M.2 dans son slot interne dédié — pas les SSD USB externes pour stocker des jeux PS5.",
            },
            {
              q: "Quelle capacité SSD pour GTA 6 ?",
              a: "GTA 6 occupera environ 150 GB. Nous recommandons le 2 To pour avoir de l'espace pour vos autres jeux. Le 1 To est suffisant si vous ne gardez que 3-4 jeux simultanément.",
            },
          ].map((item, i) => (
            <div key={i} className="glass p-6 rounded-sm border border-border/50">
              <p className="font-bebas text-xl tracking-wide mb-2">{item.q}</p>
              <p className="text-muted text-sm font-inter leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="glass p-10 rounded-sm border border-gold/20 text-center">
          <h3 className="text-3xl font-bebas mb-4">NOTRE VERDICT FINAL</h3>
          <p className="text-muted font-inter mb-6 max-w-lg mx-auto">
            Pour 89€, le Lexar EQ790 2 To est l&apos;investissement SSD le plus rentable pour GTA 6.
            Vitesse maximale, espace confortable, garantie 5 ans.
          </p>
          <a
            href="https://amzn.to/3T2b8jZ"
            target="_blank"
            rel="nofollow sponsored"
            aria-label="Commander le Lexar EQ790 2 To sur Amazon"
            className="inline-flex items-center gap-2 bg-orange text-white font-bebas text-xl px-10 py-4 rounded-sm hover:bg-[#FF5712] shadow-[0_0_30px_rgba(255,69,0,0.4)] transition-all shimmer-btn"
          >
            🛒 COMMANDER LE LEXAR EQ790 — ~89€
          </a>
          <p className="text-[9px] text-muted/60 font-mono mt-4">
            En tant que Partenaire Amazon, je perçois une commission sans coût supplémentaire pour vous.
          </p>
        </div>

        {/* Internal links */}
        <div className="mt-16 flex flex-wrap gap-4 justify-center text-sm">
          <Link href="/guides/meilleure-tv-gta6" className="text-cyan hover:underline">Guide TV 4K pour GTA 6 →</Link>
          <Link href="/guides/edition-standard-vs-ultimate" className="text-cyan hover:underline">Standard vs Ultimate →</Link>
          <Link href="/setup" className="text-cyan hover:underline">Configurateur Setup →</Link>
          <Link href="/produits" className="text-cyan hover:underline">Tous les produits →</Link>
        </div>
      </div>
    </div>
  );
}
