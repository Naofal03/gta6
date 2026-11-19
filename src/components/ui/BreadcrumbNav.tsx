import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gta6-pi-cyan.vercel.app";

export interface Crumb {
  label: string;
  href: string;
}

export default function BreadcrumbNav({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Accueil", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-4 py-4 text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-white/50">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/30" aria-hidden />}
              {last ? (
                <span aria-current="page" className="font-medium text-pink-400">
                  {c.label}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className="flex items-center gap-1 transition-colors hover:text-white"
                >
                  {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden />}
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
