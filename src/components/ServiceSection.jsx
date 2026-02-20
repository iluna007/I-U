import {
  BookOpen,
  Users,
  Search,
  Briefcase,
  ClipboardCheck,
  Map,
  Navigation,
  Globe2,
} from "lucide-react";
import { useState } from "react";

function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      icon: <BookOpen size={28} />,
      title: "Formación y sensibilización",
      short:
        "Fortalecemos capacidades teóricas y técnicas mediante procesos formativos con enfoque pedagógico, técnico y práctico.",
      full: `Ofrecemos servicios de formación y sensibilización orientados al fortalecimiento de capacidades teóricas y técnicas, adaptados a las necesidades de distintos públicos. Diseñamos y desarrollamos productos comunicacionales y acciones formativas que integran enfoque pedagógico, rigor técnico y aplicación práctica.

Nuestras formaciones abordan temáticas clave como urbanismo feminista, movilidad, vivienda, metodologías participativas y la dimensión espacial de los cuidados, siempre desde una perspectiva de género interseccional.`,
    },
    {
      icon: <Users size={28} />,
      title: "Acción y participación comunitaria",
      short:
        "Facilitamos procesos de participación y proyectos colaborativos con comunidades, incorporando metodologías inclusivas y situadas.",
      full: `Desarrollamos procesos de acción y participación comunitaria, así como investigación colaborativa, diálogos y proyectos construidos junto a la comunidad, orientados a identificar las diversas necesidades en relación con los usos y la configuración del espacio. Nuestro enfoque combina el conocimiento técnico especializado con metodologías participativas, garantizando procesos inclusivos, situados y contextualizados.`,
    },
    {
      icon: <Search size={28} />,
      title: "Investigación",
      short:
        "Generamos conocimiento aplicado a través de métodos cualitativos, cuantitativos y enfoques de investigación acción-participativa.",
      full: `Desarrollamos estudios e investigaciones sociales que combinan métodos cualitativos y cuantitativos con enfoques de investigación acción-participativa, integrando una perspectiva feminista interseccional, de derechos humanos y de inclusión social.`,
    },
    {
      icon: <Briefcase size={28} />,
      title: "Asesoramiento y consultoría",
      short:
        "Acompañamos proyectos, diagnósticos y políticas públicas con un enfoque interseccional y de derechos humanos.",
      full: `Ofrecemos servicios de asesoramiento y consultoría especializada en investigación, intervención social, gestión de proyectos y formación. Acompañamos a instituciones y organizaciones sociales en el diseño de planes, programas y proyectos sostenibles.`,
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: "Diagnóstico y auditorías",
      short:
        "Realizamos análisis sociales, físicos y funcionales del espacio, integrando la participación comunitaria y la perspectiva de género.",
      full: `Realizamos análisis integrales del espacio que evalúan los aspectos sociales, físicos y funcionales, incorporando una perspectiva de género interseccional. Nuestro enfoque combina el análisis técnico con la participación activa de la comunidad.`,
    },
    {
      icon: <Map size={28} />,
      title: "Desarrollo y gestión territorial",
      short:
        "Elaboramos estudios y proyectos de planificación territorial con enfoque social, ambiental y participativo.",
      full: `Desarrollamos estudios sobre la situación, los usos y las necesidades de espacios y territorios específicos, tanto urbanos como rurales, integrando sostenibilidad, participación y bienestar comunitario.`,
    },
    {
      icon: <Navigation size={28} />,
      title: "Georreferenciación",
      short:
        "Integramos datos espaciales y sociales para el análisis territorial mediante herramientas de cartografía digital.",
      full: `Desarrollamos procesos de georreferenciación que permiten visualizar y analizar información territorial mediante herramientas de cartografía digital. Integramos datos espaciales y sociales para identificar patrones, relaciones y dinámicas en el territorio, facilitando la toma de decisiones basada en evidencia.

Utilizamos plataformas abiertas y sistemas de información geográfica (SIG) que posibilitan la representación precisa y dinámica del espacio, adaptadas a distintos niveles de análisis y escalas de intervención.`,
    },
    {
      icon: <Globe2 size={28} />,
      title: "Mapeos colaborativos",
      short:
        "Facilitamos procesos participativos para construir mapas colectivos que integran saberes locales y técnicos.",
      full: `Diseñamos y facilitamos mapeos colaborativos que promueven la participación activa de comunidades en la lectura y transformación de su entorno. Estas metodologías fomentan el diálogo, la memoria colectiva y la identificación de recursos, conflictos y oportunidades en el territorio.

Los mapeos combinan herramientas digitales y analógicas, integrando el conocimiento técnico con los saberes locales para producir representaciones situadas y compartidas del espacio.`,
    },
  ];

  return (
    <section id="services" className="border-t border-neutral-700 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-10 text-center text-2xl font-bold md:text-3xl">
          ¿Qué hacemos?
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group flex h-full flex-col rounded-xl border border-neutral-700 bg-neutral-900/50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                  {service.icon}
                </div>
                <h2 className="text-lg font-semibold">
                  {service.title}
                </h2>
              </div>

              <p className="mb-3 flex-1 text-sm text-neutral-400">
                {service.short}
              </p>

              <button
                type="button"
                className="w-fit text-left text-sm font-semibold text-blue-400 transition-all duration-200 hover:gap-2 hover:text-blue-300"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {activeIndex === index ? "Ver menos ↑" : "Ver más ↓"}
              </button>

              {activeIndex === index && (
                <div className="mt-3 animate-fade-in border-t border-neutral-700 pt-3">
                  <p
                    className="whitespace-pre-line text-sm leading-relaxed text-neutral-400"
                  >
                    {service.full}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
