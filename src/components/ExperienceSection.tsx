"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, ChevronRight } from "lucide-react";
import { portfolioData, ExperienceItem } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Background grids and glows */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-cyber-orange/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-cyber-blue/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            TECHNICAL CONSULTANT / <span className="text-cyber-orange">SOFTWARE DEVELOPER</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyber-orange" />
            <span className="w-2.5 h-2.5 rotate-45 border border-cyber-orange bg-cyber-dark" />
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyber-orange" />
          </div>
        </div>

        {/* Experience Cards Stack */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {portfolioData.experience.map((exp: ExperienceItem, idx: number) => {
            const isLatest = idx === 0;
            return (
              <div
                key={exp.id}
                className={`relative p-7 sm:p-9 rounded-2xl bg-[#0b0f19]/90 border ${
                  isLatest
                    ? "border-cyber-orange/40 shadow-[0_0_30px_rgba(249,115,22,0.15)]"
                    : "border-white/10"
                } backdrop-blur-md transition-all duration-300 hover:border-cyber-orange/60`}
              >
                {/* HUD Corners */}
                <span className="hud-corner hud-corner-tl" />
                <span className="hud-corner hud-corner-tr" />
                <span className="hud-corner hud-corner-bl" />
                <span className="hud-corner hud-corner-br" />

                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-cyber-orange/15 text-cyber-orange border border-cyber-orange/30">
                        {isLatest ? "ACTIVE ROLE" : "COMPLETED INTERNSHIP"}
                      </span>
                      <span className="text-xs font-mono text-cyber-slate">
                        EXP_{String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-cyber-light mt-1">
                      <span className="flex items-center gap-1.5 text-cyber-orange font-semibold">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-cyber-slate">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-card border border-white/10 font-mono text-xs font-bold text-white self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-cyber-orange" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Company Overview */}
                <p className="text-sm text-cyber-light leading-relaxed mb-6 font-body italic">
                  &ldquo;{exp.overview}&rdquo;
                </p>

                {/* Key Deliverables & Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-cyber-slate tracking-wider">
                    Core Technical Deliverables & Impact:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-cyber-light font-body">
                        <CheckCircle2 className="w-4 h-4 text-cyber-orange shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
