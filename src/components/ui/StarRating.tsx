import { Star, StarHalf } from "lucide-react";

export default function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={10} className="fill-gold text-gold" />
      ))}
      {hasHalfStar && <StarHalf size={10} className="fill-gold text-gold" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={i} size={10} className="text-muted/30" />
      ))}
    </div>
  );
}
