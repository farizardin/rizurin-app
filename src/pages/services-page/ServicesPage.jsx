import React, { useEffect, useRef } from 'react';
import FloatingNavbar from '../../components/organisms/FloatingNavbar';
import Footer from '../../components/organisms/Footer';
import Particle from '../../components/atoms/Particles';
import { UserCircle, Globe2, ExternalLink } from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {
    const containerRef = useRef(null);
    const isDevelopment = process.env.NODE_ENV === 'development';
    const userAppUrl = isDevelopment ? 'http://localhost:5174' : 'https://user.rizurin.my.id';
    const japaneseAppUrl = isDevelopment ? 'http://localhost:5173' : 'https://japanese.rizurin.my.id';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const cards = containerRef.current.querySelectorAll('.service-bento-card');
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    return (
        <div className="services-page-container" ref={containerRef} onMouseMove={handleMouseMove}>
            
            <div className="services-particles-wrapper">
                <Particle />
            </div>

            <FloatingNavbar />
            
            <main className="services-main-content">
                <header className="services-hero">
                    <div className="services-hero-badge">Web Services</div>
                    <h1 className="services-hero-title">Ecosystem <span>Services</span></h1>
                    <p className="services-hero-subtitle">
                        Explore the public-facing applications and portals hosted within the Rizurin ecosystem.
                    </p>
                </header>

                <section className="services-bento-grid">
                    {/* User Portal Card */}
                    <a href={userAppUrl} target="_blank" rel="noopener noreferrer" className="service-bento-card span-2">
                        <div className="service-bento-card-border"></div>
                        <div className="service-bento-content">
                            <div className="service-icon-wrapper" style={{ color: '#a855f7' }}>
                                <UserCircle size={40} />
                            </div>
                            <div className="service-text">
                                <h2>User Portal</h2>
                                <p>Manage your Rizurin account, settings, and authentications securely through the centralized identity provider.</p>
                            </div>
                            <div className="service-external-icon">
                                <ExternalLink size={20} />
                            </div>
                        </div>
                    </a>

                    {/* Japanese Flash Card */}
                    <a href={japaneseAppUrl} target="_blank" rel="noopener noreferrer" className="service-bento-card span-2">
                        <div className="service-bento-card-border"></div>
                        <div className="service-bento-content">
                            <div className="service-icon-wrapper" style={{ color: '#ef4444' }}>
                                <Globe2 size={40} />
                            </div>
                            <div className="service-text">
                                <h2>Japanese Flash Card</h2>
                                <p>Master JLPT vocabulary through an interactive spaced-repetition flashcard system tailored for language learners.</p>
                            </div>
                            <div className="service-external-icon">
                                <ExternalLink size={20} />
                            </div>
                        </div>
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ServicesPage;
