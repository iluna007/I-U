import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import projectData from "../data/projectData";

const FILTER_OPTIONS = [
  { value: "All", label: "All", artist: "Visual Artist" },
  {
    value: "Patrimonio Cultural",
    label: "Patrimonio Cultural",
    artist: "Patrimonio Culturalaker",
  },
  {
    value: "Derechos Humanos",
    label: "Derechos Humanos",
    artist: "Photographer",
  },
  {
    value: "Derecho a la Ciudad",
    label: "Derecho a la Ciudad",
    artist: "Facilitator",
  },
  {
    value: "Acceso a la tierra",
    label: "Acceso a la tierra",
    artist: "Performer",
  },
  {
    value: "Migración",
    label: "Migración",
    artist: "Migracióner",
  },
  {
    value: "Economias locales y sostenibles",
    label: "Economias locales y sostenibles",
    artist: "Artist",
  },
  {
    value: "Economias locales y sostenibles",
    label: "Perpectivas interseccional de género",
    artist: "Artist",
  },
  {
    value: "Economias locales y sostenibles",
    label: "Inclusión y Diversidades",
    artist: "Artist",
  },
  {
    value: "Economias locales y sostenibles",
    label: "Conflictos ambientales",
    artist: "Artist",
  },
  {
    value: "Economias locales y sostenibles",
    label: "Espacio público",
    artist: "Artist",
  },
  {
    value: "Economias locales y sostenibles",
    label: "Generación de datos",
    artist: "Artist",
  },
  {
    value: "Economias locales y sostenibles",
    label: "Planificación urbana y del territorio",
    artist: "Artist",
  },
];

const Projects = ({ setArtist }) => {
  const [selectedLabel, setSelectedLabel] = useState("All");

  const totalProjects = projectData.length;

  const filterValue =
    selectedLabel === "All"
      ? "All"
      : FILTER_OPTIONS.find((o) => o.label === selectedLabel)?.value ?? "All";

  const filteredProjects = useMemo(() => {
    if (filterValue === "All") return projectData;

    return projectData.filter((project) => {
      const category = project.category;

      if (Array.isArray(category)) {
        return category.includes(filterValue);
      }

      if (typeof category === "string") {
        return category.includes(filterValue);
      }

      return false;
    });
  }, [filterValue]);

  const handleFilter = (label, artistName) => {
    setSelectedLabel(label);
    setArtist(artistName);
  };

  return (
    <div className="example mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-28 md:pb-24">
      <header className="projects-header mb-8 text-center">
        <h1 className="projects-title mb-2 text-2xl font-bold md:text-3xl">
          Proyectos
        </h1>
        <p className="projects-subtitle mb-2 text-neutral-400">
          Exploración de proyectos documentales, prácticas colaborativas y espacios de creación.
        </p>
        <p className="projects-meta text-sm text-neutral-500">
          Mostrando {filteredProjects.length} de {totalProjects} proyectos · Filtro:{" "}
          <span className="projects-meta-filter font-semibold text-neutral-300">
            {selectedLabel}
          </span>
        </p>
      </header>

      <div className="filter-buttons -mx-4 mb-8 flex justify-start gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:pb-0 lg:justify-between">
        {FILTER_OPTIONS.map(({ value, label, artist }) => {
          const isActive = selectedLabel === label;

          return (
            <button
              key={`${value}-${label}`}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "scale-105 bg-blue-500/20 text-blue-300 shadow-inner ring-1 ring-blue-500/50 dark:bg-blue-500/20 dark:text-blue-300"
                  : "border border-neutral-500 text-neutral-200 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-700/80 active:scale-100 dark:border-neutral-500 dark:text-neutral-200 dark:hover:bg-neutral-700"
              }`}
              aria-pressed={isActive}
              onClick={() => handleFilter(label, artist)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="projects-empty-state py-12 text-center">
          <p className="mb-4 text-neutral-400">No hay proyectos para este filtro.</p>
          <button
            type="button"
            className="rounded-full border border-neutral-500 px-4 py-2 text-sm font-medium text-neutral-200 transition-all duration-200 hover:scale-105 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300 active:scale-100"
            onClick={() => handleFilter("All", "Visual Artist")}
          >
            Ver todos los proyectos
          </button>
        </div>
      ) : (
        <div className="masonry-grid columns-1 gap-5 pt-16 sm:columns-2 md:columns-3 lg:columns-4">
          {filteredProjects.map((project, index) => (
            <div
              className="masonry-grid-item break-inside-avoid mb-5"
              key={project.id ?? index}
            >
              <Link to={`/projects/${project.id}`}>
                <Card
                  image={project.images[0]}
                  title={project.title}
                  category={project.category}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Projects.propTypes = {
  setArtist: PropTypes.func.isRequired,
};

export default Projects;
