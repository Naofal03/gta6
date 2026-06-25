"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";
import { Menu, X, ShoppingCart } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Précommande", href: "/precommande" },
  { label: "Setup", href: "/setup" },
  { label: "Accessoires", href: "/accessoires" },
  { label: "Histoire", href: "/histoire-gta" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-10 left-0 w-full z-50 transition-all duration-500 px-6",
      isScrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-sm transition-all duration-500",
        isScrolled ? "glass shadow-2xl" : "bg-transparent"
      )}>
        <Link href="/" className="group">
          <span className="text-2xl md:text-3xl font-bebas tracking-tighter transition-all group-hover:text-cyan">
            GTA<span className="text-orange">6</span>HQ
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-xs uppercase font-bold tracking-widest text-muted hover:text-cyan transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a href="https://amzn.to/4aiof6B" target="_blank" rel="nofollow sponsored" className="inline-flex items-center justify-center rounded-sm text-sm font-bold bg-orange text-white hover:bg-[#FF5712] px-4 py-2 transition-colors">
            <ShoppingCart size={14} className="mr-2" />
            ACHETER
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 overflow-hidden rounded-sm"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bebas tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
              <a href="https://amzn.to/4aiof6B" target="_blank" rel="nofollow sponsored" className="inline-flex items-center justify-center rounded-sm text-lg font-bebas bg-orange text-white hover:bg-[#FF5712] px-8 py-4 transition-colors">
                PRÉCOMMANDER →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { motion, AnimatePresence } from "framer-motion";
