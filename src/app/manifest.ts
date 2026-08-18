import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Satyarth Prakash Srivastava · AI Engineer",
    short_name: "Satyarth Srivastava",
    description:
      "AI Engineer building production LLM-powered automation systems, GenAI pipelines, and agentic workflows at scale.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d0f",
    theme_color: "#0b0d0f",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
