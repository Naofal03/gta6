import { Metadata } from "next";
import SetupQuiz from "@/components/sections/SetupQuiz";
import NeonText from "@/components/ui/NeonText";

export const metadata: Metadata = {
  title: "Quiz : Quel Setup GTA 6 Est Fait Pour Toi ? | GTA6HQ",
  description:
    "5 questions pour découvrir exactement quel setup GTA 6 correspond à votre profil et budget. Résultat instantané avec nos recommandations personnalisées.",
  alternates: { canonical: "https://gta6hq.fr/quiz" },
};

export default function QuizPage() {
  return (
    <div className="pt-40 pb-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <span className="text-cyan text-[10px] font-mono uppercase tracking-[0.4em] font-bold block mb-4">
          CONFIGURATEUR PERSONNEL
        </span>
        <NeonText className="text-6xl md:text-8xl mb-6">TON SETUP<br />IDÉAL</NeonText>
        <p className="text-muted text-lg max-w-2xl mx-auto font-inter leading-relaxed">
          Répondez à 5 questions simples. On vous dit exactement quoi acheter
          pour vivre GTA 6 au maximum de votre budget.
        </p>
      </div>

      <SetupQuiz />
    </div>
  );
}
