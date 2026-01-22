import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './pages/home/Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import React, { useEffect, useState } from 'react';
import Artworks from './pages/home/Artworks';
import YoutubePost from './pages/home/YoutubePost';
import Profiles from './pages/home/Profiles';

function App() {

  return (
    <div>
      <ParallaxProvider>
        <Banner />
      </ParallaxProvider>
      {/* <ScrollReveal/> */}
      <div style={{ height: "100vh", background: "#e4c5ff" }}>
        <div>
          <Profiles />
        </div>
        {/* <div style={{ paddingTop: "5%" }}>
          <Artworks />
        </div> */}
        {/* <div style={{ paddingBottom: "5%" }}>
          <YoutubePost />
        </div> */}
        <div>
          {/* Footer */}
          <footer className="app-footer">
            <div className="footer-content">

              {/* Footer Section: About */}
              <div className="footer-section">
                <h3>About</h3>
                <p>
                  AI Engineer & Software Engineer with focus on deep learning,
                  system architecture, and experimental creative technology.
                  Passionate about bridging research and production systems.
                </p>
              </div>

              {/* Footer Section: Expertise */}
              <div className="footer-section">
                <h3>Expertise</h3>
                <p>
                  Deep Learning & LLM Systems, Distributed & Cloud Architecture, Computer Vision & Audio Processing, Automation & AI-driven Pipelines
                </p>
              </div>

              {/* Footer Section: Philosophy */}
              <div className="footer-section">
                <h3>Philosophy</h3>
                <p>
                  Building systems that are scalable, explainable, and resilient.
                  Combining engineering discipline with creative experimentation.
                </p>
              </div>

            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} — Crafted with passion for technology & creativity
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;