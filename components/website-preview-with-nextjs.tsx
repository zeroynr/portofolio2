"use client";

import { useState } from "react";
import Image from "next/image";

interface WebsitePreviewProps {
  url: string;
  title: string;
  gradient: string;
}

// Alternative component jika ingin menggunakan Next.js Image (setelah konfigurasi next.config.js)
export function WebsitePreviewWithNextJS({
  url,
  title,
  gradient,
}: WebsitePreviewProps) {
  const [imageError, setImageError] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  const screenshotServices = [
    `https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?${encodeURIComponent(
      url
    )}`,
    `https://image.thum.io/get/width/800/crop/600/${url}`,
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
        className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="text-6xl relative z-10 animate-pulse">🌐</div>
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <div className="text-white/80 text-sm bg-black/30 rounded px-2 py-1">
            Preview tidak tersedia
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Image
        src={screenshotServices[currentService] || "/placeholder.svg"}
        alt={`Preview ${title}`}
        fill
        className="object-cover transition-all duration-300 group-hover:scale-110"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
    </div>
  );
}
