"use client";

import { ProductFull } from "@/data/products-full";

interface LongformContentProps {
  product: ProductFull;
}

export default function LongformContent({ product }: LongformContentProps) {
  const { longform } = product;

  return (
    <section className="py-16 px-6 bg-surface/30 border-y border-border">
      <div className="max-w-3xl mx-auto prose prose-invert font-inter leading-relaxed text-muted">
        {/* Section 1 */}
        <h2 className="text-3xl font-bebas tracking-wider text-white uppercase mb-6 border-b border-border/60 pb-2">
          {longform.h2_1}
        </h2>
        <div className="text-muted text-base mb-12 space-y-6">
          {longform.content_1.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Section 2 */}
        <h2 className="text-3xl font-bebas tracking-wider text-white uppercase mb-6 border-b border-border/60 pb-2">
          {longform.h2_2}
        </h2>
        <div className="text-muted text-base mb-12 space-y-6">
          {longform.content_2.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Section 3 */}
        <h2 className="text-3xl font-bebas tracking-wider text-white uppercase mb-6 border-b border-border/60 pb-2">
          {longform.h2_3}
        </h2>
        <div className="text-muted text-base space-y-6">
          {longform.content_3.split('\n\n').map((para, i) => {
            const isPositive = para.startsWith('✓') || para.startsWith('Recommandé si');
            const isNegative = para.startsWith('✗') || para.startsWith('Pas nécessaire si');
            
            return (
              <div 
                key={i} 
                className={`p-5 rounded-sm border ${
                  isPositive ? "bg-cyan/5 border-cyan/20 text-foreground" :
                  isNegative ? "bg-white/5 border-white/10 text-muted" :
                  "text-muted"
                }`}
              >
                {para}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
