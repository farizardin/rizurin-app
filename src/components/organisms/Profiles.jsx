import React, { useRef, useEffect, useState } from "react";
import { FaBrain, FaMagic, FaServer, FaCodeBranch, FaDatabase } from "react-icons/fa";
import { useHomeData } from "../../context/HomeContext";
import "../../styles/profile-cards.css";

// Same imports for tech stack
import {
  SiTensorflow, SiPytorch, SiDocker, SiKubernetes, SiPostgresql, SiReact,
  SiPython, SiJenkins, SiRedis, SiMongodb
} from "react-icons/si";

function useInView(threshold = 0.1) {
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

function BentoCard({ icon: Icon, title, desc, className = "", delay = 0 }) {
  const cardRef = useRef(null);
  const [viewRef, isVisible] = useInView();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
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
      className={`true-bento-card scroll-animate ${isVisible ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseMove={handleMouseMove}
    >
      <div className="bento-glow-border"></div>
      <div className="bento-content">
        <div className="bento-icon-wrapper">
          <Icon size={32} />
        </div>
        <h3 className="bento-title">{title}</h3>
        <ul className="bento-desc-list">
          {desc.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TechStackMarquee() {
  const icons = [
    <SiTensorflow key="tf" />, <SiPytorch key="pt" />, <SiDocker key="dk" />, <SiKubernetes key="k8s" />,
    <SiPostgresql key="pg" />, <SiReact key="rc" />, <SiPython key="py" />, <SiJenkins key="jk" />,
    <SiRedis key="rd" />, <SiMongodb key="md" />
  ];

  return (
    <div className="tech-marquee-container">
      <div className="tech-marquee-track">
        {[...icons, ...icons, ...icons].map((icon, i) => (
          <div key={i} className="tech-icon">{icon}</div>
        ))}
      </div>
    </div>
  );
}

function Profiles() {
  const { services, loading } = useHomeData();

  // True Bento layout needs 5-6 cards to look good. We will construct them from services data and static data.
  const coreServices = services.length > 0 ? services : [
    { id: 1, title: "AI & Deep Learning", descriptions: ["Custom AI model development", "LLM fine-tuning & inference", "Computer vision & audio processing"] },
    { id: 2, title: "Cloud Architecture", descriptions: ["Scalable backend system design", "Microservices & Kubernetes", "High-performance API"] },
    { id: 3, title: "Creative Tech", descriptions: ["AI VTuber systems", "Emotion TTS synchronization", "Interactive automation"] }
  ];

  return (
    <div id="profiles" className="profiles-section">
      
      {/* Philosophy Section */}
      <div className="philosophy-container">
        <h2 className="philosophy-text">
          I don't just write code. I design <span className="highlight">intelligent ecosystems</span> that scale seamlessly from research prototypes to production environments.
        </h2>
      </div>

      {/* Expertise Bento Grid */}
      <div className="expertise-container">
        <div className="expertise-header">
          <h2>Core Capabilities</h2>
          <p>A multi-disciplinary approach to software engineering.</p>
        </div>

        {loading ? (
          <div className="stats-spinner" style={{ margin: '0 auto' }}></div>
        ) : (
          <div className="true-bento-grid">
            {/* Box 1: Large Feature */}
            <BentoCard 
              icon={FaBrain} 
              title={coreServices[0]?.title || "AI Systems"} 
              desc={coreServices[0]?.descriptions || []} 
              className="bento-large"
              delay={0.1}
            />
            
            {/* Box 2: Medium */}
            <BentoCard 
              icon={FaServer} 
              title={coreServices[1]?.title || "Architecture"} 
              desc={coreServices[1]?.descriptions || []} 
              className="bento-medium"
              delay={0.2}
            />

            {/* Box 3: Small Info */}
            <BentoCard 
              icon={FaCodeBranch} 
              title="DevOps" 
              desc={["CI/CD Pipelines", "Infrastructure as Code", "System Monitoring"]} 
              className="bento-small"
              delay={0.3}
            />

            {/* Box 4: Small Info */}
            <BentoCard 
              icon={FaDatabase} 
              title="Data Eng" 
              desc={["Distributed Caching", "Event-Driven Streams", "NoSQL / SQL Scaling"]} 
              className="bento-small"
              delay={0.4}
            />

            {/* Box 5: Wide Feature */}
            <BentoCard 
              icon={FaMagic} 
              title={coreServices[2]?.title || "Creative Tech"} 
              desc={coreServices[2]?.descriptions || []} 
              className="bento-wide"
              delay={0.5}
            />
            {/* Box 6: Technology Arsenal (Combined) */}
            <div className="true-bento-card bento-wide scroll-animate in-view" style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="bento-glow-border"></div>
              <h3 className="glass-title" style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '1.2rem', color: '#94a3b8' }}>Technology Arsenal</h3>
              <TechStackMarquee />
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default Profiles;