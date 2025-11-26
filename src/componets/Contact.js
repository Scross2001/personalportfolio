import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Let's Connect</h2>
        <p className="contact-intro">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div className="contact-methods">
          <a href="mailto:Samuelcross2001@gmail.com" className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>Samuelcross2001@gmail.com</p>
          </a>
          <a
            href="https://github.com/Scross2001"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">🐙</div>
            <h3>GitHub</h3>
            <p>github.com/Scross2001</p>
          </a>
          <a
            href="https://www.linkedin.com/in/charlessamuelcross/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/charlessamuelcross</p>
          </a>
        </div>
      </div>
    </section>
  );
}
