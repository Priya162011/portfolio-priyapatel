import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { tiltMove, tiltLeave } from "./Effects";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import p4 from "../assets/project4.png";

// NOTE: "Alukas" currently links to the same GitHub repo as BloodForYou.
// Replace its link with the correct URL when you have it.
const projectData = [
  {
    img: p1,
    title: "Ethicore360",
    kind: { text: "Company project", color: "blue" },
    desc: "A dynamic website with an admin panel, where every line of content on the site can be managed without touching code.",
    tags: ["Admin panel", "Dynamic content"],
    link: "https://ethicore360.com",
    cta: "Visit live site",
  },
  {
    img: p2,
    title: "Hands of Gold NY",
    kind: { text: "Company project", color: "blue" },
    desc: "An e-commerce website for a jewellery brand in the USA. It calculates prices for 24 carat and 22 carat gold and manages stock.",
    tags: ["E-commerce", "24K / 22K pricing", "Stock management", "USA client"],
    link: "https://handsofgoldny.com",
    cta: "Visit live site",
  },
  {
    img: p3,
    title: "BloodForYou",
    kind: { text: "Personal project", color: "pink" },
    desc: "Users apply for blood and are matched with nearby blood banks, with allotment and live status updates. Google Maps API integration lets them track on the map.",
    tags: ["React", ".NET", "Google Maps API", "Live updates"],
    link: "https://github.com/Priya162011/BloodForYoulive123",
    cta: "View on GitHub",
  },
  {
    img: p4,
    title: "Alukas",
    kind: { text: "Personal project", color: "pink" },
    status: { text: "In progress", color: "amber" },
    desc: "An e-commerce website with an admin panel and payment integration. I am now adding advanced features such as order tracking.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Payments"],
    link: "https://github.com/Priya162011/BloodForYoulive123",
    cta: "View on GitHub",
  },
];

function Projects() {
  return (
    <div className="section-pad projects-bg">
      <div className="container">
        <Reveal>
          <h2 className="sec-title">My projects</h2>
          <p className="sec-sub">
            Two projects built for companies, two of my own. Open a card to visit it.
          </p>
        </Reveal>

        <div className="proj-grid">
          {projectData.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120} className="proj-wrap">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-card spot"
                onPointerMove={tiltMove}
                onPointerLeave={tiltLeave}
                aria-label={`${p.title} (opens in a new tab)`}
              >
                <div className="proj-thumb">
                  <img src={p.img} alt={`${p.title} screenshot`} />
                  <span className="proj-arrow">
                    <FiArrowUpRight />
                  </span>
                </div>

                <div className="proj-body">
                  <div className="proj-badges">
                    <span className={`badge ${p.kind.color}`}>{p.kind.text}</span>
                    {p.status && <span className={`badge ${p.status.color}`}>{p.status.text}</span>}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul className="tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <span className="proj-link">
                    {p.cta} <FiArrowUpRight />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
