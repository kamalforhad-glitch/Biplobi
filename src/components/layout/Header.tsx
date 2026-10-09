"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserPlus, Menu, X } from "lucide-react";
import { navigationLinks } from "@/data/culturalData";
import { Container } from "./Container";
import { Button } from "../ui/Button";

interface HeaderProps {
  onJoinClick?: () => void;
}

export function Header({ onJoinClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(30,20,10,0.06)] border-b border-[#E6DCD1]"
          : "bg-[#FAF6F0] border-b border-[#EFE8DF]"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-18 sm:h-22 gap-2 w-full">
          {/* Logo & Organization Name */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0 min-w-max"
          >
            {/* Handcrafted Cultural Emblem */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE0] p-0.5 sm:p-1 border-2 border-[#9E1B22]/30 shadow-xs group-hover:border-[#9E1B22] transition-colors flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-xs"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Ring Motif */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#195229"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="41"
                  stroke="#D97706"
                  strokeWidth="1.5"
                />
                
                {/* Flame / Sprout / Sun Symbol of Cultural Awakening */}
                <path
                  d="M50 14 C56 26, 68 34, 68 48 C68 62, 58 72, 48 72 C36 72, 30 62, 34 50 C36 42, 42 36, 44 28 C45 23, 48 18, 50 14 Z"
                  fill="#9E1B22"
                />
                <path
                  d="M51 28 C55 36, 62 42, 60 52 C58 60, 52 64, 47 64 C42 64, 40 58, 42 50 C44 42, 48 35, 51 28 Z"
                  fill="#EA580C"
                />
                <circle cx="50" cy="50" r="7" fill="#FDE047" />

                {/* Green Leaf / Sprout of Culture */}
                <path
                  d="M32 60 C26 52, 28 38, 38 42 C38 52, 34 58, 32 60 Z"
                  fill="#195229"
                />
                <path
                  d="M66 60 C72 52, 70 38, 60 42 C60 52, 64 58, 66 60 Z"
                  fill="#195229"
                />
              </svg>
            </div>

            {/* Name & Tagline */}
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight text-[#9E1B22] font-serif-bengali leading-tight whitespace-nowrap">
                বিপ্লবী সাংস্কৃতিক ঐক্য
              </span>
              <span className="hidden sm:inline text-xs sm:text-[13px] text-[#635C54] font-medium tracking-wide mt-0.5 whitespace-nowrap">
                অন্যায়ের বিরুদ্ধে আজীবন
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {navigationLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2 lg:px-2.5 xl:px-3 py-1.5 text-xs lg:text-[13.5px] xl:text-[15px] font-medium rounded-lg transition-colors duration-150 whitespace-nowrap ${
                    isActive
                      ? "text-[#9E1B22] font-semibold"
                      : "text-[#2D2823] hover:text-[#9E1B22] hover:bg-[#F3ECE1]/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#9E1B22] rounded-full animate-in fade-in duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:block">
              <Link href="/membership">
                <Button
                  variant="primary"
                  size="sm"
                  icon={<UserPlus className="w-4 h-4" />}
                  iconPosition="left"
                  onClick={onJoinClick}
                  className="text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1.5 sm:py-2 shadow-xs shrink-0"
                >
                  যুক্ত হন
                </Button>
              </Link>
            </div>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="মেনু খুলুন"
              className="lg:hidden w-10 h-10 rounded-lg bg-[#F0E6D8] border border-[#E0D4C5] text-[#1E1B18] flex items-center justify-center hover:bg-[#E5D9C9] transition-colors cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#E6DCD1] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1.5">
            {navigationLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? "bg-[#9E1B22]/10 text-[#9E1B22] font-semibold"
                      : "text-[#2D2823] hover:bg-[#F3ECE1]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#9E1B22]" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#E6DCD1]">
            <Link href="/membership" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="primary"
                size="md"
                icon={<UserPlus className="w-4 h-4" />}
                onClick={onJoinClick}
                className="w-full text-base font-semibold"
              >
                যুক্ত হন
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
