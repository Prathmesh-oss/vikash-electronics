import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary-blue"
  | "primary-orange"
  | "secondary"
  | "outline-blue"
  | "outline-orange"
  | "purple";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary-blue",
      size = "md",
      children,
      icon,
      iconPosition = "left",
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantClass = {
      "primary-blue": "btn-primary-blue",
      "primary-orange": "btn-primary-orange",
      secondary: "btn-secondary",
      "outline-blue": "btn-outline-blue",
      "outline-orange": "btn-outline-orange",
      purple: "btn-purple",
    }[variant];

    const sizeClass = {
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
    }[size];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "btn",
          variantClass,
          sizeClass,
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
