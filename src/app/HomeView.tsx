"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { RecentPrograms } from "@/components/sections/RecentPrograms";
import { AreasOfWork } from "@/components/sections/AreasOfWork";
import { EventCalendar } from "@/components/sections/EventCalendar";
import { MediaGallery } from "@/components/sections/MediaGallery";
import { MemberOrganizations } from "@/components/sections/MemberOrganizations";
import { PublicationsNews } from "@/components/sections/PublicationsNews";
import { MembershipModal } from "@/components/sections/MembershipModal";

export default function HomeView() {
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* 1. Editorial Bengali Hero Section */}
      <Hero
        onExploreClick={() => {
          router.push("/activities");
        }}
        onJoinClick={() => {
          router.push("/about");
        }}
      />

      {/* 2. Recent Programs Section (4 Cards in a row) */}
      <RecentPrograms />

      {/* 3. Areas of Work (8 Cultural Disciplines) */}
      <AreasOfWork />

      {/* 4. Mid Split Section: Event Calendar (Left, 7 cols) & Media Gallery (Right, 5 cols) */}
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

      {/* 5. Bottom Split Section: Member Organizations (Left, 7 cols) & Publications (Right, 5 cols) */}
      <section id="publications" className="py-12 sm:py-16 bg-[#FAF6F0] border-t border-[#EFE8DF]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Member Organizations & Network (7 cols) */}
            <div id="membership" className="lg:col-span-7 xl:col-span-7">
              <MemberOrganizations onJoinClick={() => router.push("/membership")} />
            </div>

            {/* Right Column: Publications & News (5 cols) */}
            <div className="lg:col-span-5 xl:col-span-5">
              <PublicationsNews />
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Membership Registration Modal */}
      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
      />
    </>
  );
}

