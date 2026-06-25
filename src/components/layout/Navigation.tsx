"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Précommande", href: "/precommande" },
  { label: "Setup", href: "/setup" },
  {
    label: "Accessoires",
    href: "/accessoires",
    children: [
      { label: "Tous les produits", href: "/produits" },
      { label: "Consoles & Jeux", href: "/accessoires" },
      { label: "SSD PS5", href: "/guides/meilleur-ssd-gta6" },
      { label: "TV & Écrans", href: "/guides/meilleure-tv-gta6" },
    ],
  },
  {
    label: "Guides",
    href: "/guides/edition-standard-vs-ultimate",
    children: [
      { label: "Standard vs Ultimate", href: "/guides/edition-standard-vs-ultimate" },
      { label: "Meilleur SSD GTA 6", href: "/guides/meilleur-ssd-gta6" },
      { label: "Meilleure TV 4K", href: "/guides/meilleure-tv-gta6" },
      { label: "Histoire de la saga", href: "/histoire-gta" },
    ],
  },
  { label: "Quiz", href: "/quiz" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-10 left-0 w-full z-50 transition-all duration-500 px-4 md:px-6",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 rounded-sm transition-all duration-500",
          isScrolled ? "glass shadow-2xl" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex-shrink-0">
          <span className="text-2xl md:text-3xl font-bebas tracking-tighter transition-all group-hover:text-cyan">
            GTA<span className="text-orange">6</span>HQ
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-xs uppercase font-bold tracking-widest text-muted hover:text-cyan transition-colors">
                  {link.label}
                  <ChevronDown size={10} className={cn("transition-transform duration-200", openDropdown === link.label ? "rotate-180 text-cyan" : "")} />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 glass-strong rounded-sm border border-border/80 overflow-hidden min-w-[200px] shadow-2xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-xs font-bold uppercase tracking-widest text-muted hover:text-cyan hover:bg-white/5 transition-all duration-150 whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs uppercase font-bold tracking-widest transition-colors",
                  pathname === link.href ? "text-cyan" : "text-muted hover:text-cyan"
                )}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://amzn.to/4aiof6B"
            target="_blank"
            rel="nofollow sponsored"
            aria-label="Précommander GTA 6 sur Amazon"
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-bold bg-orange text-white hover:bg-[#FF5712] px-4 py-2 transition-colors shadow-[0_0_15px_rgba(255,69,0,0.3)] shimmer-btn flex-shrink-0"
          >
            <ShoppingCart size={13} />
            PRÉCOMMANDER
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass-strong mt-2 overflow-hidden rounded-sm border border-border/50 mx-0"
          >
            <div className="flex flex-col p-6 gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-3 text-xl font-bebas tracking-wider border-b border-border/30",
                      pathname === link.href ? "text-cyan" : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 flex flex-col gap-0 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-2 text-sm text-muted hover:text-cyan font-inter transition-colors"
                        >
                          → {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="https://amzn.to/4aiof6B"
                target="_blank"
                rel="nofollow sponsored"
                aria-label="Précommander GTA 6"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm text-lg font-bebas bg-orange text-white hover:bg-[#FF5712] px-8 py-4 transition-colors shimmer-btn"
              >
                <ShoppingCart size={18} />
                PRÉCOMMANDER GTA 6 →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
