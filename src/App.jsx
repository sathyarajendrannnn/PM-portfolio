import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import References from './components/References/References';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingFlowers from './components/UI/FloatingFlowers';

function App() {
  const [darkMode, setDarkMode] = useState(false); // Fresh & light by default

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg transition-colors duration-500 font-sans overflow-x-hidden">

      {/* ── Ambient mesh background ── */}
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" aria-hidden="true" />

      {/* ── Floating blobs ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="blob w-[500px] h-[500px] top-[-10%] left-[-5%] bg-primary-300/40 dark:bg-primary-900/20 delay-0" />
        <div className="blob w-[400px] h-[400px] top-[30%] right-[-8%] bg-accent-300/30 dark:bg-accent-900/15 delay-2000" />
        <div className="blob w-[350px] h-[350px] bottom-[10%] left-[10%] bg-mid-400/25 dark:bg-mid-600/10 delay-4000" />
      </div>

      {/* ── Floating flowers & petals ── */}
      <FloatingFlowers />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Education />
        <References />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
