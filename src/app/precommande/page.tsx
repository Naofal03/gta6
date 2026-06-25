"use client";

import { useTheme } from "next-themes";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";
import { CheckCircle2, ShoppingCart, HelpCircle } from "lucide-react";
import NeonText from "@/components/ui/NeonText";

export default function PrecommandePage() {
  const games = PRODUCTS.filter(p => p.category === 'jeu');

  return (
    <div className="pt-40 pb-24 px-6 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-cyan text-xs font-mono tracking-[0.3em] font-bold uppercase mb-4 block">
            OFFICIEL - ROCKSTAR GAMES
          </span>
          <NeonText className="text-6xl md:text-9xl mb-8">PRÉCOMMANDE GTA VI</NeonText>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Réservez votre exemplaire dès maintenant et profitez du pack bonus <span className="text-white font-bold">Vintage Vice City</span> ainsi que du prix garanti par Amazon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {games.map(game => (
            <div key={game.id} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange to-cyan rounded-sm blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-surface p-8 rounded-sm">
                   <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                      <img src={game.image} alt={game.name} className="w-48 h-auto object-contain" />
                      <div className="flex-grow">
                         <h2 className="text-3xl md:text-4xl mb-4">{game.name}</h2>
                         <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-muted">
                               <CheckCircle2 className="text-trust" size={16} />
                               Edition Physique (Code de téléchargement)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted">
                               <CheckCircle2 className="text-trust" size={16} />
                               Pack Vintage Vice City Inclus
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted">
                               <CheckCircle2 className="text-trust" size={16} />
                               Prix Garanti au plus bas
                            </li>
                         </ul>
                         <div className="flex items-center justify-between">
                            <span className="text-4xl font-bebas text-gold">79,99€</span>
                            <Button variant="amazon" size="lg" shimmer onClick={() => window.open(game.amazonUrl, '_blank')}>
                               <ShoppingCart className="mr-2" size={20} />
                               RESERVER
                            </Button>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="glass p-12 rounded-sm border border-border/50">
           <h3 className="text-4xl mb-12 text-center uppercase">Quelle édition choisir ?</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                 <h4 className="text-2xl text-cyan mb-4">EDITION STANDARD</h4>
                 <ul className="space-y-4 text-muted border-t border-border pt-6">
                    <li>✓ Le Jeu Grand Theft Auto VI complet</li>
                    <li>✓ Bonus de précommande : Pack Vintage Vice City</li>
                    <li>✓ Véhicule historique et tenues exclusives</li>
                 </ul>
              </div>
              <div className="relative">
                 <div className="absolute -top-6 -right-6 bg-gold text-black text-[10px] font-bold px-3 py-1 rounded-full animate-bounce">
                    RECOMMANDÉ
                 </div>
                 <h4 className="text-2xl text-gold mb-4">EDITION ULTIMATE</h4>
                 <ul className="space-y-4 text-muted border-t border-border pt-6">
                    <li>✓ Tout le contenu de l&apos;édition Standard</li>
                    <li>✓ Pack de démarrage Vice City (5M$ in-game)</li>
                    <li>✓ Garage de luxe et 5 véhicules premium</li>
                    <li>✓ Armes exclusives et livrées uniques</li>
                 </ul>
              </div>
           </div>
        </div>

        {/* FAQs for Preorder */}
        <div className="mt-24 text-center">
           <div className="inline-flex items-center gap-2 text-muted mb-8 group cursor-help">
              <HelpCircle size={18} className="group-hover:text-cyan" />
              <span>Besoin d&apos;aide avant de commander ? <Link href="/faq" className="text-white hover:underline">Consultez notre FAQ</Link></span>
           </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
