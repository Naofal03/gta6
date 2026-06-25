import { cn } from "@/lib/utils";

interface BadgeProps {
  type: 'HOT' | 'MEILLEURE VENTE' | 'MEILLEURE VALEUR' | 'NOUVEAU';
  className?: string;
}

export default function Badge({ type, className }: BadgeProps) {
  const styles = {
    HOT: "bg-orange/20 text-orange border-orange shadow-[0_0_10px_rgba(255,69,0,0.2)]",
    'MEILLEURE VENTE': "bg-cyan/20 text-cyan border-cyan shadow-[0_0_10px_rgba(0,255,204,0.2)]",
    'MEILLEURE VALEUR': "bg-gold/20 text-gold border-gold shadow-[0_0_10px_rgba(255,215,0,0.2)]",
    NOUVEAU: "bg-white/20 text-white border-white",
  };

  return (
    <span className={cn(
      "px-2 py-0.5 rounded-sm border text-[8px] font-bold uppercase tracking-wider",
      styles[type],
      className
    )}>
      {type}
    </span>
  );
}
