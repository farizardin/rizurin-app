import React, { useRef, useEffect, useState } from "react";
import { useHomeData } from "../../context/HomeContext";
import { FileText, ExternalLink } from "lucide-react";
import "../../styles/research-cards.css";

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

function ResearchListItem({ research, index }) {
  const itemRef = useRef(null);
  const [viewRef, isVisible] = useInView();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const item = itemRef.current;
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    item.style.setProperty("--x", `${x}px`);
    item.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={(el) => {
        itemRef.current = el;
        viewRef.current = el;
      }}
      className={`research-timeline-item ${index % 2 === 0 ? 'left' : 'right'} scroll-animate ${isVisible ? "in-view" : ""}`}
      style={{ transitionDelay: `${0.1}s` }}
      onMouseMove={handleMouseMove}
    >
      <div className="timeline-dot"></div>
      <div className="research-item-glow"></div>
      
      <div className="research-item-content">
        <div className="research-year-badge">{research.year}</div>
        <h3 className="research-item-title">{research.title}</h3>
        
        <p className="research-item-desc">{research.description}</p>
        
        <div className="research-item-footer">
          <div className="research-item-tags">
            {research.tags.map((tag, idx) => (
              <span key={idx} className="research-item-tag">{tag}</span>
            ))}
          </div>
          <a href={research.ieeeUrl} target="_blank" rel="noopener noreferrer" className="research-link">
            <span>Read Paper</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Researches() {
  const { researches, loading, error } = useHomeData();

  const fallbackResearches = [
    {
      id: 1,
      title: "The Impact of Keypoints Normalization on SIBI Recognition using Modified Shift-GCN",
      description: "Implemented Modified Shift-GCN for Indonesian Sign Language on a complex dynamic dataset. Proved that keypoint tracking and normalization boosts cross-validation accuracy from 55.3% to 97.9%.",
      year: "2022",
      tags: ["Machine Learning", "Graph Neural Networks"],
      ieeeUrl: "https://ieeexplore.ieee.org/document/10057716"
    },
    {
      id: 2,
      title: "Reversible Audio Data Hiding using Samples Greatest Common Factor",
      description: "Proposed an algorithm using the GCF between original and interpolated audio samples to determine payload locations. Achieved high message capacity while preserving audio fidelity.",
      year: "2022",
      tags: ["Steganography", "Data Hiding"],
      ieeeUrl: "https://ieeexplore.ieee.org/document/9720763"
    },
    {
      id: 3,
      title: "Wavelet Transformation and LBP for Data Augmentation in Face Recognition",
      description: "Evaluated Wavelet Transform and LBP for augmentation in CNNs on the Yale-B dataset. Combining LBP and IDWT features achieved state-of-the-art 99.69% accuracy.",
      year: "2022",
      tags: ["Deep Learning", "Computer Vision"],
      ieeeUrl: "https://ieeexplore.ieee.org/document/9914875"
    }
  ];

  const displayResearches = researches.length > 0 ? researches : fallbackResearches;

  return (
    <div id="researches" className="research-section">
      <div className="research-container">
        
        <div className="research-header">
          <FileText size={48} color="#a8c0ff" style={{ filter: "drop-shadow(0 0 20px rgba(168,192,255,0.4))", marginBottom: "1.5rem" }} />
          <h2 className="research-title">Academic Publications</h2>
          <p className="research-subtitle">Advancing the fields of deep learning, computer vision, and steganography through rigorous peer-reviewed research.</p>
        </div>

        {loading && (
          <div className="stats-spinner" style={{ margin: '4rem auto' }}></div>
        )}

        {error && (
          <div style={{ color: "#ff6b6b", textAlign: "center", margin: "2rem" }}>
            Error loading data: {error}
          </div>
        )}

        <div className="research-timeline">
          {displayResearches.map((research, index) => (
            <ResearchListItem key={research.id} research={research} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Researches;