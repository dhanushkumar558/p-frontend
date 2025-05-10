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
        <div className="container d-flex align-items-center justify-content-between flex-wrap">
          <div className="hero-text" data-aos="fade-right">
            <h1 className="glow-text">Hi, I'm Dhanush Kumar</h1>
            <p className="role-text">
              <Typewriter
                words={['Frontend Developer', 'React Enthusiast', 'UI/UX Explorer']}

                loop={0} // 0 = infinite loop
                cursor
                cursorStyle="< />"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <img
              src={profileImage}
              alt="Dhanush Kumar"
              className="img-fluid rounded-circle glow-border"
              style={{ width: '300px' }}
            />
          </div>
        </div>
      </section>
    );
  }
