import { notFound } from "next/navigation";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { getGuideBySlug, renderMarkdown } from "@/lib/markdown";
import GuideLayout from "@/components/ui/GuideLayout";
import StickyBuyBar from "@/components/conversion/StickyBuyBar";
import { PRODUCTS_FULL } from "@/data/products-full";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes at build time
export async function generateStaticParams() {
  try {
    const contentDir = path.join(process.cwd(), "src/content/guides");
    if (!fs.existsSync(contentDir)) {
      return [];
    }
    const files = fs.readdirSync(contentDir);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => ({
        slug: file.replace(".md", ""),
      }));
  } catch (error) {
    console.error("Error reading guides content directory:", error);
    return [];
  }
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide non trouvé | GTA6HQ",
      description: "Le guide demandé est introuvable.",
    };
  }

  const canonicalUrl = guide.metadata.canonical || `https://gta6-pi-cyan.vercel.app/guides/${slug}`;

  return {
    title: `${guide.metadata.title} | GTA6HQ`,
    description: guide.metadata.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${guide.metadata.title} | GTA6HQ`,
      description: guide.metadata.description,
      type: "article",
      publishedTime: guide.metadata.date,
      authors: ["GTA6HQ Editorial"],
      images: [
        {
          url: guide.metadata.coverImage || "https://gta6-pi-cyan.vercel.app/images/hero_bg.png",
          width: 1200,
          height: 630,
          alt: guide.metadata.title,
        },
      ],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Get other guides for the "Vous aimerez aussi" section
  let relatedGuides: { slug: string; title: string; category: string }[] = [];
  try {
    const contentDir = path.join(process.cwd(), "src/content/guides");
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir);
      relatedGuides = files
        .filter((file) => file.endsWith(".md") && file !== `${slug}.md`)
        .slice(0, 2)
        .map((file) => {
          const relatedSlug = file.replace(".md", "");
          const fileContent = fs.readFileSync(path.join(contentDir, file), "utf-8");
          // Quick extract of metadata
          const titleMatch = fileContent.match(/title:\s*"([^"]+)"/) || fileContent.match(/title:\s*([^\n]+)/);
          const categoryMatch = fileContent.match(/category:\s*"([^"]+)"/) || fileContent.match(/category:\s*([^\n]+)/);
          
          return {
            slug: relatedSlug,
            title: titleMatch ? titleMatch[1].trim().replace(/^['"]|['"]$/g, "") : "Autre guide",
            category: categoryMatch ? categoryMatch[1].trim().replace(/^['"]|['"]$/g, "") : "Guide",
          };
        });
    }
  } catch (error) {
    console.error("Error fetching related guides:", error);
  }

  // Build JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": guide.metadata.title,
    "description": guide.metadata.description,
    "datePublished": guide.metadata.date,
    "dateModified": guide.metadata.date,
    "author": {
      "@type": "Organization",
      "name": "GTA6HQ Editorial",
      "url": "https://gta6-pi-cyan.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GTA6HQ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gta6-pi-cyan.vercel.app/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://gta6-pi-cyan.vercel.app/guides/${slug}`
    }
  };

  // Resolve primary product for sticky conversion bar
  const primaryProduct = guide.metadata.primaryProduct
    ? PRODUCTS_FULL.find((p) => p.id === guide.metadata.primaryProduct)
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Sticky Amazon Buy Bar */}
      {primaryProduct && (
        <StickyBuyBar
          productName={primaryProduct.name}
          price={formatPrice(primaryProduct.price)}
          amazonUrl={primaryProduct.amazonUrl}
        />
      )}
      <GuideLayout metadata={guide.metadata} headings={guide.headings} primaryProduct={primaryProduct}>
        {/* Render markdown parsed content */}
        <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-bebas">
          {renderMarkdown(guide.content)}
        </div>

        {/* Related Guides Section */}
        {relatedGuides.length > 0 && (
          <div className="mt-20 border-t border-border/30 pt-12">
            <h3 className="text-3xl font-bebas tracking-wide mb-8 uppercase">Vous aimerez aussi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guides/${related.slug}`}
                  className="glass p-6 rounded-sm border border-border/50 hover:border-cyan/30 transition-all duration-300 group flex items-start justify-between gap-4"
                >
                  <div>
                    <span className="text-[9px] font-mono text-cyan uppercase tracking-widest block mb-2">
                      {related.category}
                    </span>
                    <h4 className="text-xl font-bebas text-white group-hover:text-cyan transition-colors uppercase tracking-wide">
                      {related.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center group-hover:bg-cyan/10 transition-colors flex-shrink-0">
                    <ArrowRight size={14} className="text-muted group-hover:text-cyan transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </GuideLayout>
    </>
  );
}
