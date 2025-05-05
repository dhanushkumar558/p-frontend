import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Education.css';

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    axios.get('http://localhost:3000/education')
      .then(response => setEducation(response.data))
      .catch(error => console.error(error));
  }, []);

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
