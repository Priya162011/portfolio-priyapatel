import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "home.jsx" },
  { id: "about", label: "about.jsx" },
  { id: "projects", label: "projects.jsx" },
  { id: "contact", label: "contact.jsx" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="brand" onClick={() => goTo("home")}>
          <span className="brand-dot" />
          priya.dev
        </button>

        <nav className={`tabs ${open ? "open" : ""}`}>
          {LINKS.map((link) => (
            <button
              key={link.id}
              className={`tab ${active === link.id ? "active" : ""}`}
              onClick={() => goTo(link.id)}
            >
              <span className="tab-dot" />
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
