"use client";

import { useEffect, useState } from "react";
import { Eye, Package, Clock, TrendingUp } from "lucide-react";

interface ProductUrgencyProps {
  price: number;
  productName: string;
}

export default function ProductUrgency({ price, productName }: ProductUrgencyProps) {
  const [viewers, setViewers] = useState(0);
  const [soldToday, setSoldToday] = useState(0);
  const [stock, setStock] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    // Seed realistic-feeling numbers based on price
    const baseViewers = price > 500 ? 14 : price > 200 ? 22 : 38;
    const baseSold = price > 500 ? 7 : price > 200 ? 18 : 34;
    const baseStock = price > 500 ? 3 : price > 100 ? 5 : 8;

    setViewers(baseViewers + Math.floor(Math.random() * 8));
    setSoldToday(baseSold + Math.floor(Math.random() * 6));
    setStock(baseStock);

    // Delivery countdown: next day delivery cutoff at 23:59
    const now = new Date();
    const cutoff = new Date(now);
    cutoff.setHours(23, 59, 0, 0);
    const diff = Math.max(0, cutoff.getTime() - now.getTime());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    setTimeLeft({ h, m, s });

    // Fluctuate viewer count
    const viewerInterval = setInterval(() => {
      setViewers((v) => {
        const delta = Math.random() < 0.5 ? 1 : -1;
        return Math.max(baseViewers - 3, Math.min(baseViewers + 12, v + delta));
      });
    }, 8000 + Math.random() * 7000);

    // Countdown tick
    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h = Math.max(0, h - 1); }
        return { h, m, s };
      });
    }, 1000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(countdownInterval);
    };
  }, [price]);

  const pad = (n: number) => String(n).padStart(2, "0");

  if (viewers === 0) return null;

  return (
    <div className="flex flex-col gap-2 p-4 bg-background border border-border/60 rounded-sm text-xs font-inter">
      {/* Live viewers */}
      <div className="flex items-center gap-2 text-muted">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
        <Eye size={11} className="text-muted" />
        <span>
          <strong className="text-white">{viewers} personnes</strong> regardent ce produit en ce moment
        </span>
      </div>

      {/* Sold today */}
      <div className="flex items-center gap-2 text-muted">
        <TrendingUp size={11} className="text-trust flex-shrink-0" />
        <span>
          <strong className="text-trust">{soldToday} achetés</strong> au cours des dernières 24h
        </span>
      </div>

      {/* Stock level */}
      {stock <= 5 && (
        <div className="flex items-center gap-2 text-orange">
          <Package size={11} className="flex-shrink-0" />
          <span className="font-bold">
            Plus que {stock} disponibles au prix affiché
          </span>
        </div>
      )}

      {/* Delivery countdown */}
      <div className="flex items-center gap-2 text-muted border-t border-border/40 pt-2 mt-1">
        <Clock size={11} className="text-cyan flex-shrink-0" />
        <span>
          Commandez avant <strong className="text-cyan font-mono">{pad(timeLeft.h)}h {pad(timeLeft.m)}m {pad(timeLeft.s)}s</strong> pour une livraison <strong className="text-white">demain</strong>
        </span>
      </div>
    </div>
  );
}
