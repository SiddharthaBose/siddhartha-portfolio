"use client";

import React from "react";
import {
  Code,
  Landmark,
  Layout,
  Database,
  Server,
  ShieldCheck,
  BarChart3,
  Smartphone,
  Terminal,
  FolderSync,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function TickerBanner() {
  const getIcon = (iconName: string, color: string) => {
    const colorClass =
      color === "orange"
        ? "text-cyber-orange"
        : color === "blue"
        ? "text-cyber-blue"
        : color === "emerald"
        ? "text-cyber-emerald"
        : color === "yellow"
        ? "text-cyber-yellow"
        : color === "purple"
        ? "text-cyber-purple"
        : "text-white";

    const props = { className: `w-4 h-4 ${colorClass}` };

    switch (iconName) {
      case "code":
        return <Code {...props} />;
      case "landmark":
        return <Landmark {...props} />;
      case "layout":
        return <Layout {...props} />;
      case "database":
        return <Database {...props} />;
      case "server":
        return <Server {...props} />;
      case "shield-check":
        return <ShieldCheck {...props} />;
      case "bar-chart":
        return <BarChart3 {...props} />;
      case "smartphone":
        return <Smartphone {...props} />;
      case "terminal":
        return <Terminal {...props} />;
      case "folder-sync":
        return <FolderSync {...props} />;
      default:
        return <Code {...props} />;
    }
  };

  const skills = portfolioData.tickerSkills;

  return (
    <div className="relative w-full py-4 bg-[#080b12] border-y border-white/5 overflow-hidden select-none">
      {/* Edge gradient fades for smooth infinite look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Double array for seamless infinite looping */}
        {[...skills, ...skills, ...skills].map((skill, index) => {
          const isOutline = skill.style === "outline";
          return (
            <div
              key={index}
              className={`flex items-center gap-2.5 mx-5 px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                isOutline
                  ? "bg-transparent border border-white/15 text-cyber-light hover:border-cyber-orange"
                  : "bg-cyber-card/80 border border-white/5 text-white hover:bg-cyber-card"
              }`}
            >
              {getIcon(skill.icon, skill.color)}
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
