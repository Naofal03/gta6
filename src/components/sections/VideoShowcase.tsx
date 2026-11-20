"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Volume2, VolumeX, ExternalLink } from "lucide-react";
import Script from "next/script";

export default function VideoShowcase() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "GTA VI — Trailer Officiel #1 (2023)",
    description:
      "La première bande-annonce officielle de Grand Theft Auto VI dévoilant Vice City, Leonida, et les protagonistes Lucia et Jason. Plus de 150 millions de vues en 24 heures.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/QdBZExpgErs/maxresdefault.jpg",
    uploadDate: "2023-12-05T00:00:00Z",
    duration: "PT1M31S",
    embedUrl: "https://www.youtube.com/embed/QdBZExpgErs",
    contentUrl: "https://www.youtube.com/watch?v=QdBZExpgErs",
    publisher: {
      "@type": "Organization",
      name: "Rockstar Games",
      url: "https://www.rockstargames.com",
    },
    inLanguage: "en",
    keywords: "GTA 6, Grand Theft Auto VI, Vice City, Lucia, Jason, Rockstar Games, trailer",
  };

  return (
    <>
      <Script
        id="schema-video"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <section
        id="trailer"
        className="py-24 px-6 bg-background relative overflow-hidden scroll-mt-20"
        ref={ref}
        aria-labelledby="video-heading"
      >
        {/* Background aurora */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-orange/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan/4 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-orange text-xs font-mono tracking-[0.3em] uppercase font-bold block mb-4">
              Rockstar Games — Décembre 2023
            </span>
            <h2
              id="video-heading"
              className="text-5xl md:text-7xl mb-4 leading-none"
            >
              LE TRAILER QUI A{" "}
              <span className="text-gradient">BRISÉ INTERNET</span>
            </h2>
            <p className="text-muted font-inter text-base md:text-lg max-w-2xl mx-auto">
              <strong className="text-white">150+ millions de vues</strong> en 24 heures
              — le record absolu de YouTube à sa sortie. Revivez le premier regard sur Vice City et Leonida.
            </p>
          </motion.div>

          {/* Video container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Glow border effect */}
            <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-r from-orange via-gold to-cyan opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />
            <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-r from-orange via-gold to-cyan opacity-20" />

            <div className="relative rounded-sm overflow-hidden aspect-video bg-black">
              {!isLoaded ? (
                /* Thumbnail placeholder */
                <button
                  onClick={() => setIsLoaded(true)}
                  className="w-full h-full relative group/play cursor-pointer"
                  aria-label="Lancer la bande-annonce officielle de GTA 6"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://i.ytimg.com/vi/QdBZExpgErs/maxresdefault.jpg"
                    alt="Bande-annonce officielle GTA 6 — Vice City, Lucia et Jason"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="1280"
                    height="720"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover/play:bg-black/20 transition-colors duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Pulse rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                      <div
                        className="absolute inset-0 rounded-full border border-white/20"
                        style={{ animation: "pulse-ring 2s ease-out 0.5s infinite" }}
                      />
                      {/* Button */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-orange rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,69,0,0.6)] group-hover/play:scale-110 group-hover/play:shadow-[0_0_80px_rgba(255,69,0,0.8)] transition-all duration-300 shimmer-btn">
                        <Play size={30} className="text-white ml-1 fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Info overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-white font-bebas text-xl md:text-3xl tracking-wide">
                      GTA VI — TRAILER OFFICIEL #1
                    </p>
                    <p className="text-muted text-xs font-mono mt-1">
                      Rockstar Games · 5 décembre 2023 · 1 min 31 s
                    </p>
                  </div>
                </button>
              ) : (
                /* Actual iframe */
                <iframe
                  src="https://www.youtube-nocookie.com/embed/QdBZExpgErs?autoplay=1&mute=1&rel=0&modestbranding=1&color=white"
                  title="GTA VI — Trailer Officiel #1 — Vice City & Leonida"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              )}
            </div>

            {/* Stats badge */}
            <div className="absolute -top-5 right-6 md:right-10">
              <div className="glass border border-orange/30 rounded-full px-4 py-2 flex items-center gap-2 floating-badge shadow-[0_0_20px_rgba(255,69,0,0.2)]">
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                <span className="text-orange text-xs font-mono font-bold">
                  +150M VUES · RECORD YOUTUBE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom info row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {[
                { label: "Date de sortie du trailer", value: "5 décembre 2023" },
                { label: "Vues en 24h", value: "90 millions" },
                { label: "Vues totales", value: "+150 millions" },
              ].map((info) => (
                <div key={info.label} className="text-center md:text-left">
                  <span className="block text-muted text-[10px] font-mono uppercase tracking-widest">
                    {info.label}
                  </span>
                  <span className="block text-white font-bebas text-xl tracking-wide">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://www.youtube.com/watch?v=QdBZExpgErs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-muted hover:text-cyan hover:border-cyan text-xs font-mono font-bold uppercase tracking-widest px-5 py-2.5 transition-all duration-300 rounded-sm"
            >
              <ExternalLink size={12} />
              Voir sur YouTube
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
