"use client";

import React from "react";
import { Download, X, Home, User, Briefcase, Cpu, Flame, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About Me", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills & Diagnostics", href: "#skills", icon: Cpu },
    { name: "Passions & Sports", href: "#passions", icon: Flame },
    { name: "Get in Touch", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-cyber-dark border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 font-heading font-bold text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-orange animate-pulse" />
              <span>NAVIGATION</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-1 text-cyber-slate hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium text-cyber-light hover:text-white hover:bg-cyber-card transition-colors group"
                >
                  <Icon className="w-4 h-4 text-cyber-slate group-hover:text-cyber-orange transition-colors" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase text-black bg-cyber-orange hover:bg-cyber-orangeHover rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <div className="text-center font-mono text-[10px] text-cyber-slate">
            [ SIDDHARTHA BOSE // HUD_V2.0 ]
          </div>
        </div>
      </aside>
    </>
  );
}
