import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-vh-100 d-flex align-items-center position-relative about-box"
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3 animate-fade-in">
            Investigación Urgente
            </h1>

            <p className="lead mb-4 animate-fade-in delay-1">
            Plataforma de análisis, visualización y documentación crítica.
            </p>

            <button className="btn btn-outline-secondary animate-fade-in delay-2">
            Explorar
            </button>

      </div>

      <div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center"
        style={{ cursor: "pointer" }}
        onClick={() => {
            const el = document.getElementById("about");
            el?.scrollIntoView({ behavior: "smooth" });
        }}
        >
        <small className="d-block mb-1">Scroll</small>
        <ArrowDown size={20} className="animate-arrow" />
     </div>
    </section>
  );
}

export default HeroSection;
