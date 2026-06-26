"use client";

import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

interface VideoItem {
  videoId: string;
  title: string;
  channel: string;
  duration: string;
}

interface VideoReviewProps {
  videos: VideoItem[];
  productName: string;
  amazonUrl: string;
}

export default function VideoReview({ videos, productName, amazonUrl }: VideoReviewProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  if (!videos || videos.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan block mb-2">TESTS & DÉMONSTRATIONS</span>
            <h2 className="text-3xl font-bebas tracking-wider uppercase text-white">
              Regarder les tests vidéo
            </h2>
          </div>
          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(productName + " test avis review")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-xs text-muted hover:text-white transition-colors font-mono"
          >
            <ExternalLink size={14} />
            Plus de tests sur YouTube →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.videoId} className="glass border border-border/50 rounded-sm overflow-hidden group">
              {activeVideo === video.videoId ? (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setActiveVideo(video.videoId)}
                  className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden"
                  aria-label={`Lire ${video.title}`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {video.duration}
                  </div>
                </button>
              )}
              <div className="p-4">
                <p className="text-sm font-semibold text-white line-clamp-2 mb-1">{video.title}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted font-mono">{video.channel}</span>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-cyan hover:underline"
                  >
                    <ExternalLink size={10} />
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after videos */}
        <div className="mt-8 text-center p-6 glass border border-orange/20 rounded-sm">
          <p className="text-sm text-muted mb-3 font-inter">
            Convaincu ? Commandez maintenant au meilleur prix garanti sur Amazon.
          </p>
          <a
            href={amazonUrl}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-flex items-center gap-2 bg-orange text-white font-bebas text-lg px-8 py-3 rounded-sm hover:bg-[#FF5712] transition-colors shimmer-btn shadow-[0_0_20px_rgba(255,69,0,0.3)]"
          >
            VOIR LE PRIX SUR AMAZON →
          </a>
        </div>
      </div>
    </section>
  );
}
