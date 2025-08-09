import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillStyles = `
  .skills-section {
    background-color: #121212;
  }

  .glow-text {
    color: #fff;
    text-shadow: 0 0 6px #0ff, 0 0 12px #0ff;
  }

  .skill-logo {
    width: 50px;
    height: 50px;
    object-fit: contain;
    filter: drop-shadow(0 0 6px #0ff);
    transition: transform 0.3s ease;
  }

  .skill-card {
    background-color: #1a1a1a;
    border-radius: 16px;
    border: 2px solid rgba(0, 255, 255, 0.4);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }

  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
    border-color: #0ff;
  }

  .skill-card:hover .skill-logo {
    transform: scale(1.1);
  }

  .skill-level {
    padding: 4px 10px;
    font-size: 0.8rem;
    border-radius: 12px;
    display: inline-block;
    margin-top: 5px;
  }

  .skill-level.beginner {
    background-color: #ffc107;
    color: #000;
  }

  .skill-level.intermediate {
    background-color: #17a2b8;
    color: #fff;
  }

  .skill-level.advanced {
    background-color: #28a745;
    color: #fff;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #0ff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export default function Skills({ delayStart = 1000 }) {
  const [showContent, setShowContent] = useState(false);

  const skills = [
  {
    name: 'JavaScript',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'HTML5',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Bootstrap',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Git',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Node.js',
    level: 'Beginner',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express.js',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Python',
    level: 'Beginner',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Linux',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
    {
    name: 'SQL',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'AWS',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  },
  {
    name: 'RESTful API',
    level: 'Intermediate',
    logo: 'https://cdn-icons-png.flaticon.com/512/3488/3488296.png',
  },
  {
    name: 'Docker',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'GitHub Actions',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'CI/CD Pipeline',
    level: 'Intermediate',
    logo: 'https://cdn-icons-png.flaticon.com/512/11227/11227206.png',
  },
];


  useEffect(() => {
    AOS.init({ duration: 800 });

    const delayTimer = setTimeout(() => {
      AOS.refresh();
      setShowContent(true);
    }, delayStart);

    return () => clearTimeout(delayTimer);
  }, [delayStart]);

  return (
    <section id="skills" className="skills-section py-5">
      <style>{skillStyles}</style>

      <div className="container">
        <h2 className="text-center text-white mb-4 glow-text">Skills</h2>

        {!showContent ? (
          <div className="text-center">
            <div className="spinner mb-3"></div>
            <p className="text-white">Loading skills...</p>
          </div>
        ) : (
          <div className="row">
            {skills.map((skill, idx) => (
              <div key={idx} className="col-6 col-md-3 mb-4" data-aos="fade-up">
                <div className="card text-center skill-card shadow-sm">
                  <div className="card-body">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="skill-logo mb-2"
                    />
                    <h5 className="card-title text-white">{skill.name}</h5>
                    <span className={`skill-level ${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
