import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Centro de Bienestar Éxito e Innovación | Psicología Clínica",

  description:
    "Centro de Bienestar Éxito e Innovación ofrece servicios de psicología clínica, terapia emocional, evaluaciones psicológicas y acompañamiento profesional.",

  keywords: [
    "psicología clínica",
    "terapia psicológica",
    "salud emocional",
    "bienestar emocional",
    "psicólogo Puerto Rico",
    "terapia familiar",
  ],

  authors: [
    {
      name: "Centro de Bienestar Éxito e Innovación",
    },
  ],

  creator:
    "Centro de Bienestar Éxito e Innovación",

  metadataBase: new URL(
    "https://www.cbeipr.com"
  ),

  openGraph: {
    title:
      "Centro de Bienestar Éxito e Innovación",

    description:
      "Un espacio profesional para fortalecer tu bienestar emocional.",

    url:
      "https://www.cbeipr.com",

    siteName:
      "CBEI",

    images: [
      {
        url:
          "/logo/logo-3.png",

        width: 1200,
        height: 630,

        alt:
          "Centro de Bienestar Éxito e Innovación",
      },
    ],

    locale:
      "es_PR",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Centro de Bienestar Éxito e Innovación",

    description:
      "Psicología clínica y bienestar emocional.",

    images:
      ["/logo/logo-3.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}