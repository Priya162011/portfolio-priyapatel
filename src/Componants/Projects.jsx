import React from "react";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";
import { tiltMove, tiltLeave } from "./Effects";
import p1 from "../assets/project1.PNG";
import p2 from "../assets/project2.PNG";
import p3 from "../assets/project3.PNG";
import p4 from "../assets/project4.PNG";

const projectData = [
  {
    img: p1,
    title: "Ethicore360",
    kind: { text: "Company project", color: "blue" },
    desc: "A dynamic website with an admin panel, where every line of content on the site can be managed without touching code.",
    tags: ["Admin Panel", "Dynamic CMS", "React", "Full Stack"],
    link: "https://ethicore360.com",
    cta: "Visit live site",
    icon: "live",
    year: "2024",
  },
  {
    img: p2,
    title: "Hands of Gold NY",
    kind: { text: "Company project", color: "blue" },
    desc: "An e-commerce website for a jewellery brand in the USA. Calculates prices for 24K & 22K gold and manages live stock.",
    tags: ["E-commerce", "24K / 22K Pricing", "Stock Mgmt", "USA Client"],
    link: "https://handsofgoldny.com",
    cta: "Visit live site",
    icon: "live",
    year: "2024",
  },
  {
    img: p3,
    title: "BloodForYou",
    kind: { text: "Personal project", color: "pink" },
    desc: "Users apply for blood and are matched with nearby blood banks. Google Maps API shows live allotment status on the map.",
    tags: ["React", ".NET", "Google Maps API", "Real-time"],
    link: "https://github.com/Priya162011/BloodForYoulive123",
    cta: "View on GitHub",
    icon: "github",
    year: "2023",
  },
  {
    img: p4,
    title: "Alukas",
    kind: { text: "Personal project", color: "pink" },
    status: { text: "In progress", color: "amber" },
    desc: "A full-stack e-commerce platform with an admin panel and payment integration. Advanced order tracking in progress.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Payments"],
    link: "https://github.com/Priya162011/BloodForYoulive123",
    cta: "View on GitHub",
    icon: "github",
    year: "2025",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-pad projects-bg">
      <div className="container">
        <Reveal>
          <div className="proj-header">
            <span className="proj-eyebrow">Portfolio</span>
            <h2 className="sec-title">My Projects</h2>
            <p className="sec-sub">
              Two built for companies, two of my own — each solving a real problem.
            </p>
          </div>
        </Reveal>

        {/* Featured (large) card — first project */}
        <Reveal delay={80}>
          <a
            href={projectData[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-featured spot"
            onPointerMove={tiltMove}
            onPointerLeave={tiltLeave}
            aria-label={`${projectData[0].title} (opens in a new tab)`}
          >
            <div className="proj-featured-img">
              <img src={projectData[0].img} alt={`${projectData[0].title} screenshot`} />
              <div className="proj-featured-overlay" />
            </div>
            <div className="proj-featured-body">
              <div className="proj-meta-row">
                <span className={`badge ${projectData[0].kind.color}`}>{projectData[0].kind.text}</span>
                <span className="proj-year">{projectData[0].year}</span>
              </div>
              <h3 className="proj-featured-title">{projectData[0].title}</h3>
              <p className="proj-featured-desc">{projectData[0].desc}</p>
              <ul className="tags">
                {projectData[0].tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <span className="proj-cta-btn">
                <FiExternalLink /> {projectData[0].cta}
              </span>
            </div>
          </a>
        </Reveal>

        {/* 3-column grid for remaining projects */}
        <div className="proj-grid-3">
          {projectData.slice(1).map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-card-v2 spot"
                onPointerMove={tiltMove}
                onPointerLeave={tiltLeave}
                aria-label={`${p.title} (opens in a new tab)`}
              >
                <div className="proj-thumb-v2">
                  <img src={p.img} alt={`${p.title} screenshot`} />
                  <span className="proj-arrow-v2">
                    {p.icon === "github" ? <FiGithub /> : <FiArrowUpRight />}
                  </span>
                </div>
                <div className="proj-body-v2">
                  <div className="proj-meta-row">
                    <span className={`badge ${p.kind.color}`}>{p.kind.text}</span>
                    {p.status && <span className={`badge ${p.status.color}`}>{p.status.text}</span>}
                  </div>
                  <h3 className="proj-card-title">{p.title}</h3>
                  <p className="proj-card-desc">{p.desc}</p>
                  <ul className="tags">
                    {p.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <span className="proj-link-v2">
                    {p.cta} {p.icon === "github" ? <FiGithub /> : <FiArrowUpRight />}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
