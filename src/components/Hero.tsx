import { Rocket, Download, Send } from 'lucide-react';
import { heroStats } from '../data/portfolioData';
import { Button } from './ui/Button';
import { useLazyLoad } from '../hooks/useLazyLoad';
import './Hero.css';

export const Hero: React.FC = () => {
    const { observe, isIntersecting } = useLazyLoad();

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Frontend Developer</h1>
                    <p className="hero-subtitle">
                        Building scalable, performant web applications with React, TypeScript & Node.js
                    </p>

                    <div className="hero-stats">
                        {heroStats.map((stat, index) => (
                            <div
                                key={index}
                                className="stat"
                                ref={el => observe(el, index)}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="hero-btns">
                        <Button variant="primary" icon={Rocket} href="#projects">
                            View My Work
                        </Button>
                        <Button variant="outline" icon={Send} href="#contact">
                            Let's Connect
                        </Button>
                        <Button
                            variant="secondary"
                            icon={Download}
                            href="https://drive.google.com/file/d/1hH-8mcSikhdcuZftN347T6YlyJg75Lti/view?usp=drive_link"
                        >
                            Download Resume
                        </Button>
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <div className="floating-elements">
                    <div className="floating-element react" ref={el => observe(el, 0)}>
                        <i className="fab fa-react"></i>
                    </div>
                    <div className="floating-element typescript" ref={el => observe(el, 1)}>
                        <i className="fab fa-js"></i>
                    </div>
                    <div className="floating-element node" ref={el => observe(el, 2)}>
                        <i className="fab fa-node-js"></i>
                    </div>
                    <div className="floating-element aws" ref={el => observe(el, 3)}>
                        <i className="fab fa-aws"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};