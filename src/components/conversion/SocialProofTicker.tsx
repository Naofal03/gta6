"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialProofTicker() {
  const [count, setCount] = useState(12450);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-orange/10 border-y border-orange/20 py-3 flex justify-center items-center gap-3 overflow-hidden">
       <Users size={16} className="text-orange" />
       <p className="text-xs font-mono uppercase tracking-widest text-orange/80">
         🔥 <span className="font-bold text-white">{count.toLocaleString()}</span> JOUEURS ONT DÉJÀ PRÉCOMMANDÉ LEUR SETUP CETTE SEMAINE
       </p>
    </div>
  );
}
