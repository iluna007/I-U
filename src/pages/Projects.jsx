import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/projects.css";
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
  const [filter, setFilter] = useState("All");

  const totalProjects = projectData.length;

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projectData;

    return projectData.filter((project) => {
      const category = project.category;

      if (Array.isArray(category)) {
        return category.includes(filter);
      }

      if (typeof category === "string") {
        return category.includes(filter);
      }

      return false;
    });
  }, [filter]);

  const handleFilter = (category, artistName) => {
    setFilter(category);
    setArtist(artistName);
  };

  const currentFilterLabel =
    FILTER_OPTIONS.find((option) => option.value === filter)?.label || "All";

  return (
		<div className='container example'>
      <header className='projects-header text-center mb-4'>
        <h1 className='projects-title'>Proyectos</h1>
        <p className='projects-subtitle'>
          Exploración de proyectos documentales, prácticas colaborativas y espacios de creación.
        </p>
        <p className='projects-meta'>
          Mostrando {filteredProjects.length} de {totalProjects} proyectos · Filtro:{" "}
          <span className='projects-meta-filter'>{currentFilterLabel}</span>
        </p>
      </header>
			<div className='filter-buttons mt-5 mb-4 d-flex flex-wrap justify-content-center justify-content-md-between'>
				{FILTER_OPTIONS.map(({ value, label, artist }) => {
          const isActive = filter === value;

          return (
            <button
              key={`${value}-${label}`}
              type='button'
              className={`btn m-2 ${isActive ? "btn-secondary" : "btn-outline-secondary"}`}
              aria-pressed={isActive}
              onClick={() => handleFilter(value, artist)}
            >
              {label}
            </button>
          );
        })}
			</div>

			{filteredProjects.length === 0 ? (
        <div className='projects-empty-state text-center'>
          <p className='mb-3'>No hay proyectos para este filtro.</p>
          <button
            type='button'
            className='btn btn-outline-secondary'
            onClick={() => handleFilter("All", "Visual Artist")}
          >
            Ver todos los proyectos
          </button>
        </div>
      ) : (
        <div className='masonry-grid'>
          {filteredProjects.map((project, index) => (
            <div className='masonry-grid-item' key={project.id ?? index}>
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
