import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/contact`, formData)
      .then((res) => {
        setResponseMessage('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        setResponseMessage('❌ Something went wrong. Please try again.');
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setResponseMessage(''), 5000);
      });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4 glow-text">Contact</h2>

        <div data-aos="fade-up" className="d-flex justify-content-center">
          <form onSubmit={handleSubmit} className="glow-card p-4 w-100" style={{ maxWidth: '600px' }}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control rounded-3"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control rounded-3"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="form-control rounded-3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 glow-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {responseMessage && (
              <div className="text-center mt-3 text-white fw-semibold">
                {responseMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
