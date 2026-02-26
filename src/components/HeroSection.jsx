import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="about-box relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
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
        <div className="animate-fade-in delay-2">
          <button
            type="button"
            className="rounded-full border border-neutral-400 bg-neutral-200 px-8 py-3 text-sm font-medium text-neutral-900 shadow-lg transition-colors duration-200 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:border-neutral-400 dark:bg-neutral-800/50 dark:text-neutral-100 dark:hover:bg-neutral-800/30 dark:focus:ring-offset-neutral-900"
          >
            Explorar
          </button>
        </div>
      </div>

      <button
        type="button"
        className="animate-pulse-ring absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-neutral-500 transition-colors duration-200 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
        onClick={() => {
          const el = document.getElementById("about");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <small className="text-xs uppercase tracking-widest">Scroll</small>
        <ArrowDown size={20} className="animate-arrow" />
      </button>
    </section>
  );
}

export default HeroSection;
