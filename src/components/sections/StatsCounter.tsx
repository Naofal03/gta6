"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Map, HardDrive, Gamepad2 } from "lucide-react";

const STATS = [
  {
    value: 13,
    suffix: " ANS",
    label: "D'attente depuis GTA V",
    sublabel: "2013 → 2026",
    icon: Clock,
    color: "#FF4500",
    description: "La plus longue attente de l'histoire de Rockstar Games.",
  },
  {
    value: 2,
    suffix: "",
    label: "Protagonistes jouables",
    sublabel: "Lucia & Jason",
    icon: Users,
    color: "#00FFCC",
    description: "Premier duo de protagonistes dans la saga principale GTA.",
  },
  {
    value: 2,
    suffix: "×",
    label: "Taille de la map",
    sublabel: "vs GTA V Los Santos",
    icon: Map,
    color: "#FFD700",
    description: "Leonida (Floride fictive) est la plus grande map de la saga.",
  },
  {
    value: 150,
    suffix: " GB",
    label: "Espace disque requis",
    sublabel: "SSD recommandé",
    icon: HardDrive,
    color: "#00FFCC",
    description: "Un SSD M.2 NVMe est indispensable pour des temps de chargement optimaux.",
  },
  {
    value: 60,
    suffix: " FPS",
    label: "Cible en 4K native",
    sublabel: "PS5 & Xbox Series X",
    icon: Gamepad2,
    color: "#FF4500",
    description: "GTA 6 vise le 4K 60fps en mode qualité sur les consoles nouvelle génération.",
  },
];

export default function StatsCounter() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" aria-label="Chiffres clés GTA 6">
      {/* Gradient separator top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange/4 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan/4 blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-muted">
            GTA VI — Chiffres officiels
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <CounterItem key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Gradient separator bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
    </section>
  );
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;
  description: string;
  delay?: number;
}

function CounterItem({ value, suffix, label, sublabel, icon: Icon, color, description, delay = 0 }: StatItem) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 1800;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group glass rounded-sm border border-border/50 hover:border-transparent p-5 md:p-6 text-center relative overflow-hidden transition-all duration-500 cursor-default"
      style={{
        "--hover-color": color,
      } as React.CSSProperties}
      title={description}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}08, transparent 70%)` }}
      />

      {/* Icon */}
      <div
        className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 mx-auto transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
        }}
      >
        <Icon size={18} style={{ color }} />
      </div>

      {/* Count */}
      <div
        className="text-4xl md:text-5xl lg:text-6xl font-bebas leading-none mb-1 transition-all duration-300"
        style={{ color }}
        aria-label={`${value}${suffix}`}
      >
        {count}{suffix}
      </div>

      {/* Label */}
      <p className="text-xs md:text-sm text-white uppercase tracking-widest leading-tight font-bebas mb-1">
        {label}
      </p>

      {/* Sublabel */}
      <p className="text-[10px] text-muted font-mono tracking-wider">
        {sublabel}
      </p>
    </motion.div>
  );
}
