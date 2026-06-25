import { ShieldCheck, Truck, RotateCcw, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TrustBadges({ className }: { className?: string }) {
  const badges = [
    { icon: <ShieldCheck size={16} />, text: "Prix Garanti" },
    { icon: <Truck size={16} />, text: "Livraison J+1" },
    { icon: <RotateCcw size={16} />, text: "Retours Faciles" },
    { icon: <Clock size={16} />, text: "Stock Amazon" },
  ];

  return (
    <div className={cn("flex flex-wrap gap-4 justify-center py-4", className)}>
      {badges.map((badge, i) => (
        <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
          <span className="text-trust">{badge.icon}</span>
          {badge.text}
        </div>
      ))}
    </div>
  );
}
