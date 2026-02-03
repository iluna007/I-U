import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ObjectivesSection from "../components/ObjectivesSection";
import ContactSection from "../components/ContactSection";
import ServiceSection from "../components/ServiceSection";
import People from "../components/People";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <People />
      <ObjectivesSection />
      <ServiceSection />
      <ContactSection />
    </>
  );
}

export default Home;
