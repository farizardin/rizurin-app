import React, { useEffect, useRef, useState } from "react";
import ImageCard from "../../components/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Artworks() {
  return (
    <div
      className="div-background"
    >
      <div className="container">
        <h2 className="pt-4" style={{paddingLeft: "10px", letterSpacing: "20px"}}>ART WORKS</h2>
        <Row>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art1.png"} title="Togawa Sakiko"/>
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art2.png"} title="Hanazono Tae"/>
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art3.png"} title="Nakano Yotsuba"/>
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art4.png"} title="Vestia Zeta"/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Artworks;
