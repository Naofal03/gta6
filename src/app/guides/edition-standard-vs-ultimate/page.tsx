import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle, Trophy, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "GTA 6 Edition Standard vs Ultimate — Laquelle Choisir ? | GTA6HQ",
  description:
    "GTA 6 Standard 79,99€ ou Ultimate 99,99€ ? Notre analyse complète des bonus, du rapport qualité/prix et de notre recommandation finale pour chaque profil de joueur.",
  alternates: { canonical: "https://gta6hq.fr/guides/edition-standard-vs-ultimate" },
};

const STANDARD = [
  "Le jeu GTA 6 complet (histoire + online)",
  "Pack Vintage Vice City (bonus précommande)",
  "Véhicule historique + tenue exclusive",
  "Accès à toutes les mises à jour gratuites",
];

const ULTIMATE = [
  "Tout le contenu Standard +",
  "Pack de démarrage Vice City (5 000 000 GTA$)",
  "Garage de luxe Leonida (5 emplacements)",
  "5 véhicules premium exclusifs",
  "Pack d'armes Vice City (4 armes exclusives)",
  "Tenues et livrées supplémentaires exclusives",
];

export default function EditionComparatorPage() {
  return (
    <div className="pt-40 pb-24 bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quelle édition de GTA 6 choisir — Standard ou Ultimate ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'édition Ultimate à 99,99€ vaut le surcoût de 20€ si vous comptez jouer au mode Online. Les 5M$ GTA Online vous économisent des heures de grind. Si vous jouez uniquement en solo, l'édition Standard à 79,99€ est largement suffisante.",
                },
              },
              {
                "@type": "Question",
                name: "Les bonus GTA 6 Ultimate sont-ils disponibles en mode solo ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Une partie des bonus (tenues, véhicules) sont disponibles dès le mode histoire. Les GTA$ et certains items sont liés à GTA Online.",
                },
              },
              {
                "@type": "Question",
                name: "Le prix de GTA 6 Ultimate peut-il baisser après la sortie ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Historiquement, les éditions Gold/Ultimate de Rockstar ne baissent pas avant 12 à 18 mois après la sortie. Précommander maintenant garantit le prix de lancement.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-xs text-muted mb-8 font-mono">
          <Link href="/" className="hover:text-cyan transition-colors">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/precommande" className="hover:text-cyan transition-colors">Précommande</Link>
          <span className="mx-2">›</span>
          <span className="text-white">Standard vs Ultimate</span>
        </nav>

        <div className="mb-16">
          <span className="text-gold text-[10px] font-mono uppercase tracking-[0.3em] font-bold block mb-4">Analyse Éditions</span>
          <h1 className="text-5xl md:text-7xl leading-none mb-6 font-bebas">
            GTA 6 STANDARD<br />
            <span className="text-gold">VS ULTIMATE</span>
          </h1>
          <p className="text-muted text-lg font-inter leading-relaxed mb-6">
            20€ de différence. Ça vaut vraiment le coup ? Voici notre analyse honnête des deux éditions
            — pour que vous fassiez le bon choix en fonction de votre profil de joueur.
          </p>
        </div>

        {/* Quick answer */}
        <div className="glass p-8 rounded-sm border border-gold/30 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={20} className="text-gold" />
              <p className="text-gold font-bold text-lg uppercase tracking-widest font-mono">Notre réponse en 30 secondes</p>
            </div>
            <p className="text-white font-inter text-base leading-relaxed mb-4">
              <strong>Prenez l&apos;Ultimate si vous jouez à GTA Online.</strong> Pour seulement 20€ de plus,
              vous obtenez 5 millions de GTA$ (valeur réelle : environ 25€ au détail),
              un garage de luxe, 5 véhicules exclusifs et un pack d&apos;armes.
              La valeur totale des bonus dépasse 45€.
            </p>
            <p className="text-muted font-inter text-base leading-relaxed">
              <strong className="text-white">Restez sur la Standard si</strong> vous jouez uniquement en mode histoire
              ou si vous êtes très strict sur votre budget.
              Le jeu complet en lui-même est dans les deux éditions.
            </p>
          </div>
        </div>

        {/* Comparison */}
        <h2 className="text-3xl md:text-5xl font-bebas mb-8">CONTENU COMPARÉ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Standard */}
          <div className="glass p-8 rounded-sm border border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bebas text-white">STANDARD</h3>
              <span className="text-gold font-mono text-2xl font-bold">79,99€</span>
            </div>
            <ul className="space-y-4 mb-8">
              {STANDARD.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 size={16} className="text-trust flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-muted/50">
                <XCircle size={16} className="text-border flex-shrink-0 mt-0.5" />
                Pas de GTA$ supplémentaires
              </li>
              <li className="flex items-start gap-3 text-sm text-muted/50">
                <XCircle size={16} className="text-border flex-shrink-0 mt-0.5" />
                Pas de garage de luxe
              </li>
              <li className="flex items-start gap-3 text-sm text-muted/50">
                <XCircle size={16} className="text-border flex-shrink-0 mt-0.5" />
                Pas de véhicules premium exclusifs
              </li>
            </ul>
            <a
              href="https://amzn.to/4aiof6B"
              target="_blank"
              rel="nofollow sponsored"
              aria-label="Précommander GTA 6 Standard sur Amazon"
              className="w-full inline-flex items-center justify-center rounded-sm px-6 py-4 text-lg font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all shimmer-btn"
            >
              PRÉCOMMANDER — 79,99€
            </a>
          </div>

          {/* Ultimate */}
          <div className="glass p-8 rounded-sm border-2 border-gold/40 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gold text-black text-[9px] font-bold px-4 py-1.5 uppercase tracking-widest flex items-center gap-1">
                <Trophy size={9} /> RECOMMANDÉ
              </span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bebas text-gold">ULTIMATE</h3>
              <div className="text-right">
                <span className="text-gold font-mono text-2xl font-bold">99,99€</span>
                <p className="text-[9px] text-muted font-mono">+20€</p>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {ULTIMATE.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${i === 0 ? "text-trust" : "text-gold"}`} />
                  <span className={i === 0 ? "text-muted" : "text-white"}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gold/10 border border-gold/20 rounded-sm p-3 mb-4">
              <p className="text-xs text-gold font-inter">
                💡 Valeur estimée des bonus : <strong>~45€</strong> pour <strong>seulement 20€ de plus</strong>
              </p>
            </div>
            <a
              href="https://amzn.to/4aiof6B"
              target="_blank"
              rel="nofollow sponsored"
              aria-label="Précommander GTA 6 Ultimate sur Amazon"
              className="w-full inline-flex items-center justify-center rounded-sm px-6 py-4 text-lg font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.5)] transition-all shimmer-btn"
            >
              PRÉCOMMANDER — 99,99€
            </a>
          </div>
        </div>

        {/* Detailed analysis */}
        <h2 className="text-3xl md:text-5xl font-bebas mb-6">ANALYSE DÉTAILLÉE</h2>
        <div className="space-y-8 mb-16 font-inter">
          <div>
            <h3 className="text-2xl font-bebas text-cyan mb-3">LES 5 MILLIONS DE GTA$ — LA VRAIE VALEUR</h3>
            <p className="text-muted leading-relaxed mb-4">
              Dans GTA Online, accumuler 5 millions de dollars par le jeu prend entre 15 et 20 heures de missions répétitives.
              Si votre temps libre vaut plus que ça, les 5M$ du pack Ultimate vous font économiser ce temps — et cette expérience.
              Sachant que Shark Cards (la monnaie premium GTA Online) coûtent environ 5€ pour 500 000 GTA$, les 5M$ du pack représentent une valeur de 50€.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bebas text-cyan mb-3">LES VÉHICULES EXCLUSIFS — POUR COMBIEN DE TEMPS ?</h3>
            <p className="text-muted leading-relaxed mb-4">
              Rockstar a une pratique bien établie : les véhicules &quot;exclusifs&quot; des éditions premium finissent souvent
              disponibles dans le casino ou les DLC 6 à 12 mois après la sortie, mais à prix élevé.
              Si vous voulez ces voitures dès le jour J sans rien dépenser de plus, l&apos;Ultimate est la seule option.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bebas text-cyan mb-3">MODE HISTOIRE UNIQUEMENT — STANDARD SUFFIT</h3>
            <p className="text-muted leading-relaxed">
              Si vous n&apos;avez jamais joué à GTA Online et que vous prévoyez de faire uniquement la campagne solo,
              l&apos;édition Standard à 79,99€ vous donnera exactement la même expérience narrative que l&apos;Ultimate.
              Les bonus GTA$ sont surtout pertinents en Online. Ne payez pas 20€ pour des avantages que vous n&apos;utiliserez pas.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl md:text-5xl font-bebas mb-6">QUESTIONS FRÉQUENTES</h2>
        <div className="space-y-4 mb-16">
          {[
            {
              q: "Peut-on acheter les bonus Ultimate séparément après ?",
              a: "Les GTA$ peuvent être achetés via les Shark Cards. Les véhicules et tenues exclusifs peuvent éventuellement apparaître en jeu via des événements. Mais si vous avez déjà l'Ultimate, c'est gratuit.",
            },
            {
              q: "Les deux éditions ont-elles la même qualité graphique ?",
              a: "Oui, absolument. Les graphismes 4K/60fps sont identiques dans les deux éditions. La différence est uniquement cosmétique et dans les bonus GTA Online.",
            },
            {
              q: "L'édition Ultimate baissera-t-elle de prix ?",
              a: "Probablement pas avant 12-18 mois. Rockstar et Take-Two sont connus pour maintenir les prix hauts sur leurs franchises premium. Précommander maintenant est le moyen le plus sûr d'obtenir le meilleur prix.",
            },
          ].map((item, i) => (
            <div key={i} className="glass p-6 rounded-sm border border-border/50">
              <p className="font-bebas text-xl tracking-wide mb-2">{item.q}</p>
              <p className="text-muted text-sm font-inter leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass p-8 rounded-sm border border-border/50 text-center">
            <p className="text-sm text-muted font-mono uppercase tracking-widest mb-3">Joueur solo</p>
            <p className="text-2xl font-bebas mb-4">ÉDITION STANDARD</p>
            <p className="text-gold font-mono text-3xl font-bold mb-6">79,99€</p>
            <a href="https://amzn.to/4aiof6B" target="_blank" rel="nofollow sponsored"
              aria-label="Commander GTA 6 Standard"
              className="w-full inline-flex items-center justify-center rounded-sm px-6 py-4 text-lg font-bebas bg-orange text-white hover:bg-[#FF5712] transition-all shimmer-btn">
              COMMANDER →
            </a>
          </div>
          <div className="glass p-8 rounded-sm border-2 border-gold/40 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gold text-black text-[9px] font-bold px-3 py-1 uppercase tracking-widest">RECOMMANDÉ</span>
            </div>
            <p className="text-sm text-gold font-mono uppercase tracking-widest mb-3">Joueur Online</p>
            <p className="text-2xl font-bebas mb-4">ÉDITION ULTIMATE</p>
            <p className="text-gold font-mono text-3xl font-bold mb-6">99,99€</p>
            <a href="https://amzn.to/4aiof6B" target="_blank" rel="nofollow sponsored"
              aria-label="Commander GTA 6 Ultimate"
              className="w-full inline-flex items-center justify-center rounded-sm px-6 py-4 text-lg font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.5)] transition-all shimmer-btn">
              COMMANDER →
            </a>
          </div>
        </div>

        <p className="text-[9px] text-muted/60 font-mono text-center mb-8">
          En tant que Partenaire Amazon, je perçois une commission sans coût supplémentaire pour vous.
        </p>

        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <Link href="/guides/meilleur-ssd-gta6" className="text-cyan hover:underline">Guide SSD →</Link>
          <Link href="/guides/meilleure-tv-gta6" className="text-cyan hover:underline">Guide TV →</Link>
          <Link href="/precommande" className="text-cyan hover:underline">Guide Précommande →</Link>
          <Link href="/produits" className="text-cyan hover:underline">Tous les produits →</Link>
        </div>
      </div>
    </div>
  );
}
