import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/services/Hero";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChoose from "@/components/services/WhyChoose";
import Process from "@/components/services/Process";
import CTA from "@/components/services/CTA";

export default function ServiciosPage() {
  return (
    <>
      <Header />

      <main className="bg-white pt-24">

        <Hero />

        <ServicesGrid />

        <WhyChoose />

        <Process />

        <CTA />

      </main>

      <Footer />
    </>
  );
}
