"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-[#141414] text-[#E5DCD1] pt-16 pb-10 border-t-4 border-[#9E1B22]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2C2925]">
          {/* Col 1: Brand & Mission Statement (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              {/* Circular Emblem */}
              <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE0] p-1 border-2 border-[#9E1B22] flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="45" stroke="#195229" strokeWidth="3" strokeDasharray="4 2" />
                  <path
                    d="M50 14 C56 26, 68 34, 68 48 C68 62, 58 72, 48 72 C36 72, 30 62, 34 50 C36 42, 42 36, 44 28 C45 23, 48 18, 50 14 Z"
                    fill="#9E1B22"
                  />
                  <path
                    d="M51 28 C55 36, 62 42, 60 52 C58 60, 52 64, 47 64 C42 64, 40 58, 42 50 C44 42, 48 35, 51 28 Z"
                    fill="#EA580C"
                  />
                  <circle cx="50" cy="50" r="7" fill="#FDE047" />
                  <path d="M32 60 C26 52, 28 38, 38 42 C38 52, 34 58, 32 60 Z" fill="#195229" />
                  <path d="M66 60 C72 52, 70 38, 60 42 C60 52, 64 58, 66 60 Z" fill="#195229" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-serif-bengali tracking-tight">
                  বিপ্লবী সাংস্কৃতিক ঐক্য
                </h3>
                <p className="text-xs text-[#BA252D] font-medium tracking-wide">
                  অন্যায়ের বিরুদ্ধে আজীবন
                </p>
              </div>
            </div>

            <p className="text-sm text-[#A89E92] leading-relaxed max-w-sm mt-2">
              বাঙালির হাজার বছরের সমৃদ্ধ লোকসংস্কৃতি, মুক্তচিন্তা ও প্রগতিশীল মানবিক মূল্যবোধ চর্চার একটি অবিচল জাতীয় প্ল্যাটফর্ম।
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white font-serif-bengali mb-4 flex items-center gap-2">
              <span>দ্রুত লিংক</span>
              <span className="w-5 h-0.5 bg-[#9E1B22] rounded-full inline-block" />
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A89E92]">
              {[
                { label: "হোম", href: "#home" },
                { label: "আমাদের সম্পর্কে", href: "#about" },
                { label: "কার্যক্রম", href: "#programs" },
                { label: "ইভেন্ট", href: "#events" },
                { label: "যোগাযোগ", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white font-serif-bengali mb-4 flex items-center gap-2">
              <span>যোগাযোগ</span>
              <span className="w-5 h-0.5 bg-[#9E1B22] rounded-full inline-block" />
            </h4>
            <ul className="space-y-3 text-sm text-[#A89E92]">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BA252D] shrink-0" />
                <a href="mailto:info@biplobisanskritik.org" className="hover:text-white transition-colors">
                  info@biplobisanskritik.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BA252D] shrink-0" />
                <span>+৮৮০ ১৭১২-৩৪৫৬৭৮</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#BA252D] shrink-0" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Social (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white font-serif-bengali mb-4 flex items-center gap-2">
              <span>আমাদের সাথে থাকুন</span>
              <span className="w-5 h-0.5 bg-[#9E1B22] rounded-full inline-block" />
            </h4>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mb-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#24211D] border border-[#3A352F] flex items-center justify-center text-[#D5C7B8] hover:text-white hover:bg-[#9E1B22] hover:border-[#9E1B22] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#24211D] border border-[#3A352F] flex items-center justify-center text-[#D5C7B8] hover:text-white hover:bg-[#9E1B22] hover:border-[#9E1B22] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-[#24211D] border border-[#3A352F] flex items-center justify-center text-[#D5C7B8] hover:text-white hover:bg-[#9E1B22] hover:border-[#9E1B22] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#24211D] border border-[#3A352F] flex items-center justify-center text-[#D5C7B8] hover:text-white hover:bg-[#9E1B22] hover:border-[#9E1B22] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex rounded-lg overflow-hidden border border-[#3A352F] focus-within:border-[#9E1B22]">
                <input
                  type="email"
                  required
                  placeholder="ইমেইল ঠিকানা লিখুন"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1F1C19] px-3.5 py-2.5 text-xs text-white placeholder-[#786F64] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#9E1B22] hover:bg-[#BA252D] px-4 py-2.5 text-xs font-semibold text-white shrink-0 transition-colors cursor-pointer"
                >
                  সাবস্ক্রাইব
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ধন্যবাদ! আপনি নিউজলেটারে যুক্ত হয়েছেন।</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8074]">
          <p>© ২০২৫ বিপ্লবী সাংস্কৃতিক ঐক্য। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              গোপনীয়তা নীতি
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">
              ব্যবহার শর্তাবলী
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">
              যোগাযোগ
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

