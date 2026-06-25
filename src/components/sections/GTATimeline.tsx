"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GTA_TIMELINE } from "@/data/timeline";
import { cn } from "@/lib/utils";

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
        <div ref={sectionRef} className="flex h-screen w-[400vw] items-center px-[10vw]">
          <div className="flex flex-col justify-center w-[50vw] pr-20">
            <h2 className="text-6xl md:text-8xl mb-6">L&apos;ÉVOLUTION <br /><span className="text-cyan">D&apos;UNE LÉGENDE</span></h2>
            <p className="text-muted max-w-sm font-inter">Explorez trois décennies d&apos;innovation, de controverse et d&apos;excellence. De 1997 à 2026.</p>
          </div>
          
          {GTA_TIMELINE.map((item) => (
            <div key={item.id} className="w-[60vw] h-[60vh] flex flex-col justify-center px-10 relative">
               <div 
                 className="absolute top-0 left-0 w-1 h-full opacity-20" 
                 style={{ backgroundColor: item.color }} 
               />
               <span className="text-8xl md:text-[180px] font-bebas font-outline-2 text-transparent opacity-10 mb-4">
                 {item.year}
               </span>
               <div className="mt-[-80px]">
                 <h3 className="text-4xl md:text-6xl mb-2" style={{ color: item.color }}>{item.title}</h3>
                 <p className="text-xs font-mono text-muted uppercase tracking-widest mb-6">{item.platform}</p>
                 <p className="text-lg md:text-2xl max-w-md font-inter leading-relaxed">{item.fact}</p>
               </div>
               
               <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 blur-[100px] opacity-20 pointer-events-none" style={{ backgroundColor: item.color }} />
            </div>
          ))}

          <div className="w-[50vw] flex flex-col items-center justify-center">
             <div className="text-center">
                <h3 className="text-5xl mb-6">PRÊT POUR <br /><span className="text-orange">2026 ?</span></h3>
                <button 
                  onClick={() => window.scrollTo({ bottom: 0, behavior: 'smooth' })}
                  className="bg-white text-black px-8 py-3 font-bebas text-xl hover:bg-cyan transition-colors"
                >
                  DÉCOUVRIR LE SETUP →
                </button>
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-outline-2 {
          -webkit-text-stroke: 2px white;
        }
      `}</style>
    </section>
  );
}
