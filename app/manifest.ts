import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SalesCoach - Sales Assessment & Coaching",
    short_name: "SalesCoach",
    description:
      "Assess selling skills, provide targeted coaching, and drive business results with our mobile-optimized platform.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#11339b",
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity", "education"],
    screenshots: [
      {
        src: "/screenshot-mobile.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
      },
      {
        src: "/screenshot-tablet.png",
        sizes: "768x1024",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  }
}
