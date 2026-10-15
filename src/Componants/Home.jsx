import React, { useEffect, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import photo from "../assets/aboutpics.jpg";

const roles = ["Web Developer", "React Developer", "MERN Stack Developer"];

const chips = [
  { label: "React", cls: "chip-1" },
  { label: ".NET", cls: "chip-2" },
  { label: "Node.js", cls: "chip-3" },
  { label: "MongoDB", cls: "chip-4" },
];

function Letters({ text, start = 0, className = "" }) {
  return (
    <span className={`name-line ${className}`} aria-hidden="true">
      {text.split("").map((char, i) => (
        <span className="ch" style={{ "--i": start + i }} key={i}>
          {char}
        </span>
      ))}
    </span>
  );
}

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="grid-lines" />
      </div>

      <div className="container">
        <div className="hero-grid">
          <div>
            <p className="hero-status">
              <span className="pulse" /> Currently at MICM .NET Pvt. Ltd.
            </p>

            <h1 className="hero-name" aria-label="Priya Patel">
              <Letters text="PRIYA" />
              <Letters text="PATEL" start={5} className="two" />
            </h1>

            <p className="hero-role" aria-live="polite">
              <span key={roleIndex} className="role-swap">
                {roles[roleIndex]}
              </span>
              <span className="role-place"> based in Surat, Gujarat</span>
            </p>

            <p className="hero-lead">
              Junior Software Developer who builds and manages the SIS module of the
              Edusprint product and works on the company's backend office projects.
            </p>

            <div className="hero-actions">
              <button className="btn-solid" onClick={() => scrollTo("projects")}>
                See my projects <FiArrowDown />
              </button>
              <button className="btn-ghost" onClick={() => scrollTo("contact")}>
                Contact me
              </button>
            </div>
          </div>

          <div className="hero-photo-col">
            <div className="hero-photo-wrap">
              <div className="photo-back" aria-hidden="true" />
              <img src={photo} alt="Priya Patel" className="hero-photo" />
              {chips.map((c) => (
                <span key={c.label} className={`chip ${c.cls}`} aria-hidden="true">
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="scroll-cue" aria-hidden="true" />
    </div>
  );
}

export default Home;
