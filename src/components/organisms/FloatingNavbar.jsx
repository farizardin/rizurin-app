import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaTwitter, FaTwitch, FaGithub, FaEllipsisH, FaTimes } from 'react-icons/fa';
import AuthButton from '../atoms/AuthButton';
import '../../styles/floating-nav.css';

const FloatingNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    // Hide global auth button when navbar expands on mobile
    React.useEffect(() => {
        if (isExpanded) {
            document.body.classList.add('nav-expanded');
        } else {
            document.body.classList.remove('nav-expanded');
        }
        return () => document.body.classList.remove('nav-expanded');
    }, [isExpanded]);

    const scrollToSection = (e, id) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/');
            // Wait for render then scroll
            setTimeout(() => {
                if (id === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return;
        }

        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <div className={`floating-navbar-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <nav className={`floating-navbar ${isExpanded ? 'expanded' : ''}`}>
                <div className="nav-content">
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
                            <a href="/services" onClick={(e) => { e.preventDefault(); navigate('/services'); }} className={location.pathname === '/services' ? 'active' : ''}>Services</a>
                        </li>
                        <li className="nav-link-item">
                            <a href="/homelab" onClick={(e) => { e.preventDefault(); navigate('/homelab'); }} className={location.pathname === '/homelab' ? 'active' : ''}>Homelab</a>
                        </li>
                        <li className="nav-link-item">
                            <a href="/yuki" onClick={(e) => { e.preventDefault(); navigate('/yuki'); }} className={location.pathname === '/yuki' ? 'active' : ''}>AI Waifu</a>
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

                    {/* Mobile login button (only visible when expanded) */}
                    <div className="nav-mobile-login-container">
                        <AuthButton />
                    </div>
                </div>

                <button className="nav-toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? <FaTimes /> : <FaEllipsisH />}
                </button>
            </nav>

            {/* Login button side-by-side on mobile collapsed state */}
            <div className={`mobile-collapsed-login ${isExpanded ? 'hidden' : ''}`}>
                <AuthButton />
            </div>
        </div>
    );
};

export default FloatingNavbar;
