import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/specialist/Hero";
import Biography from "@/components/specialist/Biography";
import Education from "@/components/specialist/Education";
import Philosophy from "@/components/specialist/Philosophy";
import Specialties from "@/components/specialist/Specialties";
import FAQ from "@/components/specialist/FAQ";
import CTA from "@/components/specialist/CTA";

export default function EspecialistaPage() {
  return (
    <>
      <Header />

      <main className="bg-white pt-24">

        <Hero />

        <Biography />

        <Education />

        <Philosophy />

        <Specialties />

        <FAQ />

        <CTA />

      </main>

      <Footer />
    </>
  );
}