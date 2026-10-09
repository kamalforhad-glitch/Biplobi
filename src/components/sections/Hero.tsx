"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

interface HeroProps {
  onExploreClick?: () => void;
  onJoinClick: () => void;
}

export function Hero({ onExploreClick, onJoinClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden overflow-x-clip">
      {/* Decorative Warm Ambient Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-72 sm:w-[450px] lg:w-[600px] h-72 sm:h-[450px] lg:h-[600px] bg-gradient-to-br from-[#FCE7D0]/40 via-[#FEE2E2]/25 to-transparent rounded-full blur-3xl pointer-events-none max-w-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 sm:w-[350px] lg:w-[450px] h-64 sm:h-[350px] lg:h-[450px] bg-gradient-to-tr from-[#E2F0D9]/30 to-transparent rounded-full blur-2xl pointer-events-none max-w-full" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Editorial Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-10">
            {/* Small red decorative line */}
            <div className="w-12 h-1 bg-[#9E1B22] rounded-full mb-6" />

            {/* Large Bengali Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[52px] font-bold text-[#1E1B18] tracking-tight leading-[1.2] font-serif-bengali">
              সংস্কৃতি, সৃজনশীলতা ও <br />
              <span className="text-[#9E1B22]">
                সামাজিক দায়বদ্ধতার <br className="hidden sm:inline" />
                প্ল্যাটফর্ম
              </span>
            </h1>

            {/* Subtitle / Narrative */}
            <p className="mt-6 text-base sm:text-lg text-[#554E45] leading-relaxed max-w-xl font-normal">
              আমরা সংস্কৃতির নানা ধারাকে সংগ্রহ, সংরক্ষণ ও উপস্থাপন করি এবং তার বিস্তার ও বিকাশে কাজ করি—একটি ন্যায়ভিত্তিক, মানবিক ও সৃজনশীল সমাজ গঠনের লক্ষ্যে।
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                onClick={onJoinClick}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-base font-semibold px-6 py-2.5"
              >
                আমাদের সম্পর্কে
              </Button>

              <Link href="#programs" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="md"
                  onClick={onExploreClick}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full sm:w-auto text-base font-medium px-6 py-2.5"
                >
                  কার্যক্রম দেখুন
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Asymmetrical Cultural Artwork Composition */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] xl:max-w-[620px] transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/hero-artwork.png"
                alt="বিপ্লবী সাংস্কৃতিক ঐক্য - সাংস্কৃতিক চিত্রকলা"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-xs"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
