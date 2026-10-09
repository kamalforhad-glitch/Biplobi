import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "amber";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-full";

  const sizeStyles = {
    sm: "text-sm px-4 py-1.5 gap-1.5",
    md: "text-base px-6 py-2.5 gap-2",
    lg: "text-lg px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#9E1B22] text-white hover:bg-[#80141A] active:bg-[#680E13] shadow-[0_4px_14px_rgba(158,27,34,0.25)] hover:shadow-[0_6px_20px_rgba(158,27,34,0.35)] hover:-translate-y-0.5",
    secondary:
      "bg-[#195229] text-white hover:bg-[#123E1E] active:bg-[#0D2D16] shadow-[0_4px_14px_rgba(25,82,41,0.25)] hover:shadow-[0_6px_20px_rgba(25,82,41,0.35)] hover:-translate-y-0.5",
    amber:
      "bg-[#D97706] text-white hover:bg-[#B45309] active:bg-[#92400E] shadow-[0_4px_14px_rgba(217,119,6,0.25)] hover:-translate-y-0.5",
    outline:
      "bg-white/80 backdrop-blur-xs text-[#1E1B18] border border-[#D5C7B8] hover:bg-[#F3ECE1] hover:border-[#BFAF9F] active:bg-[#EAE1D3]",
    ghost:
      "bg-transparent text-[#1E1B18] hover:bg-[#F0E6D8] active:bg-[#E4D8C7]",
  };

  return (
    <button
      className={twMerge(
        clsx(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}

