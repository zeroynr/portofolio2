"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import type { ThemeConfig, TimeTheme, Project } from "@/types/theme";
import { getAnimationClass } from "@/lib/theme-config";

interface ProjectsSectionProps {
  theme: ThemeConfig;
  currentTheme: TimeTheme;
}

export function ProjectsSection({ theme, currentTheme }: ProjectsSectionProps) {
  const animationClass = getAnimationClass(currentTheme);

  const projects: Project[] = [
    {
      title: "Portofolio - tema 8 bit",
      description:
        "Halaman landing modern dengan animasi halus dan elemen interaktif yang menarik",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://zeromain.netlify.app/",
      gradient:
        currentTheme === "morning"
          ? "from-orange-600 to-pink-600"
          : currentTheme === "day"
          ? "from-sky-600 to-cyan-600"
          : currentTheme === "evening"
          ? "from-red-600 to-orange-600"
          : "from-blue-600 to-purple-600",
      isExternal: true,
    },
    {
      title: "Management Kedai Kopi",
      description:
        "Aplikasi manajemen tugas kolaboratif untuk tim dengan update real-time dan project tracking",
      tech: ["CI 3", "PHP", "CSS", "HTML", "MySQL"],
      link: "https://kedaikopi-production.up.railway.app/",
      gradient:
        currentTheme === "morning"
          ? "from-pink-600 to-yellow-600"
          : currentTheme === "day"
          ? "from-cyan-600 to-blue-600"
          : currentTheme === "evening"
          ? "from-orange-600 to-purple-600"
          : "from-purple-600 to-pink-600",
      isExternal: true,
    },
    {
      title: "Pertumbuhan Populasi",
      description:
        "Platform e-commerce lengkap dengan integrasi pembayaran dan admin dashboard",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "https://cekpopulation.netlify.app/",
      gradient:
        currentTheme === "morning"
          ? "from-yellow-600 to-orange-600"
          : currentTheme === "day"
          ? "from-blue-600 to-sky-600"
          : currentTheme === "evening"
          ? "from-purple-600 to-red-600"
          : "from-pink-600 to-red-600",
      isExternal: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Platform e-commerce lengkap dengan integrasi pembayaran dan admin dashboard",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#",
      gradient:
        currentTheme === "morning"
          ? "from-yellow-600 to-orange-600"
          : currentTheme === "day"
          ? "from-blue-600 to-sky-600"
          : currentTheme === "evening"
          ? "from-purple-600 to-red-600"
          : "from-pink-600 to-red-600",
      isExternal: false,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Platform e-commerce lengkap dengan integrasi pembayaran dan admin dashboard",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#",
      gradient:
        currentTheme === "morning"
          ? "from-yellow-600 to-orange-600"
          : currentTheme === "day"
          ? "from-blue-600 to-sky-600"
          : currentTheme === "evening"
          ? "from-purple-600 to-red-600"
          : "from-pink-600 to-red-600",
      isExternal: false,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Platform e-commerce lengkap dengan integrasi pembayaran dan admin dashboard",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#",
      gradient:
        currentTheme === "morning"
          ? "from-yellow-600 to-orange-600"
          : currentTheme === "day"
          ? "from-blue-600 to-sky-600"
          : currentTheme === "evening"
          ? "from-purple-600 to-red-600"
          : "from-pink-600 to-red-600",
      isExternal: false,
    },
  ];

  const handleProjectClick = (link: string, isExternal?: boolean) => {
    // Gunakan default value false jika isExternal undefined
    const isExternalLink = isExternal ?? false;

    if (isExternalLink && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      // Untuk proyek yang belum live, bisa tambahkan notifikasi
      alert("Proyek ini sedang dalam pengembangan!");
    }
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-6xl mx-auto ${theme.cardBg} backdrop-blur-sm border ${theme.borderColor} rounded-2xl p-8 md:p-12 pt-12 md:pt-16`}
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent leading-tight`}
          >
            Proyek Unggulan
          </h2>
          <p className="text-xl text-gray-300">Beberapa karya terbaru saya</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`relative overflow-hidden ${theme.cardBg} ${
                theme.borderColor
              } hover:${theme.borderColor.replace(
                "/30",
                "/50"
              )} transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group flex flex-col h-full`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Preview Website */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                {project.isExternal ? (
                  <WebsitePreview
                    url={project.link}
                    title={project.title}
                    gradient={project.gradient}
                  />
                ) : (
                  // Untuk proyek yang belum live
                  <div
                    className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className={`text-6xl relative z-10 ${animationClass}`}>
                      🚀
                    </div>
                  </div>
                )}

                {/* Badge Live */}
                {project.isExternal && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-green-500/90 text-white border-green-400 hover:bg-green-600/90 shadow-lg">
                      ✨ Live
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content Area - Flex grow untuk mengisi ruang */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-200 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className={`${theme.orbColors[0]} ${theme.accentColor} ${theme.borderColor} hover:${theme.orbColors[1]} transition-colors duration-200 text-xs`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Tombol yang bisa diklik - dengan TypeScript fix */}
                <div className="mt-auto">
                  <button
                    onClick={() =>
                      handleProjectClick(project.link, project.isExternal)
                    }
                    className={`${theme.accentColor} hover:text-white hover:bg-white/10 font-semibold group/btn transition-all duration-200 border border-transparent hover:border-white/20 rounded-lg px-4 py-2 w-full justify-center flex items-center cursor-pointer relative z-10`}
                  >
                    {project.isExternal ? "Lihat Website" : "Segera Hadir"}
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Component terpisah untuk preview website
function WebsitePreview({
  url,
  title,
  gradient,
}: {
  url: string;
  title: string;
  gradient: string;
}) {
  return (
    <div className="relative w-full h-full">
      {/* Menggunakan regular img tag untuk menghindari error Next.js Image */}
      <img
        src={`https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?${encodeURIComponent(
          url
        )}`}
        alt={`Preview ${title}`}
        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
        onError={(e) => {
          // Fallback ke service lain
          const target = e.target as HTMLImageElement;
          target.src = `https://image.thum.io/get/width/800/crop/600/${url}`;
          target.onerror = () => {
            // Fallback terakhir ke gradient
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative">
                  <div class="absolute inset-0 bg-black/20"></div>
                  <div class="text-6xl relative z-10 animate-pulse">🌐</div>
                  <div class="absolute bottom-4 left-4 right-4 text-center">
                    <div class="text-white/80 text-sm bg-black/30 rounded px-2 py-1">
                      Preview sedang dimuat...
                    </div>
                  </div>
                </div>
              `;
            }
          };
        }}
        onLoad={(e) => {
          // Tambahkan overlay saat gambar berhasil dimuat
          const target = e.target as HTMLImageElement;
          const parent = target.parentElement;
          if (parent && !parent.querySelector(".overlay")) {
            const overlay = document.createElement("div");
            overlay.className =
              "overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20";
            parent.appendChild(overlay);
          }
        }}
      />
    </div>
  );
}
