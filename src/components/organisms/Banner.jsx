import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Particle from '../atoms/Particles';
import { getVisitorStats } from '../../services/homeService';
import { ChevronDown } from 'lucide-react';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();
  const [visitorCount, setVisitorCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
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
  }, []);

  const scrollToProfiles = () => {
    const el = document.getElementById('profiles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-particles">
        <Particle />
      </div>

      <div className="hero-content">
        <div className="hero-badge fade-up delay-1">
          Systems & Intelligence Architecture
        </div>
        
        <h1 className="hero-title fade-up delay-2">
          Engineering the<br /><span>Future</span>
        </h1>
        
        <p className="hero-subtitle fade-up delay-3">
          I build high-performance distributed systems, craft intelligent architectures, and bridge the gap between cutting-edge research and scalable production.
        </p>
        
        <div className="hero-actions fade-up delay-4">
          <button className="btn-primary" onClick={() => window.location.href = '/homelab'}>
            Explore Homelab
          </button>
          
          <button className="btn-secondary" onClick={() => {
            const el = document.getElementById('researches');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Researches
          </button>
        </div>

        <div className="hero-stats fade-up delay-5">
          {isLoading ? (
            <div className="stats-spinner"></div>
          ) : visitorCount !== null ? (
             <><span className="status-dot"></span> System Logs: {visitorCount} Unique Signatures Detected</>
          ) : null}
        </div>
      </div>

      <button className="scroll-indicator fade-up delay-6" onClick={scrollToProfiles} aria-label="Scroll Down">
        <ChevronDown size={32} />
      </button>

    </section>
  );
};

export default Banner;