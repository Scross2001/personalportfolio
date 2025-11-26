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
          <a href="mailto:samuel@example.com" className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>samuel@example.com</p>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">🐙</div>
            <h3>GitHub</h3>
            <p>github.com/scross2001</p>
          </a>
          <a
            href="https://www.linkedin.com/in/charlessamuelcross/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/samuel</p>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">𝕏</div>
            <h3>Twitter</h3>
            <p>@samuelcross</p>
          </a>
        </div>
      </div>
    </section>
  );
}
