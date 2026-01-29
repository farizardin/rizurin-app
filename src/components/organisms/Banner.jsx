import React, { useState, useEffect } from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import Foreground from '../atoms/Foreground';
import Background from '../atoms/Background';
import Particle from '../atoms/Particles';
import { getVisitorStats } from '../../services/homeService';

const Banner = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const stats = await getVisitorStats();
        setVisitorCount(stats);
      } catch (error) {
        console.error('Error fetching visitor stats:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add keyframes for spinner
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'banner-spinner-style';
    style.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      const existingStyle = document.getElementById('banner-spinner-style');
      if (existingStyle) document.head.removeChild(existingStyle);
    };
  }, []);

  const background = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (<div style={{ backgroundColor: 'rgb(20, 10, 35)', width: '100%', height: '100%' }} />),
  };

  const background2 = {
    translateY: [7, 40],
    scale: [1, 2],
    shouldAlwaysCompleteAnimation: true,
    children: (<Background />)
  };

  const [isHeadlineHovered, setIsHeadlineHovered] = useState(false);
  const [isStatsHovered, setIsStatsHovered] = useState(false);

  const headline = {
    translateY: [0, 0],
    scale: [1, 0.5],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2
          className="headline"
          onMouseEnter={() => setIsHeadlineHovered(true)}
          onMouseLeave={() => setIsHeadlineHovered(false)}
          style={{
            margin: 0,
            color: "lavender",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: isMobile ? "20px" : "60px",
            textIndent: isMobile ? "20px" : "60px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "200px",
            padding: isMobile ? "15px 40px" : "30px 80px",
            boxShadow: isHeadlineHovered ? "0 12px 48px 0 rgba(0, 0, 0, 0.5)" : "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            display: "inline-block",
            fontSize: isMobile ? "1.2rem" : "2.8rem",
            fontWeight: "50",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transform: isHeadlineHovered ? "scale(1.05)" : "scale(1)"
          }}
        >
          RiZU
        </h2>
        {(isLoading || visitorCount !== null) && (
          <div
            onMouseEnter={() => setIsStatsHovered(true)}
            onMouseLeave={() => setIsStatsHovered(false)}
            style={{
              color: "lavender",
              textAlign: "center",
              fontSize: isMobile ? "0.7rem" : "0.9rem",
              marginTop: isMobile ? "2rem" : "5rem",
              opacity: 0.9,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: isMobile ? "10px 20px" : "12px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: isStatsHovered ? "0 8px 24px 0 rgba(0, 0, 0, 0.5)" : "0 4px 16px 0 rgba(0, 0, 0, 0.37)",
              letterSpacing: isMobile ? "1px" : "3px",
              textTransform: "uppercase",
              fontWeight: "500",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              transform: isStatsHovered ? "scale(1.1)" : "scale(1)",
              minWidth: isMobile ? "120px" : "200px",
              minHeight: "40px"
            }}
          >
            {isLoading ? (
              <div style={{
                width: "18px",
                height: "18px",
                border: "2px solid rgba(230, 230, 250, 0.3)",
                borderTop: "2px solid lavender",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              }} />
            ) : (
              `Total Visitors: ${visitorCount}`
            )}
          </div>
        )}
      </div>
    ),
  };

  const foreground = {
    translateY: [0, 10],
    scale: [1, 2],
    shouldAlwaysCompleteAnimation: true,
    children: (<Foreground />)
  };

  const particle = {
    translateY: [0, 10],
    scale: [1, 2],
    shouldAlwaysCompleteAnimation: true,
    children: (<Particle />)
  };

  // const frame = [
  //   {
  //     translateY: [45, -20],
  //     translateX: [15, 80],
  //     scale: [1.3, 3],
  //     shouldAlwaysCompleteAnimation: true,
  //     children: (<Frame rotation={35} image='/images/art1.png' />)
  //   },
  //   {
  //     translateY: [32, -20],
  //     translateX: [45, 100],
  //     scale: [1.3, 3],
  //     shouldAlwaysCompleteAnimation: true,
  //     children: (<Frame rotation={20} image='/images/art3.png' />)
  //   },
  //   {
  //     translateY: [50, -20],
  //     translateX: [70, 160],
  //     scale: [1.3, 3],
  //     shouldAlwaysCompleteAnimation: true,
  //     children: (<Frame rotation={-20} image='/images/art2.png' />)
  //   },
  //   {
  //     translateY: [40, -20],
  //     translateX: [100, 160],
  //     scale: [1.3, 3],
  //     shouldAlwaysCompleteAnimation: true,
  //     children: (<Frame rotation={-45} image='/images/art4.png' />)
  //   }
  // ];

  // const dock = {
  //   translateY: [70, 50],
  //   scale: [1, 0.5],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: (<Dock />)
  // };

  const gradientOverlay = {
    opacity: [0.1, 0.3, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', width: '100%', height: '100%' }} />),
  };

  return (
    <ParallaxBanner
      id="home"
      // layers={[background, background2, foreground, particle, gradientOverlay, headline, dock]}
      layers={[background, background2, foreground, particle, gradientOverlay, headline]}
      className="full"
    />
  );
};

export default Banner;