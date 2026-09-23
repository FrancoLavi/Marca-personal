import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Franco Lavirgen | Software Developer",
    short_name: "Franco Lavirgen",
    description: "Desarrollo de páginas web, aplicaciones y software a medida.",
    start_url: "/es",
    display: "standalone",
    background_color: "#0d0d0d",
    theme_color: "#0d0d0d",
    lang: "es",
  };
}
