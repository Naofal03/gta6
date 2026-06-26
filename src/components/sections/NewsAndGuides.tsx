"use client";

import { motion } from "framer-motion";
import PremiumCard from "../ui/PremiumCard";
import { Play } from "lucide-react";

const news = [
  {
    title: "Leaked Map Shows Massive Leonida Scale",
    time: "4 min read",
    author: "GTA6HQ",
    image: "Map Leak",
  },
  {
    title: "Why PS5 Pro is the optimal console for GTA VI",
    time: "6 min read",
    author: "Hardware Team",
    image: "PS5 Pro",
  }
];

const guides = [
  "Best SSD",
  "Best Headset",
  "Best Gaming Chair",
  "Best TV",
  "Best Gaming Desk",
  "Best Router"
];

const videos = [
  {
    title: "Trailer 1 Breakdown - 100 Hidden Details",
    duration: "14:23",
    thumb: "Trailer Analysis",
  },
  {
    title: "Building the Ultimate GTA 6 Setup",
    duration: "22:15",
    thumb: "Setup Build",
  }
];

export default function NewsAndGuides() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Latest News */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <PremiumCard className="overflow-hidden group cursor-pointer h-[400px]">
                  <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                    <span className="text-white/20 font-mono text-2xl">{item.image} Placeholder</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="flex gap-4 text-xs font-mono text-cyan mb-3 uppercase tracking-wider">
                      <span>{item.time}</span>
                      <span>•</span>
                      <span>{item.author}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-cyan transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Buying Guides */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Ultimate Buying Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <PremiumCard className="p-8 h-[200px] flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-bold text-center group-hover:scale-110 transition-transform duration-300">
                    {guide}
                  </h3>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((vid, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <PremiumCard className="overflow-hidden group cursor-pointer h-[350px]">
                  <div className="absolute inset-0 bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <span className="text-white/20 font-mono text-xl">{vid.thumb}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        <Play fill="white" className="w-6 h-6 ml-1" />
                     </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-xs font-mono">
                    {vid.duration}
                  </div>
                  <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent">
                    <h3 className="text-xl font-bold">{vid.title}</h3>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
