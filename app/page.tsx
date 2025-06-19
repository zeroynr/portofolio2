"use client";

import { useState, useEffect } from "react";
import type { TimeTheme } from "@/types/theme";
import { themes, getTimeTheme } from "@/lib/theme-config";
import { AnimatedBackground } from "@/components/animated-background";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function ModernPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentTheme, setCurrentTheme] = useState<TimeTheme>("night");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
      setCurrentTheme(getTimeTheme(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      setShowBackToTop(scrollPosition > window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const theme = themes[currentTheme];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${theme.background} text-white overflow-hidden relative transition-all duration-1000`}
    >
      <AnimatedBackground
        theme={theme}
        currentTheme={currentTheme}
        mousePosition={mousePosition}
        scrollY={scrollY}
      />

      <Header theme={theme} currentTime={currentTime} />

      <BackToTop theme={theme} showBackToTop={showBackToTop} />

      <HeroSection theme={theme} currentTheme={currentTheme} />

      <AboutSection theme={theme} currentTheme={currentTheme} />

      <SkillsSection theme={theme} currentTheme={currentTheme} />

      <ProjectsSection theme={theme} currentTheme={currentTheme} />

      <ContactSection theme={theme} />

      <Footer theme={theme} />
    </div>
  );
}
