import React from 'react';

const Footer = () => {
    return (
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
    );
};

export default Footer;
