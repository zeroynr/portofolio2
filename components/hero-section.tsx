"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  Linkedin,
  Star,
  ArrowDown,
  Play,
  Code2,
  Sun,
  Moon,
  Sunrise,
  Sunset,
} from "lucide-react";
import type { TimeTheme, ThemeConfig } from "@/types/theme";
import { getAnimationClass } from "@/lib/theme-config";

interface HeroSectionProps {
  theme: ThemeConfig;
  currentTheme: TimeTheme;
}

export function HeroSection({ theme, currentTheme }: HeroSectionProps) {
  const animationClass = getAnimationClass(currentTheme);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Simple typing animation states
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const technologies = [
    "codeigniter",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "MySQL",
    "PHP",
    "Java",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Cursor blinking
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentTech = technologies[currentIndex];

    const typingTimer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (charIndex < currentTech.length) {
            setDisplayText(currentTech.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (charIndex > 0) {
            setDisplayText(currentTech.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Finished deleting, move to next tech
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % technologies.length);
          }
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(typingTimer);
  }, [charIndex, currentIndex, isDeleting, technologies]);

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Time-based calculations
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const rotation = (hours % 12) * 30 + minutes * 0.5;

  // Get time-based elements
  const getTimeData = () => {
    if (hours >= 6 && hours < 12) {
      return {
        icon: Sunrise,
        greeting: "Morning",
        color: "text-orange-400",
        bgGradient: "from-orange-500/20 to-yellow-500/20",
      };
    } else if (hours >= 12 && hours < 18) {
      return {
        icon: Sun,
        greeting: "Afternoon",
        color: "text-yellow-400",
        bgGradient: "from-yellow-500/20 to-orange-500/20",
      };
    } else if (hours >= 18 && hours < 21) {
      return {
        icon: Sunset,
        greeting: "Evening",
        color: "text-red-400",
        bgGradient: "from-red-500/20 to-orange-500/20",
      };
    } else {
      return {
        icon: Moon,
        greeting: "Night",
        color: "text-blue-400",
        bgGradient: "from-blue-500/20 to-purple-500/20",
      };
    }
  };

  const timeData = getTimeData();
  const TimeIcon = timeData.icon;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Main Title */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="block text-white mb-3">
                  Hi, I'm{" "}
                  <span
                    className={`bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}
                  >
                    Ridho
                  </span>
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 font-normal">
                  Full-Stack Developer
                </span>
              </h1>
            </div>

            {/* Clean Typing Animation */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Code2 className="w-5 h-5 text-blue-400" />
                <span className="text-lg text-gray-300">Specialized in:</span>
                <div className="min-w-[160px]">
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 border border-white/20 backdrop-blur-sm inline-flex items-center">
                    <span className="text-white">{displayText}</span>
                    <span
                      className={`ml-1 text-white ${
                        showCursor ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-100`}
                    >
                      |
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Static Description */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                Bagiku, setiap ide punya cerita. Dengan rasa ingin tahu,
                kreativitas, dan sedikit ngulik teknologi, aku percaya kita bisa
                ciptakan sesuatu yang beda dan berdampak. Ayo, mulai langkah
                kecil bareng!
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <Play className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">View My Work</span>
                </Button>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Talk
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center space-x-1">
                <span className="text-sm text-gray-500 font-medium mr-6">
                  Connect with me
                </span>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border border-white/10 hover:border-white/20 group"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Circular Element */}
          <div
            className="relative flex items-center justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-50">
                {/* Rotating Indicator */}
                <div
                  className="absolute top-0 left-1/2 w-1 h-6 bg-gradient-to-b from-white to-transparent rounded-full transform -translate-x-1/2"
                  style={{
                    transformOrigin: "50% 160px",
                    transform: `translateX(-50%) rotate(${rotation}deg)`,
                    transition: "transform 1s ease-in-out",
                  }}
                />
              </div>

              {/* Main Circle */}
              <div className="absolute inset-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${timeData.bgGradient} opacity-50`}
                />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    {/* Time Icon */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                        <TimeIcon
                          className={`w-8 h-8 ${timeData.color} drop-shadow-lg`}
                        />
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-1 -right-1">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-80" />
                      </div>
                      <div className="absolute -bottom-1 -left-1">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                      </div>
                    </div>

                    {/* Time Info */}
                    <div className="space-y-1">
                      <div className={`text-lg font-bold ${timeData.color}`}>
                        {timeData.greeting}
                      </div>
                      <div className="text-sm text-white/80 font-medium">
                        {formatTime(currentTime)}
                      </div>
                      <div className="text-xs text-white/60">
                        Let's create something amazing
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4">
                  <Code2 className="w-4 h-4 text-white/40 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Star className="w-3 h-3 text-yellow-400/60 animate-pulse" />
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0">
                {/* Orbit 1 */}
                <div
                  className="absolute top-4 left-1/2 w-4 h-4 bg-blue-400/60 rounded-full shadow-lg transform -translate-x-1/2"
                  style={{
                    transformOrigin: "50% 152px",
                    transform: `translateX(-50%) rotate(${rotation * 0.5}deg)`,
                    transition: "transform 1s ease-in-out",
                  }}
                />

                {/* Orbit 2 */}
                <div
                  className="absolute bottom-4 left-1/2 w-3 h-3 bg-purple-400/60 rounded-full shadow-lg transform -translate-x-1/2"
                  style={{
                    transformOrigin: "50% -152px",
                    transform: `translateX(-50%) rotate(${rotation * -0.3}deg)`,
                    transition: "transform 1s ease-in-out",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up"
          style={{ animationDelay: "1.4s" }}
        >
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-gray-400 font-medium">
              Scroll to explore
            </span>
            <ArrowDown className="w-5 h-5 text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
