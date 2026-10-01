"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 right-6 z-40 w-10 h-10 rounded-full bg-cyber-card/90 border border-white/15 text-cyber-light hover:text-white hover:border-cyber-orange hover:bg-cyber-dark shadow-lg flex items-center justify-center transition-all duration-300 active:scale-90"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
