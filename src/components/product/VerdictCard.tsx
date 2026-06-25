"use client";

import { ProductFull } from "@/data/products-full";

interface VerdictCardProps {
  product: ProductFull;
}

export default function VerdictCard({ product }: VerdictCardProps) {
  const { scores } = product;

  return (
    <section className="py-12 px-6 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Side: Verdict text */}
        <div className="md:col-span-7 border-l-4 border-cyan pl-6 py-2">
          <h2 className="text-2xl font-bebas tracking-wider text-white mb-4 uppercase">
            Notre verdict en 30 secondes
          </h2>
          <p className="text-muted leading-relaxed font-inter text-base">
            {product.verdict}
          </p>
        </div>

        {/* Right Side: Scores */}
        <div className="md:col-span-5 glass p-6 rounded-sm border border-white/5 bg-background/50 flex flex-col gap-4">
          <h3 className="text-lg font-bebas tracking-wider text-cyan uppercase mb-2">
            Évaluation technique
          </h3>

          <div className="flex flex-col gap-3 font-mono text-xs">
            {/* Design & Build */}
            <div>
              <div className="flex justify-between text-muted mb-1">
                <span>CONCEPTION & ERGONOMIE</span>
                <span className="text-white font-bold">{scores.design}/10</span>
              </div>
              <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan transition-all duration-1000" 
                  style={{ width: `${scores.design * 10}%` }}
                />
              </div>
            </div>

            {/* Performances */}
            <div>
              <div className="flex justify-between text-muted mb-1">
                <span>PERFORMANCES GLOBALES</span>
                <span className="text-white font-bold">{scores.performances}/10</span>
              </div>
              <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan transition-all duration-1000" 
                  style={{ width: `${scores.performances * 10}%` }}
                />
              </div>
            </div>

            {/* Rapport qualité/prix */}
            <div>
              <div className="flex justify-between text-muted mb-1">
                <span>RAPPORT QUALITÉ / PRIX</span>
                <span className="text-white font-bold">{scores.rapport_qualite_prix}/10</span>
              </div>
              <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan transition-all duration-1000" 
                  style={{ width: `${scores.rapport_qualite_prix * 10}%` }}
                />
              </div>
            </div>

            {/* Compatibilité GTA 6 */}
            <div>
              <div className="flex justify-between text-muted mb-1 flex-wrap">
                <span>OPTIMISATION GTA 6 (MOTEUR RAGE)</span>
                <span className="text-orange font-bold">{scores.compatibilite_gta6}/10</span>
              </div>
              <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange transition-all duration-1000" 
                  style={{ width: `${scores.compatibilite_gta6 * 10}%` }}
                />
              </div>
            </div>
          </div>

          {/* Global Score Ring */}
          <div className="flex items-center gap-4 border-t border-border/50 pt-4 mt-2">
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-cyan/20 bg-cyan/5">
              <span className="text-xl font-mono font-bold text-cyan">
                {scores.global}
              </span>
            </div>
            <div>
              <span className="block text-xs font-mono text-muted uppercase">Score Global</span>
              <span className="text-sm font-inter text-foreground font-semibold">
                {scores.global >= 9 ? "Hautement Recommandé" : "Recommandation Solide"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
