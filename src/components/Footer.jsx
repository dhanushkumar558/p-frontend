import React from 'react';
import '../styles/Footer.css'; // Custom styles for the footer

export default function Footer() {
  return (
    <footer id="footer" className="footer-section py-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-title">Certifications</h5>
            <ul className="social-links">
              <li><a href="https://ik.imagekit.io/idewrsin9/full.jpg?updatedAt=1747112005825" className="social-icon">Full Stack Developement</a></li>
              <li><a href="https://ik.imagekit.io/idewrsin9/UC-bf995f8b-a492-4a0f-8637-c1aaecf45e8b.jpg?updatedAt=1747111912992" className="social-icon">React Developer</a></li>
              <li><a href="https://ik.imagekit.io/idewrsin9/sql.jpg?updatedAt=1747112108312" className="social-icon">Mysql</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Follow Me</h5>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/CeoOfTredex" className="social-icon">Facebook</a></li>
              <li><a href="https://www.instagram.com/the_hyperguy_official/" className="social-icon">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/dhanush-kumar558/" className="social-icon">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Queries</h5>
            <ul className="social-links">
              <li><a href="mailto:dhanushkumar558@gmail.com" className="social-icon">Email</a></li>
              <li><a href="https://github.com/dhanushkumar558?tab=repositories" className="social-icon">Github</a></li>
              
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-4">
          <p>&copy; @2025, by DhanushKumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
