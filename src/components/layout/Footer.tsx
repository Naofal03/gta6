import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
             <Link href="/">
               <span className="text-3xl font-bebas tracking-tighter">
                 GTA<span className="text-orange">6</span>HQ
               </span>
             </Link>
             <p className="text-muted text-sm mt-6 leading-relaxed max-w-xs">
               La plateforme de référence française pour tout savoir sur Grand Theft Auto VI. Guides, actus, et comparatifs hardware.
             </p>
          </div>

          <div>
            <h4 className="text-lg mb-6 uppercase tracking-widest text-white">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/" className="hover:text-cyan transition-colors">Accueil</Link></li>
              <li><Link href="/precommande" className="hover:text-cyan transition-colors">Guide Précommande</Link></li>
              <li><Link href="/setup" className="hover:text-cyan transition-colors">Setup Builder</Link></li>
              <li><Link href="/accessoires" className="hover:text-cyan transition-colors">Tous les accessoires</Link></li>
              <li><Link href="/histoire-gta" className="hover:text-cyan transition-colors">Histoire de la saga</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6 uppercase tracking-widest text-white">Guides Populaires</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/guides/meilleur-ssd-gta6" className="hover:text-cyan transition-colors">Quel SSD pour GTA 6 ?</Link></li>
              <li><Link href="/guides/meilleure-tv-gta6" className="hover:text-cyan transition-colors">Meilleure TV 4K Gaming</Link></li>
              <li><Link href="/guides/edition-standard-vs-ultimate" className="hover:text-cyan transition-colors">Standard vs Ultimate</Link></li>
              <li><Link href="/faq" className="hover:text-cyan transition-colors">Foire Aux Questions</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg mb-6 uppercase tracking-widest text-white">Suivez GTA 6</h4>
             <div className="flex gap-4">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cyan/20 cursor-pointer transition-all">
                  <span className="text-xs font-bold">TW</span>
                </div>
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cyan/20 cursor-pointer transition-all">
                  <span className="text-xs font-bold">YT</span>
                </div>
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cyan/20 cursor-pointer transition-all">
                  <span className="text-xs font-bold">IG</span>
                </div>
             </div>
             <p className="text-[10px] text-muted mt-8 uppercase font-mono">
               Propulsé par la passion Gaming
             </p>
          </div>
        </div>

        <div className="pt-12 border-t border-border/50 text-center">
           <p className="text-[10px] text-muted leading-relaxed max-w-4xl mx-auto uppercase tracking-widest mb-8">
             En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises. Les prix et disponibilités sont indiqués à titre informatif et sont susceptibles de changer.
           </p>
           <div className="flex flex-wrap justify-center gap-6 text-[10px] text-muted/60">
             <span>© 2026 GTA6HQ - Tous droits réservés</span>
             <Link href="/mentions-legales" className="underline">Mentions Légales</Link>
             <Link href="/cookies" className="underline">Politique de Cookies</Link>
             <span>Site créé par la communauté pour la communauté</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
