"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FAQ_DATA } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl mb-12 text-center underline decoration-cyan/30 underline-offset-8">
          FOIRE AUX <span className="text-cyan">QUESTIONS</span>
        </h2>
        
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div key={index} className="glass rounded-sm border border-border/50">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl md:text-2xl font-bebas tracking-wide">{item.question}</span>
                <ChevronDown 
                  className={cn("transition-transform duration-300", 
                  openIndex === index ? "rotate-180 text-cyan" : "text-muted")} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted font-inter leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
