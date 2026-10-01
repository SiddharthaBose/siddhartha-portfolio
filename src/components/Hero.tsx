"use client";

import React, { useState, useEffect } from "react";
import { Download, Send, Linkedin, MessageSquare, ArrowRight, ShieldCheck, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const words = portfolioData.typewriterTitles;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullWord.length) {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        } else {
          // Pause at complete word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background cyber grid & glows */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/60 to-[#050508] pointer-events-none" />

      {/* Atmospheric lighting orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-cyber-orange/15 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyber-blue/15 blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Greeting */}
        <div className="inline-flex items-center gap-2 text-cyber-slate font-mono text-sm tracking-widest uppercase mb-4">
          <span>Hi Everyone...</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white mb-4">
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {portfolioData.personal.name}
          </span>
        </h1>

        {/* Typewriter text */}
        <div className="h-14 sm:h-16 flex items-center justify-center mb-6">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-mono font-bold text-cyber-orange">
            <span>{currentText}</span>
            <span className="animate-pulse font-light ml-1 text-white">|</span>
          </h2>
        </div>

        {/* Hero description */}
        <p className="max-w-2xl text-base sm:text-lg text-cyber-light leading-relaxed mb-10 font-body">
          {portfolioData.personal.bioSummary}
        </p>

        {/* Quick Telemetry Indicators */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg mb-10">
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyber-card/60 border border-white/5 backdrop-blur-sm">
            <span className="text-xl sm:text-2xl font-mono font-bold text-cyber-orange">
              {portfolioData.personal.experienceYears}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-cyber-slate uppercase tracking-wider">
              Years Experience
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyber-card/60 border border-white/5 backdrop-blur-sm">
            <span className="text-xl sm:text-2xl font-mono font-bold text-cyber-blue">5+</span>
            <span className="text-[10px] sm:text-xs font-mono text-cyber-slate uppercase tracking-wider">
              Fintech Projects
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyber-card/60 border border-white/5 backdrop-blur-sm">
            <span className="text-xl sm:text-2xl font-mono font-bold text-cyber-emerald">OBDX</span>
            <span className="text-[10px] sm:text-xs font-mono text-cyber-slate uppercase tracking-wider">
              Core Specialty
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-cyber-orange to-[#ea580c] text-black font-heading font-extrabold text-xs tracking-wider uppercase rounded-full shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-cyber-card/80 hover:bg-cyber-card text-white font-mono text-xs font-bold tracking-wider uppercase border border-white/15 hover:border-cyber-orange/60 rounded-full transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
          >
            <Download className="w-4 h-4 text-cyber-orange" />
            <span>Download Resume</span>
          </a>

          <a
            href="https://www.linkedin.com/in/siddharthabose-0b163a172/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-cyber-card/80 hover:bg-cyber-card text-cyber-light hover:text-white font-mono text-xs tracking-wider uppercase border border-white/10 hover:border-cyber-blue/60 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <Linkedin className="w-4 h-4 text-cyber-blue" />
            <span>LinkedIn</span>
          </a>

          <a
            href={portfolioData.personal.askAnythingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-cyber-card/80 hover:bg-cyber-card text-cyber-light hover:text-white font-mono text-xs tracking-wider uppercase border border-white/10 hover:border-cyber-emerald/60 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <MessageSquare className="w-4 h-4 text-cyber-emerald" />
            <span>Ask Me Anything</span>
          </a>
        </div>
      </div>
    </section>
  );
}
