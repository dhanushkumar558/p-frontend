import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye } from 'react-icons/fa';
import "../styles/Internships.css";

export default function Internships({ delayStart = 0 }) {
  const [internships, setInternships] = useState([]);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const delayTimer = setTimeout(() => {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/internships`)
        .then((res) => {
          const data = res.data;
          if (Array.isArray(data)) setInternships(data);
          else if (Array.isArray(data.internships)) setInternships(data.internships);
        })
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

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toISOString().split("T")[0];
  };

  const displayed = showAll
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
        <h2 className="text-center text-white mb-5 glow-text">Internships</h2>
        <div className="row justify-content-center text-center">
          {displayed.map((intern, idx) => (
            <div key={idx} className="col-md-4 mb-4 d-flex" data-aos="fade-up">
              <div className="internship-card p-4 w-100 d-flex flex-column align-items-center text-center">
                <h5 className="fw-bold">{intern.position}</h5>
                <p className="text-info fw-semibold">{intern.company}</p>
                <p className="text-muted small">
                  {formatDate(intern.start_date)} – {formatDate(intern.end_date)}
                </p>
                <p className="mb-2">
                  {intern.description?.length > 120
                    ? intern.description.slice(0, 120) + '...'
                    : intern.description}
                </p>
                <div className="mt-auto">
                  <FaEye
                    className="project-icon"
                    title="View Details"
                    onClick={() => setSelectedIntern(intern)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {(isMobile && internships.length > 3) || (!isMobile && internships.length > 6) && (
          <div className="text-center mt-3">
            <button className="btn btn-outline-info" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        )}

        {selectedIntern && (
          <div className="modal fade show d-block custom-modal-bg" tabIndex="-1" onClick={() => setSelectedIntern(null)}>
            <div className="modal-dialog modal-lg modal-dialog-centered" onClick={e => e.stopPropagation()}>
              <div className="modal-content bg-dark text-white rounded-4 border border-info shadow-lg text-center">
                <div className="modal-header border-0 justify-content-center">
                  <h5 className="modal-title w-100">{selectedIntern.position}</h5>
                  <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 m-3" onClick={() => setSelectedIntern(null)}></button>
                </div>
                <div className="modal-body">
                  {selectedIntern.logo_url && (
                    <img
                      src={selectedIntern.logo_url}
                      alt={selectedIntern.company}
                      className="modal-img mb-3 mx-auto d-block rounded shadow"
                      style={{ maxHeight: '200px', maxWidth: '300px', objectFit: 'contain' }}
                    />
                  )}
                  <h6 className="text-info fw-semibold">{selectedIntern.company}</h6>
                  <p className="text-muted small mb-2">
                    {formatDate(selectedIntern.start_date)} – {formatDate(selectedIntern.end_date)}
                  </p>
                  <p className="text-white">{selectedIntern.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
