import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ObjectivesSection from "../components/ObjectivesSection";
import ContactSection from "../components/ContactSection";
import ServiceSection from "../components/ServiceSection";
import People from "../components/People";
import RevealOnScroll from "../components/RevealOnScroll";

function Home() {
  return (
    <>
      <RevealOnScroll>
        <HeroSection />
      </RevealOnScroll>
      <RevealOnScroll delay={100}>
        <AboutSection />
      </RevealOnScroll>
      <RevealOnScroll delay={200}>
        <People />
      </RevealOnScroll>
      <RevealOnScroll delay={300}>
        <ObjectivesSection />
      </RevealOnScroll>
      <RevealOnScroll delay={400}>
        <ServiceSection />
      </RevealOnScroll>
      <RevealOnScroll delay={500}>
        <ContactSection />
      </RevealOnScroll>
    </>
  );
}

export default Home;
