import SetupBuilder from "@/components/sections/SetupBuilder";
import ReadinessChecker from "@/components/sections/ReadinessChecker";
import NeonText from "@/components/ui/NeonText";

export default function SetupPage() {
  return (
    <div className="pt-40 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <NeonText className="text-6xl md:text-8xl mb-6">SETUP BUILDER</NeonText>
        <p className="text-muted text-lg max-w-2xl mx-auto font-inter">
          Ne laissez pas vos performances au hasard. Découvrez notre configurateur intelligent pour optimiser votre expérience sur GTA 6.
        </p>
      </div>
      
      <SetupBuilder />
      <ReadinessChecker />
      
      <section className="py-24 px-6 bg-background">
         <div className="max-w-4xl mx-auto glass p-12 text-center">
            <h3 className="text-3xl mb-6">BESOIN D&apos;UN CONSEIL PERSONNALISÉ ?</h3>
            <p className="text-muted mb-8">Nos experts hardware ont analysé les specs du moteur RAGE pour vous proposer le meilleur matériel.</p>
            <div className="flex flex-wrap justify-center gap-4">
               <div className="bg-surface p-4 border border-border rounded-sm w-48">
                  <span className="block text-2xl text-cyan mb-1">4K/60FPS</span>
                  <span className="text-[10px] text-muted uppercase tracking-widest">Performance Cible</span>
               </div>
               <div className="bg-surface p-4 border border-border rounded-sm w-48">
                  <span className="block text-2xl text-orange mb-1">150GB+</span>
                  <span className="text-[10px] text-muted uppercase tracking-widest">Espace Disque</span>
               </div>
               <div className="bg-surface p-4 border border-border rounded-sm w-48">
                  <span className="block text-2xl text-gold mb-1">3D AUDIO</span>
                  <span className="text-[10px] text-muted uppercase tracking-widest">Immersion Sonore</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
