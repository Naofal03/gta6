"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

interface HeadingItem {
  text: string;
  id: string;
  depth: number;
}

interface GuideLayoutProps {
  metadata: {
    title: string;
    description: string;
    date: string;
    category: string;
    duration: string;
  };
  headings: HeadingItem[];
  children: React.ReactNode;
}

export default function GuideLayout({ metadata, headings, children }: GuideLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeId, setActiveId] = useState("");

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => {
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [headings]);

  return (
    <div className="min-h-screen bg-background relative pb-24">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-orange z-50 transition-all duration-75 origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-40">
        {/* Back Link & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 font-mono text-xs text-muted border-b border-border/20 pb-4">
          <Link href="/" className="flex items-center gap-2 hover:text-cyan transition-colors">
            <ArrowLeft size={14} /> Retour à l&apos;accueil
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-cyan transition-colors">Accueil</Link>
            <span>›</span>
            <span className="text-white">Guides</span>
            <span>›</span>
            <span className="text-muted/80 line-clamp-1 max-w-[200px]">{metadata.title}</span>
          </div>
        </div>

        {/* Hero Meta Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-1.5 bg-cyan/10 border border-cyan/30 text-cyan text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-6">
            <Tag size={10} />
            {metadata.category}
          </span>
          <h1 className="text-4xl md:text-7xl leading-tight font-bebas mb-6 uppercase tracking-wider text-white">
            {metadata.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-xs text-muted font-mono border-t border-border/20 pt-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} className="text-orange" />
              Mis à jour : {metadata.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-orange" />
              Lecture : {metadata.duration}
            </span>
            <span className="text-trust">✓ Vérifié par nos experts</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12 items-start">
          {/* Main Content Area */}
          <article className="flex-1 w-full max-w-4xl min-w-0">
            {children}
          </article>

          {/* Sticky Sidebar Table of Contents */}
          {headings.length > 0 && (
            <aside className="hidden lg:block w-72 shrink-0 sticky top-32 glass p-6 rounded-sm border border-border/50 max-h-[calc(100vh-160px)] overflow-y-auto">
              <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white mb-4 pb-2 border-b border-border/30">
                Sommaire
              </p>
              <nav className="flex flex-col gap-3">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(heading.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        // Update hash without jumping
                        window.history.pushState(null, "", `#${heading.id}`);
                      }
                    }}
                    className={`text-sm font-inter leading-relaxed transition-all duration-300 hover:text-cyan border-l pl-3 block ${
                      activeId === heading.id
                        ? "text-cyan border-cyan font-semibold translate-x-1"
                        : heading.depth === 3
                        ? "text-muted/60 hover:text-white border-border/35 text-xs pl-6"
                        : "text-muted hover:text-white border-border/40"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
