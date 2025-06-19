// Utility functions untuk mengambil preview website

export const getWebsiteScreenshot = (
  url: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
  }
) => {
  const { width = 1200, height = 800, quality = 80 } = options || {};

  // Beberapa service screenshot gratis yang bisa digunakan:

  // 1. Thum.io (gratis dengan watermark)
  return `https://image.thum.io/get/width/${width}/crop/${height}/${url}`;

  // 2. Screenshot Machine (demo key, terbatas)
  // return `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(url)}&dimension=${width}x${height}`;

  // 3. Microlink (gratis dengan limit)
  // return `https://api.microlink.io/screenshot?url=${encodeURIComponent(url)}&viewport.width=${width}&viewport.height=${height}`;
};

export const getWebsiteMeta = async (url: string) => {
  try {
    // Untuk mendapatkan meta tags (title, description, image) dari website
    const response = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}`
    );
    const data = await response.json();

    return {
      title: data.data?.title || "",
      description: data.data?.description || "",
      image: data.data?.screenshot?.url || "",
      logo: data.data?.logo?.url || "",
    };
  } catch (error) {
    console.error("Error fetching website meta:", error);
    return null;
  }
};
