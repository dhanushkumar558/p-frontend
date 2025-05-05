import React, { useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/contact.css'; // Add custom styles if needed

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false); // Spinner state

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner

    axios.post(`${import.meta.env.VITE_API_BASE_URL}/contact`, formData)

      .then(response => {
        setResponseMessage(response.data.message);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        setResponseMessage('Something went wrong. Please try again later.');
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false); // Hide spinner
        setTimeout(() => {
          setResponseMessage('');
        }, 5000);
      });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4 glow-text">Contact</h2>

        <div data-aos="fade-up" className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Your Message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary d-flex align-items-center justify-content-center" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

        {/* Success/Error Message */}
        {responseMessage && (
          <div className={`response-message mt-3 ${responseMessage.includes('successfully') ? 'success' : 'error'}`}>
            <p>{responseMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
