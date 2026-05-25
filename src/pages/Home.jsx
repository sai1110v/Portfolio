import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (

    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* PARTICLES */}
      <ParticlesBackground darkMode={darkMode} />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Hero */}
        <Hero darkMode={darkMode} />

        {/* About */}
        <About darkMode={darkMode} />

        {/* Skills */}
        <Skills darkMode={darkMode} />

        {/* Projects */}
        <Projects darkMode={darkMode} />

        {/* Contact */}
        <Contact darkMode={darkMode} />

      </div>

    </div>
  );
};

export default Home;