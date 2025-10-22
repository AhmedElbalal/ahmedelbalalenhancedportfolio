import React, { useEffect } from 'react';

export const Particles: React.FC = () => {
    useEffect(() => {
        const container = document.getElementById('particles');
        if (!container) return;

        // Clear existing particles
        container.innerHTML = '';

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 4 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDuration = `${15 + Math.random() * 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;

            container.appendChild(particle);
        }
    }, []);

    return (
        <>
            <div className="grid-background" />
            <div className="particles-container" id="particles" />
        </>
    );
};