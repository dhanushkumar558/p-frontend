import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye, FaLink } from 'react-icons/fa';
import '../styles/Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
        AOS.refresh(); // Refresh AOS to apply animation after content is loaded
      });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedProjects = showAll
    ? projects
    : isMobile
    ? projects.slice(0, 3)
    : projects.slice(0, 8);

  if (loading) {
    return (
      <section id="projects" className="projects-section py-5">
        <div className="container text-center">
          <h2 className="text-white mb-4 glow-text">Projects</h2>
          <div className="spinner"></div>
          <p className="text-white mt-3">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4 glow-text">Projects</h2>

        <div className="row">
          {displayedProjects.map((project, index) => (
            <div key={index} className="col-md-3 mb-4 d-flex" data-aos="zoom-in">
              <div className="card shadow-sm border-0 w-100 d-flex flex-column project-card">
                <img
                  src={project.thumbnail_url}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: '100px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted" style={{ minHeight: '10px' }}>
                    {project.description}
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <FaEye
                      className="project-icon"
                      onClick={() => setSelectedProject(project)}
                      title="View Details"
                    />
                    {project.project_link && (
                      <a
                        href={project.project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on GitHub"
                      >
                        <FaLink className="project-icon" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(isMobile && projects.length > 3) || (!isMobile && projects.length > 8) ? (
          <div className="text-center mt-3">
            <button
              className="btn btn-outline-info"
              onClick={() => {
                setShowAll(!showAll);
                if (showAll) {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        ) : null}

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="modal fade show d-block custom-modal-bg"
            tabIndex="-1"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-0 d-flex justify-content-between align-items-center">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  {selectedProject.project_link && (
                    <a
                      href={selectedProject.project_link}
                      className="btn btn-outline-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setSelectedProject(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  {selectedProject.images?.length > 0 ? (
                    selectedProject.images
                      .filter((img) => img && img.trim() !== '')
                      .map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Project Image ${idx + 1}`}
                          className="modal-img mb-3"
                        />
                      ))
                  ) : (
                    <p>No images available for this project.</p>
                  )}
                  <p>{selectedProject.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
