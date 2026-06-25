"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { PRODUCTS } from "@/data/products";
import ProductCard from "../ui/ProductCard";

const QUESTIONS = [
  {
    id: 'platform',
    text: "Sur quelle console allez-vous jouer ?",
    options: [
      { label: "PS5 / PS5 Pro", value: "ps5" },
      { label: "Xbox Series X / S", value: "xbox" },
      { label: "Pas encore de console", value: "none" },
    ]
  },
  {
    id: 'budget',
    text: "Quel est votre budget global d'équipement ?",
    options: [
      { label: "En dessous de 500€", value: "low" },
      { label: "Environ 1000€", value: "medium" },
      { label: "2000€ et plus", value: "high" },
    ]
  },
  {
    id: 'priority',
    text: "Quelle est votre priorité numéro 1 ?",
    options: [
      { label: "Graphismes (TV/Moniteur)", value: "visuals" },
      { label: "Confort (Chaise/Bureau)", value: "comfort" },
      { label: "Performance (SSD/Refroidissement)", value: "performance" },
    ]
  }
];

export default function SetupQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  const recommendedProducts = PRODUCTS.slice(0, 3); // Simplified logic for demo

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-sm border-cyan/20">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <span className="text-cyan text-xs font-mono uppercase tracking-widest mb-4 inline-block">
                Question {step + 1} sur {QUESTIONS.length}
              </span>
              <h2 className="text-3xl md:text-5xl mb-12">{QUESTIONS[step].text}</h2>
              <div className="grid gap-4">
                {QUESTIONS[step].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(QUESTIONS[step].id, option.value)}
                    className="w-full py-6 px-8 border border-border bg-surface hover:border-cyan hover:bg-cyan/5 transition-all duration-300 text-xl font-bebas"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl mb-4 text-gradient">TON SETUP RECOMMANDÉ</h2>
              <p className="text-muted mb-12">Basé sur vos réponses, voici la sélection parfaite pour votre aventure Vice City.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {recommendedProducts.map(p => (
                   <div key={p.id} className="scale-90">
                     <ProductCard product={p} />
                   </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" variant="amazon" shimmer onClick={() => window.open('https://amzn.to/4aiof6B', '_blank')}>
                   TOUT VOIR SUR AMAZON
                </Button>
                <Button size="lg" variant="outline" onClick={() => { setStep(0); setIsFinished(false); setAnswers({}); }}>
                   RECOMMENCER LE QUIZ
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
