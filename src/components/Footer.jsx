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
              <li><a href="#" className="social-icon">React Developer</a></li>
              <li><a href="#" className="social-icon">Full Stack Developement</a></li>
              <li><a href="#" className="social-icon">Mysql</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Follow Me</h5>
            <ul className="social-links">
              <li><a href="#" className="social-icon">Facebook</a></li>
              <li><a href="#" className="social-icon">Twitter</a></li>
              <li><a href="#" className="social-icon">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Contact</h5>
            <ul className="social-links">
              <li><a href="#" className="social-icon">Mail</a></li>
              <li><a href="#" className="social-icon">Github</a></li>
              
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
