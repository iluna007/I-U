import { useMemo, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import projectData from "../data/projectData";

function getInitialMedia(project) {
  if (!project) return "";
  const firstImage = project.images?.[0];
  const firstVideo = project.videolink
    ? (Array.isArray(project.videolink) ? project.videolink[0] : project.videolink)
    : "";
  return firstImage || firstVideo || "";
}

function ProjectDetailColumn({ project }) {
  const [selectedMedia, setSelectedMedia] = useState(() => getInitialMedia(project));
  const [videoThumbnails, setVideoThumbnails] = useState([]);
  const detailScrollRef = useRef(null);

  useEffect(() => {
    if (!project?.videolink) return;
    const videoLinks = Array.isArray(project.videolink) ? project.videolink : [project.videolink];
    let cancelled = false;
    Promise.all(
      videoLinks.map(async (videoUrl) => {
        try {
          const videoId = videoUrl.split("/").pop();
          const response = await fetch(
            `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`
          );
          const data = await response.json();
          return data.thumbnail_url;
        } catch {
          return "/path/to/default-thumbnail.jpg";
        }
      })
    ).then((thumbnails) => {
      if (!cancelled) setVideoThumbnails(thumbnails);
    });
    return () => { cancelled = true; };
  }, [project]);

  const videoLinks = project?.videolink
    ? Array.isArray(project.videolink) ? project.videolink : [project.videolink]
    : [];
  const galleryItems = project
    ? videoLinks
        .map((video, i) => ({
          type: "video",
          src: video,
          thumbnail: videoThumbnails[i] || "/path/to/default-thumbnail.jpg",
        }))
        .concat((project.images || []).map((image) => ({ type: "image", src: image })))
    : [];

  const scrollThumbnails = (delta) => {
    if (detailScrollRef.current) detailScrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  if (!project) {
    return (
      <section className="flex flex-col bg-transparent p-4 text-neutral-900 dark:text-neutral-200 md:overflow-y-auto" aria-label="Proyecto">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">No hay proyectos para este filtro.</p>
      </section>
    );
  }

  return (
    <section className="flex min-h-0 flex-col overflow-hidden bg-transparent p-4 text-neutral-900 dark:text-neutral-200 md:overflow-y-auto" aria-label="Proyecto">
      <div className="mb-4">
        <div className="mb-3">
          {selectedMedia && selectedMedia.includes("vimeo.com") ? (
            <iframe src={selectedMedia} title="Project Video" className="h-[280px] w-full border-0 sm:h-[320px]" allowFullScreen />
          ) : selectedMedia ? (
            <img
              src={selectedMedia}
              alt="Selected"
              className="h-auto max-h-[280px] w-full rounded-lg object-contain sm:max-h-[320px]"
              onError={(e) => { e.target.onerror = null; e.target.src = "/path/to/default-thumbnail.jpg"; }}
            />
          ) : (
            <div className="flex h-[200px] w-full items-center justify-center rounded-lg bg-neutral-200 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-500">Sin media</div>
          )}
        </div>
        <div className="relative flex items-center gap-2">
          <button type="button" className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded p-2 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white" onClick={() => scrollThumbnails(-200)} aria-label="Anterior">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5" /></svg>
          </button>
          <div ref={detailScrollRef} className="flex flex-1 gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {galleryItems.map((item, index) => (
              <button key={index} type="button" onClick={() => setSelectedMedia(item.src)} className="thumbnail-container flex h-[80px] w-[80px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-neutral-800 transition-opacity hover:opacity-90 dark:bg-neutral-800">
                {item.type === "video" ? (
                  <img src={item.thumbnail} alt="Video Thumbnail" className="h-full w-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "/path/to/default-thumbnail.jpg"; }} />
                ) : (
                  <img src={item.src} alt={`Thumbnail ${index}`} className="h-full w-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "/path/to/default-thumbnail.jpg"; }} />
                )}
              </button>
            ))}
          </div>
          <button type="button" className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded p-2 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white" onClick={() => scrollThumbnails(200)} aria-label="Siguiente">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" /></svg>
          </button>
        </div>
      </div>
      <div className="border-t border-neutral-200 pt-4 dark:border-neutral-500">
        <h2 className="mb-4 text-xl font-bold text-neutral-900 md:text-2xl dark:text-neutral-100">{project.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            {Array.isArray(project.description) && project.description.map((block, i) => (
              <p key={i} className="mb-3 text-left text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {block.text}
                {block.link && <><a href={block.link.url} target="_blank" rel="noopener noreferrer" className="text-neutral-600 underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">{block.link.text}</a>{block.afterText}</>}
              </p>
            ))}
          </div>
          <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <p><strong className="text-neutral-600 dark:text-neutral-400">Category:</strong> {Array.isArray(project.category) ? project.category.join(", ") : project.category}</p>
            <p><strong className="text-neutral-600 dark:text-neutral-400">Place:</strong> {project.place}</p>
            <p><strong className="text-neutral-600 dark:text-neutral-400">Year:</strong> {project.year}</p>
            <p><strong className="text-neutral-600 dark:text-neutral-400">Collaboration:</strong> {project.collaboration}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  const [selectedProject, setSelectedProject] = useState(null);

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
    setSelectedProject(null);
  };

  const projectToShow = selectedProject ?? filteredProjects[0] ?? null;

  return (
    <div className="example flex h-[calc(100vh-7rem)] min-h-0 flex-col overflow-hidden">
      {/* 3-column horizontal layout: altura fija, scroll solo en lista de proyectos */}
      <div className="grid min-h-0 w-full flex-1 grid-cols-1 border border-neutral-300 bg-transparent dark:border-neutral-500 md:grid-cols-[minmax(180px,0.5fr)_minmax(260px,1fr)_minmax(0,2.5fr)]">
        {/* Col 1: Ejes de trabajo */}
        <section
          className="flex min-h-0 flex-col overflow-hidden border-r border-neutral-300 bg-transparent p-4 text-neutral-900 dark:border-neutral-500 dark:text-neutral-200"
          aria-label="Ejes de trabajo"
        >
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Ejes de trabajo
          </h2>
          <nav className="flex flex-col gap-1">
            {FILTER_OPTIONS.map(({ value, label, artist }) => {
              const isActive = selectedLabel === label;
              return (
                <button
                  key={`${value}-${label}`}
                  type="button"
                  className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-neutral-900 text-white dark:bg-neutral-200 dark:text-black"
                      : "text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                  }`}
                  aria-pressed={isActive}
                  onClick={() => handleFilter(label, artist)}
                >
                  {label}
                </button>
              );
            })}
          </nav>
          <p className="mt-4 text-xs text-neutral-500">
            {filteredProjects.length} de {projectData.length} proyectos
          </p>
        </section>

        {/* Col 2: Lista de proyectos (tarjetas) — scroll solo aquí */}
        <section
          className="flex min-h-0 flex-col overflow-hidden border-r border-neutral-300 bg-transparent p-4 text-neutral-900 dark:border-neutral-500 dark:text-neutral-200"
          aria-label="Lista de proyectos"
        >
          <h2 className="mb-3 shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Proyectos
          </h2>
          {filteredProjects.length === 0 ? (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              No hay proyectos para este filtro.
            </p>
          ) : (
            <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto pr-1">
              {filteredProjects.map((project) => {
                const isActive =
                  projectToShow && project.id === projectToShow.id;
                const categories = Array.isArray(project.category)
                  ? project.category
                  : [project.category];
                const firstParagraph =
                  Array.isArray(project.description) &&
                  project.description.length > 0
                    ? project.description[0].text
                    : "";

                return (
                  <li key={project.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className={`group w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-neutral-900 text-white dark:bg-neutral-200 dark:text-black"
                          : "text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                      }`}
                    >
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300">
                        {categories.join(" / ")}
                      </p>
                      <p className="mb-1 text-sm font-semibold leading-snug">
                        {project.title}
                      </p>
                      {firstParagraph && (
                        <p className="line-clamp-2 text-xs text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                          {firstParagraph}
                        </p>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* Col 3: Proyecto — layout ProjectDetail (carousel + thumbnails + ficha) */}
        <ProjectDetailColumn key={projectToShow?.id ?? "none"} project={projectToShow} />
      </div>
    </div>
  );
};

Projects.propTypes = {
  setArtist: PropTypes.func,
};

Projects.defaultProps = {
  setArtist: () => {},
};

export default Projects;
