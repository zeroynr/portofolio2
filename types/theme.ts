import type { LucideIcon } from "lucide-react";

export type TimeTheme = "morning" | "day" | "evening" | "night";

export interface ThemeConfig {
  name: string;
  icon: LucideIcon;
  background: string;
  cardBg: string;
  textGradient: string;
  accentColor: string;
  particleColor: string;
  orbColors: string[];
  buttonGradient: string;
  borderColor: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  gradient: string;
  image?: string;
  isExternal?: boolean; // Tetap optional, tapi akan dihandle dengan default value
}
