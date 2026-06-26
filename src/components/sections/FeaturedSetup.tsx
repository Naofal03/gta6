"use client";

import { motion } from "framer-motion";
import PremiumCard from "../ui/PremiumCard";
import { ArrowDown } from "lucide-react";

const setupSteps = [
  {
    title: "PlayStation 5 Pro",
    desc: "The core of the experience.",
    price: "799 €",
    imgPlaceholder: "PS5 Pro",
    color: "from-blue-500/10 to-transparent",
  },
  {
    title: "LG OLED C3 55\"",
    desc: "Perfect blacks, 120Hz.",
    price: "1 200 €",
    imgPlaceholder: "TV OLED",
    color: "from-purple-500/10 to-transparent",
  },
  {
    title: "Samsung 990 PRO 2TB",
    desc: "Instant loading times.",
    price: "180 €",
    imgPlaceholder: "SSD M.2",
    color: "from-cyan/10 to-transparent",
  },
  {
    title: "SteelSeries Arctis Nova Pro",
    desc: "Spatial audio.",
    price: "350 €",
    imgPlaceholder: "Headset",
    color: "from-orange/10 to-transparent",
  },
  {
    title: "Secretlab TITAN Evo",
    desc: "Ultimate comfort.",
    price: "550 €",
    imgPlaceholder: "Gaming Chair",
    color: "from-red-500/10 to-transparent",
  },
];

export default function FeaturedSetup() {
  return (
    <section id="setup" className="py-32 px-6 relative bg-[#04040A]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Featured Gaming Setup
          </h2>
          <p className="text-xl text-muted/80 max-w-2xl mx-auto">
            The exact hardware you need to experience Vice City in its absolute prime. No compromises.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12 relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-cyan/50 via-orange/50 to-transparent -translate-x-1/2 hidden md:block" />
          
          {setupSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex w-full items-center justify-between flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />
              
              <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:pr-16 md:justify-end" : "md:pl-16 md:justify-start"}`}>
                <PremiumCard className="w-full max-w-lg p-6 group">
                  <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${step.color} border border-white/5 flex items-center justify-center mb-6 overflow-hidden relative`}>
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <span className="font-mono text-white/30 transform group-hover:scale-110 transition-transform duration-500">{step.imgPlaceholder}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                      <p className="text-muted/80">{step.desc}</p>
                    </div>
                    <span className="font-mono text-cyan font-bold">{step.price}</span>
                  </div>
                </PremiumCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
