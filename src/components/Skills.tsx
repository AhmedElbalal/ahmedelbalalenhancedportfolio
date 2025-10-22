import { useEffect, useRef } from 'react';
import { skills } from '../data/portfolioData';
import './Skills.css';

export const Skills: React.FC = () => {
    const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target as HTMLDivElement;
                        const level = progressBar.dataset.level;
                        if (level) {
                            setTimeout(() => {
                                progressBar.style.width = `${level}%`;
                            }, 200);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        skillRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            skillRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Expertise</h2>
                <div className="skills-grid">
                    {skills.map((category, categoryIndex) => (
                        <div key={category.category} className="skill-category">
                            <h3>{category.category}</h3>
                            {category.items.map((skill, skillIndex) => (
                                <div key={skill.name} className="skill-level">
                                    <span>{skill.name}</span>
                                    <div className="level-bar">
                                        <div
                                            ref={(el) => {
                                                skillRefs.current[categoryIndex * 3 + skillIndex] = el;
                                            }}
                                            className="level-progress"
                                            data-level={skill.level}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};