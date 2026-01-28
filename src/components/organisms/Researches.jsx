import React, { useRef } from "react";
import "../../styles/research-cards.css";

import { useEffect, useState } from "react";
import { useHomeData } from "../../context/HomeContext";

/* Hook: fade in + slide up + zoom on scroll */
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

function ResearchCard({ research }) {
  return (
    <div className="research-paper-card scroll-animate in-view">
      <div className="research-header">
        <h3 className="research-paper-title">{research.title}</h3>
        <span className="research-year">{research.year}</span>
      </div>

      <p className="research-paper-description">{research.description}</p>

      <div className="research-tags">
        {research.tags.map((tag, idx) => (
          <span key={idx} className="research-tag">{tag}</span>
        ))}
      </div>

      <a href={research.ieeeUrl} target="_blank" rel="noopener noreferrer" className="view-paper-btn">
        View Paper on IEEE Xplore
      </a>
    </div>
  );
}


function Researches() {
  const { researches, loading, error } = useHomeData();

  // Fallback data in case API fails
  const fallbackResearches = [
    {
      id: 1,
      title: "The Impact of Keypoints Normalization on SIBI Recognition using Modified Shift-GCN",
      description: "This study implements Modified Shift-GCN for Indonesian Sign Language (SIBI) on a more complex dataset combining hand and body graphs with dynamic poses. It also examines the impact of key-point tracking and normalization on model performance. Experiments using 10-fold cross-validation show that normalization significantly improves accuracy to 97.9%, compared to 55.3% without normalization.",
      year: "2022",
      tags: ["Machine Learning", "Sign Language", "Graph Neural Networks"],
      ieeeUrl: "https://ieeexplore.ieee.org/document/10057716"
    },
    {
      id: 2,
      title: "Reversible Audio Data Hiding using Samples Greatest Common Factor and Audio Interpolation",
      description: "This study proposes an algorithm that uses the Great Common Factor (GCF) between the original and interpolated audio samples to determine insertion locations, achieving higher message capacity, preserved audio quality, and more efficient execution.",
      year: "2022",
      tags: ["Steganography", "Audio Processing", "Data Hiding"],
      ieeeUrl: "https://ieeexplore.ieee.org/document/9720763"
    },
    {
      id: 3,
      title: "Reversible Audio Steganography using Least Prime Factor and Audio Interpolation",
      description: "This study proposes a method that uses the Least Prime Factor of the difference between interpolated and original audio to determine sample space, partitions the payload accordingly, and embeds the decimal payload into the interpolated samples. Results show the method effectively improves payload capacity and stego-audio quality.",
      year: "2021",
      tags: ["Steganography", "Audio Processing", "Prime Factor"],
      ieeeUrl: "https://ieeexplore.ieee.org/document/9743066"
    },
    {
      id: 4,
      title: "Wavelet Transformation and Local Binary Pattern for Data Augmentation in Deep Learning-based Face Recognition",
      description: "This study evaluates various Wavelet Transform methods and Local Binary Pattern (LBP) for data augmentation in CNN and pre-trained VGG16 models on the Yale-B dataset. Results show that combining LBP and IDWT features from DWT as augmented data achieves the highest accuracy of 99.69%.",
      year: "2022",
      tags: ["Deep Learning", "Face Recognition", "Data Augmentation"],
      ieeeUrl: "https://ieeexplore.ieee.org/document/9914875"
    }
  ];

  // Use API data or fallback
  const displayResearches = researches.length > 0 ? researches : fallbackResearches;

  return (
    <div id="researches" className="div-profile-background">
      <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <div className="research-title-wrapper">
          <h2 className="research-title">
            Researches during Master College
          </h2>
        </div>

        {loading && (
          <div className="center" style={{ padding: "20px", color: "#fff" }}>
            Loading researches...
          </div>
        )}

        {error && (
          <div className="center" style={{ padding: "20px", color: "#ff6b6b" }}>
            Error loading data: {error}
          </div>
        )}

        <div className="research-container">
          {displayResearches.map((research) => (
            <ResearchCard key={research.id} research={research} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Researches;