"use client";

import { ShieldCheck, Truck, HardDrive, BookOpen } from "lucide-react";
import { useLaunchPhase } from "@/lib/launch";

export default function SocialProofTicker() {
  const phase = useLaunchPhase();
  const released = phase !== "prelaunch";

  const items = [
    {
      icon: Truck,
      color: "text-cyan",
      text: released ? "Disponible sur PS5 & Xbox Series X|S" : "Précommande livrée autour du 19/11",
    },
    {
      icon: HardDrive,
      color: "text-orange",
      text: "Prévoyez ~150 Go d'espace libre",
    },
    {
      icon: ShieldCheck,
      color: "text-white",
      text: released ? "Vendu & expédié par Amazon" : "Précommande annulable avant expédition",
    },
    {
      icon: BookOpen,
      color: "text-orange",
      text: "20+ guides matériel indépendants",
      desktopOnly: true,
    },
  ];

  return (
    <div className="bg-orange/10 border-y border-orange/20 py-3 overflow-hidden">
      <ul className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs font-mono uppercase tracking-widest text-orange/90">
        {items.map(({ icon: Icon, color, text, desktopOnly }) => (
          <li key={text} className={`${desktopOnly ? "hidden lg:flex" : "flex"} items-center gap-2`}>
            <Icon size={14} className={color} />
            <span className={color === "text-white" ? "text-white" : undefined}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
