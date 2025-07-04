import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';
import { FaLaptopCode, FaPaintBrush, FaServer, FaMobileAlt } from 'react-icons/fa';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites with React, HTML, CSS, and Bootstrap, Animations.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'UI/UX Design',
      description: 'Clean, user-centric interface designs using Figma, Adobe XD, and CSS animations.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'Backend Development',
      description: 'Secure, fast, and scalable APIs using Node.js, Express & Mysql, Python.',
      icon: <FaServer />,
    },
    {
      title: 'Mobile Responsive',
      description: 'Ensure seamless experience across all devices — mobile, tablet & desktop.',
      icon: <FaMobileAlt />,
    },
  ];

  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4 glow-text">Services</h2>

        <div className="row gy-4 justify-content-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="col-12 col-sm-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="service-card text-center h-100 p-4">
                <div className="service-icon mb-3">{service.icon}</div>
                <h5 className="mb-2">{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
