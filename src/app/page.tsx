"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import TickerBanner from "@/components/TickerBanner";
import AboutHUD from "@/components/AboutHUD";
import ExperienceSection from "@/components/ExperienceSection";
import DiagnosticSkills from "@/components/DiagnosticSkills";
import SportsPassions from "@/components/SportsPassions";
import ContactSection from "@/components/ContactSection";
import QuickConnectFab from "@/components/QuickConnectFab";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when preloader or mobile menu is active
  useEffect(() => {
    if (showPreloader || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPreloader, isMobileMenuOpen]);

  return (
    <div className="relative min-h-screen bg-[#050508] text-white flex flex-col selection:bg-cyber-orange selection:text-black">
      {/* Fullscreen Interactive Preloader */}
      {showPreloader && <Preloader onEnter={() => setShowPreloader(false)} />}

      {/* Sticky Frosted Header */}
      <Navbar
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <TickerBanner />
        <AboutHUD />
        <ExperienceSection />
        <DiagnosticSkills />
        <SportsPassions />
        <ContactSection />
      </main>

      {/* Global Floating Components */}
      <ScrollToTop />
      <QuickConnectFab />

      {/* Futuristic Telemetry Footer */}
      <Footer />
    </div>
  );
}
