import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  onLinkClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  linkText,
  linkHref,
  onLinkClick,
  icon,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10",
        align === "center" && "text-center sm:text-center justify-center",
        className
      )}
    >
      <div className={clsx(align === "center" && "mx-auto")}>
        <div className="flex items-center gap-3">
          {icon && <span className="text-[#9E1B22] shrink-0">{icon}</span>}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1E1B18] tracking-tight flex items-center font-serif-bengali">
            {title}
            <span className="w-8 sm:w-10 h-0.5 sm:h-1 bg-[#9E1B22] rounded-full inline-block ml-3.5 shrink-0 opacity-90" />
          </h2>
        </div>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-[#635C54] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {linkText && (
        <div className="shrink-0">
          {linkHref ? (
            <Link
              href={linkHref}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#9E1B22] hover:text-[#7F141A] transition-colors group cursor-pointer"
            >
              <span>{linkText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <button
              onClick={onLinkClick}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#9E1B22] hover:text-[#7F141A] transition-colors group cursor-pointer"
            >
              <span>{linkText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

