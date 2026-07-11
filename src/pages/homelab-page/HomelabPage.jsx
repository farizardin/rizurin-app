import React, { useEffect, useState, useRef } from 'react';
import FloatingNavbar from '../../components/organisms/FloatingNavbar';
import Footer from '../../components/organisms/Footer';
import Particle from '../../components/atoms/Particles';
import projectService from '../../services/projectService';
import { Server, Database, Layers, Shield, Code, ServerCog, Cpu, GitMerge } from 'lucide-react';
import './HomelabPage.css';

const IconMap = {
    server: Server,
    database: Database,
    architecture: Layers,
    security: Shield,
    code: Code,
    cog: ServerCog,
    cpu: Cpu,
    git: GitMerge
};

const HomelabPage = () => {
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#a855f7', '#ec4899'];
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const data = await projectService.getHomelabProjects();
                setProjects(data);
            } catch (err) {
                setError('Failed to load homelab projects. Please try again later.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Cursor Spotlight Effect Tracker
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const cards = containerRef.current.querySelectorAll('.homelab-bento-card');
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    return (
        <div className="homelab-page-container" ref={containerRef} onMouseMove={handleMouseMove}>
            
            <div className="homelab-particles-wrapper">
                <Particle />
            </div>

            <FloatingNavbar />
            
            <main className="homelab-main-content">
                <header className="homelab-hero">
                    <div className="homelab-hero-badge">Architecture & Infrastructure</div>
                    <h1 className="homelab-hero-title">Rizurin <span>Homelab</span></h1>
                    <p className="homelab-hero-subtitle">
                        An interactive glimpse into the microservices, clusters, and bleeding-edge patterns powering the Rizurin ecosystem.
                    </p>
                </header>

                {isLoading ? (
                    <div className="homelab-loader">
                        <div className="spinner"></div>
                    </div>
                ) : error ? (
                    <div className="homelab-error">
                        {error}
                    </div>
                ) : (
                    <div className="homelab-layout">
                        {projects.map((category, index) => {
                            const IconComponent = IconMap[category.icon] || Server;
                            const sectionColor = colors[index % colors.length];
                            
                            return (
                                <section key={index} className="homelab-section" style={{ '--section-color': sectionColor }}>
                                    <div className="homelab-bento-grid" id="cards-container">
                                        
                                        {/* Title Card as part of the Bento Grid */}
                                        <div className="homelab-bento-card homelab-bento-title-card span-2">
                                            <div className="homelab-bento-card-border"></div>
                                            <div className="homelab-bento-content title-content">
                                                <div className="homelab-icon-wrapper">
                                                    <IconComponent size={40} />
                                                </div>
                                                <h2>{category.category}</h2>
                                                <div className="homelab-section-line"></div>
                                            </div>
                                        </div>

                                        {/* Item Cards */}
                                        {category.items.map((item, idx) => {
                                            const n = category.items.length;
                                            const totalSlots = n + 2; // Title card takes 2 slots
                                            const remainder = totalSlots % 3;
                                            
                                            let spanClass = "";
                                            // Make the very last item fill the remaining empty columns
                                            if (idx === n - 1) {
                                                if (remainder === 1) spanClass = "span-3";
                                                else if (remainder === 2) spanClass = "span-2";
                                            }
                                            
                                            return (
                                                <div key={idx} className={`homelab-bento-card ${spanClass}`}>
                                                    <div className="homelab-bento-card-border"></div>
                                                    <div className="homelab-bento-content">
                                                        <div className="homelab-bento-dot"></div>
                                                        <h3>{item.name}</h3>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default HomelabPage;
