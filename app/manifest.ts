import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",

    name: "Centro de Bienestar Éxito e Innovación",

    short_name: "CBEI",

    description:
      "Servicios de psicología clínica, bienestar emocional y acompañamiento profesional.",

    lang: "es",

    start_url: "/",

    display: "standalone",

    orientation: "portrait",

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