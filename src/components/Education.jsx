import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Education.css';

export default function Education({ delayStart = 0 }) {
  const [education, setEducation] = useState([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const delayTimer = setTimeout(() => {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/education`)
        .then((response) => setEducation(response.data))
        .catch((error) => console.error('Failed to fetch education data:', error))
        .finally(() => {
          AOS.refresh();
          setShowContent(true);
        });
    }, delayStart);

    return () => clearTimeout(delayTimer);
  }, [delayStart]);

  if (!showContent) {
    return (
      <section id="education" className="education-section py-5">
        <div className="container text-center">
          <h2 className="glow-text">Education</h2>
          <div className="spinner"></div>
          <p className="text-white mt-3">Loading education data...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="education-section py-5">
      <div className="container">
        <h2 className="glow-text">Education</h2>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item" data-aos="fade-up">
              <div className="education-card">
                <h5 className="school-name">{edu.school_name}</h5>
                <p className="degree">{edu.degree}</p>
                <p className="grade">🎓 Grade: {edu.grade || 'N/A'}</p>
                <p className="year">📅 {edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
