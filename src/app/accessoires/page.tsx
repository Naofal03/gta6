import { PRODUCTS_FULL as PRODUCTS } from "@/data/products-full";
import ProductCard from "@/components/ui/ProductCard";
import NeonText from "@/components/ui/NeonText";

export default function AccessoiresPage() {
  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));

  return (
    <div className="pt-40 pb-24 px-6 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <NeonText className="text-6xl md:text-8xl mb-6">TOUS LES ACCESSOIRES</NeonText>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Découvrez notre sélection complète de hardware et accessoires optimisés pour Grand Theft Auto VI.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map(cat => {
            const catProducts = PRODUCTS.filter(p => p.category === cat);
            return (
              <section key={cat}>
                <h2 className="text-3xl md:text-5xl mb-8 uppercase tracking-widest border-b border-border pb-4">
                  {cat === 'jeu' ? 'Jeux' : 
                   cat === 'console' ? 'Consoles' : 
                   cat === 'manette' ? 'Manettes' : 
                   cat === 'casque' ? 'Casques Audio' : 
                   cat === 'ssd' ? 'Stockage SSD' : 
                   cat === 'tv' ? 'Téléviseurs Gaming' : 
                   cat === 'chaise' ? 'Chaises & Confort' : 'Bureaux'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {catProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
