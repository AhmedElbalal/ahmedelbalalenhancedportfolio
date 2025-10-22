import { useState, useEffect } from 'react';
import { usePortfolioStore } from '../store/portfolioStore';

export const useProjects = () => {
    const {
        projects,
        filteredProjects,
        loading,
        error,
        filters,
        fetchProjects,
        setFilters
    } = usePortfolioStore();

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const searchProjects = (term: string) => {
        setSearchTerm(term);
        const filtered = projects.filter(project =>
            project.title.toLowerCase().includes(term.toLowerCase()) ||
            project.description.toLowerCase().includes(term.toLowerCase()) ||
            project.technologies.some(tech =>
                tech.toLowerCase().includes(term.toLowerCase())
            )
        );
        usePortfolioStore.setState({ filteredProjects: filtered });
    };

    return {
        projects: filteredProjects,
        loading,
        error,
        filters,
        searchTerm,
        setFilters,
        searchProjects
    };
};