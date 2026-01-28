import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaTwitch, FaGithub } from 'react-icons/fa';
import '../../styles/floating-nav.css';

const FloatingNavbar = () => {
    const scrollToSection = (e, id) => {
        e.preventDefault();
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
                        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#profiles" onClick={(e) => scrollToSection(e, 'profiles')}>Profiles</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#researches" onClick={(e) => scrollToSection(e, 'researches')}>Researches</a>
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
                </div>
            </nav>
        </div>
    );
};

export default FloatingNavbar;
