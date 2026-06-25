import GTATimeline from "@/components/sections/GTATimeline";
import NeonText from "@/components/ui/NeonText";

export default function HistoirePage() {
  return (
    <div className="pt-40 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <NeonText className="text-6xl md:text-8xl mb-6">HISTOIRE DE LA SAGA</NeonText>
        <p className="text-muted text-lg max-w-2xl mx-auto font-inter">
          De l&apos;humble vue de dessus de 1997 au réalisme saisissant de 2026. Revivez les moments qui ont défini le jeu vidéo moderne.
        </p>
      </div>

      <GTATimeline />

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-5xl mb-12 text-center">POURQUOI GTA 6 EST <span className="text-cyan text-gradient">DIFFÉRENT ?</span></h2>
           <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-2 md:order-1">
                    <h3 className="text-3xl mb-4 text-orange">LE RÉALISME LEONIDA</h3>
                    <p className="text-muted leading-relaxed">Leonida n&apos;est pas seulement une map, c&apos;est un écosystème vivant. La densité de population, le comportement de la faune et les cycles météorologiques repoussent les limites du moteur RAGE 9.</p>
                 </div>
                 <div className="order-1 md:order-2 aspect-video bg-border rounded-sm overflow-hidden">
                    <img src="/images/leonida_map.png" alt="GTA 6 Leonida" className="w-full h-full object-cover" />
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="aspect-video bg-border rounded-sm overflow-hidden">
                    <img src="/images/hero_bg.png" alt="GTA 6 Characters" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h3 className="text-3xl mb-4 text-cyan">LUCIA & JASON</h3>
                    <p className="text-muted leading-relaxed">Pour la première fois, la narration s&apos;articule autour d&apos;un duo façon Bonnie & Clyde. La dynamique entre les deux personnages influe sur le gameplay et les embranchements de l&apos;histoire.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
