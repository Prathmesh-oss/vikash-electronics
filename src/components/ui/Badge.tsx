import React from "react";
import { cn } from "@/lib/utils";

export type BadgeTone = "blue" | "orange" | "purple" | "red" | "yellow" | "gray";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  pulse?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  tone = "blue",
  pulse = false,
  icon,
  children,
  className,
  ...props
}: BadgeProps) {
  const toneClasses = {
    blue: "border-sky-500/40 text-sky-400 bg-sky-950/40",
    orange: "border-orange-500/40 text-orange-400 bg-orange-950/40",
    purple: "border-indigo-500/40 text-indigo-300 bg-indigo-950/50",
    red: "border-rose-500/40 text-rose-400 bg-rose-950/40",
    yellow: "border-yellow-500/40 text-yellow-300 bg-yellow-950/40",
    gray: "border-gray-600/40 text-gray-300 bg-gray-900/60",
  }[tone];

  const dotColor = {
    blue: "bg-sky-400",
    orange: "bg-orange-400",
    purple: "bg-indigo-400",
    red: "bg-rose-400",
    yellow: "bg-yellow-400",
    gray: "bg-gray-400",
  }[tone];

  return (
    <span
      className={cn("badge-tech", toneClasses, className)}
      {...props}
    >
      {pulse ? (
        <span className={cn("status-dot-pulse", dotColor)} />
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
    </span>
  );
}
