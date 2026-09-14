import React from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "default" | "glass" | "purple";
export type CardGlow = "none" | "blue" | "orange" | "purple" | "red";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  glow?: CardGlow;
  ledIndicator?: boolean;
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  glow = "none",
  ledIndicator = false,
  interactive = true,
  className,
  children,
  ...props
}: CardProps) {
  const variantClass = {
    default: "card-tech",
    glass: "card-glass",
    purple: "card-tech-purple",
  }[variant];

  const glowClass = {
    none: "",
    blue: "hover-glow-blue",
    orange: "hover-glow-orange",
    purple: "hover-glow-purple",
    red: "hover-glow-red",
  }[glow];

  return (
    <div
      className={cn(
        variantClass,
        interactive && "hover-lift cursor-pointer",
        glowClass,
        className
      )}
      {...props}
    >
      {ledIndicator && <div className="card-led-indicator" />}
      {children}
    </div>
  );
}
