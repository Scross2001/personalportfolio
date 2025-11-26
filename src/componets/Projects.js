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
            <h3>Project One</h3>
            <p>A React-based task management app with real-time updates and user authentication.</p>
            <div className="project-tech">
              <span>React</span>
              <span>Firebase</span>
              <span>Tailwind</span>
            </div>
            <a
              href="https://github.com"
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
            <h3>Project Two</h3>
            <p>Full-stack e-commerce platform with payment integration and inventory management.</p>
            <div className="project-tech">
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Stripe</span>
            </div>
            <a
              href="https://github.com"
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
            <h3>Project Three</h3>
            <p>Data visualization dashboard with real-time analytics and interactive charts.</p>
            <div className="project-tech">
              <span>React</span>
              <span>D3.js</span>
              <span>Express</span>
            </div>
            <a
              href="https://github.com"
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
