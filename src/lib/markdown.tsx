import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { CheckCircle2, XCircle, ShoppingCart, Info, AlertTriangle, Monitor, HardDrive, Zap, Star } from "lucide-react";
import { PRODUCTS_FULL } from "@/data/products-full";
import { formatPrice } from "./utils";

export interface GuideMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  duration: string;
  canonical?: string;
  coverImage?: string;
}

export interface HeadingItem {
  text: string;
  id: string;
  depth: number;
}

export interface GuideData {
  metadata: GuideMetadata;
  content: string;
  headings: HeadingItem[];
}

// Simple Frontmatter Parser
export function parseFrontMatter(fileContent: string): { metadata: GuideMetadata; content: string } {
  const match = fileContent.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  
  if (!match) {
    return {
      metadata: {
        title: "Guide",
        description: "",
        date: "2026-06-26",
        category: "Guides",
        duration: "5 min",
      },
      content: fileContent,
    };
  }

  const yamlBlock = match[1];
  const content = match[2];
  const metadata: any = {};

  yamlBlock.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      // Strip outer quotes if any
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      metadata[key] = value;
    }
  });

  return {
    metadata: metadata as GuideMetadata,
    content,
  };
}

// Generate Slugs for Headings
export function getHeadingId(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[^a-z0-9]+/g, "-") // convert spaces & special characters to hyphens
    .replace(/(^-|-$)/g, ""); // strip leading/trailing hyphens
}

// Extract Headings for Table of Contents
export function extractHeadings(content: string): HeadingItem[] {
  const lines = content.split("\n");
  const headings: HeadingItem[] = [];

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      const text = trimmed.substring(3).trim();
      headings.push({
        text,
        id: getHeadingId(text),
        depth: 2,
      });
    } else if (trimmed.startsWith("### ")) {
      const text = trimmed.substring(4).trim();
      headings.push({
        text,
        id: getHeadingId(text),
        depth: 3,
      });
    }
  });

  return headings;
}

