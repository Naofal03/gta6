"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 13, suffix: "ANS", label: "D'attente depuis GTA 5" },
  { value: 2, suffix: "", label: "Protagonistes (Lucia & Jason)" },
  { value: 2, suffix: "×", label: "Taille de la map vs GTA 5" },
  { value: 150, suffix: "GB", label: "Espace disque requis" },
];

export default function StatsCounter() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <CounterItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterItem({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (now: number) => {
        if (!startTime) startTime = now;
        const progress = Math.min((now - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-bebas text-cyan mb-2">
        {count}{suffix}
      </div>
      <p className="text-xs md:text-sm text-muted uppercase tracking-widest leading-relaxed">
        {label}
      </p>
    </div>
  );
}
