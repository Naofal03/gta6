"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GTA_TIMELINE } from "@/data/timeline";

gsap.registerPlugin(ScrollTrigger);

export default function GTATimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-background">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex h-screen w-[500vw] items-stretch">

          {/* Intro panel */}
          <div className="flex flex-col justify-center w-[40vw] px-[8vw] flex-shrink-0">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan mb-4">1997 → 2026</span>
            <h2 className="text-5xl md:text-7xl mb-6 leading-tight">
              L&apos;ÉVOLUTION<br />
              <span className="text-cyan">D&apos;UNE LÉGENDE</span>
            </h2>
            <p className="text-muted max-w-xs font-inter leading-relaxed">
              Trois décennies d&apos;innovation, de controverse et d&apos;excellence. Faites défiler pour revivre l&apos;histoire.
            </p>
            <div className="flex items-center gap-2 mt-8 text-muted text-xs font-mono animate-pulse">
              <span>→</span>
              <span>FAITES DÉFILER</span>
            </div>
          </div>

          {/* Timeline items */}
          {GTA_TIMELINE.map((item) => (
            <div
              key={item.id}
              className="w-[65vw] flex-shrink-0 flex items-center relative group border-l border-white/5"
            >
              {/* Colored vertical accent line */}
              <div
                className="absolute left-0 top-0 w-[3px] h-full transition-opacity duration-500 opacity-40 group-hover:opacity-100"
                style={{ backgroundColor: item.color }}
              />

              {/* Year — large decorative, left side */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 select-none pointer-events-none">
                <span
                  className="text-[100px] md:text-[160px] font-bebas leading-none block"
                  style={{
                    color: item.color,
                    opacity: 0.08,
                    WebkitTextStroke: `1px ${item.color}`,
                  }}
                >
                  {item.year}
                </span>
              </div>

              {/* Content block — always over the ghost year */}
              <div className="relative z-10 flex items-center gap-8 px-12 md:px-16 w-full">
                {/* Left: year badge + text */}
                <div className="flex-1 max-w-[50%]">
                  <div
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold px-3 py-1 rounded-full border mb-5 uppercase tracking-widest"
                    style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}10` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    {item.year}
                  </div>

                  <h3
                    className="text-3xl md:text-5xl font-bebas tracking-wider leading-tight mb-2"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-[10px] font-mono text-muted uppercase tracking-[0.25em] mb-5">
                    {item.platform}
                  </p>

                  <p className="text-sm md:text-base font-inter leading-relaxed text-foreground/75 max-w-sm">
                    {item.fact}
                  </p>
                </div>

                {/* Right: image — never overlaps the text */}
                {item.image && (
                  <div className="flex-shrink-0 w-[220px] h-[165px] md:w-[300px] md:h-[220px] relative overflow-hidden rounded-sm border border-white/10 opacity-50 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                      style={{ background: `linear-gradient(135deg, ${item.color}40, transparent)` }}
                    />
                  </div>
                )}
              </div>

              {/* Ambient glow */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}

          {/* End panel */}
          <div className="w-[40vw] flex-shrink-0 flex flex-col items-center justify-center px-12">
            <div className="text-center">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-orange block mb-4">2026</span>
              <h3 className="text-5xl md:text-7xl font-bebas leading-tight mb-6">
                PRÊT POUR<br />
                <span className="text-orange">VICE CITY ?</span>
              </h3>
              <p className="text-muted text-sm font-inter mb-8 max-w-xs mx-auto">
                L&apos;histoire continue. Votre setup doit être à la hauteur.
              </p>
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                className="bg-orange text-white px-8 py-3 font-bebas text-xl hover:bg-[#FF5712] transition-colors shadow-[0_0_20px_rgba(255,69,0,0.3)] shimmer-btn"
              >
                DÉCOUVRIR LE SETUP IDÉAL →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
