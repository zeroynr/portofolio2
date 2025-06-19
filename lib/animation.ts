import { TimeTheme } from "@/types/portofolio";

export const getAnimationClass = (currentTheme: TimeTheme): string => {
  switch (currentTheme) {
    case "morning":
      return "animate-gentle-float";
    case "day":
      return "animate-energetic-bounce";
    case "evening":
      return "animate-warm-sway";
    case "night":
      return "animate-mysterious-drift";
    default:
      return "animate-pulse";
  }
};

export const getParticleCount = (currentTheme: TimeTheme): number => {
  switch (currentTheme) {
    case "day":
      return 30;
    case "morning":
      return 25;
    case "evening":
      return 20;
    case "night":
      return 15;
    default:
      return 20;
  }
};

export const getAnimationDuration = (currentTheme: TimeTheme): string => {
  switch (currentTheme) {
    case "day":
      return "2s";
    case "morning":
      return "4s";
    case "evening":
      return "3s";
    case "night":
      return "6s";
    default:
      return "4s";
  }
};
