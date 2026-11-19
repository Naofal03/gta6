import { Info, Truck, RotateCcw } from "lucide-react";

interface ProductUrgencyProps {
  price: number;
  productName: string;
}

/**
 * Encart d'informations d'achat — uniquement des éléments vrais et vérifiables.
 * (Remplace l'ancien bloc « X personnes regardent / plus que N en stock »,
 * qui reposait sur des chiffres simulés.)
 */
export default function ProductUrgency({ price }: ProductUrgencyProps) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-background border border-border/60 rounded-sm text-xs font-inter">
      <div className="flex items-start gap-2 text-muted">
        <Info size={12} className="text-cyan flex-shrink-0 mt-0.5" />
        <span>
          Prix indicatif constaté : <strong className="text-white">{price.toFixed(2).replace(".", ",")} €</strong>. Les prix
          Amazon changent souvent — le prix final est celui affiché sur Amazon au moment de la commande.
        </span>
      </div>
      <div className="flex items-start gap-2 text-muted">
        <Truck size={12} className="text-trust flex-shrink-0 mt-0.5" />
        <span>Délais de livraison et éligibilité Prime affichés sur la fiche Amazon.</span>
      </div>
      <div className="flex items-start gap-2 text-muted">
        <RotateCcw size={12} className="text-trust flex-shrink-0 mt-0.5" />
        <span>Produits vendus par Amazon : retours sous 30 jours selon les conditions Amazon.</span>
      </div>
    </div>
  );
}
