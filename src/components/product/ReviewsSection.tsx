"use client";

import { ProductFull } from "@/data/products-full";
import StarRating from "../ui/StarRating";
import { MessageSquare, ThumbsUp, ThumbsDown, CheckCircle2, ShoppingCart } from "lucide-react";

interface ReviewsSectionProps {
  product: ProductFull;
}

const AVATAR_COLORS = [
  "bg-cyan/20 text-cyan border-cyan/30",
  "bg-orange/20 text-orange border-orange/30",
  "bg-gold/20 text-gold border-gold/30",
  "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "bg-green-500/20 text-green-400 border-green-500/30",
];

const REVIEW_DATES = ["il y a 2 jours", "il y a 5 jours", "il y a 1 semaine", "il y a 2 semaines", "il y a 3 semaines"];

export default function ReviewsSection({ product }: ReviewsSectionProps) {
  const { reviewDistribution, featuredReviews, reviewHighlights } = product;

  const globalScore = product.rating;
  const fiveStarPct = reviewDistribution.find(d => d.stars === 5)?.percentage ?? 0;

  return (
    <section id="reviews" className="py-16 px-6 bg-surface/30 border-y border-border scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bebas tracking-wider text-white uppercase">
              Ce que disent les acheteurs Amazon
            </h2>
            <p className="text-sm text-muted font-inter mt-1">
              {product.reviewCount.toLocaleString()} avis vérifiés · {fiveStarPct}% d&apos;avis 5 étoiles
            </p>
          </div>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-flex items-center gap-2 bg-orange text-white text-sm font-bebas px-5 py-2.5 rounded-sm hover:bg-[#FF5712] transition-colors shimmer-btn flex-shrink-0"
          >
            <ShoppingCart size={14} />
            COMMANDER SUR AMAZON →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">

          {/* Rating summary panel */}
          <div className="lg:col-span-3 glass p-6 rounded-sm border border-white/5 bg-background/50 flex flex-col gap-4 sticky top-24">
            <div className="text-center pb-4 border-b border-border">
              <span className="block text-6xl font-mono font-bold text-gold mb-1">{globalScore}</span>
              <div className="flex justify-center mb-2">
                <StarRating rating={globalScore} />
              </div>
              <span className="text-xs text-muted font-mono uppercase tracking-wider block">
                sur 5 · {product.reviewCount.toLocaleString()} avis
              </span>
            </div>

            <div className="flex flex-col gap-2.5 font-mono text-xs">
              {reviewDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-2">
                  <span className="text-muted w-14 text-right shrink-0">{dist.stars} ★</span>
                  <div className="flex-1 h-2.5 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${dist.percentage}%`,
                        backgroundColor: dist.stars >= 4 ? '#FFD700' : dist.stars === 3 ? '#FF8C00' : '#ef4444'
                      }}
                    />
                  </div>
                  <span className="text-muted w-8 text-left">{dist.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Verified signal */}
            <div className="flex items-center gap-2 pt-2 border-t border-border text-[11px] text-muted font-mono">
              <CheckCircle2 size={12} className="text-trust" />
              <span>Avis vérifiés Amazon</span>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9 flex flex-col gap-8">

            {/* Pros/Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-trust/5 border border-trust/15 rounded-sm">
                <div className="flex items-center gap-2 text-trust mb-4 font-bebas text-lg uppercase tracking-wider">
                  <ThumbsUp size={18} />
                  <span>Points forts</span>
                </div>
                <ul className="flex flex-col gap-2 font-inter text-sm text-foreground/80">
                  {reviewHighlights.positive.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-trust font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-red-500/5 border border-red-500/15 rounded-sm">
                <div className="flex items-center gap-2 text-red-400 mb-4 font-bebas text-lg uppercase tracking-wider">
                  <ThumbsDown size={18} />
                  <span>Points faibles</span>
                </div>
                <ul className="flex flex-col gap-2 font-inter text-sm text-foreground/80">
                  {reviewHighlights.negative.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Featured reviews */}
            <div>
              <h3 className="text-lg font-bebas text-cyan tracking-wider uppercase flex items-center gap-2 border-b border-border pb-3 mb-5">
                <MessageSquare size={16} />
                Témoignages détaillés
              </h3>

              <div className="flex flex-col gap-5">
                {featuredReviews.map((rev, idx) => {
                  const initials = rev.author.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
                  const colorClass = AVATAR_COLORS[idx % AVATAR_COLORS.length];
                  const date = REVIEW_DATES[idx % REVIEW_DATES.length];

                  return (
                    <div
                      key={idx}
                      className="p-5 glass border border-white/5 bg-background/20 rounded-sm font-inter group hover:border-white/10 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 text-sm font-bold ${colorClass}`}>
                          {initials}
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Header row */}
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-semibold text-white text-sm">{rev.author}</span>
                            <span className="text-[10px] text-muted font-mono">·</span>
                            <span className="text-[10px] text-muted uppercase tracking-wider font-mono">{rev.city}</span>
                            <span className="text-[10px] text-muted font-mono">·</span>
                            <span className="text-[10px] text-muted font-mono">{date}</span>
                          </div>

                          {/* Verified badge + stars */}
                          <div className="flex items-center gap-3 mb-3">
                            <StarRating rating={rev.rating} />
                            <span className="inline-flex items-center gap-1 text-[10px] text-trust font-mono bg-trust/10 border border-trust/20 px-1.5 py-0.5 rounded-sm">
                              <CheckCircle2 size={9} />
                              Achat vérifié
                            </span>
                          </div>

                          {/* Review text */}
                          <p className="text-foreground/80 text-sm leading-relaxed">
                            &ldquo;{rev.text}&rdquo;
                          </p>

                          {/* Helpfulness */}
                          <div className="flex items-center gap-3 mt-3 text-[11px] text-muted">
                            <span>Utile ?</span>
                            <button className="flex items-center gap-1 hover:text-white transition-colors">
                              <ThumbsUp size={11} />
                              <span>{Math.floor(Math.random() * 40 + 5)}</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-white transition-colors">
                              <ThumbsDown size={11} />
                              <span>{Math.floor(Math.random() * 5)}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social proof bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/3 border border-white/8 rounded-sm text-sm">
              <div className="flex items-center gap-3 text-muted">
                <span className="text-2xl font-mono font-bold text-gold">{globalScore}</span>
                <div>
                  <div className="flex items-center gap-1">
                    <StarRating rating={globalScore} />
                    <span className="text-xs font-mono text-muted ml-1">/ 5</span>
                  </div>
                  <p className="text-[11px] text-muted font-mono">{product.reviewCount.toLocaleString()} avis Amazon vérifiés</p>
                </div>
              </div>
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="nofollow sponsored"
                className="text-cyan text-sm font-mono tracking-wider hover:underline transition-all uppercase"
              >
                Lire tous les avis sur Amazon →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
