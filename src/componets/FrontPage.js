import React, { useEffect, useState } from "react";
import FallingParticles from "./FallingParticles";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles/base.css";

const getSeasonalTheme = () => {
  const month = new Date().getMonth() + 1;

  if (month === 12) return "christmas";
  if ([9, 10, 11].includes(month)) return "christmas";

  return "base";
};

export default function FrontPage() {
  const [theme, setTheme] = useState("base");

  useEffect(() => {
    const detectedTheme = getSeasonalTheme();
    setTheme(detectedTheme);

    import(`../styles/${detectedTheme}.css`).catch(() => console.warn("Theme not found"));
  }, []);

  return (
    <div className={`FrontPage ${theme}`}>
      {/* Falling Particles */}
      <FallingParticles theme={theme} />

      {/* Name Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}