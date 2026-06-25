import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS_FULL } from "@/data/products-full";
import { CheckCircle2, Monitor, Zap, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Meilleure TV 4K pour GTA 6 — Comparatif Gaming 2026 | GTA6HQ",
  description:
    "Quelle TV choisir pour GTA 6 ? Notre comparatif des meilleures TV 4K gaming 2026 pour la PS5 : Xiaomi F Pro 75\", TCL Q6C. HDMI 2.1, 120Hz, HDR.",
  alternates: { canonical: "https://gta6hq.fr/guides/meilleure-tv-gta6" },
};

const tvProducts = PRODUCTS_FULL.filter((p) => p.category === "tv");

const CRITERIA = [
  { icon: Monitor, label: "Résolution", value: "4K (3840×2160)", why: "GTA 6 est natif 4K sur PS5 Pro, upscalé 4K sur PS5 standard. En dessous, vous perdez en détail." },
  { icon: Zap, label: "Taux de rafraîchissement", value: "120 Hz recommandé", why: "60 Hz minimum pour PS5, 120 Hz pour PS5 Pro en mode performance. Plus fluide = meilleure précision dans les poursuites." },
  { icon: Monitor, label: "HDMI 2.1", value: "Obligatoire pour 4K/120", why: "Sans HDMI 2.1, vous êtes bloqués à 4K/60fps ou 1080p/120fps. Les TV récentes l'intègrent toutes." },
  { icon: Star, label: "HDR", value: "HDR10+ ou Dolby Vision", why: "GTA 6 supporte le HDR natif. Les couchers de soleil sur Vice City, les néons, les explosions — tout est différent en HDR." },
];

export default function MeilleureTV() {
  return (
    <div className="pt-40 pb-24 bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gta6hq.fr" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://gta6hq.fr/guides" },
              { "@type": "ListItem", position: 3, name: "Meilleure TV GTA 6", item: "https://gta6hq.fr/guides/meilleure-tv-gta6" },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-xs text-muted mb-8 font-mono">
          <Link href="/" className="hover:text-cyan transition-colors">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/accessoires" className="hover:text-cyan transition-colors">Accessoires</Link>
          <span className="mx-2">›</span>
          <span className="text-white">Meilleure TV GTA 6</span>
        </nav>

        <div className="mb-16">
          <span className="text-cyan text-[10px] font-mono uppercase tracking-[0.3em] font-bold block mb-4">Guide Visuel</span>
          <h1 className="text-5xl md:text-7xl leading-none mb-6 font-bebas">
            MEILLEURE TV 4K<br />
            <span className="text-cyan">POUR GTA 6</span>
          </h1>
          <p className="text-muted text-lg font-inter leading-relaxed mb-6">
            GTA 6 tourne en <strong className="text-white">4K HDR 60fps</strong> sur PS5 Standard et{" "}
            <strong className="text-white">4K HDR 120fps</strong> sur PS5 Pro.
            Si votre TV ne supporte pas ces standards, vous passez à côté de ce que Rockstar
            a mis des années à optimiser.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted font-mono">
            <span>✓ Mis à jour : juin 2026</span>
            <span>✓ 2 TV comparées</span>
            <span>✓ Compatible PS5 & PS5 Pro</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bebas mb-6">LES CRITÈRES QUI COMPTENT POUR GTA 6</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {CRITERIA.map((c, i) => (
            <div key={i} className="glass p-5 rounded-sm border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-cyan/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <c.icon size={16} className="text-cyan" />
                </div>
                <div>
                  <p className="text-xs text-muted font-mono uppercase tracking-widest">{c.label}</p>
                  <p className="text-sm font-bold text-white">{c.value}</p>
                </div>
              </div>
              <p className="text-muted text-xs font-inter leading-relaxed">{c.why}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-5xl font-bebas mb-6">NOS TV RECOMMANDÉES</h2>
        <p className="text-muted font-inter leading-relaxed mb-8">
          Pour GTA 6, nous avons sélectionné deux TV qui offrent le meilleur rapport
          qualité/prix en 4K Gaming. Toutes deux supportent HDMI 2.1, le VRR (Variable Refresh Rate)
          pour éliminer les déchirures d&apos;image, et le HDR natif.
        </p>

        <div className="space-y-8 mb-12">
          {tvProducts.map((product, i) => (
            <div key={product.id} className={`glass p-8 rounded-sm border relative ${i === 0 ? "border-gold/40" : "border-border/50"}`}>
              {i === 0 && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gold text-black text-[9px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1">
                    <Star size={8} className="fill-black" /> MEILLEURE VALEUR
                  </span>
                </div>
              )}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-36 h-24 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={144}
                    height={96}
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
                      className="inline-flex items-center gap-2 bg-orange text-white font-bebas text-lg px-6 py-3 rounded-sm hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all shimmer-btn"
                    >
                      <Monitor size={16} /> VOIR SUR AMAZON →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-5xl font-bebas mb-6">POUR QUI RECOMMANDONS-NOUS QUOI ?</h2>
        <div className="space-y-4 mb-12">
          {[
            { icon: CheckCircle2, color: "text-trust", title: "Xiaomi TV F Pro 75\" — Pour une immersion maximale", body: "75 pouces, c'est le standard gaming premium en 2026. Si votre salon peut accueillir une TV de cette taille, c'est l'expérience GTA 6 la plus immersive possible sous les 600€. 4K HDR, HDMI 2.1, compatibilité PS5 Pro certifiée." },
            { icon: Star, color: "text-gold", title: "TCL 65Q6C — Le meilleur rapport qualité/prix", body: "Pour un salon plus compact ou un budget plus serré. La technologie QLED donne des couleurs vives idéales pour les néons de Vice City. 144Hz, VRR, HDMI 2.1. C'est la TV gaming par excellence sous 500€." },
            { icon: Zap, color: "text-cyan", title: "Pas nécessaire si...", body: "Vous avez déjà une TV 4K HDR HDMI 2.1 achetée en 2022 ou après. GTA 6 fonctionnera parfaitement dessus. N'investissez dans une nouvelle TV que si votre modèle actuel ne supporte pas le 4K ou le HDR." },
          ].map((item, i) => (
            <div key={i} className="glass p-6 rounded-sm border border-border/50 flex gap-4">
              <item.icon size={20} className={`${item.color} flex-shrink-0 mt-0.5`} />
              <div>
                <p className="text-white font-bold mb-1">{item.title}</p>
                <p className="text-muted text-sm font-inter leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass p-10 rounded-sm border border-cyan/20 text-center mb-16">
          <h3 className="text-3xl font-bebas mb-4">VOIR TOUTES LES TV GAMING</h3>
          <p className="text-muted font-inter mb-6">Consultez notre catalogue complet avec toutes les TV et écrans recommandés pour GTA 6.</p>
          <Link
            href="/accessoires"
            className="inline-flex items-center gap-2 bg-orange text-white font-bebas text-xl px-10 py-4 rounded-sm hover:bg-[#FF5712] shadow-[0_0_30px_rgba(255,69,0,0.4)] transition-all shimmer-btn"
          >
            VOIR TOUS LES PRODUITS →
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <Link href="/guides/meilleur-ssd-gta6" className="text-cyan hover:underline">Guide SSD pour GTA 6 →</Link>
          <Link href="/guides/edition-standard-vs-ultimate" className="text-cyan hover:underline">Standard vs Ultimate →</Link>
          <Link href="/setup" className="text-cyan hover:underline">Configurateur Setup →</Link>
        </div>
      </div>
    </div>
  );
}
