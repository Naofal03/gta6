"use client";

import { ProductFull } from "@/data/products-full";

interface SpecsTableProps {
  product: ProductFull;
}

export default function SpecsTable({ product }: SpecsTableProps) {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bebas tracking-wider mb-6 text-white uppercase text-center md:text-left">
        Fiche technique complète
      </h2>
      
      <div className="border border-border/80 rounded-sm overflow-hidden bg-surface mb-6">
        <table className="w-full text-left font-inter text-sm border-collapse">
          <thead>
            <tr className="bg-background text-xs font-mono text-muted uppercase tracking-widest border-b border-border">
              <th className="py-4 px-6">Spécification</th>
              <th className="py-4 px-6">Valeur</th>
            </tr>
          </thead>
          <tbody>
            {product.specs.map((spec, i) => (
              <tr 
                key={i} 
                className="border-b border-border/40 last:border-0 hover:bg-white/5 transition-colors"
                style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "rgba(255,255,255,0.03)" }}
              >
                <td className="py-3.5 px-6 font-semibold text-foreground/90">{spec.label}</td>
                <td className="py-3.5 px-6 text-muted">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {product.gta6Note && (
        <div className="flex items-start gap-3 p-4 bg-orange/5 border border-orange/20 rounded-sm text-sm text-orange/90 font-inter">
          <span>{product.gta6Note}</span>
        </div>
      )}
    </section>
  );
}
