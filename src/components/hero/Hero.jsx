// Hero.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero p-0">
      <Container fluid>
        <Row
          className="d-flex p-0 align-items-center"
          style={{ height: "100vh" }}
        >
          <Col className="d-flex p-0 align-items-center justify-content-center">
            <div className="hero-image">
              <img
                src="https://images.pexels.com/photos/2964779/pexels-photo-2964779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Imagen del Hero"
                style={{
                  width: "100%",
                  height: "100vh",
                  filter: "blur(1px)",
                  opacity: 0.9,
                }}
              />
              <div className="hero-overlay">
                <h1>Marca</h1>
                <p>Donde la moda se encuentra con la nostalgia</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
