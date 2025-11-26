import React from "react";
import profilePic from "../profilePicture.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Charles Cross</h1>
        <p className="tagline">Full Stack Developer | Creative Problem Solver</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
