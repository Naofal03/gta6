"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function FlipClock() {
  const targetDate = new Date("2026-11-19T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-row justify-center gap-2 md:gap-8 font-mono overflow-x-auto py-2">
      <StatUnit value={timeLeft.days} label="Jours" />
      <StatUnit value={timeLeft.hours} label="Heures" />
      <StatUnit value={timeLeft.minutes} label="Min" />
      <StatUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
}

function StatUnit({ value, label }: { value: number; label: string }) {
  const format = (num: number) => num.toString().padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="flex gap-0.5 md:gap-1">
        {format(value).split('').map((digit, i) => (
          <div key={i} className="bg-surface border border-border px-2 md:px-3 py-3 md:py-4 rounded-sm text-2xl md:text-5xl font-bold text-cyan shadow-[0_0_15px_rgba(0,255,204,0.1)] relative">
            <div className="absolute inset-x-0 top-1/2 h-px bg-background/50 -translate-y-1/2" />
            {digit}
          </div>
        ))}
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-tighter text-muted mt-2">{label}</span>
    </div>
  );
}
