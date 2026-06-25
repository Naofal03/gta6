"use client";

import { ProductFull } from "@/data/products-full";
import StarRating from "../ui/StarRating";
import { MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";

interface ReviewsSectionProps {
  product: ProductFull;
}

export default function ReviewsSection({ product }: ReviewsSectionProps) {
  const { reviewDistribution, featuredReviews, reviewHighlights } = product;

  return (
    <section id="reviews" className="py-16 px-6 bg-surface/30 border-y border-border scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bebas tracking-wider mb-12 text-white uppercase text-center">
          Ce que disent les acheteurs Amazon
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          {/* Distribution Column */}
          <div className="lg:col-span-4 glass p-6 rounded-sm border border-white/5 bg-background/50 flex flex-col gap-4">
            <div className="text-center">
              <span className="block text-5xl font-mono font-bold text-gold mb-2">
                {product.rating}
              </span>
              <div className="flex justify-center mb-1">
                <StarRating rating={product.rating} />
              </div>
              <span className="text-xs text-muted font-mono uppercase tracking-wider block">
                {product.reviewCount.toLocaleString()} avis vérifiés
              </span>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs mt-4">
              {reviewDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-3">
                  <span className="text-muted w-12 text-right">{dist.stars} étoiles</span>
                  <div className="flex-1 h-3 bg-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold rounded-full" 
                      style={{ width: `${dist.percentage}%` }}
                    />
                  </div>
                  <span className="text-muted w-8 text-left">{dist.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Positive Highlights */}
              <div className="p-5 bg-trust/5 border border-trust/10 rounded-sm">
                <div className="flex items-center gap-2 text-trust mb-4 font-bebas text-lg uppercase tracking-wider">
                  <ThumbsUp size={18} />
                  <span>Points positifs les plus cités</span>
                </div>
                <ul className="flex flex-col gap-2 font-inter text-sm text-muted">
                  {reviewHighlights.positive.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-trust font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Negative Highlights */}
              <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-sm">
                <div className="flex items-center gap-2 text-red-400 mb-4 font-bebas text-lg uppercase tracking-wider">
                  <ThumbsDown size={18} />
                  <span>Points négatifs les plus cités</span>
                </div>
                <ul className="flex flex-col gap-2 font-inter text-sm text-muted">
                  {reviewHighlights.negative.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Featured Reviews */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bebas text-cyan tracking-wider uppercase flex items-center gap-2 border-b border-border pb-2">
                <MessageSquare size={16} />
                Avis détaillés de la communauté
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredReviews.map((rev, idx) => (
                  <div key={idx} className="p-5 glass border border-white/5 bg-background/25 rounded-sm flex flex-col gap-3 font-inter">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="block font-semibold text-white text-sm">
                          {rev.author}
                        </span>
                        <span className="text-[10px] text-muted uppercase tracking-wider font-mono">
                          {rev.city}
                        </span>
                      </div>
                      <StarRating rating={rev.rating} />
                    </div>
                    <p className="text-muted text-sm leading-relaxed italic">
                      &quot;{rev.text}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-border pt-8">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored"
            className="text-cyan text-sm font-mono tracking-wider hover:underline transition-all uppercase"
          >
            Lire tous les avis clients vérifiés sur Amazon →
          </a>
        </div>
      </div>
    </section>
  );
}
