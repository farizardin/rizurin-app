import React, { useEffect, useRef, useState } from "react";
import ImageCard from "../molecules/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Artworks() {
  return (
    <div
      className="div-background"
    >
      <div className="container">
        <h2 className="pt-4" style={{ paddingLeft: "10px", letterSpacing: "20px" }}>ART WORKS</h2>
        <Row>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art1.png"} imageFull={"/images/art1-full.png"} title="Togawa Sakiko" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art2.png"} imageFull={"/images/art2-full.png"} title="Hanazono Tae" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art3.png"} imageFull={"/images/art3-full.png"} title="Nakano Yotsuba" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art4.png"} imageFull={"/images/art4-full.png"} title="Vestia Zeta" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art5.jpg"} imageFull={"/images/art5-full.jpg"} title="Emma Verde" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art6.jpg"} imageFull={"/images/art6-full.jpg"} title="Kurosawa Ruby" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art7.png"} imageFull={"/images/art7-full.png"} title="Ichigaya Arisa" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art8.jpg"} imageFull={"/images/art8-full.jpg"} title="Uehara Ayumu" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art9.png"} imageFull={"/images/art9-full.png"} title="Nakano Yotsuba" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art10.jpg"} imageFull={"/images/art10-full.jpg"} title="Setsuna Yuki" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art11.png"} imageFull={"/images/art11-full.png"} title="Watanabe You" />
          </Col>
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <ImageCard image={"/images/art12.png"} imageFull={"/images/art12-full.png"} title="Shibuya Kanon" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Artworks;
