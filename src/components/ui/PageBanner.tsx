import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "../layout/Container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  badge: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  stats?: { label: string; value: string }[];
}

export function PageBanner({
  badge,
  title,
  description,
  breadcrumbs,
  stats,
}: PageBannerProps) {
  return (
    <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#FAF6F0] border-b border-[#EFE8DF] overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-0 -z-10 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-br from-[#FCE7D0]/50 via-[#FEE2E2]/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-gradient-to-tr from-[#E2F0D9]/30 to-transparent rounded-full blur-2xl pointer-events-none" />

      <Container size="wide">
        {/* Breadcrumb Navigation */}
        <nav aria-label="ব্রেডক্রাম্ব" className="flex items-center gap-1.5 text-xs sm:text-sm text-[#736A60] mb-5">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-[#9E1B22] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#9E1B22] font-semibold">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#B8AEA2]" />
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="max-w-3xl">
          {/* Badge & Red Accent Line */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-bold text-[#9E1B22] bg-[#FAF2E8] border border-[#F0DFCD] rounded-full shadow-2xs">
              {badge}
            </span>
            <div className="w-8 h-0.5 bg-[#9E1B22] rounded-full opacity-80" />
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E1B18] tracking-tight leading-[1.25] font-serif-bengali">
            {title}
          </h1>

          {/* Narrative / Lead Text */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#554E45] leading-relaxed font-normal">
            {description}
          </p>

          {/* Optional Quick Stats Strip */}
          {stats && stats.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#EAE2D5] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl">
              {stats.map((s, idx) => {
                const isLong = s.value.length > 12;
                return (
                  <div key={idx} className="flex flex-col min-w-0 overflow-hidden">
                    <span 
                      className={`font-bold text-[#9E1B22] font-serif-bengali leading-tight ${
                        isLong 
                          ? "text-sm sm:text-base lg:text-lg break-all" 
                          : "text-2xl sm:text-3xl truncate"
                      }`}
                      title={s.value}
                    >
                      {s.value}
                    </span>
                    <span className="text-xs sm:text-sm text-[#736A60] mt-1 font-medium truncate" title={s.label}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
