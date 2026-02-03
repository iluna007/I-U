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
				<button className='btn btn-outline-secondary m-2' onClick={() => handleFilter('Film', 'Filmaker')}>
					Film
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Photography', 'Photographer')}
				>
					Photography
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Workshop', 'Facilitator')}
				>
					Workshop
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Performance', 'Performer')}
				>
					Performance
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Research', 'Researcher')}
				>
					Research
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Artist Residency', 'Artist')}
				>
					Artist Residency
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
