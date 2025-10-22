import { useQuery } from '@tanstack/react-query';

const fetchGitHubRepos = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub repos');
    }
    return response.json();
};

export const useGitHubRepos = (username: string) => {
    return useQuery({
        queryKey: ['github-repos', username],
        queryFn: () => fetchGitHubRepos(username),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });
};