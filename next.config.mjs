/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mini.s-shot.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.thum.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.screenshotmachine.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.urlbox.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placeholder.svg",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
