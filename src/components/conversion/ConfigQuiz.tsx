"use client";

import { useState } from "react";
import { CheckCircle2, RefreshCw, HelpCircle, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    description: string;
    score: 'essential' | 'balanced' | 'ultimate' | 'ps5';
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Sur quel support prévoyez-vous de jouer à GTA 6 ?",
    options: [
      { label: "Sur PC (sur mon écran 1080p ou 1440p)", description: "Je veux le meilleur rapport qualité/prix sur mon bureau", score: "balanced" },
      { label: "Sur PC 4K Ultra avec Ray Tracing à fond", description: "Je veux zéro compromis graphique", score: "ultimate" },
      { label: "Sur PC portable ou configuration budget", description: "Je veux pouvoir jouer en 1080p 60fps sans me ruiner", score: "essential" },
      { label: "Sur Console (PS5 / PS5 Pro / Xbox)", description: "Je veux la meilleure expérience sur mon téléviseur 4K", score: "ps5" },
    ],
  },
  {
    id: 2,
    question: "Quel est votre budget global pour votre matériel / mise à niveau ?",
    options: [
      { label: "Moins de 500€", description: "Accessoires, SSD ou console d'occasion", score: "ps5" },
      { label: "Entre 800€ et 1 200€", description: "Configuration PC milieu de gamme équilibrée", score: "essential" },
      { label: "Entre 1 300€ et 2 000€", description: "Config PC Gaming 1440p 120fps haut de gamme", score: "balanced" },
      { label: "Plus de 2 500€", description: "Monstre de puissance 4K RT sans limite", score: "ultimate" },
    ],
  },
  {
    id: 3,
    question: "Quelle est votre priorité absolue en jeu ?",
    options: [
      { label: "60 FPS fluides et stables en 1080p", description: "La réactivité avant tout", score: "essential" },
      { label: "Le Ray Tracing et la 4K Ultra à 60+ FPS", description: "L'immersion visuelle Vice City au maximum", score: "ultimate" },
      { label: "Le sweet spot : 1440p à 120 FPS", description: "Excellente définition et ultra fluidité", score: "balanced" },
      { label: "Le confort du salon avec HDR & 4K 120Hz", description: "Plug and play devant le canapé", score: "ps5" },
    ],
  },
  {
    id: 4,
    question: "Avez-vous déjà un SSD NVMe rapide dédié ?",
    options: [
      { label: "Non, j'ai encore un vieux HDD ou SSD lent", description: "Besoin d'un SSD NVMe Gen4 recommandé pour GTA 6", score: "essential" },
      { label: "Oui, un SSD NVMe 1 To rapide", description: "C'est un bon début mais attention aux 150 Go de GTA 6", score: "balanced" },
      { label: "Oui, un SSD Gen4 de 2 To à 7000+ Mo/s", description: "Prêt pour les chargements instantanés", score: "ultimate" },
      { label: "J'ai besoin d'étendre la mémoire de ma PS5", description: "Recherche un SSD avec dissipateur thermique PS5", score: "ps5" },
    ],
  },
];

const RESULTS = {
  essential: {
    title: "Configuration PC #1 — L'Essentielle 1080p (900€)",
    badge: "Meilleur Prix 1080p",
    desc: "Votre profil correspond parfaitement à une configuration 1080p 60 FPS basée sur une NVIDIA RTX 4060 et un processeur Ryzen 5 5600X. Idéal pour profiter de Vice City sans vous ruiner.",
    recommendations: [
      { name: "Carte Graphique NVIDIA RTX 4060", url: "https://www.amazon.fr/dp/B0C8JZ71T8?tag=638nao0229707-21" },
      { name: "SSD NVMe Gen4 Lexar 2 To (7400 Mo/s)", url: "https://www.amazon.fr/dp/B0C89PXG7G?tag=638nao0229707-21" },
    ],
    guideUrl: "/guides/config-pc-gta6#config-1-lessentielle-1080p-60fps-900",
  },
  balanced: {
    title: "Configuration PC #2 — Le Sweet Spot 1440p 120FPS (1 500€)",
    badge: "Recommandé GTA6HQ",
    desc: "C'est la configuration optimale recommandée par nos experts ! Une combinaison Ryzen 7 7800X3D et RTX 5070 Ti vous garantit une fluidité absolue en 1440p avec du Ray Tracing léger.",
    recommendations: [
      { name: "Processeur AMD Ryzen 7 7800X3D", url: "https://www.amazon.fr/dp/B0BTZE368F?tag=638nao0229707-21" },
      { name: "NVIDIA GeForce RTX 5070 Ti", url: "https://www.amazon.fr/dp/B0D5D3H795?tag=638nao0229707-21" },
      { name: "SSD Samsung 990 Pro 2 To", url: "https://www.amazon.fr/dp/B0BARG44B7?tag=638nao0229707-21" },
    ],
    guideUrl: "/guides/config-pc-gta6#config-2-le-sweet-spot-1440p-120fps-1-500",
  },
  ultimate: {
    title: "Configuration PC #3 — L'Ultime 4K Ray Tracing (2 500€+)",
    badge: "Monstre de Puissance 4K",
    desc: "Pour vous, seul le summum compte ! Une RTX 5080 combinée au processeur ultime et à 32 Go DDR5 6400MHz pour vivre l'expérience GTA 6 la plus somptueuse de la planète.",
    recommendations: [
      { name: "NVIDIA GeForce RTX 5080", url: "https://www.amazon.fr/dp/B0D5D3H795?tag=638nao0229707-21" },
      { name: "Écran Samsung Odyssey OLED G8 4K", url: "https://www.amazon.fr/dp/B09V7S35CH?tag=638nao0229707-21" },
    ],
    guideUrl: "/guides/config-pc-gta6#config-3-lultime-4k-60fps-ray-tracing-2-500",
  },
  ps5: {
    title: "Setup Console PS5 Pro & TV 4K OLED",
    badge: "Expérience Console Ultime",
    desc: "Vous tirerez le meilleur parti de GTA 6 en combinant la puissance de la PS5 Pro avec une manette DualSense Edge et une télévision 4K HDMI 2.1 120Hz.",
    recommendations: [
      { name: "PlayStation 5 Pro", url: "https://www.amazon.fr/dp/B0DGPRH17W?tag=638nao0229707-21" },
      { name: "Manette DualSense Edge", url: "https://www.amazon.fr/dp/B0BPMMQ7M6?tag=638nao0229707-21" },
      { name: "SSD WD_BLACK SN850X 2 To pour PS5", url: "https://www.amazon.fr/dp/B0B7CMZ3QH?tag=638nao0229707-21" },
    ],
    guideUrl: "/guides/gta6-4k-120fps-ps5",
  },
};

