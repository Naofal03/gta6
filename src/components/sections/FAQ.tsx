"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FAQ_DATA } from "@/data/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import Script from "next/script";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        className="py-24 px-6 bg-surface relative overflow-hidden"
        aria-labelledby="faq-heading"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {/* Background aurora */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan/4 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange/4 blur-[80px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-cyan text-xs font-mono tracking-[0.3em] uppercase font-bold mb-4">
              <HelpCircle size={12} />
              Toutes les réponses
            </span>
            <h2
              id="faq-heading"
              className="text-5xl md:text-7xl mb-4 underline decoration-cyan/20 underline-offset-8"
            >
              FOIRE AUX <span className="text-cyan">QUESTIONS</span>
            </h2>
            <p className="text-muted text-sm font-inter max-w-xl mx-auto">
              Les{" "}
              <strong className="text-white">{FAQ_DATA.length} questions</strong>{" "}
              les plus posées sur GTA 6, avec des réponses précises et vérifiées.
            </p>
          </motion.div>

          <div className="space-y-3" role="list">
            {FAQ_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                role="listitem"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <div
                  className={cn(
                    "glass rounded-sm border transition-all duration-300",
                    openIndex === index
                      ? "border-cyan/30 shadow-[0_0_20px_rgba(0,255,204,0.06)]"
                      : "border-border/50 hover:border-border"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-white/3 transition-colors group"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span
                        className={cn(
                          "text-xs font-mono font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                          openIndex === index
                            ? "bg-cyan text-black"
                            : "bg-border/60 text-muted group-hover:bg-cyan/20 group-hover:text-cyan"
                        )}
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-base md:text-xl font-bebas tracking-wide pr-4"
                        itemProp="name"
                      >
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "flex-shrink-0 transition-transform duration-300",
                        openIndex === index ? "rotate-180 text-cyan" : "text-muted"
                      )}
                      size={18}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div
                          className="px-5 md:px-6 pb-5 md:pb-6 pt-0 ml-10"
                          itemProp="text"
                        >
                          <div className="w-full h-px bg-gradient-to-r from-cyan/20 to-transparent mb-4" />
                          <p className="text-muted font-inter leading-relaxed text-sm md:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-muted text-sm font-inter mb-4">
              Vous avez d&apos;autres questions sur GTA 6 ?
            </p>
            <a
              href="/guides/edition-standard-vs-ultimate"
              className="inline-flex items-center gap-2 border border-cyan/30 text-cyan hover:bg-cyan/10 px-6 py-3 text-sm font-mono font-bold tracking-widest uppercase transition-all duration-300 rounded-sm"
            >
              Lire nos guides complets →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
