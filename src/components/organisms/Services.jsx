import React, { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaBrain,
  FaCogs,
  FaMagic,
} from "react-icons/fa";

import "../../styles/profile-cards.css";
import { FaJava } from "react-icons/fa";
import { DiDotnet, DiMsqlServer } from "react-icons/di";

import { useEffect, useState } from "react";
import { useHomeData } from "../../context/HomeContext";

const SERVICE_ICONS = {
  1: FaBrain,
  2: FaCogs,
  3: FaMagic,
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

function ServiceCard({ icon: Icon, title, desc }) {
  const cardRef = useRef(null);
  const [viewRef, isVisible] = useInView();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        viewRef.current = el;
      }}
      className={`service-card scroll-animate ${isVisible ? "in-view" : ""}`}
      onMouseMove={handleMouseMove}
    >
      <div className="service-icon">
        <Icon />
      </div>

      <h3>{title}</h3>
      <ul className="service-desc">
        {desc.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


function Services() {
  const { services, loading, error } = useHomeData();

  // Fallback data in case API fails
  const fallbackServices = [
    {
      id: 1,
      title: "AI & Deep Learning",
      descriptions: [
        "Custom AI model development",
        "LLM fine-tuning & inference optimization",
        "Computer vision & audio processing",
        "Research-grade experimentation",
      ],
    },
    {
      id: 2,
      title: "Software Architecture",
      descriptions: [
        "Scalable backend system design",
        "Microservices & cloud-native architecture",
        "High-performance API development",
        "System reliability & optimization",
      ],
    },
    {
      id: 3,
      title: "Creative Tech & Automation",
      descriptions: [
        "AI VTuber systems",
        "TTS with emotion synchronization",
        "Automation pipelines",
        "Experimental interactive systems",
      ],
    },
  ];

  // Use API data or fallback
  const displayServices = services.length > 0 ? services : fallbackServices;

  return (
    <div id="profiles" className="div-profile-background">
      <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <div style={{ padding: "40px" }}>
          {loading && (
            <div className="center" style={{ padding: "20px", color: "#fff" }}>
              Loading services...
            </div>
          )}

          {error && (
            <div className="center" style={{ padding: "20px", color: "#ff6b6b" }}>
              Error loading data: {error}
            </div>
          )}

          <Row className="g-4 justify-content-center">
            {displayServices.map((service) => (
              <Col md={4} key={service.id}>
                <ServiceCard
                  icon={SERVICE_ICONS[service.id] || FaCogs}
                  title={service.title}
                  desc={service.descriptions}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Services;