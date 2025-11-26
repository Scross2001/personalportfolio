import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with expertise in React, Node.js, and full-stack web development.
          I love building beautiful, functional applications that solve real-world problems.
          When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
        </p>
        <div className="skills">
          <div className="skill-item">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS/HTML</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
