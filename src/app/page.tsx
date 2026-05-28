import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative z-10 overflow-hidden bg-background">
      <Hero />
      <About />
      <Services />
      <Process />
      <TechStack />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
}
