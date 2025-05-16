import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Education.css';

export default function Education({ delayStart = 0 }) {
  const [education, setEducation] = useState([]);
  const [showContent, setShowContent] = useState(false); // Delay control

  useEffect(() => {
    AOS.init({ duration: 800 });

    // Delay the API call and content rendering
    const delayTimer = setTimeout(() => {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/education`)
        .then((response) => {
          setEducation(response.data);
        })
        .catch((error) => {
          console.error('Failed to fetch education data:', error);
        })
        .finally(() => {
          AOS.refresh(); // Animate after content loads
          setShowContent(true);
        });
    }, delayStart);

    return () => clearTimeout(delayTimer);
  }, [delayStart]);

  if (!showContent) {
    return (
      <section id="education" className="education-section py-5">
        <div className="container text-center">
          <h2 className="text-white mb-4 glow-text">Education</h2>
          <div className="spinner"></div>
          <p className="text-white mt-3">Loading education data...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="education-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4 glow-text">Education</h2>

        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item mb-4" data-aos="fade-up">
              <div className="card bg-dark text-white shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title mb-1">{edu.school_name}</h5>
                  <p className="mb-1 text-info">{edu.degree}</p>
                  <p className="mb-1 text-success">🎓 Grade: {edu.grade || 'N/A'}</p>
                  <p className="mb-0 small">📅 {edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
