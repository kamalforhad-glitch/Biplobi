import React from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "crimson" | "green" | "amber" | "terracotta" | "neutral" | "outline";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "crimson",
  className,
  size = "md",
}: BadgeProps) {
  const variantStyles = {
    crimson: "bg-[#FEF2F2] text-[#9E1B22] border border-[#FECACA]",
    green: "bg-[#F0FDF4] text-[#195229] border border-[#BBF7D0]",
    amber: "bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]",
    terracotta: "bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]",
    neutral: "bg-[#F3ECE1] text-[#4A433B] border border-[#E5DACE]",
    outline: "bg-transparent text-[#635C54] border border-[#D5C7B8]",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-medium",
    md: "text-xs sm:text-sm px-3 py-1 font-medium",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}

