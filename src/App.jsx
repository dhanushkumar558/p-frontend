import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/contact';
import Footer from './components/Footer';
import Internships from './components/Internships';
import Summary from './components/Summary';
import Services from './components/Services';


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <Summary />
  <Internships />
    
      <Projects />
      <Skills/>
      <Education/>
       <Services />
      <Contact />
      <Footer />

     
    </>
  );
}
