"use client";

import { motion } from "framer-motion";
import PremiumCard from "../ui/PremiumCard";

export default function Preorder() {
  return (
    <section id="preorder" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Preorder GTA VI
          </h2>
          <p className="text-xl text-muted/80 max-w-2xl mx-auto">
            Secure your copy today and be ready for the most anticipated release of the decade. Guaranteed day-one delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* PS5 Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <PremiumCard className="p-10 flex flex-col h-full bg-gradient-to-br from-[#0D0D18] to-[#1A1A2E]/50">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">PlayStation 5</h3>
                  <p className="text-cyan text-sm font-mono tracking-widest uppercase">Physical Edition</p>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                  <span className="font-bold">79,99 €</span>
                </div>
              </div>
              
              <div className="flex-grow flex items-center justify-center py-12 relative">
                 <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full" />
                 {/* Placeholder for Game Box Image */}
                 <div className="w-64 h-80 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center relative z-10 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                    <span className="text-white/40 font-mono text-sm">PS5 Box Art</span>
                 </div>
              </div>

              <a 
                href="https://amzn.to/4aiof6B" 
                target="_blank" 
                rel="nofollow sponsored"
                className="mt-8 w-full block text-center py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-colors"
              >
                Preorder on Amazon
              </a>
            </PremiumCard>
          </motion.div>

          {/* Xbox Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PremiumCard className="p-10 flex flex-col h-full bg-gradient-to-br from-[#0D0D18] to-[#1A1A2E]/50">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Xbox Series X|S</h3>
                  <p className="text-green-500 text-sm font-mono tracking-widest uppercase">Physical Edition</p>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                  <span className="font-bold">79,99 €</span>
                </div>
              </div>
              
              <div className="flex-grow flex items-center justify-center py-12 relative">
                 <div className="absolute inset-0 bg-green-500/20 blur-[80px] rounded-full" />
                 {/* Placeholder for Game Box Image */}
                 <div className="w-64 h-80 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center relative z-10 shadow-2xl transform rotate-[5deg] hover:rotate-0 transition-transform duration-500">
                    <span className="text-white/40 font-mono text-sm">Xbox Box Art</span>
                 </div>
              </div>

              <a 
                href="https://amzn.to/4oIMhxq" 
                target="_blank" 
                rel="nofollow sponsored"
                className="mt-8 w-full block text-center py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-colors"
              >
                Preorder on Amazon
              </a>
            </PremiumCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
