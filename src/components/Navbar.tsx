"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Terminal, Volume2, VolumeX } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { soundFX } from "@/utils/audioFx";

interface NavbarProps {
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export default function Navbar({ onToggleMobileMenu, isMobileMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  const toggleAudio = () => {
    const next = !isAudioEnabled;
    setIsAudioEnabled(next);
    soundFX.enabled = next;
    if (next) soundFX.playClick();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "experience", "skills", "passions", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills & Diagnostics", href: "#skills" },
    { name: "Passions", href: "#passions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050508]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-heading text-xl font-bold tracking-wider text-white"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-cyber-dark border border-cyber-orange/60 shadow-[0_0_12px_rgba(249,115,22,0.35)] group-hover:border-cyber-orange transition-colors">
            <span className="text-xs font-mono font-black text-cyber-orange">SB</span>
          </div>
          <span className="group-hover:text-cyber-orange transition-colors">
            Siddhartha&apos;s <span className="text-cyber-orange">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-cyber-dark/60 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-cyber-orange text-black font-semibold shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                    : "text-cyber-light hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* HUD Audio SFX Toggle */}
          <button
            onClick={toggleAudio}
            title={isAudioEnabled ? "Mute HUD Sound Effects" : "Enable HUD Sound Effects"}
            aria-label="Toggle audio effects"
            className={`p-2 rounded-full border transition-all duration-200 ${
              isAudioEnabled
                ? "bg-cyber-card border-cyber-orange/40 text-cyber-orange shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                : "bg-cyber-card/60 border-white/10 text-cyber-slate hover:text-white"
            }`}
          >
            {isAudioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase text-white bg-cyber-card border border-cyber-orange/40 hover:border-cyber-orange hover:bg-cyber-orange/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] rounded-full transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5 text-cyber-orange" />
            <span>Resume</span>
          </a>

          <button
            onClick={onToggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-lg bg-cyber-dark border border-white/10 text-cyber-orange hover:bg-cyber-card transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
