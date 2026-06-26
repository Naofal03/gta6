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
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "GTA6HQ | Guide Précommande, Date de Sortie & Setup Ultime",
  description: "Tout savoir sur GTA 6 : date de sortie le 19 novembre 2026, précommandes Amazon, meilleur setup gaming, SSD PS5 et actus Vice City. Optimisez votre expérience GTA VI.",
  keywords: ["GTA 6", "GTA VI", "date de sortie GTA 6", "précommande GTA 6", "setup gaming GTA 6", "Vice City", "SSD PS5 GTA 6"],
  authors: [{ name: "GTA6HQ Team" }],
  openGraph: {
    title: "GTA6HQ | L'expérience ultime GTA 6",
    description: "Préparez la sortie de GTA 6 avec nos guides exclusifs et le meilleur du hardware gaming.",
    url: "https://gta6-pi-cyan.vercel.app",
    siteName: "GTA6HQ",
    images: [
      {
        url: "https://media.rockstargames.com/rockstargames-new/img/global/news/upload/gta-vi-trailer-1-screencaps/01.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={cn(
          inter.variable,
          bebas.variable,
          jetbrains.variable,
          "antialiased min-h-screen flex flex-col"
        )}
      >
        <div className="noise-overlay" />
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
        <PromoBar />
        <StickyBar />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
