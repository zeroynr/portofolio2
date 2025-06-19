import type { TimeTheme, ThemeConfig } from "@/types/theme";
import { getAnimationClass } from "@/lib/theme-config";

interface AnimatedBackgroundProps {
  theme: ThemeConfig;
  currentTheme: TimeTheme;
  mousePosition: { x: number; y: number };
  scrollY: number;
}

export function AnimatedBackground({
  theme,
  currentTheme,
  mousePosition,
  scrollY,
}: AnimatedBackgroundProps) {
  const animationClass = getAnimationClass(currentTheme);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${theme.background} transition-all duration-1000`}
      />

      {/* Time-specific Animated Orbs */}
      <div
        className={`absolute w-96 h-96 bg-gradient-to-r ${theme.orbColors[0]} rounded-full blur-3xl ${animationClass}`}
        style={{
          left: mousePosition.x * 0.02,
          top: mousePosition.y * 0.02,
          transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0001})`,
          animationDuration:
            currentTheme === "day"
              ? "2s"
              : currentTheme === "morning"
              ? "4s"
              : currentTheme === "evening"
              ? "3s"
              : "6s",
        }}
      />
      <div
        className={`absolute w-80 h-80 bg-gradient-to-r ${theme.orbColors[1]} rounded-full blur-3xl ${animationClass}`}
        style={{
          right: mousePosition.x * 0.01,
          bottom: mousePosition.y * 0.01,
          animationDelay: "2s",
          animationDuration:
            currentTheme === "day"
              ? "3s"
              : currentTheme === "morning"
              ? "5s"
              : currentTheme === "evening"
              ? "4s"
              : "8s",
        }}
      />

      {/* Time-based Floating Particles */}
      {[
        ...Array(
          currentTheme === "day"
            ? 30
            : currentTheme === "morning"
            ? 25
            : currentTheme === "evening"
            ? 20
            : 15
        ),
      ].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 ${theme.particleColor} rounded-full ${animationClass}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${
              2 + Math.random() * (currentTheme === "day" ? 2 : 4)
            }s`,
          }}
        />
      ))}

      {/* Time-based Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,${
              currentTheme === "day" ? "0.15" : "0.1"
            }) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,${
              currentTheme === "day" ? "0.15" : "0.1"
            }) 1px, transparent 1px)
          `,
          backgroundSize: currentTheme === "day" ? "40px 40px" : "50px 50px",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Time-specific decorative elements */}
      {currentTheme === "morning" && (
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl animate-gentle-float" />
      )}
      {currentTheme === "day" && (
        <div className="absolute top-32 left-32 w-40 h-40 bg-gradient-to-r from-sky-400/10 to-cyan-400/10 rounded-full blur-2xl animate-energetic-bounce" />
      )}
      {currentTheme === "evening" && (
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-gradient-to-r from-red-400/10 to-orange-400/10 rounded-full blur-2xl animate-warm-sway" />
      )}
      {currentTheme === "night" && (
        <>
          <div
            className="absolute top-40 right-40 w-2 h-2 bg-white/40 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-60 right-60 w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-80 right-32 w-1.5 h-1.5 bg-white/35 rounded-full animate-pulse"
            style={{ animationDelay: "3s" }}
          />
        </>
      )}
    </div>
  );
}
