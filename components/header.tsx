"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import type { ThemeConfig } from "@/types/theme";

interface HeaderProps {
  theme: ThemeConfig;
  currentTime: Date;
}

export function Header({ theme, currentTime }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ThemeIcon = theme.icon;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${theme.cardBg} backdrop-blur-xl border-b ${theme.borderColor} transition-all duration-1000`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Time Indicator */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/logo.png"
              alt="Muhammad Ridho Ardiansyah Logo"
              width={45}
              height={45}
              className="object-contain transform group-hover:scale-110 transition-all duration-300"
              priority
            />
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}
              >
                Muhammad Ridho
              </span>
              <div className="flex items-center space-x-1">
                <ThemeIcon className={`w-3 h-3 ${theme.accentColor}`} />
                <span className={`text-xs ${theme.accentColor} font-medium`}>
                  {theme.name} •{" "}
                  {currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${theme.textGradient} transition-all duration-300 group-hover:w-full`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${theme.orbColors[0]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            {isMenuOpen ? (
              <X className="w-6 h-6 relative z-10" />
            ) : (
              <Menu className="w-6 h-6 relative z-10" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-80 py-4" : "max-h-0"
          }`}
        >
          <div className={`border-t ${theme.borderColor} pt-4`}>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: isMenuOpen
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease ${index * 0.1}s`,
                  }}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
