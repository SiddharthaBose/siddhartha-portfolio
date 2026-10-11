"use client";

import React, { useState } from "react";
import { MessageSquare, ExternalLink, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function QuickConnectFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Quick Connect Assistant" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Expanded Quick Card */}
      {isOpen && (
        <div className="mb-2 w-72 p-5 rounded-2xl bg-[#0b0f19] border border-cyber-orange/40 shadow-[0_0_30px_rgba(249,115,22,0.25)] backdrop-blur-xl animate-fade-in">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-orange animate-ping" />
              <span className="text-xs font-mono font-bold text-white uppercase">
                QUICK CONNECT
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-cyber-slate hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-cyber-light mb-4 font-body">
            Do you have any questions regarding any opportunities for me? Please click below:
          </p>

          <div className="flex flex-col gap-2">
            <a
              href={portfolioData.personal.askAnythingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-cyber-card hover:bg-cyber-orange hover:text-black text-white text-xs font-mono font-bold border border-white/10 transition-colors group"
            >
              <span>Ask Me Anything Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle quick connect menu"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#0b0f19] border border-cyber-orange/50 hover:border-cyber-orange rounded-full shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all duration-300 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-orange opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-orange" />
        </span>

        <MessageSquare className="w-4 h-4 text-cyber-orange" />
        <span className="hidden sm:inline font-mono text-xs font-bold text-white tracking-wider uppercase">
          CONNECT
        </span>
      </button>
    </aside>
  );
}
