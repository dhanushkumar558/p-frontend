import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye, FaLink } from 'react-icons/fa';
import '../styles/Projects.css';

export default function Projects({ delayStart = 0 }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const delayTimer = setTimeout(() => {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/projects`)
        .then((res) => setProjects(res.data))
        .catch(console.error)
        .finally(() => {
          AOS.refresh();
          setShowContent(true);
        });
    }, delayStart);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(delayTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [delayStart]);

  const displayedProjects = showAll
    ? projects
    : isMobile
    ? projects.slice(0, 3)
    : projects.slice(0, 8);

  if (!showContent) {
    return (
      <section id="projects" className="projects-section py-5">
        <div className="container text-center">
          <h2 className="glow-text">Projects</h2>
          <div className="spinner"></div>
          <p className="text-white mt-3">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="glow-text text-center mb-5">Projects</h2>

        <div className="row justify-content-center g-4">
          {displayedProjects.map((project, index) => (
            <div key={index} className="col-md-3 d-flex" data-aos="zoom-in">
              <div className="project-card w-100 d-flex flex-column">
                <img src={project.thumbnail_url} alt={project.title} className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">
                    {project.description.length > 100
                      ? `${project.description.slice(0, 100)}...`
                      : project.description}
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
                        title="Link"
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
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        ) : null}

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
              <div className="modal-content bg-dark text-white rounded-4 glow-border">
                <div className="modal-header border-0">
                  <div className="w-100 d-flex justify-content-between align-items-center">
                    <h5 className="modal-title fw-bold">{selectedProject.title}</h5>
                    <div className="d-flex gap-2 align-items-center">
                      {selectedProject.project_link && (
                        <a
                          href={selectedProject.project_link}
                          className="btn btn-outline-info btn-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live App
                        </a>
                      )}
                      <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={() => setSelectedProject(null)}
                      ></button>
                    </div>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="row">
                    {selectedProject.images?.length > 0 ? (
                      selectedProject.images
                        .filter((img) => img?.trim() !== '')
                        .map((img, idx) => (
                          <div key={idx} className="col-md-6 mb-3">
                            <img
                              src={img}
                              alt={`Project ${idx + 1}`}
                              className="img-fluid rounded shadow-sm"
                            />
                          </div>
                        ))
                    ) : (
                      <p className="text-muted">No images available for this project.</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mt-3">
                    <h6 className="text-info">Description</h6>
                    <p className="text-white">{selectedProject.content}</p>
                  </div>

                  {/* Tech Stack */}
                 {/* Tech Stack */}
{selectedProject.tech_stack?.length > 0 && (
  <div className="mt-4">
    <h6 className="text-info mb-2">🛠️ Tech Stack</h6>
    <div className="d-flex flex-wrap gap-2">
      {selectedProject.tech_stack.map((tech, i) => (
        <span
          key={i}
          className="badge bg-gradient text-dark fw-medium px-3 py-2 fs-6 rounded-pill shadow-sm"
          style={{ background: '#f1f1f1' }}
        >
          🔧 {tech}
        </span>
      ))}
    </div>
  </div>
)}

{/* Features */}
{selectedProject.features?.length > 0 && (
  <div className="mt-4">
    <h6 className="text-info mb-2">🌟 Features</h6>
    <ul className="text-light ps-3 list-unstyled">
      {selectedProject.features.map((feature, i) => (
        <li key={i} className="mb-2 d-flex align-items-start gap-2">
          <span style={{ fontSize: '1.2rem' }}>✅</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)}

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
