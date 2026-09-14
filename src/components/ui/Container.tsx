import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tight?: boolean;
  className?: string;
}

export function Container({
  children,
  tight = false,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        tight ? "container-tight" : "container-custom",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
