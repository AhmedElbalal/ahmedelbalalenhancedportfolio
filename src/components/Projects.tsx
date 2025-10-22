import { PlayCircle, Code, ExternalLink, Github, Search, Filter } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';
import { Button } from './ui/Button';
import './Projects.css';

export const Projects: React.FC = () => {
    const { projects, loading, error, filters, searchTerm, setFilters, searchProjects } = useProjects();

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'shopping-cart':
                return <i className="fas fa-shopping-cart"></i>;
            case 'chart-line':
                return <i className="fas fa-chart-line"></i>;
            case 'code-branch':
                return <i className="fas fa-code-branch"></i>;
            default:
                return <i className="fas fa-code"></i>;
        }
    };

    const allTechnologies = Array.from(new Set(projects.flatMap(project => project.technologies)));

    if (loading) {
        return (
            <section id="projects" className="projects">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="loading-projects">Loading projects...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="projects">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="error-message">{error}</div>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-controls">
                    <div className="search-box">
                        <Search size={18} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => searchProjects(e.target.value)}
                        />
                    </div>

                    <div className="filter-section">
                        <Filter size={18} />
                        <div className="filter-tags">
                            {allTechnologies.map(tech => (
                                <button
                                    key={tech}
                                    className={`filter-tag ${filters.includes(tech) ? 'active' : ''}`}
                                    onClick={() => {
                                        const newFilters = filters.includes(tech)
                                            ? filters.filter(f => f !== tech)
                                            : [...filters, tech];
                                        setFilters(newFilters);
                                    }}
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <div className="project-img">
                                    {getIcon(project.icon)}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.liveUrl}
                                        className="project-link"
                                        title="Live Demo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="project-link"
                                        title="Source Code"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-features">
                                    <h4>Key Features:</h4>
                                    <ul>
                                        {project.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-actions">
                                    <Button
                                        variant="outline"
                                        icon={PlayCircle}
                                        href={project.liveUrl}
                                    >
                                        Live Demo
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        icon={Code}
                                        href={project.githubUrl}
                                    >
                                        Source Code
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length === 0 && (
                    <div className="no-projects">
                        No projects found matching your criteria.
                    </div>
                )}
            </div>
        </section>
    );
};