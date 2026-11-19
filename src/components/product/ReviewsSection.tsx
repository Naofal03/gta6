import { ProductFull } from "@/data/products-full";
import { ThumbsUp, ThumbsDown, ExternalLink, ShoppingCart } from "lucide-react";

interface ReviewsSectionProps {
  product: ProductFull;
}

/**
 * Points forts / points faibles selon notre analyse éditoriale,
 * + renvoi vers les avis clients réels sur Amazon.
 * Aucun avis, note ou nombre d'avis n'est inventé ici.
 */
export default function ReviewsSection({ product }: ReviewsSectionProps) {
  const { reviewHighlights } = product;
  const reviewsUrl = product.amazonUrl.includes("amazon.fr/dp/")
    ? product.amazonUrl.replace(/\/dp\/([A-Z0-9]+)/, "/product-reviews/$1")
    : product.amazonUrl;

  return (
    <section id="reviews" className="py-16 px-6 bg-surface/30 border-y border-border scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bebas tracking-wider text-white uppercase">
              Points forts &amp; points faibles
            </h2>
            <p className="text-sm text-muted font-inter mt-1 max-w-2xl">
              Notre synthèse à partir des fiches techniques, des tests de la presse spécialisée et des retours
              d&apos;acheteurs. Pour les avis clients complets et à jour, consultez directement Amazon.
            </p>
          </div>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center gap-2 bg-orange text-white text-sm font-bebas px-5 py-2.5 rounded-sm hover:bg-[#FF5712] transition-colors shimmer-btn flex-shrink-0"
          >
            <ShoppingCart size={14} />
            VOIR LE PRIX SUR AMAZON →
          </a>
        </div>

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

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-white/3 border border-white/8 rounded-sm text-sm">
          <p className="text-muted font-inter text-sm">
            Vous hésitez encore ? Les avis vérifiés des acheteurs sont disponibles sur la fiche Amazon.
          </p>
          <a
            href={reviewsUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center gap-1.5 text-cyan text-sm font-mono tracking-wider hover:underline uppercase"
          >
            Lire les avis clients sur Amazon <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
