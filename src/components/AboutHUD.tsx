"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Landmark,
  Cpu,
  Activity,
  GraduationCap,
  RotateCw,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { portfolioData, HoloCard, EducationItem } from "@/data/portfolioData";
import { soundFX } from "@/utils/audioFx";

export default function AboutHUD() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const toggleFlip = (id: string) => {
    soundFX.playFlip();
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Interactive particle canvas for About HUD section
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }

    const particles: Particle[] = [];
    const count = 30;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? "#3b82f6" : "#f97316",
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 90) * 0.12;
            ctx.strokeStyle = "#3b82f6";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getHoloIcon = (iconName: string, theme: string) => {
    const colorClass =
      theme === "orange"
        ? "text-cyber-orange"
        : theme === "blue"
        ? "text-cyber-blue"
        : "text-cyber-emerald";

    const props = { className: `w-6 h-6 ${colorClass}` };
    switch (iconName) {
      case "landmark":
        return <Landmark {...props} />;
      case "cpu":
        return <Cpu {...props} />;
      case "activity":
        return <Activity {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  const HoloTiltCard = ({
    card,
    getHoloIcon,
  }: {
    card: HoloCard;
    getHoloIcon: (iconName: string, theme: string) => React.ReactNode;
  }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const relativeX = x / rect.width - 0.5;
      const relativeY = y / rect.height - 0.5;

      const rotateX = (-relativeY * 10).toFixed(2);
      const rotateY = (relativeX * 10).toFixed(2);

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      const el = cardRef.current;
      if (!el) return;
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    const handleMouseEnter = () => {
      soundFX.playHoverBlip();
    };

    const borderClass =
      card.badgeTheme === "orange"
        ? "border-cyber-orange/30 hover:border-cyber-orange/70"
        : card.badgeTheme === "blue"
        ? "border-cyber-blue/30 hover:border-cyber-blue/70"
        : "border-cyber-emerald/30 hover:border-cyber-emerald/70";

    const badgeColor =
      card.badgeTheme === "orange"
        ? "text-cyber-orange bg-cyber-orange/10 border-cyber-orange/30"
        : card.badgeTheme === "blue"
        ? "text-cyber-blue bg-cyber-blue/10 border-cyber-blue/30"
        : "text-cyber-emerald bg-cyber-emerald/10 border-cyber-emerald/30";

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={`group relative p-6 rounded-2xl bg-[#0b0f19]/85 border ${borderClass} shadow-hud-card transition-[box-shadow,border-color] duration-300 hover:shadow-glow-orange backdrop-blur-md overflow-hidden`}
        style={{ transition: "transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease" }}
      >
        {/* HUD Corner Accents */}
        <span
          className={`hud-corner hud-corner-tl ${
            card.badgeTheme === "blue"
              ? "hud-corner-blue"
              : card.badgeTheme === "emerald"
              ? "hud-corner-emerald"
              : ""
          }`}
        />
        <span
          className={`hud-corner hud-corner-tr ${
            card.badgeTheme === "blue"
              ? "hud-corner-blue"
              : card.badgeTheme === "emerald"
              ? "hud-corner-emerald"
              : ""
          }`}
        />
        <span
          className={`hud-corner hud-corner-bl ${
            card.badgeTheme === "blue"
              ? "hud-corner-blue"
              : card.badgeTheme === "emerald"
              ? "hud-corner-emerald"
              : ""
          }`}
        />
        <span
          className={`hud-corner hud-corner-br ${
            card.badgeTheme === "blue"
              ? "hud-corner-blue"
              : card.badgeTheme === "emerald"
              ? "hud-corner-emerald"
              : ""
          }`}
        />

        {/* Icon & Energy Ring */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-cyber-card border border-white/10 shadow-inner">
            <div className="absolute inset-0 rounded-xl border border-dashed border-white/20 animate-spin-slow" />
            {getHoloIcon(card.icon, card.badgeTheme)}
          </div>

          <span
            className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${badgeColor}`}
          >
            {card.badge}
          </span>
        </div>

        <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-cyber-orange transition-colors">
          {card.title}
        </h3>

        <p className="text-sm text-cyber-light leading-relaxed font-body">
          {card.description}
        </p>

        {card.linkUrl && (
          <a
            href={card.linkUrl}
            className="inline-flex items-center gap-2 mt-4 text-xs font-mono font-bold text-cyber-orange hover:text-white transition-colors"
          >
            <span>{card.linkText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="about" className="relative py-28 bg-[#070a12] overflow-hidden">
      {/* Background canvas and grids */}
      <div className="absolute inset-0 circuit-grid opacity-25 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-cyber-orange/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-cyber-blue/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            ABOUT <span className="text-cyber-orange">ME</span>
          </h2>

          {/* HUD Geometric Underline */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyber-orange" />
            <span className="w-2.5 h-2.5 rotate-45 border border-cyber-orange bg-cyber-dark" />
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyber-orange" />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: 3 Floating Holographic Glass Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {portfolioData.aboutHoloCards.map((card: HoloCard) => (
              <HoloTiltCard key={card.id} card={card} getHoloIcon={getHoloIcon} />
            ))}
          </div>

          {/* Right: Holographic Intelligence Deck & Education Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Bio Panel */}
            <div className="relative p-7 rounded-2xl bg-[#0b0f19]/80 border border-white/10 shadow-hud-card backdrop-blur-md overflow-hidden">
              <span className="scanline-effect" />
              <div className="mb-3">
                <Sparkles className="w-5 h-5 text-cyber-orange" />
              </div>
              <p className="text-base text-cyber-light leading-relaxed font-body">
                {portfolioData.personal.extendedBio}
              </p>
            </div>

            {/* 3D Education Timeline */}
            <div className="relative p-7 rounded-2xl bg-[#0b0f19]/80 border border-white/10 shadow-hud-card backdrop-blur-md">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5 font-heading font-bold text-lg text-white">
                  <GraduationCap className="w-5 h-5 text-cyber-orange" />
                  <span>3D Education Timeline</span>
                </div>
                <span className="text-[11px] font-mono text-cyber-slate uppercase">
                  Click card to flip <RotateCw className="inline w-3 h-3 ml-1" />
                </span>
              </div>

              {/* Rail */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-cyber-emerald via-cyber-blue to-cyber-orange">
                {portfolioData.educationTimeline.map((item: EducationItem) => {
                  const isFlipped = !!flippedCards[item.id];
                  const nodeColor =
                    item.theme === "emerald"
                      ? "bg-cyber-emerald shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                      : item.theme === "blue"
                      ? "bg-cyber-blue shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                      : "bg-cyber-orange shadow-[0_0_12px_rgba(249,115,22,0.8)]";

                  return (
                    <div key={item.id} className="relative group">
                      {/* Timeline Node */}
                      <span
                        className={`absolute -left-[27px] top-4 w-3.5 h-3.5 rounded-full ${nodeColor} ring-4 ring-[#070a12]`}
                      />

                      {/* 3D Flip Card Container */}
                      <div
                        onClick={() => toggleFlip(item.id)}
                        className="perspective-1000 cursor-pointer select-none"
                      >
                        <div
                          className={`relative w-full rounded-xl transition-transform duration-500 transform-style-3d ${
                            isFlipped ? "rotate-y-180" : ""
                          }`}
                        >
                          {/* FRONT */}
                          <div className="p-5 rounded-xl bg-cyber-card/70 border border-white/10 hover:border-cyber-orange/50 transition-colors backface-hidden">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs font-mono font-semibold text-cyber-orange">
                                {item.period}
                              </span>
                              {item.isCurrent && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-cyber-emerald/15 text-cyber-emerald border border-cyber-emerald/30">
                                  CURRENT
                                </span>
                              )}
                            </div>
                            <h4 className="text-base font-heading font-bold text-white mb-1">
                              {item.degree}
                            </h4>
                            <p className="text-xs font-mono text-cyber-slate mb-3">
                              {item.institution}
                            </p>
                            <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyber-orange/80">
                              <span>View details</span>
                              <RotateCw className="w-3 h-3" />
                            </div>
                          </div>

                          {/* BACK */}
                          <div className="absolute inset-0 p-5 rounded-xl bg-cyber-card border border-cyber-orange/40 backface-hidden rotate-y-180 flex flex-col justify-center">
                            <h4 className="text-xs font-mono font-bold text-cyber-orange uppercase mb-2">
                              {item.institution} — Key Highlights:
                            </h4>
                            <ul className="space-y-1.5">
                              {item.highlights.map((h, i) => (
                                <li
                                  key={i}
                                  className="text-xs text-cyber-light flex items-start gap-2"
                                >
                                  <span className="text-cyber-orange">•</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-3 text-right text-[10px] font-mono text-cyber-slate">
                              Flip back <RotateCw className="inline w-2.5 h-2.5 ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
