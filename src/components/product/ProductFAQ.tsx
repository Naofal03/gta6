"use client";

import { useState } from "react";
import { ProductFull } from "@/data/products-full";
import { ChevronDown, HelpCircle } from "lucide-react";

interface ProductFAQProps {
  product: ProductFull;
}

export default function ProductFAQ({ product }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      {/* Schema.org FAQPage injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <div className="flex items-center gap-3 justify-center mb-10">
        <HelpCircle className="text-cyan animate-pulse" size={28} />
        <h2 className="text-3xl font-bebas tracking-wider text-white uppercase">
          Questions fréquemment posées
        </h2>
      </div>

      <div className="flex flex-col gap-4 font-inter text-sm">
        {product.faq.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div 
              key={idx}
              className="border border-border/80 rounded-sm overflow-hidden bg-surface/50 transition-all duration-300"
            >
              {/* Question Trigger */}
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full py-4 px-6 flex justify-between items-center text-left font-semibold text-white hover:text-cyan transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown 
                  size={16} 
                  className={`text-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan" : ""}`}
                />
              </button>

              {/* Answer Content */}
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-[300px] border-t border-border/30" : "max-h-0"
                }`}
              >
                <p className="py-4 px-6 text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
