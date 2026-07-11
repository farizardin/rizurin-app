import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaTwitter, FaTwitch, FaGithub } from 'react-icons/fa';
import '../../styles/floating-nav.css';

const FloatingNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (e, id) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/');
            // Wait for render then scroll
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="floating-navbar-container">
            <nav className="floating-navbar">
                <ul className="nav-links">
                    <li className="nav-link-item">
                        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={location.pathname === '/' ? 'active' : ''}>Home</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#profiles" onClick={(e) => scrollToSection(e, 'profiles')}>Profiles</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#researches" onClick={(e) => scrollToSection(e, 'researches')}>Researches</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="/homelab" className={location.pathname === '/homelab' ? 'active' : ''}>Homelab</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="/yuki" className={location.pathname === '/yuki' ? 'active' : ''}>AI Waifu</a>
                    </li>
                </ul>

                <div className="nav-divider"></div>

                <div className="nav-socials">
                    <a href="https://www.instagram.com/rizunaisu" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/@rizunaisu" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                        <FaYoutube />
                    </a>
                    <a href="https://www.twitch.tv/rizurin_ch" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                        <FaTwitch />
                    </a>
                    <a href="https://github.com/farizardin" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/rizunaisu" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                        <FaTwitter />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default FloatingNavbar;
