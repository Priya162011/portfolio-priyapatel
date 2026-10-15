import React from "react";
import { FiDownload } from "react-icons/fi";
import Reveal from "./Reveal";
import { CountUp, spotMove } from "./Effects";

const experience = [
  {
    when: "1 August 2025 to present",
    title: "Junior Software Developer",
    place: "MICM .NET Pvt. Ltd.",
    desc: "Building and managing the SIS module of the Edusprint product, and working on the company's backend office projects.",
    badge: { text: "Current", color: "green" },
    current: true,
  },
  {
    when: "March 2025 to May 2025",
    title: "Assistant Faculty",
    place: "Codemy IT Institute",
  },
  {
    when: "April 2024 to December 2024",
    title: "PHP Developer",
    place: "Dominant InfoTech",
  },
];

const education = [
  {
    when: "2024 to 2026",
    title: "Master of Science in Information Technology",
    place: "Veer Narmad South Gujarat University",
    badge: { text: "Completed", color: "blue" },
  },
  {
    when: "2021 to 2024",
    title: "Bachelor of Science in Information Technology",
    place: "Veer Narmad South Gujarat University",
  },
];

const skillsRow1 = ["HTML", "CSS", "JavaScript", "ReactJS", "PHP", ".NET (VB.NET, ASP.NET)"];
const skillsRow2 = ["Java", "NodeJS", "MySQL", "NoSQL", "Oracle", "PL/SQL"];

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.title + item.when} className={`tl-item ${item.current ? "current" : ""}`}>
          <span className="tl-dot" />
          <div className="tl-card">
            <span className="tl-when">
              {item.when}
              {item.badge && <span className={`badge ${item.badge.color}`}>{item.badge.text}</span>}
            </span>
            <strong>{item.title}</strong>
            <span className="tl-place">{item.place}</span>
            {item.desc && <span className="tl-desc">{item.desc}</span>}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Marquee({ skills, reverse = false }) {
  const group = (hidden) => (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {[0, 1].flatMap((rep) =>
        skills.map((s) => (
          <li key={`${rep}-${s}`} className="skill-pill">
            {s}
          </li>
        ))
      )}
    </ul>
  );
  return (
    <div className={`marquee ${reverse ? "rev" : ""}`}>
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="section-pad">
      <div className="container">
        <Reveal>
          <h2 className="sec-title">About me</h2>
          <p className="sec-sub">MSc IT graduate, now working as a developer.</p>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="now-card">
              <span className="pulse" />
              <div>
                <small>Working now as</small>
                <strong>Junior Software Developer, MICM .NET Pvt. Ltd.</strong>
              </div>
            </div>

            <div className="stats">
              <div className="stat spot" onPointerMove={spotMove}>
                <CountUp to={4} />
                <span>Projects</span>
              </div>
              <div className="stat spot" onPointerMove={spotMove}>
                <CountUp to={3} />
                <span>Roles</span>
              </div>
              <div className="stat spot" onPointerMove={spotMove}>
                <CountUp to={12} />
                <span>Skills</span>
              </div>
            </div>

            <p className="about-text">
              I am a <strong>responsible and organized</strong> developer. I like building
              complete products, from the database and admin panel to the page people
              actually see.
            </p>

            <a className="btn-ghost" href="/Priya%20Patel.pdf" download="Priya Patel.pdf">
              <FiDownload /> Download CV
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="cols-tl">
              <div>
                <h3 className="sub-title">Experience</h3>
                <Timeline items={experience} />
              </div>
              <div>
                <h3 className="sub-title">Education</h3>
                <Timeline items={education} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="skills-block">
        <div className="container">
          <h3 className="sub-title">Skills</h3>
        </div>
        <Marquee skills={skillsRow1} />
        <Marquee skills={skillsRow2} reverse />
      </Reveal>
    </div>
  );
}

export default About;
