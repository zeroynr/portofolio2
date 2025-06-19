import type { ThemeConfig } from "@/types/theme";

interface FooterProps {
  theme: ThemeConfig;
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer
      className={`relative py-8 px-4 sm:px-6 lg:px-8 border-t ${theme.borderColor}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © 2025 Muhammad Ridho Ardiansyah. Built with ❤️ using Next.js &
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
