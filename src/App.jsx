import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/contact';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
  
    
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />

     
    </>
  );
}
