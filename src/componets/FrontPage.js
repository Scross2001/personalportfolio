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

//   if (month === 12) return "christmas";
//   if ([9, 10, 11].includes(month)) return "fall";

//   return "base";
  return "base";
};

const getColorMode = () => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

export default function FrontPage() {
  const [theme, setTheme] = useState("base");
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    const detectedTheme = getSeasonalTheme();
    const detectedMode = getColorMode();
    
    setTheme(detectedTheme);
    setColorMode(detectedMode);

    import(`../styles/${detectedTheme}.css`).catch(() => console.warn("Theme not found"));

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setColorMode(e.matches ? "dark" : "light");
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleColorMode = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
  };

  return (
    <div className={`FrontPage ${theme} ${colorMode}`}>
      <button 
        className="theme-toggle"
        onClick={toggleColorMode}
        title={`Switch to ${colorMode === "dark" ? "light" : "dark"} mode`}
      >
        {colorMode === "dark" ? "☀️" : "🌙"}
      </button>
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