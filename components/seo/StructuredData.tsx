export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",

    "@type": "ProfessionalService",

    additionalType:
      "https://schema.org/MedicalBusiness",

    name:
      "Centro de Bienestar Éxito e Innovación",

    url:
      "https://www.cbeipr.com",

    image:
      "https://www.cbeipr.com/logo/logo-3-final.webp",

    logo: {
      "@type": "ImageObject",

      url:
        "https://www.cbeipr.com/logo/logo-3-final.webp",
    },


    description:
      "Servicios de psicología clínica, terapia emocional, evaluaciones psicológicas y acompañamiento profesional.",



    areaServed: {
      "@type": "AdministrativeArea",

      name:
        "Puerto Rico",
    },


    serviceArea: {
      "@type": "AdministrativeArea",

      name:
        "Puerto Rico",
    },



    serviceType:
      "Psicología Clínica",



    founder: {
      "@type": "Person",

      name:
        "Dra. Diana L. Santiago",

      jobTitle:
        "Psicóloga Clínica",
    },



    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Avenida Emilio Fagot 2928 STE 1",

      addressLocality:
        "Ponce",

      addressRegion:
        "PR",

      postalCode:
        "00716",

      addressCountry:
        "US",
    },



    email:
      "info@cbeipr.com",



    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],

        opens:
          "08:00",

        closes:
          "17:00",
      },
    ],



    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name:
        "Servicios psicológicos",


      itemListElement: [

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name:
              "Psicología Clínica",
          },
        },


        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name:
              "Terapia Individual y Familiar",
          },
        },


        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name:
              "Evaluaciones Psicológicas",
          },
        },

      ],
    },

  };


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(data),
      }}
    />
  );
}