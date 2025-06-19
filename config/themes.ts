import { Sun, Moon, Sunrise, Sunset } from "lucide-react";
import { ThemeConfig, TimeTheme } from "@/types/portofolio";

export const themes: Record<TimeTheme, ThemeConfig> = {
  morning: {
    name: "Good Morning",
    icon: Sunrise,
    background: "from-orange-900 via-pink-900 to-yellow-900",
    cardBg: "bg-orange-900/30",
    textGradient: "from-orange-300 to-pink-300",
    accentColor: "text-orange-300",
    particleColor: "bg-orange-300/30",
    orbColors: [
      "from-orange-500/15 to-pink-500/15",
      "from-yellow-500/15 to-orange-500/15",
    ],
    buttonGradient:
      "from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700",
    borderColor: "border-orange-500/30",
  },
  day: {
    name: "Good Day",
    icon: Sun,
    background: "from-sky-900 via-blue-900 to-cyan-900",
    cardBg: "bg-sky-900/30",
    textGradient: "from-sky-300 to-cyan-300",
    accentColor: "text-sky-300",
    particleColor: "bg-sky-300/30",
    orbColors: [
      "from-sky-500/15 to-cyan-500/15",
      "from-blue-500/15 to-sky-500/15",
    ],
    buttonGradient:
      "from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700",
    borderColor: "border-sky-500/30",
  },
  evening: {
    name: "Good Evening",
    icon: Sunset,
    background: "from-red-900 via-orange-900 to-purple-900",
    cardBg: "bg-red-900/30",
    textGradient: "from-red-300 to-orange-300",
    accentColor: "text-red-300",
    particleColor: "bg-red-300/30",
    orbColors: [
      "from-red-500/15 to-orange-500/15",
      "from-purple-500/15 to-red-500/15",
    ],
    buttonGradient:
      "from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700",
    borderColor: "border-red-500/30",
  },
  night: {
    name: "Good Night",
    icon: Moon,
    background: "from-slate-900 via-purple-900 to-slate-900",
    cardBg: "bg-slate-900/30",
    textGradient: "from-blue-300 to-purple-300",
    accentColor: "text-blue-300",
    particleColor: "bg-blue-300/30",
    orbColors: [
      "from-blue-500/15 to-purple-500/15",
      "from-purple-500/15 to-pink-500/15",
    ],
    buttonGradient:
      "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
    borderColor: "border-blue-500/30",
  },
};

export const getTimeTheme = (date: Date): TimeTheme => {
  const hour = date.getHours();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "day";
  if (hour >= 18 && hour < 21) return "evening";
  return "night";
};