export default function ConfigQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    essential: 0,
    balanced: 0,
    ultimate: 0,
    ps5: 0,
  });
  const [resultKey, setResultKey] = useState<keyof typeof RESULTS | null>(null);

  const handleSelectOption = (scoreKey: 'essential' | 'balanced' | 'ultimate' | 'ps5') => {
    const updatedScores = { ...scores, [scoreKey]: scores[scoreKey] + 1 };
    setScores(updatedScores);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate highest score
      let highestKey: keyof typeof RESULTS = 'balanced';
      let maxScore = -1;
      (Object.keys(updatedScores) as Array<keyof typeof RESULTS>).forEach((key) => {
        if (updatedScores[key] > maxScore) {
          maxScore = updatedScores[key];
          highestKey = key;
        }
      });
      setResultKey(highestKey);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({ essential: 0, balanced: 0, ultimate: 0, ps5: 0 });
    setResultKey(null);
  };

  return (
    <div className="glass p-8 rounded-sm border-2 border-cyan/40 my-12 relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      
      {!resultKey ? (
        <div>
          {/* Header */}
          <div className="flex items-center justify-between gap-4 mb-6 border-b border-border/30 pb-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-cyan" size={20} />
              <h3 className="text-2xl font-bebas text-white tracking-wide uppercase">
                Quiz Interactif : Quelle config GTA 6 vous faut-il ?
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-sm border border-cyan/30">
              Question {currentStep + 1} sur {QUESTIONS.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-black/40 h-1.5 rounded-full mb-8 overflow-hidden">
            <div
              className="bg-cyan h-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Current Question */}
          <h4 className="text-xl font-inter font-bold text-white mb-6">
            {QUESTIONS[currentStep].question}
          </h4>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUESTIONS[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.score)}
                className="text-left glass p-5 rounded-sm border border-border/40 hover:border-cyan hover:bg-cyan/10 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-white font-bebas text-lg block mb-1 group-hover:text-cyan transition-colors uppercase">
                    {opt.label}
                  </span>
                  <span className="text-muted text-xs font-inter leading-relaxed block">
                    {opt.description}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-cyan/70 mt-4 group-hover:text-cyan">
                  Choisir cette option <ArrowRight size={12} />
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Result Screen */
        <div className="text-center py-4">
          <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange text-orange text-xs font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-4">
            <Trophy size={14} /> {RESULTS[resultKey].badge}
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bebas text-white uppercase tracking-wider mb-4">
            {RESULTS[resultKey].title}
          </h3>
          
          <p className="text-muted font-inter text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {RESULTS[resultKey].desc}
          </p>

          {/* Recommended Hardware Links */}
          <div className="glass p-6 rounded-sm border border-border/50 max-w-xl mx-auto mb-8 text-left">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-cyan mb-4">
              Hardware recommandé pour votre profil :
            </p>
            <ul className="space-y-3">
              {RESULTS[resultKey].recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-center justify-between gap-4 border-b border-border/20 pb-2 last:border-0 last:pb-0">
                  <span className="text-white font-inter text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-trust" /> {rec.name}
                  </span>
                  <a
                    href={rec.url}
                    target="_blank"
                    rel="nofollow sponsored"
                    className="text-xs font-bebas bg-orange text-white px-4 py-1.5 rounded-sm hover:bg-[#FF5712] transition-colors shimmer-btn"
                  >
                    VÉRIFIER LE PRIX →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={RESULTS[resultKey].guideUrl}
              className="bg-cyan text-black font-bebas text-lg px-8 py-3.5 rounded-sm hover:bg-cyan/80 transition-colors uppercase"
            >
              Lire le guide complet correspondant →
            </Link>
            <button
              onClick={handleReset}
              className="glass text-muted hover:text-white font-mono text-xs px-6 py-3.5 rounded-sm border border-border/40 hover:border-white/40 transition-colors flex items-center gap-2"
            >
              <RefreshCw size={14} /> Refaire le Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
