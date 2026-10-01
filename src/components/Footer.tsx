import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[#050508] border-t border-white/10 overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyber-orange animate-pulse" />
            <span className="font-heading font-bold text-white tracking-wider">
              {portfolioData.personal.name}
            </span>
            <span className="text-xs font-mono text-cyber-slate">
              | {portfolioData.personal.role}
            </span>
          </div>

          <p className="text-xs text-cyber-slate">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.
          </p>
        </div>

        {/* Telemetry Status */}
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
          <div className="font-mono text-[11px] text-cyber-slate">
            [ DOMAIN: FINTECH // ORACLE OBDX // FRONTEND ]
          </div>
          <div className="text-[10px] font-mono text-cyber-orange mt-0.5">
            Designed with Next.js, TypeScript &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
