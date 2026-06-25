"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS_FULL } from "@/data/products-full";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import NeonText from "@/components/ui/NeonText";
import { formatPrice } from "@/lib/utils";
import { Search } from "lucide-react";

// Categories available for filtering
const CATEGORIES = [
  { id: "all", label: "TOUT" },
  { id: "jeu", label: "JEUX" },
  { id: "console", label: "CONSOLES" },
  { id: "manette", label: "MANETTES" },
  { id: "casque", label: "CASQUES" },
  { id: "ssd", label: "SSD" },
  { id: "tv", label: "ÉCRANS & TV" },
  { id: "chaise-bureau", label: "MOBILIER" }
];

export default function CataloguePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS_FULL.filter((product) => {
      // Filter by category
      let categoryMatch = false;
      if (activeCategory === "all") {
        categoryMatch = true;
      } else if (activeCategory === "chaise-bureau") {
        categoryMatch = product.category === "chaise" || product.category === "bureau";
      } else if (activeCategory === "tv") {
        categoryMatch = product.category === "tv";
      } else {
        categoryMatch = product.category === activeCategory;
      }

      // Filter by search query
      const query = searchQuery.toLowerCase().trim();
      const searchMatch = query === "" || 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-40 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <NeonText className="text-6xl md:text-8xl mb-6">CATALOGUE PRODUITS</NeonText>
          <p className="text-muted text-lg max-w-2xl mx-auto font-inter">
            Retrouvez tous les articles testés, notés et recommandés par nos experts pour optimiser vos performances de jeu sur GTA 6.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 font-bebas text-lg border transition-all duration-300 rounded-sm ${
                  activeCategory === cat.id
                    ? "border-cyan bg-cyan/10 text-cyan shadow-[0_0_15px_rgba(0,255,204,0.1)]"
                    : "border-border text-muted hover:border-muted"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-surface border border-border text-foreground text-sm rounded-sm focus:outline-none focus:border-cyan font-inter transition-all"
            />
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="glass p-6 rounded-sm border border-white/5 bg-surface flex flex-col justify-between h-[480px] hover:border-cyan/30 transition-all duration-300 group relative"
              >
                {/* Badge floating */}
                {p.badge && (
                  <Badge type={p.badge} className="absolute top-4 right-4 z-10" />
                )}

                {/* Image */}
                <div className="h-44 mb-6 flex items-center justify-center relative overflow-hidden bg-background/30 rounded-sm p-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={200}
                    height={200}
                    unoptimized
                    className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow flex flex-col gap-2">
                  <span className="text-[10px] text-cyan font-mono uppercase tracking-wider block">
                    {p.category}
                  </span>
                  
                  <h2 className="text-xl font-semibold text-white line-clamp-2 hover:text-cyan transition-colors">
                    <Link href={`/produits/${p.id}`}>{p.name}</Link>
                  </h2>

                  <div className="flex items-center gap-2">
                    <StarRating rating={p.rating} />
                    <span className="text-[10px] text-muted font-mono">
                      ({p.reviewCount.toLocaleString()})
                    </span>
                  </div>

                  <p className="text-xs text-muted font-inter line-clamp-2 leading-relaxed mt-1">
                    {p.description}
                  </p>
                </div>

                {/* Card footer */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/40">
                  <div className="flex flex-col">
                    <span className="text-gold font-mono font-bold text-xl">
                      {formatPrice(p.price)}
                    </span>
                    {p.originalPrice && (
                      <span className="text-[10px] text-muted line-through">
                        {formatPrice(p.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <Link
                    href={`/produits/${p.id}`}
                    className="inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-sm font-bebas bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_15px_rgba(255,69,0,0.2)] transition-all duration-300"
                  >
                    VOIR LE TEST →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass rounded-sm border border-border">
            <p className="text-muted font-inter text-lg">Aucun produit ne correspond à votre recherche.</p>
            <button
              onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
              className="mt-4 text-cyan hover:underline font-mono text-sm uppercase"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
