import { cn } from "@/lib/utils";

interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function NeonText({ children, className }: NeonTextProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <span className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-r from-orange via-cyan to-gold animate-pulse" />
      <h1 className="relative text-gradient font-bebas">
        {children}
      </h1>
    </div>
  );
}
