import Link from "next/link";
import LaunchLabel from "@/components/ui/LaunchLabel";
import { ExternalLink, ArrowRight, Shield, Star, Zap } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const NAV_COLUMNS: FooterColumn[] = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Acheter GTA 6", href: "/precommande" },
      { label: "Setup Builder", href: "/setup" },
      { label: "Quiz Setup", href: "/quiz" },
      { label: "Catalogue produits", href: "/produits" },
      { label: "Tous les accessoires", href: "/accessoires" },
      { label: "Histoire de la saga", href: "/histoire-gta" },
    ],
  },
  {
    title: "Guides Experts",
    links: [
      { label: "Meilleur prix GTA 6", href: "/guides/precommande-gta-6-meilleur-prix" },
      { label: "Meilleur SSD PS5 pour GTA 6", href: "/guides/meilleur-ssd-gta6" },
      { label: "Meilleure TV 4K 120fps", href: "/guides/meilleure-tv-gta6" },
      { label: "Standard vs Ultimate : notre analyse", href: "/guides/edition-standard-vs-ultimate" },
      { label: "Taille téléchargement GTA 6", href: "/guides/gta6-taille-telechargement" },
      { label: "GTA 6 en 4K 120fps sur PS5", href: "/guides/gta6-4k-120fps-ps5" },
    ],
  },
  {
    title: "Produits Phares",
    links: [
      { label: "GTA 6 PS5 — 79,99€", href: "/produits/gta-6-ps5", external: "https://amzn.to/4aiof6B" },
      { label: "GTA 6 Xbox Series — 79,99€", href: "/produits/gta-6-xbox-series", external: "https://amzn.to/4oIMhxq" },
      { label: "PS5 Pro", href: "/produits/ps5-pro", external: "https://amzn.to/4eJ7enk" },
      { label: "Lexar NM790 2 To SSD", href: "/produits/lexar-nm790-2to", external: "https://amzn.to/3T2b8jZ" },
      { label: "Logitech Astro A50", href: "/produits/logitech-astro-a50", external: "https://amzn.to/4aNkiac" },
    ],
  },
];

const TRUST_BADGES = [
  { icon: Shield, label: "Guides indépendants" },
  { icon: Star, label: "Sélection vérifiée" },
  { icon: Zap, label: "Prix actualisés" },
];

export default function Footer() {
  return (
    <footer
      className="bg-surface border-t border-border pt-20 pb-10 px-6 relative overflow-hidden"
      role="contentinfo"
      aria-label="Pied de page GTA6HQ"
    >
      {/* Subtle aurora */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/2 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-border/50">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="GTA6HQ — Accueil">
              <span className="text-3xl font-bebas tracking-tighter">
                GTA<span className="text-orange">6</span>HQ
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 font-inter max-w-xs">
              La référence française indépendante pour préparer votre expérience{" "}
              <strong className="text-white">GTA 6</strong>.
              Guides experts, comparatifs et sélection produits pour Vice City.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col gap-2 mb-6">
              {TRUST_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center gap-2 text-xs text-muted font-inter">
                    <Icon size={12} className="text-cyan flex-shrink-0" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Launch info */}
            <div className="glass p-4 rounded-sm border border-orange/20 inline-block">
              <p className="text-[10px] text-muted font-mono uppercase tracking-widest mb-1">
                GTA 6 — Sorti le
              </p>
              <p className="text-orange font-bebas text-xl">19 NOVEMBRE 2026</p>
              <p className="text-[10px] text-muted font-mono mt-0.5">PS5 · Xbox Series X|S</p>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <nav key={col.title} aria-labelledby={`footer-col-${col.title.toLowerCase().replace(/\s/g, '-')}`}>
              <h4
                id={`footer-col-${col.title.toLowerCase().replace(/\s/g, '-')}`}
                className="text-sm font-bebas tracking-[0.2em] uppercase text-white mb-6 pb-3 border-b border-border/50 flex items-center gap-2"
              >
                {col.title}
              </h4>
              <ul className="space-y-3" role="list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.external}
                        target="_blank"
                        rel="nofollow sponsored noopener"
                        className="text-sm text-muted hover:text-cyan transition-colors font-inter flex items-center gap-1.5 group"
                        aria-label={`${link.label} — Lien affilié Amazon`}
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                          {link.label}
                        </span>
                        <ExternalLink size={10} className="opacity-40 group-hover:opacity-80 flex-shrink-0" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-cyan transition-colors font-inter flex items-center gap-1.5 group"
                      >
                        <ArrowRight
                          size={10}
                          className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 text-cyan"
                        />
                        <span>{link.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass p-6 md:p-8 rounded-sm border border-orange/20 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange/5 to-transparent pointer-events-none" />
          <div className="relative">
            <p className="text-lg font-bebas tracking-wider text-white mb-1">
              <LaunchLabel
                pre="🔥 PRÉCOMMANDES OUVERTES — SORTIE LE 19 NOVEMBRE"
                post="🎮 GTA VI EST DISPONIBLE SUR PS5 & XBOX SERIES"
              />
            </p>
            <p className="text-sm text-muted font-inter">
              Édition Standard : 79,99 € prix public conseillé · Vendu et expédié par Amazon ·{" "}
              <span className="text-muted/60 text-xs">Lien affilié</span>
            </p>
          </div>
          <a
            href="https://amzn.to/4aiof6B"
            target="_blank"
            rel="nofollow sponsored noopener"
            aria-label="Acheter GTA 6 sur Amazon — Lien affilié"
            className="relative flex-shrink-0 inline-flex items-center gap-2 bg-orange text-white font-bebas text-lg px-8 py-4 rounded-sm hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] hover:shadow-[0_0_40px_rgba(255,69,0,0.7)] transition-all shimmer-btn"
          >
            🎮 <LaunchLabel pre="PRÉCOMMANDER GTA 6 →" post="ACHETER GTA 6 →" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-muted/60 font-mono">
          <p className="text-center md:text-left leading-relaxed max-w-2xl">
            <strong className="text-muted/80">Mention affilié :</strong> En tant que Partenaire Amazon, GTA6HQ réalise un bénéfice sur les achats remplissant les conditions requises.
            Les prix et disponibilités sont susceptibles de changer sans préavis.
            GTA6HQ est un site indépendant, non affilié à Rockstar Games, Take-Two Interactive ou Sony Interactive Entertainment.
          </p>
          <div className="flex flex-wrap gap-6 justify-center flex-shrink-0">
            <span>© 2026 GTA6HQ</span>
            <Link href="/mentions-legales" className="hover:text-cyan transition-colors">
              Mentions Légales
            </Link>
            <Link href="/privacy" className="hover:text-cyan transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
