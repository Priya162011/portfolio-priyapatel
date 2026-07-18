import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/PRIYA-logo.png";

function Header() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar expand="lg" className="shadow-sm fixed-top">
      <Container>
        {/* <Navbar.Brand href="#" onClick={() => handleScroll("home")}>
          <img src={logo} alt="Logo" height="50" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleScroll("home")} className="fw-bold">HOME</Nav.Link>
            <Nav.Link onClick={() => handleScroll("about")} className="fw-bold">ABOUT</Nav.Link>
            {/* <Nav.Link onClick={() => handleScroll("resume")} className="fw-bold">RESUME</Nav.Link> */}
            <Nav.Link onClick={() => handleScroll("projects")} className="fw-bold">PROJECTS</Nav.Link>
            <Nav.Link onClick={() => handleScroll("contact")} className="fw-bold">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
