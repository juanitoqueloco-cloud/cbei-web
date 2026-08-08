import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  title:
    "Centro de Bienestar Éxito e Innovación | Psicología Clínica",


  description:
    "Centro de Bienestar Éxito e Innovación ofrece servicios de psicología clínica, terapia emocional, evaluaciones psicológicas y acompañamiento profesional.",

icons: {
  icon: "/icon.png",
  shortcut: "/icon.png",
  apple: "/icon.png",
},

  keywords: [
    "psicología clínica",
    "terapia psicológica",
    "salud emocional",
    "bienestar emocional",
    "psicólogo Puerto Rico",
    "psicología clínica Ponce",
    "psicóloga clínica Ponce",
    "terapia familiar",
    "salud mental Ponce",
  ],



  authors: [
    {
      name:
        "Centro de Bienestar Éxito e Innovación",
    },
  ],



  creator:
    "Centro de Bienestar Éxito e Innovación",



  metadataBase:
    new URL("https://www.cbeipr.com"),



  alternates: {
    canonical:
      "https://www.cbeipr.com",
  },



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
          "/og-image.png",

        width:
          1200,

        height:
          630,

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


    images: [
      "/og-image.png",
    ],

  },



  robots: {

    index:
      true,

    follow:
      true,

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
      className={geistSans.variable}
    >

      <body className="min-h-screen flex flex-col antialiased">

        {children}

      </body>

    </html>

  );

}