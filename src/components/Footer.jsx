import React from 'react';
import '../styles/Footer.css'; // Custom styles for the footer

export default function Footer() {
  return (
    <footer id="footer" className="footer-section py-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We are passionate about creating beautiful and functional web experiences. 
              Our goal is to design and develop websites that help your business grow.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Follow Us</h5>
            <ul className="social-links">
              <li><a href="#" className="social-icon">Facebook</a></li>
              <li><a href="#" className="social-icon">Twitter</a></li>
              <li><a href="#" className="social-icon">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Contact</h5>
            <p className="footer-text">
              Email: info@yourdomain.com<br />
              Phone: +123 456 7890<br />
              Address: 1234 Your Street, Your City, Country
            </p>
          </div>
        </div>
        <div className="footer-bottom mt-4">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
