import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Team from "../components/home/Team";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Faq />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}