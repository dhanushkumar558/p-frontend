import React from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/Services.css';
import { FaLaptopCode, FaPaintBrush, FaServer, FaMobileAlt } from 'react-icons/fa';

export default function Services() {
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
          {services.map((service, idx) => {
            const fromDirection = idx % 2 === 0 ? 100 : -100;

            const ref = React.useRef(null);
            const isInView = useInView(ref, {
              threshold: 1, // visible when half enters
              once: false,    // 🔁 re-triggers when back in view
            });

            return (
              <motion.div
                ref={ref}
                key={idx}
                className="col-12 col-sm-6 col-lg-3"
                initial={{ opacity: 0, x: fromDirection }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: fromDirection } // reset when out
                }
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="service-card text-center h-100 p-4">
                  <div className="service-icon mb-3">{service.icon}</div>
                  <h5 className="mb-2">{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
