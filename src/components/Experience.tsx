import { experiences } from '../data/portfolioData';
import './Experience.css';

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-date">{exp.period}</div>
                            <div className="timeline-content">
                                <h3>{exp.position}</h3>
                                <span className="company">{exp.company}</span>
                                <ul>
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <div className="tech-used">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};