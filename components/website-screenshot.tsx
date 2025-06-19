"use client";

import { useState } from "react";
import Image from "next/image";

interface WebsiteScreenshotProps {
  url: string;
  alt: string;
  className?: string;
  fallbackGradient: string;
  fallbackIcon?: string;
}

export function WebsiteScreenshot({
  url,
  alt,
  className = "",
  fallbackGradient,
  fallbackIcon = "🌐",
}: WebsiteScreenshotProps) {
  const [imageError, setImageError] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  // Daftar service screenshot gratis yang bisa dicoba
  const screenshotServices = [
    `https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?${encodeURIComponent(
      url
    )}`,
    `https://image.thum.io/get/width/800/crop/600/${url}`,
    `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(
      url
    )}&dimension=800x600`,
  ];

  const handleImageError = () => {
    if (currentService < screenshotServices.length - 1) {
      setCurrentService(currentService + 1);
    } else {
      setImageError(true);
    }
  };

  if (imageError) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${fallbackGradient} flex items-center justify-center relative ${className}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="text-6xl relative z-10 animate-pulse">
          {fallbackIcon}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={screenshotServices[currentService] || "/placeholder.svg"}
      alt={alt}
      fill
      className={`object-cover transition-all duration-300 group-hover:scale-110 ${className}`}
      onError={handleImageError}
    />
  );
}
