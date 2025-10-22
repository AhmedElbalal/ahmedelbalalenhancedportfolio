import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    features: string[];
    icon: string;
}

interface PortfolioState {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    projects: Project[];
    filteredProjects: Project[];
    selectedProject: Project | null;
    filters: string[];
    loading: boolean;
    error: string | null;
    pageViews: Record<string, number>;
    setFilters: (filters: string[]) => void;
    setSelectedProject: (project: Project | null) => void;
    fetchProjects: () => Promise<void>;
    trackView: (page: string) => void;
}

export const usePortfolioStore = create<PortfolioState>()(
    persist(
        (set, get) => ({
            theme: 'dark',
            projects: [],
            filteredProjects: [],
            selectedProject: null,
            filters: [],
            loading: false,
            error: null,
            pageViews: {},

            toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),

            setFilters: (filters) => {
                const { projects } = get();
                const filteredProjects = filters.length === 0
                    ? projects
                    : projects.filter(project =>
                        project.technologies.some(tech => filters.includes(tech))
                    );
                set({ filters, filteredProjects });
            },

            setSelectedProject: (project) => set({ selectedProject: project }),

            fetchProjects: async () => {
                set({ loading: true, error: null });
                try {
                    const response = await import('../data/portfolioData');
                    const projects = response.projects;
                    set({
                        projects,
                        filteredProjects: projects,
                        loading: false
                    });
                } catch (error) {
                    set({
                        error: 'Failed to load projects',
                        loading: false
                    });
                }
            },

            trackView: (page) => set((state) => ({
                pageViews: {
                    ...state.pageViews,
                    [page]: (state.pageViews[page] || 0) + 1
                }
            }))
        }),
        {
            name: 'portfolio-storage',
            partialize: (state) => ({
                theme: state.theme,
                pageViews: state.pageViews
            })
        }
    )
);