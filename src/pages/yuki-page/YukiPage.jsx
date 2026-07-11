import React, { useEffect } from 'react';
import FloatingNavbar from '../../components/organisms/FloatingNavbar';
import Footer from '../../components/organisms/Footer';
import Particle from '../../components/atoms/Particles';
import { Sparkles, Brain, Mic, Volume2, Maximize, Database, Cpu, Activity, User } from 'lucide-react';
import './YukiPage.css';

const YukiPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Spotlight effect
        const cards = document.querySelectorAll('.yuki-bento-card');
        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        };

        cards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove);
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove);
            });
        };
    }, []);

    return (
        <div className="yuki-page-wrapper">
            <div className="yuki-particles-wrapper">
                <Particle />
            </div>
            
            <FloatingNavbar />
            
            <main className="yuki-main-content">
                {/* Hero Section */}
                <section className="yuki-hero">
                    <div className="yuki-hero-bg"></div>
                    <div className="yuki-hero-content">
                        <div className="coming-soon-badge">
                            <Sparkles size={16} />
                            <span>In Active Development</span>
                        </div>
                        <h1 className="yuki-hero-title">
                            Yuki <span className="yuki-gradient-text">AI Waifu</span>
                        </h1>
                        <p className="yuki-hero-subtitle">
                            A next-generation fully interactive 2D AI companion powered by multi-modal generative models, engineered to run entirely locally on just 6GB of VRAM.
                        </p>
                    </div>
                </section>

                {/* Main Bento Grid */}
                <section className="yuki-section">
                    <div className="yuki-bento-grid">
                        
                        {/* Vision Card */}
                        <div className="yuki-bento-card span-2 yuki-vision-card">
                            <div className="yuki-bento-card-border"></div>
                            <div className="yuki-bento-content title-content">
                                <h2>The Vision</h2>
                                <div className="yuki-section-line"></div>
                                <p>
                                    Project Yuki aims to redefine virtual companionship by integrating cutting-edge AI technologies into a responsive 2D avatar. The core challenge and achievement of this project is its strict hardware constraint: providing a seamless, real-time, multi-modal interaction experience without relying on expensive cloud compute, making it accessible on consumer-grade hardware.
                                </p>
                            </div>
                        </div>

                        {/* Inochi Creator Card */}
                        <div className="yuki-bento-card">
                            <div className="yuki-bento-card-border"></div>
                            <div className="yuki-bento-content">
                                <div className="yuki-icon-wrapper">
                                    <User size={28} />
                                </div>
                                <h3>2D Character Engine</h3>
                                <p>Powered by <strong>Inochi Creator</strong>, enabling highly expressive, open-source 2D puppet rigging and real-time rendering.</p>
                            </div>
                        </div>

                        {/* The Brain */}
                        <div className="yuki-bento-card">
                            <div className="yuki-bento-card-border"></div>
                            <div className="yuki-bento-content">
                                <div className="yuki-icon-wrapper">
                                    <Brain size={28} />
                                </div>
                                <h3>The Brain (LLM)</h3>
                                <p><strong>Qwen2.5 Instruct 7B</strong> serves as the core intelligence, providing contextual, engaging, and nuanced character dialogue.</p>
                            </div>
                        </div>

                        {/* The Voice */}
                        <div className="yuki-bento-card">
                            <div className="yuki-bento-card-border"></div>
                            <div className="yuki-bento-content">
                                <div className="yuki-icon-wrapper">
                                    <Volume2 size={28} />
                                </div>
                                <h3>The Voice (TTS)</h3>
                                <p><strong>Qwen3-TTS 1.5B</strong> generates highly natural, emotive speech synthesis with ultra-low latency for real-time replies.</p>
                            </div>
                        </div>

                        {/* The Ears */}
                        <div className="yuki-bento-card">
                            <div className="yuki-bento-card-border"></div>
                            <div className="yuki-bento-content">
                                <div className="yuki-icon-wrapper">
                                    <Mic size={28} />
                                </div>
                                <h3>The Ears (ASR)</h3>
                                <p><strong>Whisper Base</strong> provides robust, multi-lingual Automatic Speech Recognition to understand user spoken inputs seamlessly.</p>
                            </div>
                        </div>

                        {/* The Body */}
                        <div className="yuki-bento-card span-2">
                            <div className="yuki-bento-card-border"></div>
                            <div className="yuki-bento-content">
                                <div className="yuki-icon-wrapper">
                                    <Activity size={28} />
                                </div>
                                <h3>The Body (Pose & Animation)</h3>
                                <p>A custom <strong>Shift-GCN based Pose Generator</strong> translates audio and text semantics into dynamic, synchronized body movements and facial expressions, breathing life into the Inochi Creator puppet.</p>
                            </div>
                        </div>

                        {/* Engineering Challenges Title */}
                        <div className="yuki-bento-card span-3 yuki-engineering-header">
                            <div className="yuki-bento-card-border"></div>
                            <div className="yuki-bento-content">
                                <h2>Engineering Focus & Optimization</h2>
                                <div className="yuki-section-line"></div>
                            </div>
                        </div>

                        {/* QLoRA Fine-tuning */}
                        <div className="yuki-bento-card span-2">
                            <div className="yuki-bento-card-border"></div>
                            <div className="yuki-bento-content">
                                <div className="yuki-icon-wrapper highlight-icon">
                                    <Database size={28} />
                                </div>
                                <h3>QLoRA Fine-Tuning</h3>
                                <p>The LLM undergoes rigorous fine-tuning using the QLoRA (Quantized Low-Rank Adaptation) approach on a specially curated dataset. This ensures Yuki's conversational style remains deeply engaging, emotionally intelligent, and strictly adherent to her waifu persona, all without catastrophically forgetting general knowledge.</p>
                            </div>
                        </div>

                        {/* Quantization */}
                        <div className="yuki-bento-card">
                            <div className="yuki-bento-card-border"></div>
                            <div className="yuki-bento-content">
                                <div className="yuki-icon-wrapper highlight-icon">
                                    <Cpu size={28} />
                                </div>
                                <h3>Extreme Quantization</h3>
                                <p>To achieve the ambitious <strong>6GB VRAM target</strong>, advanced tensor weight quantization strategies are implemented across the LLM, TTS, and ASR models. This memory optimization ensures high compression rates while preserving conversational fidelity.</p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default YukiPage;
