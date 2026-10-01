"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, Terminal } from "lucide-react";
import { soundFX } from "@/utils/audioFx";

interface PreloaderProps {
  onEnter: () => void;
}

export default function Preloader({ onEnter }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    soundFX.playEnterWarp();
    setIsFading(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050508] transition-opacity duration-700 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background circuit grid */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />

      {/* Atmospheric lighting orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-cyber-orange/10 blur-[120px] -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-cyber-blue/10 blur-[120px] -bottom-20 -right-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-6">
        <svg
          viewBox="0 0 800 500"
          className="w-full h-auto max-h-[60vh] drop-shadow-[0_0_35px_rgba(249,115,22,0.15)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bar-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <pattern id="striped-shirt" width="6" height="6" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" fill="#0f172a" />
              <line x1="0" y1="0" x2="0" y2="6" stroke="#f97316" strokeWidth="1.5" />
            </pattern>
          </defs>

          {/* Circuit board traces */}
          <g stroke="rgba(249, 115, 22, 0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round">
            <path d="M 50,100 L 150,100 L 180,130 L 180,250 L 220,290" />
            <path d="M 100,50 L 100,150 L 130,180 L 250,180" />
            <path d="M 50,400 L 120,400 L 160,360 L 160,300 L 200,260" />
            <path d="M 750,100 L 650,100 L 620,130 L 620,200 L 590,230" />
            <path d="M 700,50 L 700,150 L 670,180 L 580,180" />
            <path d="M 750,400 L 680,400 L 640,360 L 640,300" />
            <circle cx="220" cy="290" r="3.5" fill="#f97316" />
            <circle cx="250" cy="180" r="3.5" fill="#f97316" />
            <circle cx="200" cy="260" r="3.5" fill="#3b82f6" />
            <circle cx="590" cy="230" r="3.5" fill="#f97316" />
            <circle cx="580" cy="180" r="3.5" fill="#3b82f6" />
          </g>

          {/* Floor ground line */}
          <line x1="100" y1="418" x2="700" y2="418" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

          {/* Monitor Stand */}
          <path d="M 330,390 L 430,390 L 450,418 L 310,418 Z" fill="#1e293b" />
          <path d="M 360,330 L 355,390 L 405,390 L 400,330 Z" fill="#334155" />

          {/* Computer Monitor Bezel */}
          <rect x="200" y="100" width="360" height="230" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="4" />
          {/* Screen Area */}
          <rect x="215" y="115" width="330" height="200" fill="#050508" rx="4" />

          {/* Power LED (Pulsing Green) */}
          <circle cx="380" cy="318" r="3.5" fill="#10b981">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Screen Contents */}
          <text
            x="380"
            y="170"
            textAnchor="middle"
            fontFamily="'Outfit', sans-serif"
            fontSize="22"
            fontWeight="800"
            fill={isReady ? "#10b981" : "#f97316"}
            letterSpacing="3"
          >
            {isReady ? "SYSTEM READY" : "INITIALIZING"}
          </text>

          {/* Subtitle Telemetry */}
          <text
            x="380"
            y="192"
            textAnchor="middle"
            fontFamily="'Space Grotesk', monospace"
            fontSize="10"
            fill="#64748b"
            letterSpacing="1"
          >
            [ Siddhartha&apos;s Portfolio ]
          </text>

          {/* Loading Progress Track */}
          <rect x="250" y="212" width="260" height="12" rx="6" fill="#1e293b" />
          {/* Progress Fill */}
          <rect
            x="250"
            y="212"
            width={`${(260 * progress) / 100}`}
            height="12"
            rx="6"
            fill="url(#bar-gradient)"
            className="transition-all duration-100 ease-out"
          />

          {/* Please wait / Percent text */}
          <text
            x="380"
            y="255"
            textAnchor="middle"
            fontFamily="'Inter', sans-serif"
            fontSize="12"
            fontWeight="600"
            fill="#94a3b8"
            letterSpacing="1"
          >
            {isReady ? "100% — Ready to Launch" : `Loading Profile Modules... ${progress}%`}
          </text>

          {/* Leaning Engineer Figure (Right) */}
          <g className="preloader-character">
            {/* Neck */}
            <rect x="571" y="140" width="8" height="12" fill="#fed7aa" />
            {/* Head */}
            <circle cx="575" cy="130" r="13" fill="#fed7aa" />
            {/* Hair */}
            <path d="M 561,128 C 561,114 588,114 588,126 C 583,121 573,121 561,128 Z" fill="#334155" />
            {/* Torso */}
            <path d="M 565,150 L 585,150 L 588,250 L 568,250 Z" fill="url(#striped-shirt)" />
            {/* Leaning Legs */}
            <path d="M 572,250 L 577,410" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
            <path d="M 584,250 L 594,405" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
            {/* Shoes */}
            <path d="M 572,410 C 572,408 584,408 586,410 C 586,414 570,414 572,410 Z" fill="#f8fafc" />
            <path d="M 589,405 C 589,403 601,403 603,405 C 603,409 587,409 589,405 Z" fill="#cbd5e1" />
            {/* Arms */}
            <path d="M 565,153 Q 555,125 560,105" stroke="#334155" strokeWidth="9" fill="none" strokeLinecap="round" />
            <circle cx="560" cy="100" r="5.5" fill="#fed7aa" />
            <path d="M 585,153 L 596,178 L 580,180" stroke="#334155" strokeWidth="9" fill="none" strokeLinecap="round" />
            <circle cx="578" cy="180" r="5" fill="#fed7aa" />
            <circle cx="583" cy="180" r="2.5" fill="#f97316" />
          </g>
        </svg>

        {/* Enter Portfolio Button */}
        <div className="h-16 flex items-center justify-center mt-2">
          <button
            onClick={handleEnterClick}
            className={`group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyber-orange to-[#ff5722] text-black font-heading font-extrabold text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:shadow-[0_0_50px_rgba(249,115,22,0.9)] hover:scale-105 active:scale-95 transition-all duration-500 ${
              isReady
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <span>Enter Portfolio</span>
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Small bypass link */}
        <button
          onClick={handleEnterClick}
          className="mt-4 text-xs font-mono text-cyber-slate hover:text-cyber-orange transition-colors"
        >
          Skip Intro &gt;&gt;
        </button>
      </div>
    </div>
  );
}
