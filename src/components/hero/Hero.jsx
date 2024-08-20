import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="d-flex align-items-center" style={{ height: "100vh" }}>
          <Col md={6} className="hero-content text-center">
            <h1>Mi Hero Title</h1>
            <p>Descripción del Hero</p>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <img
              src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagen del Hero"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
