"use client";

import { useState } from "react";
import { CheckSquare, Square, Trophy, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";

const CHECKLIST = [
  { id: 1, text: "Console PS5 ou Xbox Series X", points: 20 },
  { id: 2, text: "SSD avec 150GB libres minimum", points: 15 },
  { id: 3, text: "Compte Amazon actif", points: 10 },
  { id: 4, text: "Connexion Fibre Optique", points: 15 },
  { id: 5, text: "Chaise gaming ergonomique", points: 10 },
  { id: 6, text: "GTA 6 Précommandé", points: 30 },
];

export default function ReadinessChecker() {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const toggle = (id: number) => {
    setCheckedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const score = CHECKLIST.reduce((acc, current) => {
    return checkedIds.includes(current.id) ? acc + current.points : acc;
  }, 0);

  const getStatus = () => {
    if (score >= 90) return { text: "PRÊT POUR L'HISTOIRE", sub: "Tu es une légende de Vice City.", color: "text-trust" };
    if (score >= 60) return { text: "PRESQE PRÊT", sub: "Il te manque quelques détails.", color: "text-gold" };
    return { text: "PAS PRÊT", sub: "Ton setup a besoin d'amour.", color: "text-orange" };
  };

  const status = getStatus();

  return (
    <section className="py-24 px-6 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl mb-6">TON SETUP EST-IL <br /><span className="text-cyan">PRÊT POUR GTA 6 ?</span></h2>
          <p className="text-muted mb-8 max-w-lg">
            Cochez les éléments que vous possédez déjà pour calculer votre score de préparation. Ne laissez rien au hasard pour le 19 novembre 2026.
          </p>
          
          <div className="space-y-4">
            {CHECKLIST.map((item) => (
              <div 
                key={item.id}
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex items-center gap-4 p-4 border cursor-pointer transition-all duration-300",
                  checkedIds.includes(item.id) ? "border-trust bg-trust/5 text-trust" : "border-border hover:border-muted text-muted"
                )}
              >
                {checkedIds.includes(item.id) ? <CheckSquare size={20} /> : <Square size={20} />}
                <span className="font-bebas text-xl md:text-2xl">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
             {/* Progress Circle (SVG) */}
             <svg className="w-full h-full -rotate-90">
               <circle cx="50%" cy="50%" r="48%" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="none" />
               <circle 
                 cx="50%" cy="50%" r="48%" 
                 stroke="currentColor" 
                 strokeWidth="4" 
                 fill="none" 
                 strokeDasharray="300"
                 strokeDashoffset={300 - (300 * score / 100)}
                 className={cn("transition-all duration-1000", status.color)}
               />
             </svg>
             <div className="absolute flex flex-col items-center">
                <span className={cn("text-6xl md:text-8xl font-bebas", status.color)}>{score}%</span>
                <span className="text-xs uppercase tracking-widest text-muted">Prêt</span>
             </div>
          </div>

          <div className="text-center mt-8">
             <h3 className={cn("text-2xl md:text-4xl mb-2", status.color)}>{status.text}</h3>
             <p className="text-muted mb-8">{status.sub}</p>
             <Button variant="amazon" shimmer onClick={() => window.open('https://amzn.to/4aiof6B', '_blank')}>
                S'ÉQUIPER MAINTENANT →
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
