import { Coffee } from 'lucide-react';
import { Button } from './ui/Button';
import './About.css';

export const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="about-title">From Code to Production</h2>
                        <p>
                            I'm a Frontend developer with 5+ years of experience building scalable web applications for
                            startups and Fortune 500 companies. I specialize in React, TypeScript, and modern web
                            technologies.
                        </p>

                        <div className="experience-highlights">
                            <div className="highlight">
                                <i className="fas fa-code-branch"></i>
                                <div>
                                    <h4>Architecture & Scaling</h4>
                                    <p>Designed and implemented micro-frontend architectures serving 1M+ users</p>
                                </div>
                            </div>
                            <div className="highlight">
                                <i className="fas fa-tachometer-alt"></i>
                                <div>
                                    <h4>Performance Optimization</h4>
                                    <p>Reduced bundle sizes by 60% and improved Core Web Vitals scores</p>
                                </div>
                            </div>
                            <div className="highlight">
                                <i className="fas fa-users"></i>
                                <div>
                                    <h4>Team Leadership</h4>
                                    <p>Led cross-functional teams and mentored 5+ junior developers</p>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <p>
                                Currently open to senior frontend roles where I can contribute to challenging problems and
                                mentor team members.
                            </p>
                            <Button variant="primary" icon={Coffee} href="#contact">
                                Let's Talk
                            </Button>
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="tech-stack-visual">
                            <div className="stack-layer frontend">
                                <h4>Frontend</h4>
                                <div className="tech-icons">
                                    <i className="fab fa-react"></i>
                                    <i className="fab fa-js"></i>
                                    <i className="fab fa-vuejs"></i>
                                </div>
                            </div>
                            <div className="stack-layer backend">
                                <h4>Backend</h4>
                                <div className="tech-icons">
                                    <i className="fab fa-node"></i>
                                    <i className="fas fa-database"></i>
                                    <i className="fab fa-aws"></i>
                                </div>
                            </div>
                            <div className="stack-layer tools">
                                <h4>Tools</h4>
                                <div className="tech-icons">
                                    <i className="fab fa-docker"></i>
                                    <i className="fab fa-git"></i>
                                    <i className="fas fa-terminal"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};