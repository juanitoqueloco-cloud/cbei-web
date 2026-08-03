import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Team from "../components/home/Team";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
    </>
  );
}