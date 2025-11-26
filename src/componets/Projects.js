import React from "react";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div
              className="project-image"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            ></div>
            <h3>Music Store Website</h3>
            <p>A fully functional e-commerce website for music products with database management and user shopping experience.</p>
            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>MariaDB</span>
            </div>
            <a
              href="https://github.com/Scross2001"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              }}
            ></div>
            <h3>Discord Bot</h3>
            <p>A chat bot built using Discord's API with message analysis for contextually relevant responses and enhanced user engagement.</p>
            <div className="project-tech">
              <span>Python</span>
              <span>Discord API</span>
              <span>Message Analysis</span>
            </div>
            <a
              href="https://github.com/Scross2001"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              }}
            ></div>
            <h3>Python Chess</h3>
            <p>A complete chess game implementation from scratch with full game logic, move validation, and user interface.</p>
            <div className="project-tech">
              <span>Python</span>
              <span>Game Logic</span>
              <span>Algorithms</span>
            </div>
            <a
              href="https://github.com/Scross2001/PythonChess"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
