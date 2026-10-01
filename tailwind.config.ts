import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          void: "#050508",
          dark: "#0b0f19",
          card: "#121824",
          cardGlass: "rgba(18, 24, 36, 0.75)",
          border: "rgba(255, 255, 255, 0.08)",
          orange: "#f97316",
          orangeHover: "#ea580c",
          blue: "#3b82f6",
          emerald: "#10b981",
          purple: "#a855f7",
          yellow: "#eab308",
          slate: "#64748b",
          light: "#cbd5e1",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "Outfit", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-space)", "Space Grotesk", "monospace"],
      },
      boxShadow: {
        "glow-orange": "0 0 30px rgba(249, 115, 22, 0.35)",
        "glow-blue": "0 0 30px rgba(59, 130, 246, 0.35)",
        "glow-emerald": "0 0 30px rgba(16, 185, 129, 0.35)",
        "glow-purple": "0 0 30px rgba(168, 85, 247, 0.35)",
        "hud-card": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "hud-scan": "hudScan 8s linear infinite",
        "laser-travel": "laserTravel 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        hudScan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        laserTravel: {
          "0%, 100%": { top: "0%", opacity: "0" },
          "50%": { top: "100%", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
