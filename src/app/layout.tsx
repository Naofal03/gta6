import type { Metadata } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import StickyBar from "@/components/layout/StickyBar";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PromoBar from "@/components/ui/PromoBar";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gta6-pi-cyan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GTA 6 (19 novembre 2026) : Prix, Éditions, Setup & Guides — GTA6HQ",
    template: "%s — GTA6HQ",
  },
  description:
    "GTA 6 est sorti le 19 novembre 2026 sur PS5 et Xbox Series X|S. Meilleur prix, Standard vs Ultimate, espace disque GTA 6 (150 Go), SSD PS5, TV 4K 120fps et casque audio : tous nos guides experts en français.",
  keywords: [
    "GTA 6",
    "GTA VI",
    "Grand Theft Auto 6",
    "date sortie GTA 6",
    "prix GTA 6",
    "acheter GTA 6",
    "GTA 6 PS5",
    "GTA 6 Xbox Series",
    "setup gaming GTA 6",
    "Vice City GTA 6",
    "SSD PS5 GTA 6",
    "TV 4K GTA 6",
    "édition standard GTA 6",
    "édition ultimate GTA 6",
    "GTA 6 taille téléchargement",
    "GTA 6 sortie France",
    "Lucia Jason GTA 6",
    "Leonida GTA 6",
  ],
  authors: [{ name: "GTA6HQ" }],
  creator: "GTA6HQ",
  publisher: "GTA6HQ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-FR": SITE_URL,
    },
  },
  openGraph: {
    title: "GTA 6 est sorti — Prix, Éditions & Setup Idéal | GTA6HQ",
    description:
      "La référence française sur GTA VI : où acheter au meilleur prix, Standard ou Ultimate, préparer son setup PS5/Xbox et tout ce qu'il faut pour jouer à Vice City dès le premier jour.",
    url: SITE_URL,
    siteName: "GTA6HQ",
    images: [
      {
        url: `${SITE_URL}/images/hero_bg.png`,
        width: 1200,
        height: 630,
        alt: "GTA 6 — Lucia et Jason à Vice City, Leonida",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA 6 est sorti — Prix, Setup & Guides | GTA6HQ",
    description:
      "GTA VI disponible sur PS5 & Xbox Series X|S. Standard (79,99€) vs Ultimate (99,99€) : tout ce qu'il faut savoir. Guides experts en français.",
    images: [`${SITE_URL}/images/hero_bg.png`],
    creator: "@GTA6HQ",
    site: "@GTA6HQ",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  other: {
    "p:domain_verify": "3081a7bb7bd65d7dd306dab107504df1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Preload LCP image */}
        <link
          rel="preload"
          as="image"
          href="/images/hero_bg.png"
          fetchPriority="high"
        />
        {/* DNS prefetch for affiliate links */}
        <link rel="dns-prefetch" href="https://amzn.to" />
        <link rel="dns-prefetch" href="https://www.amazon.fr" />
      </head>
      <body
        className={cn(
          inter.variable,
          bebas.variable,
          jetbrains.variable,
          "antialiased min-h-screen flex flex-col"
        )}
      >
        <div className="noise-overlay" aria-hidden="true" />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Schema: WebSite */}
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GTA6HQ",
              alternateName: "GTA 6 HQ",
              url: SITE_URL,
              description:
                "La référence française sur GTA VI (sortie 19 novembre 2026) : prix, éditions, guides setup PS5/Xbox, SSD et TV 4K.",
              inLanguage: "fr-FR",
              publisher: {
                "@type": "Organization",
                name: "GTA6HQ",
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE_URL}/images/gta6hq-icon.png`,
                  width: 512,
                  height: 512,
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${SITE_URL}/guides/{search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Schema: Organization */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GTA6HQ",
              url: SITE_URL,
              logo: `${SITE_URL}/images/gta6hq-icon.png`,
              sameAs: [],
              description:
                "Site de référence français indépendant dédié à Grand Theft Auto VI. Guides d'achat, comparatifs de setup et informations sur GTA 6.",
            }),
          }}
        />

        {/* Schema: BreadcrumbList (home) */}
        <Script
          id="schema-breadcrumb-home"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: SITE_URL,
                },
              ],
            }),
          }}
        />

        <PromoBar />
        <StickyBar />
        <Navigation />
        <main className="flex-grow" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
