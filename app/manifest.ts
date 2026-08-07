import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Centro de Bienestar Éxito e Innovación",

    short_name: "CBEI",

    description:
      "Servicios de psicología clínica, bienestar emocional y acompañamiento profesional.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#3A6B35",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}