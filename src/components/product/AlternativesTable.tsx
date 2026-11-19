import { ProductFull } from "@/data/products-full";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

interface AlternativesTableProps {
  product: ProductFull;
}

export default function AlternativesTable({ product }: AlternativesTableProps) {
  const rowCurrent = {
    name: product.name,
    price: product.price,
    note: `${product.scores.global}/10`,
    reason: product.sellingPoint,
    choice: "✓ Notre choix",
    isCurrent: true,
    url: product.amazonUrl,
  };

  const alternatives = product.alternatives.map((alt) => ({
    name: alt.name,
    price: alt.price,
    note: "—",
    reason: alt.reason,
    choice: alt.price > product.price ? "Plus haut de gamme" : "Plus économique",
    isCurrent: false,
    url: alt.amazonUrl,
  }));

  const allRows = [rowCurrent, ...alternatives];

  return (
    <section id="alternatives" className="py-16 px-6 max-w-7xl mx-auto scroll-mt-24">
      <h2 className="text-3xl font-bebas tracking-wider mb-4 text-white uppercase text-center">
        Comparer avec les alternatives
      </h2>
      <p className="text-muted text-sm text-center mb-10 font-inter max-w-2xl mx-auto">
        Les alternatives que nous recommandons selon votre budget. Prix indicatifs : vérifiez le prix du jour sur Amazon.
      </p>

      <div className="border border-border/80 rounded-sm overflow-hidden bg-surface mb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-inter text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-background text-xs font-mono text-muted uppercase tracking-widest border-b border-border">
                <th className="py-4 px-6">Produit</th>
                <th className="py-4 px-6">Prix indicatif</th>
                <th className="py-4 px-6">Note GTA6HQ</th>
                <th className="py-4 px-6">Pourquoi le choisir</th>
                <th className="py-4 px-6">Recommandation</th>
              </tr>
            </thead>
            <tbody>
              {allRows.map((row, i) => (
                <tr 
                  key={i}
                  className={`border-b border-border/40 last:border-0 transition-colors ${
                    row.isCurrent 
                      ? "bg-cyan/5 text-white font-medium border-y-2 border-cyan/40" 
                      : "hover:bg-white/5"
                  }`}
                >
                  <td className="py-4 px-6">
                    <a 
                      href={row.url} 
                      target="_blank" 
                      rel="nofollow sponsored noopener" 
                      className={`hover:underline hover:text-cyan transition-colors ${row.isCurrent ? "text-cyan font-bold" : "text-foreground/90"}`}
                    >
                      {row.name}
                    </a>
                  </td>
                  <td className="py-4 px-6 font-mono font-bold text-gold">{formatPrice(row.price)}</td>
                  <td className="py-4 px-6 text-muted">{row.note}</td>
                  <td className="py-4 px-6 text-muted text-xs max-w-xs">{row.reason}</td>
                  <td className="py-4 px-6">
                    <span 
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        row.isCurrent 
                          ? "bg-cyan/15 text-cyan border border-cyan/30" 
                          : "bg-white/5 text-muted border border-white/10"
                      }`}
                    >
                      {row.choice}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="inline-flex items-center justify-center rounded-sm px-10 py-4 text-xl font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300 shimmer-btn"
        >
          <ShoppingCart size={20} className="mr-2" />
          Commander {product.name} sur Amazon →
        </a>
      </div>
    </section>
  );
}
