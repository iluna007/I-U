import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedMedia, setSelectedMedia] = useState(
    project && project.images.length > 0
      ? project.images[0]
      : project?.videolink
      ? (Array.isArray(project.videolink) ? project.videolink[0] : project.videolink)
      : ""
  );

  const [videoThumbnails, setVideoThumbnails] = useState([]);

  useEffect(() => {
    const fetchVideoThumbnails = async () => {
      if (!project || !project.videolink) return;

      const videoLinks = Array.isArray(project.videolink) ? project.videolink : [project.videolink];
      try {
        const thumbnails = await Promise.all(
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
        );
        setVideoThumbnails(thumbnails);
      } catch (err) {
        console.error("Error fetching video thumbnails:", err);
      }
    };

    fetchVideoThumbnails();
  }, [project]);

  if (!project) {
    return (
      <div className="example mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-neutral-400">Project not found!</p>
      </div>
    );
  }

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };

  const videoLinks = Array.isArray(project.videolink)
    ? project.videolink
    : project.videolink
    ? [project.videolink]
    : [];

  const galleryItems = videoLinks
    .map((video, index) => ({
      type: "video",
      src: video,
      thumbnail: videoThumbnails[index] || "/path/to/default-thumbnail.jpg",
    }))
    .concat(project.images.map((image) => ({ type: "image", src: image })));

  const scrollThumbnails = (delta) => {
    const el = document.querySelector(".horizontal-scroll");
    if (el) el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="example mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-28">
      <div className="mt-4">
        <div className="mb-4">
          {selectedMedia.includes("vimeo.com") ? (
            <iframe
              src={selectedMedia}
              title="Project Video"
              className="h-[500px] w-full border-0"
              allowFullScreen
            />
          ) : (
            <img
              src={selectedMedia}
              alt="Selected"
              className="h-auto max-h-[500px] w-full rounded-lg object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/path/to/default-thumbnail.jpg";
              }}
            />
          )}
        </div>

        <div className="relative flex items-center gap-2">
          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white md:-left-12"
            onClick={() => scrollThumbnails(-200)}
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5" />
            </svg>
          </button>

          <div className="horizontal-scroll flex flex-1 gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {galleryItems.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={() => handleMediaClick(item.src)}
                className="thumbnail-container flex h-[150px] w-[150px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-neutral-800 transition-opacity hover:opacity-90"
              >
                {item.type === "video" ? (
                  <img
                    src={item.thumbnail}
                    alt="Video Thumbnail"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/path/to/default-thumbnail.jpg";
                    }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Thumbnail ${index}`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/path/to/default-thumbnail.jpg";
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white md:-right-12"
            onClick={() => scrollThumbnails(200)}
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="example mt-8 border-t border-neutral-700 pt-8">
        <h1 className="mb-6 mt-8 text-2xl font-bold md:text-3xl">{project.title}</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            {project.description.map((paragraph, index) => (
              <p key={index} className="mb-4 text-left leading-relaxed">
                {paragraph.text}
                {paragraph.link && (
                  <a
                    href={paragraph.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    {paragraph.link.text}
                  </a>
                )}
                {paragraph.afterText && paragraph.afterText}
              </p>
            ))}
          </div>
          <div className="space-y-2 text-sm">
            <p>
              <strong className="text-neutral-300">Category:</strong>{" "}
              {Array.isArray(project.category) ? project.category.join(", ") : project.category}
            </p>
            <p>
              <strong className="text-neutral-300">Place:</strong> {project.place}
            </p>
            <p>
              <strong className="text-neutral-300">Year:</strong> {project.year}
            </p>
            <p>
              <strong className="text-neutral-300">Collaboration:</strong> {project.collaboration}
            </p>
          </div>
        </div>
      </div>

      <div className="example mt-8 border-t border-neutral-700 pt-8">
        <Link
          to="/projects"
          className="mt-4 inline-block rounded-full border border-neutral-500 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-700"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