// Load Guide by Slug
export function getGuideBySlug(slug: string): GuideData | null {
  try {
    const contentDir = path.join(process.cwd(), "src/content/guides");
    const filePath = path.join(contentDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { metadata, content } = parseFrontMatter(fileContent);
    const headings = extractHeadings(content);
    return {
      metadata,
      content,
      headings,
    };
  } catch (error) {
    console.error("Error reading guide:", error);
    return null;
  }
}

// Inline Markdown Parser: parses bold, italic, and links
function parseInlineMarkdown(text: string): React.ReactNode {
  let parts: (string | React.ReactElement)[] = [text];

  // Process links: [label](url)
  parts = parts.flatMap((part) => {
    if (typeof part !== "string") return part;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const result: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let match;
    while ((match = linkRegex.exec(part)) !== null) {
      if (match.index > lastIndex) {
        result.push(part.substring(lastIndex, match.index));
      }
      const label = match[1];
      const url = match[2];
      const isExternal = url.startsWith("http") || url.startsWith("//");
      const key = `link-${match.index}`;
      result.push(
        isExternal ? (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="nofollow sponsored"
            className="text-cyan hover:underline hover:text-cyan/80 transition-colors font-bold"
          >
            {label}
          </a>
        ) : (
          <Link
            key={key}
            href={url}
            className="text-cyan hover:underline hover:text-cyan/80 transition-colors font-bold"
          >
            {label}
          </Link>
        )
      );
      lastIndex = linkRegex.lastIndex;
    }
    if (lastIndex < part.length) {
      result.push(part.substring(lastIndex));
    }
    return result;
  });

  // Process bold: **text**
  parts = parts.flatMap((part) => {
    if (typeof part !== "string") return part;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const result: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let match;
    while ((match = boldRegex.exec(part)) !== null) {
      if (match.index > lastIndex) {
        result.push(part.substring(lastIndex, match.index));
      }
      const key = `bold-${match.index}`;
      result.push(
        <strong key={key} className="text-white font-bold">
          {match[1]}
        </strong>
      );
      lastIndex = boldRegex.lastIndex;
    }
    if (lastIndex < part.length) {
      result.push(part.substring(lastIndex));
    }
    return result;
  });

  // Process italic: *text*
  parts = parts.flatMap((part) => {
    if (typeof part !== "string") return part;
    const italicRegex = /\*([^*]+)\*/g;
    const result: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let match;
    while ((match = italicRegex.exec(part)) !== null) {
      if (match.index > lastIndex) {
        result.push(part.substring(lastIndex, match.index));
      }
      const key = `italic-${match.index}`;
      result.push(
        <em key={key} className="italic text-white/90">
          {match[1]}
        </em>
      );
      lastIndex = italicRegex.lastIndex;
    }
    if (lastIndex < part.length) {
      result.push(part.substring(lastIndex));
    }
    return result;
  });

  return <>{parts}</>;
}

// Block Custom Components Renders

// 1. Amazon Product Card Section
function GuideProductCard({ id }: { id: string }) {
  const product = PRODUCTS_FULL.find((p) => p.id === id);
  if (!product) {
    return (
      <div className="border border-red-500/30 bg-red-500/5 p-4 rounded-sm mb-6 text-sm text-red-400">
        Produit avec ID &quot;{id}&quot; introuvable dans le catalogue.
      </div>
    );
  }

  const isGame = product.category === "jeu";
  const Icon = isGame ? ShoppingCart : product.category === "ssd" ? HardDrive : Monitor;

  return (
    <div className="glass p-8 rounded-sm border border-border/50 relative mb-12 hover:border-orange/20 transition-all duration-300">
      {product.badge && (
        <div className="absolute -top-3 left-6">
          <span className="bg-gold text-black text-[9px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1">
            <Star size={8} className="fill-black" />
            {product.badge}
          </span>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {product.image && (
          <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-black/25 p-2 rounded-sm border border-border/20 self-center md:self-start">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        )}
        <div className="flex-1 w-full">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
            <h3 className="text-2xl font-bebas text-white tracking-wide uppercase">{product.name}</h3>
            <div className="flex items-center gap-1 text-gold text-xs font-mono">
              <span className="bg-gold/10 px-2 py-0.5 border border-gold/30 rounded-sm">
                ⭐ {product.rating} ({product.reviewCount} avis)
              </span>
            </div>
          </div>
          <p className="text-muted text-sm font-inter mb-4 leading-relaxed">{product.verdict}</p>
          
          {/* Specifications Highlight */}
          {product.specs && product.specs.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {product.specs.slice(0, 3).map((spec, j) => (
                <div key={j} className="bg-white/5 border border-white/5 rounded-sm p-2 text-center">
                  <span className="block text-[9px] text-muted font-mono uppercase tracking-widest mb-1">{spec.label}</span>
                  <span className="block text-xs font-bold text-white font-mono">{spec.value}</span>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex items-center gap-4 flex-wrap mt-4 justify-between border-t border-border/30 pt-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-muted font-mono uppercase tracking-widest">Prix conseillé</span>
              <span className="text-gold font-mono text-2xl font-bold">{formatPrice(product.price)}</span>
            </div>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="nofollow sponsored"
              aria-label={`Commander ${product.name} sur Amazon`}
              className="inline-flex items-center gap-2 bg-orange text-white font-bebas text-lg px-6 py-3 rounded-sm hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300 shimmer-btn"
            >
              <Icon size={16} />
              ACHETER SUR AMAZON →
            </a>
          </div>
          <p className="text-[9px] text-muted/50 font-mono mt-3">
            ✓ Prix Amazon garanti · ✓ Livraison rapide · ✓ Éligible Prime
          </p>
        </div>
      </div>
    </div>
  );
}

// 2. Pros and Cons Section
function GuideProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div className="bg-trust/5 border border-trust/20 p-6 rounded-sm">
        <h4 className="text-trust font-bebas text-xl mb-4 tracking-wider flex items-center gap-2">
          <CheckCircle2 size={18} /> LES AVANTAGES
        </h4>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="text-muted text-sm font-inter leading-relaxed flex items-start gap-2">
              <span className="text-trust font-bold select-none mt-0.5">•</span>
              <span>{parseInlineMarkdown(pro)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-sm">
        <h4 className="text-red-400 font-bebas text-xl mb-4 tracking-wider flex items-center gap-2">
          <XCircle size={18} /> LES INCONVÉNIENTS
        </h4>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="text-muted text-sm font-inter leading-relaxed flex items-start gap-2">
              <span className="text-red-400 font-bold select-none mt-0.5">•</span>
              <span>{parseInlineMarkdown(con)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 3. CTA Banner Section
function GuideCTA({ title, subtitle, url, text }: { title: string; subtitle: string; url: string; text: string }) {
  return (
    <div className="glass p-8 rounded-sm border border-orange/20 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="relative">
        <p className="text-lg font-bebas tracking-wider text-white mb-1 uppercase">{title}</p>
        <p className="text-sm text-muted font-inter">{subtitle}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="nofollow sponsored"
        className="flex-shrink-0 relative z-10 inline-flex items-center gap-2 bg-orange text-white font-bebas text-lg px-8 py-4 rounded-sm hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all shimmer-btn"
      >
        🎮 {text}
      </a>
    </div>
  );
}

// 4. Custom Alerts
function GuideAlert({ type, text }: { type: 'info' | 'warning' | 'error'; text: string }) {
  const isError = type === 'error';
  const isWarning = type === 'warning';
  
  const borderClass = isError 
    ? "border-red-500/30 bg-red-500/5 text-red-200" 
    : isWarning 
      ? "border-orange/30 bg-orange/5 text-orange-200" 
      : "border-cyan/30 bg-cyan/5 text-cyan-200";
      
  const Icon = isError 
    ? XCircle 
    : isWarning 
      ? AlertTriangle 
      : Info;
      
  const iconColor = isError 
    ? "text-red-400" 
    : isWarning 
      ? "text-orange" 
      : "text-cyan";

  return (
    <div className={`glass p-6 rounded-sm border ${borderClass} mb-12 flex gap-4`}>
      <Icon size={20} className={`${iconColor} flex-shrink-0 mt-0.5`} />
      <div>
        <p className="text-white font-bold mb-1 font-mono uppercase text-xs tracking-widest">
          {isError ? "Attention" : isWarning ? "Avertissement" : "Note importante"}
        </p>
        <p className="text-muted text-sm font-inter leading-relaxed">
          {parseInlineMarkdown(text)}
        </p>
      </div>
    </div>
  );
}

// Text block renderer
function MarkdownTextSection({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  let currentList: string[] = [];
  let inList = false;
  let inTable = false;
  let tableRows: string[][] = [];

  const flushList = (key: number) => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${key}`} className="list-disc pl-6 mb-8 space-y-3 text-muted leading-relaxed font-inter">
          {currentList.map((item, idx) => (
            <li key={idx} className="marker:text-orange">
              {parseInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
    inList = false;
  };

  const flushTable = (key: number) => {
    if (tableRows.length > 0) {
      const headers = tableRows[0];
      const rows = tableRows.slice(2); // Skip headers and separator line (e.g. |---|---|)
      elements.push(
        <div key={`table-${key}`} className="glass rounded-sm border border-border/50 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border-spacing-0">
              <thead>
                <tr className="bg-surface border-b border-border/50">
                  {headers.map((h, idx) => (
                    <th key={idx} className="py-4 px-5 font-bebas text-sm text-muted uppercase tracking-widest border-r border-border/10 last:border-r-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white/1" : "bg-white/3"}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-4 px-5 font-inter text-muted text-sm border-b border-border/10 border-r border-border/10 last:border-r-0">
                        {parseInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
      tableRows = [];
    }
    inTable = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      if (inList) flushList(i);
      if (inTable) flushTable(i);
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      if (inList) flushList(i);
      if (inTable) flushTable(i);
      const title = line.substring(3).trim();
      elements.push(
        <h2
          key={`h2-${i}`}
          id={getHeadingId(title)}
          className="text-3xl md:text-5xl font-bebas mt-12 mb-6 text-white uppercase tracking-wide scroll-mt-28 border-b border-border/30 pb-3"
        >
          {parseInlineMarkdown(title)}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      if (inList) flushList(i);
      if (inTable) flushTable(i);
      const title = line.substring(4).trim();
      elements.push(
        <h3
          key={`h3-${i}`}
          id={getHeadingId(title)}
          className="text-2xl md:text-3xl font-bebas mt-8 mb-4 text-cyan uppercase tracking-wide scroll-mt-28"
        >
          {parseInlineMarkdown(title)}
        </h3>
      );
      continue;
    }

    // Bullet Lists
    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (inTable) flushTable(i);
      inList = true;
      currentList.push(line.substring(2).trim());
      continue;
    }

    // Tables
    if (line.startsWith("|")) {
      if (inList) flushList(i);
      inTable = true;
      const cells = line
        .split("|")
        .map((c) => c.trim())
        .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      tableRows.push(cells);
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      if (inList) flushList(i);
      if (inTable) flushTable(i);
      elements.push(
        <blockquote
          key={`quote-${i}`}
          className="border-l-2 border-orange bg-orange/5 p-6 my-8 rounded-r-sm text-muted font-inter italic leading-relaxed"
        >
          {parseInlineMarkdown(line.substring(2).trim())}
        </blockquote>
      );
      continue;
    }

    // Default Text Block
    if (inList) {
      currentList[currentList.length - 1] += " " + line;
    } else if (inTable) {
      flushTable(i);
      elements.push(
        <p key={`p-${i}`} className="text-muted leading-relaxed font-inter mb-6">
          {parseInlineMarkdown(line)}
        </p>
      );
    } else {
      elements.push(
        <p key={`p-${i}`} className="text-muted leading-relaxed font-inter mb-6 text-base md:text-lg">
          {parseInlineMarkdown(line)}
        </p>
      );
    }
  }

  if (inList) flushList(lines.length);
  if (inTable) flushTable(lines.length);

  return <>{elements}</>;
}

const COMPONENT_REGEX = /(\[Product\s+[^\]]+\]|\[ProsCons\s+[^\]]+\]|\[CTA\s+[^\]]+\]|\[Alert\s+[^\]]+\])/g;

// Render Markdown Body to React Server Nodes
export function renderMarkdown(body: string): React.ReactNode[] {
  const parts = body.split(COMPONENT_REGEX);

  return parts
    .map((part, index) => {
      const trimmed = part.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("[Product ")) {
        const idMatch = trimmed.match(/id="([^"]+)"/);
        const id = idMatch ? idMatch[1] : "";
        return <GuideProductCard key={index} id={id} />;
      }

      if (trimmed.startsWith("[ProsCons ")) {
        const prosMatch = trimmed.match(/pros="([^"]+)"/);
        const consMatch = trimmed.match(/cons="([^"]+)"/);
        const prosStr = prosMatch ? prosMatch[1] : "";
        const consStr = consMatch ? consMatch[1] : "";

        const pros = prosStr
          .split("|")
          .map((p) => p.trim())
          .filter(Boolean);
        const cons = consStr
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);

        return <GuideProsCons key={index} pros={pros} cons={cons} />;
      }

      if (trimmed.startsWith("[CTA ")) {
        const titleMatch = trimmed.match(/title="([^"]+)"/);
        const subtitleMatch = trimmed.match(/subtitle="([^"]+)"/);
        const urlMatch = trimmed.match(/url="([^"]+)"/);
        const textMatch = trimmed.match(/text="([^"]+)"/);

        return (
          <GuideCTA
            key={index}
            title={titleMatch ? titleMatch[1] : ""}
            subtitle={subtitleMatch ? subtitleMatch[1] : ""}
            url={urlMatch ? urlMatch[1] : ""}
            text={textMatch ? textMatch[1] : ""}
          />
        );
      }

      if (trimmed.startsWith("[Alert ")) {
        const typeMatch = trimmed.match(/type="([^"]+)"/);
        const textMatch = trimmed.match(/text="([^"]+)"/);
        return (
          <GuideAlert
            key={index}
            type={(typeMatch ? typeMatch[1] : "info") as any}
            text={textMatch ? textMatch[1] : ""}
          />
        );
      }

      return <MarkdownTextSection key={index} text={part} />;
    })
    .filter(Boolean) as React.ReactNode[];
}
