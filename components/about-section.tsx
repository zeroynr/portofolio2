import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { ThemeConfig } from "@/types/theme";
import { getAnimationClass } from "@/lib/theme-config";

interface AboutSectionProps {
  theme: ThemeConfig;
  currentTheme: string;
}

export function AboutSection({ theme, currentTheme }: AboutSectionProps) {
  const animationClass = getAnimationClass(currentTheme as any);
  const resumeUrl =
    "https://docs.google.com/document/d/1bSLkA6yRR8bqhiMkgzRMlRkuIoCGLF_f/edit?usp=sharing&ouid=112740661456304366771&rtpof=true&sd=true";

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-6xl mx-auto ${theme.cardBg} backdrop-blur-sm border ${theme.borderColor} rounded-2xl p-8 md:p-12`}
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}
          >
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${theme.orbColors[0]} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}
            />
            <div
              className={`relative w-full h-96 bg-gradient-to-br ${
                theme.cardBg
              } rounded-3xl flex items-center justify-center border ${
                theme.borderColor
              } group-hover:${theme.borderColor.replace(
                "/30",
                "/50"
              )} transition-all duration-300 overflow-hidden`}
            >
              {/* Replace emoji with profile image */}
              <Image
                src="/images/p1.jpg"
                alt="Muhammad Ridho Ardiansyah"
                width={495}
                height={320}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Hello, I'm Muhammad Ridho Ardiansyah
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate full-stack developer with expertise in modern
              web technologies. I love creating user-friendly applications that
              solve real-world problems and provide exceptional user
              experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong foundation in both frontend and backend development,
              I enjoy working on projects that challenge me to learn new
              technologies and improve my skills continuously.
            </p>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button
                className={`bg-gradient-to-r ${theme.buttonGradient} text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
