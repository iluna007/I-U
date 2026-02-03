import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/projects.css";
import Card from "../components/Card";
import projectData from "../data/projectData";

const Projects = ({ setArtist }) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) =>
          project.category.includes(filter) // Verifica si el proyecto tiene la categoría seleccionada
        );

  const handleFilter = (category, artistName) => {
    setFilter(category);
    setArtist(artistName); // Set artist name based on the category
  };

  return (
		<div className='container example'>
			<div className='filter-buttons mt-5 mb-4 d-flex flex-wrap justify-content-center justify-content-md-between'>
				<button className='btn btn-outline-secondary m-2' onClick={() => handleFilter('All', 'Visual Artist')}>
					All
				</button>
				<button className='btn btn-outline-secondary m-2' onClick={() => handleFilter('Patrimonio Cultural', 'Patrimonio Culturalaker')}>
					Patrimonio Cultural
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Derechos Humanos', 'Photographer')}
				>
					Derechos Humanos
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Derecho a la Ciudad', 'Facilitator')}
				>
					Derecho a la Ciudad
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Acceso a la tierra', 'Performer')}
				>
					Acceso a la tierra
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Migración', 'Migracióner')}
				>
					Migración
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Economias locales y sostenibles', 'Artist')}
				>
					Economias locales y sostenibles
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Economias locales y sostenibles', 'Artist')}
				>
					Perpectivas interseccional de género
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Economias locales y sostenibles', 'Artist')}
				>
					Inclusión y Diversidades
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Economias locales y sostenibles', 'Artist')}
				>
					Conflictos ambientales
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Economias locales y sostenibles', 'Artist')}
				>
					Espacio público
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Economias locales y sostenibles', 'Artist')}
				>
					Generación de datos
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Economias locales y sostenibles', 'Artist')}
				>
					Planificación urbana y del territorio
				</button>
			</div>

			<div className='masonry-grid'>
				{filteredProjects.map((project, index) => (
					<div className='masonry-grid-item' key={index}>
						<Link to={`/projects/${project.id}`}>
							<Card image={project.images[0]} title={project.title} category={project.category} />
						</Link>
					</div>
				))}
			</div>
		</div>
  );
};
Projects.propTypes = {
  setArtist: PropTypes.func.isRequired,
};

export default Projects;
