"use client";

import { ChevronUp } from "lucide-react";
import type { ThemeConfig } from "@/types/theme";

interface BackToTopProps {
  theme: ThemeConfig;
  showBackToTop: boolean;
}

export function BackToTop({ theme, showBackToTop }: BackToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r ${
        theme.buttonGradient.split(" hover:")[0]
      } shadow-lg transition-all duration-300 transform ${
        showBackToTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6 text-white" />
    </button>
  );
}
