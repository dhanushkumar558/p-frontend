import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const styles = `
  .summary-section {
    background-color: #121212;
    color: #f8f9fa;
    padding: 4rem 1rem;
  }

  .summary-container {
    max-width: 950px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 28px;
    padding: 2.5rem 2rem;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.1);
    border: 1px solid rgba(0, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
  }

  .summary-heading {
    color: #ffffff;
    font-weight: 600;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-shadow: 0 0 2px #0ff, 0 0 5px rgba(0, 255, 255, 0.5);
  }

  .summary-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #e0e0e0;
    letter-spacing: 0.2px;
  }

  .summary-text p {
    margin-bottom: 1.2rem;
  }
`;

export default function Summary() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="summary" className="summary-section">
      <style>{styles}</style>

      <div className="container">
        <h2 className="summary-heading" data-aos="fade-up">Summary</h2>

        <div className="summary-container" data-aos="fade-up">
          <div className="summary-text">
            <p>
              I am a passionate full-stack developer who transforms ideas into beautiful, functional web experiences.
              I specialize in building responsive, modern interfaces with <strong>JavaScript</strong>, <strong>React</strong>,
              and <strong>CSS/Bootstrap</strong>, backed by scalable APIs using <strong>Node.js</strong>.
            </p>
            <p>
              My work is driven by design thinking, performance, and user empathy.
              I focus on polished UI, fluid animations, accessibility, and maintainable code.
            </p>
            <p>
              I’m always experimenting with new tools and best practices to improve the developer and user experience.
              Every project is an opportunity to elevate functionality with thoughtful design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
