import Hero from "@/components/hero/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import GTATimeline from "@/components/sections/GTATimeline";
import SetupBuilder from "@/components/sections/SetupBuilder";
import SetupQuiz from "@/components/sections/SetupQuiz";
import ReadinessChecker from "@/components/sections/ReadinessChecker";
import FAQ from "@/components/sections/FAQ";
import SocialProofTicker from "@/components/conversion/SocialProofTicker";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="relative">
      <Hero />
      <SocialProofTicker />
      <StatsCounter />
      
      {/* Story Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl md:text-8xl mb-8">13 ANS <br /><span className="text-cyan">D&apos;ATTENTE.</span></h2>
            <div className="space-y-6 text-muted leading-relaxed font-inter text-lg">
              <p>
                C&apos;était 2013. Le monde découvrait Los Santos. Depuis, 13 années se sont écoulées, marquant la plus longue attente de l&apos;histoire pour un titre Rockstar Games.
              </p>
              <p>
                Aujourd&apos;hui, le rêve devient réalité. <span className="text-white font-bold">GTA VI</span> nous ramène à Vice City, dans une version magnifiée, brutale et viscérale de la Floride contemporaine (Leonida).
              </p>
              <p>
                A travers les yeux de Lucia et Jason, vivez une épopée criminelle sans précédent. Mais pour en profiter pleinement, votre matériel doit être à la hauteur du défi technique colossal que représente ce titre.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
             <div className="relative aspect-video glass rounded-sm overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://media.rockstargames.com/rockstargames-new/img/global/news/upload/gta-vi-trailer-1-screencaps/03.jpg" 
                  alt="Lucia and Jason" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
             </div>
          </div>
        </div>
      </section>

      <GTATimeline />

      {/* Featured Products */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl mb-4">LES <span className="text-orange">ESSENTIELS</span></h2>
              <p className="text-muted">La sélection ultime testée et approuvée pour GTA 6.</p>
            </div>
            <Button variant="outline" size="md" className="hidden md:flex">
              VOIR TOUT LE CATALOGUE →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <SocialProofTicker />
      <SetupBuilder />
      <SetupQuiz />
      <ReadinessChecker />
      <FAQ />
    </div>
  );
}
