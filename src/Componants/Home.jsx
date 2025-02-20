import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container 
      fluid 
      className="position-relative text-center d-flex flex-column justify-content-center align-items-center min-vh-100"
    >
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="text-primary fw-bold">Hey! I am</h3>
          <h1 className="display-3 fw-bold text-nowrap">PRIYA PATEL</h1>
          <h2 className="text-primary fw-semibold">Web Developer</h2>
        </Col>
      </Row>

      {/* Background Overlay */}
      <div className="bg-overlay"></div>
    </Container>
  );
}

export default Home;
