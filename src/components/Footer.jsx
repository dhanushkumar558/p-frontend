import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer id="footer" className="footer-section py-5 d-flex align-items-center justify-content-center">
      <div className="container text-white">
        <div className="row text-center text-md-start justify-content-center gy-5">
          {/* Certifications */}
          <div className="col-12 col-md-4">
            <h5 className="footer-title">🎓 Certifications</h5>
            <ul className="footer-links">
              <li><a href="https://ik.imagekit.io/idewrsin9/full.jpg?updatedAt=1747112005825" target="_blank" rel="noopener noreferrer">Full Stack Development</a></li>
              <li><a href="https://ik.imagekit.io/idewrsin9/UC-bf995f8b-a492-4a0f-8637-c1aaecf45e8b.jpg?updatedAt=1747111912992" target="_blank" rel="noopener noreferrer">React Developer</a></li>
              <li><a href="https://ik.imagekit.io/idewrsin9/sql.jpg?updatedAt=1747112108312" target="_blank" rel="noopener noreferrer">MySQL</a></li>
            </ul>
          </div>

          {/* Follow Me */}
          <div className="col-12 col-md-4">
            <h5 className="footer-title">🌐 Follow Me</h5>
            <ul className="footer-links">
              <li><a href="https://www.facebook.com/CeoOfTredex" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.linkedin.com/in/dhanush-kumar558/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          {/* Queries */}
          <div className="col-12 col-md-4">
            <h5 className="footer-title">📬 Queries</h5>
            <ul className="footer-links">
              <li><a href="mailto:dhanushkumar558@gmail.com">Email</a></li>
              <li><a href="https://github.com/dhanushkumar558?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="footer-bottom text-center small">
          <p className="mb-0">&copy; 2025 Dhanush Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
