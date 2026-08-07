export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name:
      "Centro de Bienestar Éxito e Innovación",

    url:
      "https://www.cbeipr.com",

    description:
      "Servicios de psicología clínica, terapia emocional, evaluaciones psicológicas y acompañamiento profesional.",

    areaServed:
      "Puerto Rico",

    serviceType:
      "Psicología Clínica",

    founder: {
      "@type": "Person",

      name:
        "Dra. Diana L. Santiago",

      jobTitle:
        "Psicóloga Clínica",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}