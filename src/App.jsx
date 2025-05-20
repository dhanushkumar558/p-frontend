import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/contact';
import Footer from './components/Footer';
import Internships from './components/Internships';


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
  <Internships delayStart={1000}/>
    
      <Projects delayStart={2000}/>
      <Skills delayStart={3000}/>
      <Education delayStart={4000}/>
       
      <Contact />
      <Footer />

     
    </>
  );
}
