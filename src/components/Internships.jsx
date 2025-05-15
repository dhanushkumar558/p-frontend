import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye } from 'react-icons/fa';
import "../styles/Internships.css";

export default function Internships() {
  const [internships, setInternships] = useState([]);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/internships`)
      .then((response) => setInternships(response.data))
      .catch((error) => console.error("Error fetching internships", error))
      .finally(() => AOS.refresh());

    const timer = setTimeout(() => setShowContent(true), 1000);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0];
  };

  const displayedInternships = showAll
    ? internships
    : isMobile
    ? internships.slice(0, 3)
    : internships.slice(0, 6);

  if (!showContent) {
    return (
      <section id="internships" className="projects-section py-5">
        <div className="container text-center">
          <h2 className="text-white mb-4 glow-text">Internships</h2>
          <div className="spinner"></div>
          <p className="text-white mt-3">Loading internships...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="internships" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4 glow-text">Internships</h2>

        <div className="row">
          {displayedInternships.map((intern, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex" data-aos="fade-up">
              <div className="internship-card w-100">
                <div className="d-flex flex-column h-100">
                  <h5 className="fw-bold">{intern.position}</h5>
                  <h6 className="text-muted">{intern.company}</h6>
                  <p className="text-muted small">
                    {formatDate(intern.start_date)} – {formatDate(intern.end_date)}
                  </p>
                  <p className="card-text" style={{ minHeight: '80px' }}>
                    {intern.description.length > 100
                      ? intern.description.slice(0, 100) + '...'
                      : intern.description}
                  </p>
                  <div className="mt-auto d-flex justify-content-start">
                    <FaEye
                      className="project-icon"
                      title="View Details"
                      onClick={() => setSelectedIntern(intern)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(isMobile && internships.length > 3) || (!isMobile && internships.length > 6) ? (
          <div className="text-center mt-3">
            <button
              className="btn btn-outline-info"
              onClick={() => {
                setShowAll(!showAll);
                if (showAll) {
                  const el = document.getElementById('internships');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        ) : null}

        {/* Modal */}
        {selectedIntern && (
          <div
            className="modal fade show d-block custom-modal-bg"
            tabIndex="-1"
            onClick={() => setSelectedIntern(null)}
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-0 d-flex justify-content-between align-items-center">
                  <h5 className="modal-title">{selectedIntern.position}</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setSelectedIntern(null)}
                  ></button>
                </div>
                <div className="modal-body">
                 <img
  src={selectedIntern.logo_url}
  alt={selectedIntern.company}
  className="modal-img mb-3 d-block mx-auto"
  style={{ maxHeight: '500px', maxWidth:'400px', objectFit: 'contain' }}
/>

                  <h6>{selectedIntern.company}</h6>
                  <p className="text-muted small">
                    {formatDate(selectedIntern.start_date)} – {formatDate(selectedIntern.end_date)}
                  </p>
                  <p>{selectedIntern.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
