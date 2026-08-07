import { services } from "../../data/services";

import {
  Container,
  Section,
  SectionHeader,
} from "@/components/ui";

import ServiceCard from "@/components/cards/ServiceCard";

export default function ServicesGrid() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeader
          badge="Nuestros Servicios"
          title="Encuentra el apoyo que necesitas"
          description="Cada servicio está diseñado para acompañarte de forma profesional, personalizada y confidencial."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}