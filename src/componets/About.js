import React from "react";
import { 
  FaPython, 
  FaJava, 
  FaReact, 
  FaNode,
  FaGit,
  FaDatabase,
  FaHtml5,
  FaFileCode,
  FaCss3,
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaApple,
  FaAws,
  FaTools
} from "react-icons/fa";

export default function About() {
  const skillCategories = [
    {
      title: "Languages",
      icon: FaCode,
      skills: [
        { name: "JavaScript", icon: FaFileCode },
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava },
        { name: "C#", icon: FaFileCode },
        { name: "C++", icon: FaFileCode },
        { name: "Swift", icon: FaApple },
        { name: "SQL", icon: FaDatabase },
        { name: "HTML/CSS", icon: FaHtml5 }
      ]
    },
    {
      title: "Frontend",
      icon: FaLaptopCode,
      skills: [
        { name: "React", icon: FaReact },
        { name: "JavaScript ES6+", icon: FaFileCode },
        { name: "CSS3 & Responsive", icon: FaCss3 }
      ]
    },
    {
      title: "Backend & Cloud",
      icon: FaCogs,
      skills: [
        { name: "Node.js", icon: FaNode },
        { name: "Express", icon: FaFileCode },
        { name: "MongoDB", icon: FaDatabase },
        { name: "AWS", icon: FaAws },
        { name: "S3", icon: FaAws },
        { name: "SNS/SQS", icon: FaAws },
        { name: "Jenkins", icon: FaTools },
        { name: "Git/GitHub", icon: FaGit }
      ]
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="header-accent"></div>
        </div>
        
        <div className="about-intro">
          <p>
            Computer Science graduate from Plymouth State University with a minor in Cybersecurity. I specialize in full-stack web development and creating scalable applications that solve real-world problems.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <div key={idx} className="skill-category">
                <div className="category-header">
                  <IconComponent className="category-icon" />
                  <h3>{category.title}</h3>
                </div>
                <ul className="skill-list">
                  {category.skills.map((skill, sidx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <li key={sidx} className="skill-badge">
                        <SkillIcon className="skill-icon" />
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="about-footer">
          <p>
            With hands-on experience at Travelers as a Software Engineer and R&D internships at Laborie Medical, I've developed expertise across both frontend and backend technologies. I'm passionate about writing clean, maintainable code and leveraging modern development practices to build intuitive user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
