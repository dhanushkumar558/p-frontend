import React, { useEffect, useState } from 'react';
import "../styles/Navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "skills", "education", "projects", "contact", "footer"];

    const handleScroll = () => {
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${activeSection}`}>
      <div className="container">
        <a className="navbar-brand navbar-logo" href="#">Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link nav-item-hover" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-hover" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-hover" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-hover" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-hover" href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
