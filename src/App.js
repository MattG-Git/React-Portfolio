import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Certs from './components/Certs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="nav mb-5">
        <Navigation />
      </div>
      <div className="intro mb-5 p-5">
        <Intro />
      </div>
      <div className="skills mb-5"> 
        <Skills />
      </div>
      <div className="projects mb-5 p-5">
        <Projects />
      </div>
      <div>
        <Certs />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
