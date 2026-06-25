import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'amazon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shimmer?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', shimmer = false, ...props }, ref) => {
    const variants = {
      primary: "bg-cyan text-background hover:bg-white shadow-[0_0_15px_rgba(0,255,204,0.3)]",
      secondary: "bg-surface text-foreground hover:bg-border",
      outline: "border border-border text-foreground hover:bg-surface",
      ghost: "text-foreground hover:bg-surface",
      amazon: "bg-orange text-white hover:bg-[#FF5712] shadow-[0_0_20px_rgba(255,69,0,0.4)]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-2.5 text-base",
      lg: "px-8 py-3.5 text-lg font-bebas",
      xl: "px-10 py-5 text-2xl font-bebas tracking-wider",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm transition-all duration-300 font-medium disabled:opacity-50 disabled:pointer-events-none active:scale-95",
          variants[variant],
          sizes[size],
          shimmer && "shimmer-btn",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
export { Button };
