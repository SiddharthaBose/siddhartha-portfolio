"use client";

import React, { useState } from "react";
import {
  Code,
  Landmark,
  Database,
  BarChart3,
  Terminal,
  Users,
  ChevronDown,
  Sparkles,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import {
  portfolioData,
  TechDiagnosticModule,
  LanguageItem,
  BentoCardItem,
} from "@/data/portfolioData";
import { soundFX } from "@/utils/audioFx";

export default function DiagnosticSkills() {
  const [activeModuleId, setActiveModuleId] = useState<string | null>("frontend-web");

  const toggleModule = (id: string) => {
    soundFX.playClick();
    setActiveModuleId((prev) => (prev === id ? null : id));
  };

  const getModuleIcon = (iconName: string, theme: string) => {
    const colorClass =
      theme === "orange"
        ? "text-cyber-orange"
        : theme === "blue"
        ? "text-cyber-blue"
        : theme === "green"
        ? "text-emerald-400"
        : theme === "yellow"
        ? "text-amber-400"
        : theme === "purple"
        ? "text-purple-400"
        : "text-cyber-emerald";

    const props = { className: `w-5 h-5 ${colorClass}` };
    switch (iconName) {
      case "code":
        return <Code {...props} />;
      case "landmark":
        return <Landmark {...props} />;
      case "database":
        return <Database {...props} />;
      case "bar-chart":
        return <BarChart3 {...props} />;
      case "terminal":
        return <Terminal {...props} />;
      case "users":
        return <Users {...props} />;
      default:
        return <Code {...props} />;
    }
  };

  return (
    <section id="skills" className="relative py-28 bg-[#070a12] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyber-blue/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-cyber-orange/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            SKILLS &amp; <span className="text-cyber-orange">DIAGNOSTICS</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyber-orange" />
            <span className="w-2.5 h-2.5 rotate-45 border border-cyber-orange bg-cyber-dark" />
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyber-orange" />
          </div>
        </div>

        {/* Top Grid: Profile Card (Left) & Diagnostics Console (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-20">
          {/* Left: Professional Profile Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative p-6 rounded-2xl bg-[#0b0f19]/90 border border-white/10 shadow-hud-card backdrop-blur-md overflow-hidden">
              <span className="hud-corner hud-corner-tl" />
              <span className="hud-corner hud-corner-tr" />
              <span className="hud-corner hud-corner-bl" />
              <span className="hud-corner hud-corner-br" />

              {/* Avatar Frame with Glowing Badges */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyber-card via-[#0b0f19] to-black border border-white/15 flex flex-col items-center justify-center p-6 shadow-inner group">
                <div className="w-24 h-24 rounded-full bg-cyber-card border-2 border-cyber-orange flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.4)] mb-4">
                  <span className="font-heading font-extrabold text-3xl text-cyber-orange">
                    SB
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {portfolioData.personal.name}
                  </h3>
                  <p className="text-xs font-mono text-cyber-orange">
                    {portfolioData.personal.role}
                  </p>
                  <p className="text-xs font-mono text-cyber-slate mt-1">
                    Profinch Solutions Pvt. Ltd. • Bangalore
                  </p>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-cyber-orange/15 text-cyber-orange border border-cyber-orange/40">
                  FINTECH / OBDX
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-cyber-blue/15 text-cyber-blue border border-cyber-blue/40">
                  FRONTEND DEV
                </div>
              </div>

              {/* Bio snippet */}
              <p className="text-xs text-cyber-light leading-relaxed font-body text-center">
                Engineering seamless enterprise interfaces at the nexus of banking workflows, modern web frameworks, and relational database systems.
              </p>
            </div>

            {/* Languages Grid */}
            <div className="p-6 rounded-2xl bg-[#0b0f19]/90 border border-white/10 shadow-hud-card backdrop-blur-md">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyber-orange" />
                <span>Languages &amp; Fluency</span>
              </h3>

              <div className="space-y-4">
                {portfolioData.languages.map((lang: LanguageItem) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-cyber-card border border-white/10 text-[10px] text-cyber-orange font-bold">
                          {lang.code}
                        </span>
                        <span className="text-white font-medium">{lang.name}</span>
                      </div>
                      <span className="text-cyber-slate">{lang.level}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full rounded-full bg-cyber-card overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyber-orange to-cyber-blue"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Diagnostic Tech Modules */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <h3 className="text-base font-heading font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyber-orange" />
                <span>Active Diagnostic Systems</span>
              </h3>
              <span className="text-xs font-mono text-cyber-slate">
                Click module to inspect diagnostics
              </span>
            </div>

            {portfolioData.technicalSkills.map((mod: TechDiagnosticModule) => {
              const isActive = activeModuleId === mod.id;

              const strokeColor =
                mod.theme === "orange"
                  ? "#f97316"
                  : mod.theme === "blue"
                  ? "#3b82f6"
                  : mod.theme === "green"
                  ? "#10b981"
                  : mod.theme === "yellow"
                  ? "#eab308"
                  : mod.theme === "purple"
                  ? "#a855f7"
                  : "#10b981";

              return (
                <div
                  key={mod.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-[#0c121e] border-cyber-orange/60 shadow-[0_0_25px_rgba(249,115,22,0.15)]"
                      : "bg-[#0b0f19]/80 border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Module Header (Clickable) */}
                  <div
                    onClick={() => toggleModule(mod.id)}
                    className="p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4">
                      {/* Circular Gauge Ring */}
                      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
                        <svg className="w-11 h-11 -rotate-90" viewBox="0 0 36 36">
                          <circle
                            cx="18"
                            cy="18"
                            r="15"
                            className="stroke-slate-800"
                            strokeWidth="3"
                            fill="none"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="15"
                            stroke={strokeColor}
                            strokeWidth="3"
                            strokeDasharray={`${(mod.percentage * 94.2) / 100}, 100`}
                            strokeLinecap="round"
                            fill="none"
                            className="transition-all duration-700 ease-out"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {getModuleIcon(mod.icon, mod.theme)}
                        </div>
                      </div>

                      {/* Titles */}
                      <div>
                        <h4 className="text-sm sm:text-base font-heading font-bold text-white">
                          {mod.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[11px] font-mono text-cyber-slate">
                            {mod.category}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-cyber-orange">
                            {mod.stateBadge}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-white">
                        {mod.percentage}%
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyber-slate transition-transform duration-300 ${
                          isActive ? "rotate-180 text-cyber-orange" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable Diagnostic Console */}
                  {isActive && (
                    <div className="px-5 pb-5 pt-2 border-t border-white/5 bg-[#070a13]">
                      <div className="font-mono text-[11px] text-cyber-slate mb-3 flex items-center gap-2">
                        <span className="text-cyber-orange">&gt;</span>
                        <span>SYSTEM DIAGNOSTICS: {mod.sysFile}</span>
                      </div>

                      <ul className="space-y-2 font-mono text-xs text-cyber-light">
                        {mod.logs.map((log, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2.5">
                            <span className="text-cyber-orange shrink-0">&gt;</span>
                            <span className="leading-snug">{log}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bento Feature Grid */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wider">
              Core Capabilities Bento
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.bentoCards.map((bento: BentoCardItem) => {
              const borderClass =
                bento.theme === "orange"
                  ? "border-cyber-orange/30 hover:border-cyber-orange"
                  : bento.theme === "blue"
                  ? "border-cyber-blue/30 hover:border-cyber-blue"
                  : bento.theme === "green"
                  ? "border-emerald-500/30 hover:border-emerald-500"
                  : "border-purple-500/30 hover:border-purple-500";

              return (
                <div
                  key={bento.id}
                  className={`p-6 rounded-2xl bg-[#0b0f19]/90 border ${borderClass} shadow-hud-card transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyber-card border border-white/10 flex items-center justify-center text-cyber-orange">
                        {getModuleIcon(bento.icon, bento.theme)}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-cyber-light">
                        {bento.statusTag}
                      </span>
                    </div>

                    <h4 className="text-base font-heading font-bold text-white mb-2">
                      {bento.title}
                    </h4>

                    <p className="text-xs text-cyber-light leading-relaxed mb-6 font-body">
                      {bento.description}
                    </p>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {bento.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-card text-cyber-slate border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
