import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/skills.css';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [showContent, setShowContent] = useState(false); // Show content after 3s

  useEffect(() => {
    AOS.init({ duration: 800 });

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/skills`)
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        AOS.refresh(); // Animate after load
      });

    // Force delay render after 3s
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return (
      <section id="skills" className="skills-section py-5">
        <div className="container text-center">
          <h2 className="text-white mb-4 glow-text">Skills</h2>
          <div className="spinner"></div>
          <p className="text-white mt-3">Loading skills...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4 glow-text">Skills</h2>
        <div className="row">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-6 col-md-3 mb-4" data-aos="fade-up">
              <div className="card text-center skill-card bg-dark text-white shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{skill.name}</h5>
                  <span className={`badge skill-level ${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
