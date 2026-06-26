import Link from "next/link";

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
      { label: "Précommande GTA 6", href: "/precommande" },
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
      { label: "Où l'acheter au meilleur prix ?", href: "/guides/precommande-gta-6-meilleur-prix" },
      { label: "Quel SSD pour GTA 6 ?", href: "/guides/meilleur-ssd-gta6" },
      { label: "Meilleure TV 4K Gaming", href: "/guides/meilleure-tv-gta6" },
      { label: "Standard vs Ultimate", href: "/guides/edition-standard-vs-ultimate" },
    ],
  },
  {
    title: "Produits Phares",
    links: [
      { label: "GTA 6 PS5 — 79,99€", href: "/produits/gta-6-ps5", external: "https://amzn.to/4aiof6B" },
      { label: "GTA 6 Xbox — 79,99€", href: "/produits/gta-6-xbox-series", external: "https://amzn.to/4oIMhxq" },
      { label: "PS5 Pro", href: "/produits/ps5-pro", external: "https://amzn.to/4eJ7enk" },
      { label: "Lexar EQ790 2 To", href: "/produits/lexar-eq790-2to", external: "https://amzn.to/3T2b8jZ" },
      { label: "Logitech Astro A50", href: "/produits/logitech-astro-a50", external: "https://amzn.to/4aNkiac" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-border/50">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bebas tracking-tighter">
                GTA<span className="text-orange">6</span>HQ
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 font-inter max-w-xs">
              La référence française pour préparer votre expérience GTA 6.
              Guides, comparatifs et sélection produits pour Vice City le 19 novembre 2026.
            </p>
            {/* Countdown teaser */}
            <div className="glass p-4 rounded-sm border border-orange/20 inline-block">
              <p className="text-[10px] text-muted font-mono uppercase tracking-widest mb-1">Sortie le</p>
              <p className="text-orange font-bebas text-xl">19 NOVEMBRE 2026</p>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bebas tracking-[0.2em] uppercase text-white mb-6 pb-3 border-b border-border/50">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.external}
                        target="_blank"
                        rel="nofollow sponsored"
                        className="text-sm text-muted hover:text-cyan transition-colors font-inter"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-cyan transition-colors font-inter"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass p-8 rounded-sm border border-orange/20 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bebas tracking-wider text-white mb-1">
              🔥 PRÉCOMMANDES OUVERTES — PRIX GARANTI AMAZON
            </p>
            <p className="text-sm text-muted font-inter">
              Annulation gratuite avant livraison · Prix remboursé si baisse · Livraison jour J garantie
            </p>
          </div>
          <a
            href="https://amzn.to/4aiof6B"
            target="_blank"
            rel="nofollow sponsored"
            aria-label="Précommander GTA 6 sur Amazon"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-orange text-white font-bebas text-lg px-8 py-4 rounded-sm hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all shimmer-btn"
          >
            🎮 PRÉCOMMANDER GTA 6 →
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-muted/60 font-mono">
          <p className="text-center md:text-left leading-relaxed max-w-2xl">
            En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
            Les prix et disponibilités sont susceptibles de changer. GTA6HQ n&apos;est pas affilié à Rockstar Games ou Take-Two Interactive.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <span>© 2026 GTA6HQ</span>
            <Link href="/mentions-legales" className="hover:text-cyan transition-colors">Mentions Légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
