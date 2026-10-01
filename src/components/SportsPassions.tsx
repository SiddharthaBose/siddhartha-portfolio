"use client";

import React, { useRef, useEffect } from "react";
import { Music, Shield, Zap, Palette, Flame, Activity } from "lucide-react";
import { portfolioData, PassionItem } from "@/data/portfolioData";
import { soundFX } from "@/utils/audioFx";

export default function SportsPassions() {
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  // Card particle burst animations on hover
  const handleCardMouseEnter = (index: number, color: string) => {
    soundFX.playHoverBlip();
    const canvas = canvasRefs.current[index];
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 160);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
    }> = [];

    for (let i = 0; i < 18; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2.5 + 1;
      particles.push({
        x: width / 2,
        y: height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 2.5 + 1,
        alpha: 1,
        color: color,
      });
    }

    let frameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      let alive = false;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.03;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      if (alive) {
        frameId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    animate();
  };

  const handleCardClick = (index: number, color: string) => {
    soundFX.playClick();
    const canvas = canvasRefs.current[index];
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 160);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
    }> = [];

    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1.5;
      particles.push({
        x: width / 2,
        y: height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 3 + 1,
        alpha: 1,
        color: color,
      });
    }

    const animateClick = () => {
      ctx.clearRect(0, 0, width, height);
      let alive = false;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.025;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      if (alive) {
        requestAnimationFrame(animateClick);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    animateClick();
  };

  const getPassionIcon = (iconName: string) => {
    switch (iconName) {
      case "music":
        return <Music className="w-6 h-6 text-cyber-orange" />;
      case "shield":
        return <Shield className="w-6 h-6 text-cyber-blue" />;
      case "zap":
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case "palette":
        return <Palette className="w-6 h-6 text-purple-400" />;
      default:
        return <Flame className="w-6 h-6 text-cyber-orange" />;
    }
  };

  return (
    <section id="passions" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Background canvas and grids */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-cyber-orange/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-cyber-blue/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            FAVORITE SPORTS <span className="text-cyber-orange">&amp; PASSIONS</span>
          </h2>

          <p className="max-w-xl text-sm text-cyber-light font-body mt-3">
            Beyond technology, these disciplines cultivate strategic focus, rapid reaction times, precision, and creative expression.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyber-orange" />
            <span className="w-2.5 h-2.5 rotate-45 border border-cyber-orange bg-cyber-dark" />
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyber-orange" />
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.sportsPassions.map((passion: PassionItem, idx: number) => {
            const themeColor =
              passion.theme === "orange"
                ? "#f97316"
                : passion.theme === "blue"
                ? "#3b82f6"
                : passion.theme === "green"
                ? "#10b981"
                : "#a855f7";

            const borderGlowClass =
              passion.theme === "orange"
                ? "hover:border-cyber-orange/70 hover:shadow-glow-orange"
                : passion.theme === "blue"
                ? "hover:border-cyber-blue/70 hover:shadow-glow-blue"
                : passion.theme === "green"
                ? "hover:border-cyber-emerald/70 hover:shadow-glow-emerald"
                : "hover:border-cyber-purple/70 hover:shadow-glow-purple";

            return (
              <div
                key={passion.id}
                onMouseEnter={() => handleCardMouseEnter(idx, themeColor)}
                onClick={() => handleCardClick(idx, themeColor)}
                className={`group relative p-7 rounded-2xl bg-[#0b0f19]/90 border border-white/10 shadow-hud-card transition-all duration-300 hover:-translate-y-1.5 ${borderGlowClass} backdrop-blur-md overflow-hidden flex flex-col justify-between cursor-pointer select-none`}
              >
                {/* HUD Corners */}
                <span className="hud-corner hud-corner-tl" />
                <span className="hud-corner hud-corner-tr" />
                <span className="hud-corner hud-corner-bl" />
                <span className="hud-corner hud-corner-br" />

                {/* Particle Canvas layer */}
                <canvas
                  ref={(el) => {
                    canvasRefs.current[idx] = el;
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                />

                <div>
                  {/* Telemetry Header */}
                  <div className="flex items-center justify-between font-mono text-[10px] text-cyber-slate uppercase tracking-wider mb-4 pb-2 border-b border-white/5">
                    <span>{passion.telemetryCode}</span>
                    <span className="px-2 py-0.5 rounded bg-cyber-card border border-white/10 text-white font-bold">
                      {passion.badgeText}
                    </span>
                  </div>

                  {/* 3D Visual Micro-Stage */}
                  <div className="relative w-full h-28 mb-5 rounded-xl bg-gradient-to-b from-[#0e1626] to-[#080b12] border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 radar-grid opacity-30" />

                    {/* Animated Stage Elements */}
                    {passion.id === "guitar" && (
                      <div className="relative flex items-center justify-center gap-1.5">
                        <div className="w-1.5 h-14 rounded-full bg-cyber-orange/40 animate-pulse" />
                        <div className="w-1.5 h-20 rounded-full bg-cyber-orange animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <div className="w-1.5 h-10 rounded-full bg-cyber-orange/60 animate-pulse" style={{ animationDelay: "0.4s" }} />
                        <div className="w-1.5 h-16 rounded-full bg-cyber-orange animate-pulse" style={{ animationDelay: "0.6s" }} />
                        <div className="w-1.5 h-8 rounded-full bg-cyber-orange/30 animate-pulse" style={{ animationDelay: "0.8s" }} />
                        <div className="absolute w-12 h-12 rounded-full bg-cyber-orange/20 blur-md" />
                      </div>
                    )}

                    {passion.id === "football" && (
                      <div className="relative flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-cyber-blue animate-spin-slow flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-cyber-blue/30 border border-cyber-blue shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                        </div>
                      </div>
                    )}

                    {passion.id === "badminton" && (
                      <div className="relative flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-emerald-500/40 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.9)] animate-ping" />
                        </div>
                      </div>
                    )}

                    {passion.id === "sketching" && (
                      <div className="relative flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl border border-purple-500/40 rotate-12 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                          <Palette className="w-7 h-7 text-purple-400" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-cyber-card border border-white/10 flex items-center justify-center">
                      {getPassionIcon(passion.icon)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-cyber-orange transition-colors">
                        {passion.title}
                      </h3>
                      <p className="text-xs font-mono text-cyber-slate">{passion.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-cyber-light leading-relaxed font-body mb-6 mt-3">
                    {passion.description}
                  </p>
                </div>

                {/* Telemetry Stats */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                  {passion.stats.map((st, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-cyber-card text-cyber-light border border-white/5"
                    >
                      ✓ {st}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
