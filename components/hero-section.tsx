import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Github, Linkedin, Star } from "lucide-react";
import type { TimeTheme, ThemeConfig } from "@/types/theme";
import { getAnimationClass } from "@/lib/theme-config";

interface HeroSectionProps {
  theme: ThemeConfig;
  currentTheme: TimeTheme;
}

export function HeroSection({ theme, currentTheme }: HeroSectionProps) {
  const animationClass = getAnimationClass(currentTheme);

  const socialLinks = [
    { icon: Github, href: "https://github.com/zeroynr", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title with Time-based Animation */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Muhammad</span>
              <span
                className={`block bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent animate-gradient-x`}
              >
                Ridho Ardiansyah
              </span>
            </h1>
          </div>

          {/* Subtitle with Time Icon */}
          <div
            className="flex items-center justify-center space-x-3 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Star className={`w-5 h-5 text-yellow-400 ${animationClass}`} />
            <p
              className={`text-xl sm:text-2xl ${theme.accentColor} font-semibold`}
            >
              Full-Stack Developer & Tech Enthusiast
            </p>
            <Star
              className={`w-5 h-5 text-yellow-400 ${animationClass}`}
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Description */}
          <p
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            I create exceptional digital experiences through innovative web
            development, combining modern technology with beautiful design to
            bring ideas to life.
          </p>

          {/* Time-themed CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button
              size="lg"
              className={`bg-gradient-to-r ${theme.buttonGradient} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg group relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  theme.buttonGradient.split("hover:")[1]
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <ExternalLink className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`border-2 ${theme.borderColor} ${
                theme.accentColor
              } hover:bg-white/5 hover:${theme.borderColor.replace(
                "/30",
                "/50"
              )} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm`}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <Link
                key={label}
                href={href}
                className={`p-4 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm border ${
                  theme.borderColor
                } hover:${theme.borderColor.replace("/30", "/50")} group`}
                aria-label={label}
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                <Icon className={`w-6 h-6 group-hover:${animationClass}`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
