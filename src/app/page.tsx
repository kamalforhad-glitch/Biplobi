"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { RecentPrograms } from "@/components/sections/RecentPrograms";
import { AreasOfWork } from "@/components/sections/AreasOfWork";
import { EventCalendar } from "@/components/sections/EventCalendar";
import { MediaGallery } from "@/components/sections/MediaGallery";
import { MemberOrganizations } from "@/components/sections/MemberOrganizations";
import { PublicationsNews } from "@/components/sections/PublicationsNews";
import { MembershipModal } from "@/components/sections/MembershipModal";

export default function Home() {
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#1E1B18] font-sans">
      {/* 1. Header with Sticky Navigation & Logo */}
      <Header onJoinClick={() => setIsMembershipOpen(true)} />

      <main className="flex-1">
        {/* 2. Editorial Bengali Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById("programs");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          onJoinClick={() => setIsMembershipOpen(true)}
        />

        {/* 3. Recent Programs Section (4 Cards in a row) */}
        <RecentPrograms />

        {/* 5. Areas of Work (8 Cultural Disciplines) */}
        <AreasOfWork />

        {/* 6. Mid Split Section: Event Calendar (Left, 7 cols) & Media Gallery (Right, 5 cols) */}
        <section id="events" className="py-12 sm:py-16 bg-[#FAF6F0] border-t border-[#EFE8DF]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Left Column: Event Calendar (7 cols on desktop) */}
              <div className="lg:col-span-7 xl:col-span-7">
                <EventCalendar />
              </div>

              {/* Right Column: Media Gallery (5 cols on desktop) */}
              <div id="media" className="lg:col-span-5 xl:col-span-5">
                <MediaGallery />
              </div>
            </div>
          </Container>
        </section>

        {/* 7. Bottom Split Section: Member Organizations (Left, 7 cols) & Publications (Right, 5 cols) */}
        <section id="publications" className="py-12 sm:py-16 bg-[#FAF6F0] border-t border-[#EFE8DF]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Left Column: Member Organizations & Network (7 cols) */}
              <div id="membership" className="lg:col-span-7 xl:col-span-7">
                <MemberOrganizations onJoinClick={() => setIsMembershipOpen(true)} />
              </div>

              {/* Right Column: Publications & News (5 cols) */}
              <div className="lg:col-span-5 xl:col-span-5">
                <PublicationsNews />
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* 8. Institutional Dark Footer */}
      <Footer />

      {/* Interactive Membership Registration Modal */}
      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
      />
    </div>
  );
}
