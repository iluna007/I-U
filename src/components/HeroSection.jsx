import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <>
    <section
      id="hero"
      className="about-box relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle gradient orbs in background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-neutral-600/15 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 h-96 w-96 rounded-full bg-neutral-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h1 className="animate-fade-in text-4xl font-bold tracking-tight sm:text-5xl md:mb-3 md:text-6xl">
          Investigación Urgente
        </h1>
        <p className="animate-fade-in delay-1 mb-6 mt-4 text-lg text-neutral-600 sm:text-xl dark:text-neutral-300">
          Plataforma de análisis, visualización y documentación crítica.
        </p>
        
      </div>
     
     
      
     
    </section>
    
    </>
  );
}

export default HeroSection;
