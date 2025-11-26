import React from "react";

export default function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
              <h3>Senior Developer</h3>
              <p className="company">Tech Company Inc.</p>
              <p>Led development of microservices architecture and mentored junior developers.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2021 - 2023</div>
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <p className="company">Digital Solutions LLC</p>
              <p>Built and maintained multiple client-facing web applications using React and Node.js.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2019 - 2021</div>
            <div className="timeline-content">
              <h3>Junior Developer</h3>
              <p className="company">StartUp Studio</p>
              <p>Developed frontend features and assisted with backend API development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
