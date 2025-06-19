import { Card } from "@/components/ui/card";
import { Code, Palette, Database } from "lucide-react";
import type { ThemeConfig, TimeTheme, Skill } from "@/types/theme";
import { getAnimationClass } from "@/lib/theme-config";

interface SkillsSectionProps {
  theme: ThemeConfig;
  currentTheme: TimeTheme;
}

export function SkillsSection({ theme, currentTheme }: SkillsSectionProps) {
  const animationClass = getAnimationClass(currentTheme);

  const skills: Skill[] = [
    {
      name: "Frontend Development",
      icon: Code,
      description: "React, Next.js, TypeScript",
      color:
        currentTheme === "morning"
          ? "from-orange-500 to-pink-500"
          : currentTheme === "day"
          ? "from-sky-500 to-cyan-500"
          : currentTheme === "evening"
          ? "from-red-500 to-orange-500"
          : "from-blue-500 to-cyan-500",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Figma, Adobe XD, Tailwind CSS",
      color:
        currentTheme === "morning"
          ? "from-pink-500 to-yellow-500"
          : currentTheme === "day"
          ? "from-cyan-500 to-blue-500"
          : currentTheme === "evening"
          ? "from-orange-500 to-purple-500"
          : "from-purple-500 to-pink-500",
    },
    {
      name: "Backend Development",
      icon: Database,
      description: "Node.js, Python, PostgreSQL",
      color:
        currentTheme === "morning"
          ? "from-yellow-500 to-orange-500"
          : currentTheme === "day"
          ? "from-blue-500 to-sky-500"
          : currentTheme === "evening"
          ? "from-purple-500 to-red-500"
          : "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-6xl mx-auto ${theme.cardBg} backdrop-blur-sm border ${theme.borderColor} rounded-2xl p-8 md:p-12`}
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}
          >
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`relative p-8 text-center ${theme.cardBg} ${
                theme.borderColor
              } hover:${theme.borderColor.replace(
                "/30",
                "/50"
              )} transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className={`w-20 h-20 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg ${animationClass}`}
              >
                <skill.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                {skill.name}
              </h3>
              <p className="text-gray-300 relative z-10">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
