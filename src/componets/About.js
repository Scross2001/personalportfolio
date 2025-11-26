import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science graduate from Plymouth State University with a minor in Cyber Security. I'm passionate about full-stack web development and building functional applications that solve real-world problems. I have hands-on experience in both frontend and backend development, with a strong foundation in multiple programming languages and frameworks.
        </p>
        <div className="skills">
          <div className="skill-item">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
              <li>C++</li>
              <li>SQL</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS/HTML</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>Backend & Tools</h3>
            <ul>
              <li>Node.js</li>
              <li>Azure DevOps</li>
              <li>Git/GitHub</li>
              <li>MariaDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
