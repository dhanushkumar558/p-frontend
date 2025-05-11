import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/IMG_COM_202403041325583680.jpg';
import '../styles/hero.css';

import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Text */}
          <div className="col-md-6 text-center text-md-start text-column" data-aos="fade-right">
            <h1 className="glow-text">Hi, I'm Dhanush Kumar</h1>
            <p className="role-text">
              <Typewriter
                words={['Full Stack Developer', 'React Enthusiast', 'FrontEnd Developer']}
                loop={0}
                cursor
                cursorStyle="< />"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            {/* Buttons */}
            <div
              className="mt-4 d-flex justify-content-center justify-content-md-start gap-3 flex-wrap btn-group-wrapper"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="mailto:dhanushkumar558@gmail.com"
                className="btn btn-primary glow-btn"
              >
                Hire Me
              </a>
              <a
                href="/DhanushKumar_Resume.pdf"
                download
                className="btn btn-outline-light glow-btn"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center my-4 my-md-0 image-column" data-aos="fade-left">
            <img
              src={profileImage}
              alt="Dhanush Kumar"
              className="img-fluid rounded-circle glow-border"
              style={{ width: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
