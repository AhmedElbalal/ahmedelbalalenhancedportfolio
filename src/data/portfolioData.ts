export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    liveUrl: string;
    githubUrl: string;
    caseStudyUrl?: string;
    icon: string;
    stats?: {
        users?: string;
        performance?: string;
        coverage?: string;
    };
}

export interface Experience {
    id: string;
    period: string;
    position: string;
    company: string;
    description: string[];
    technologies: string[];
}

export interface Skill {
    category: string;
    items: {
        name: string;
        level: number;
    }[];
}

export const projects: Project[] = [
    {
        id: 'ecommerce',
        title: 'E-Commerce Website',
        description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process. Built with modern React and state management.',
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind'],
        features: [
            'Dynamic product catalog with responsive grid layout',
            'Smart cart system with real-time add/remove/update actions',
            'Persistent wishlist and cart storage using localStorage',
            'Automated linting and formatting via ESLint + Prettier'
        ],
        liveUrl: 'https://wondrous-fox-0138cc.netlify.app/',
        githubUrl: 'https://github.com/AhmedElbalal/eco-shop',
        icon: 'shopping-cart'
    },
    {
        id: 'analytics',
        title: 'Real-time Analytics SaaS',
        description: 'Micro-frontend analytics platform processing 1M+ events daily with real-time dashboards, custom reporting, and team collaboration features.',
        technologies: ['TypeScript', 'Micro-frontends', 'WebSocket', 'PostgreSQL', 'AWS Lambda', 'Terraform'],
        features: [
            'Real-time data visualization',
            'Custom report builder',
            'Team collaboration tools',
            'Automated scaling'
        ],
        liveUrl: 'https://eclectic-kringle-726cec.netlify.app/',
        githubUrl: 'https://github.com/AhmedElbalal/pulsegrid',
        icon: 'chart-line'
    },
    {
        id: 'landing',
        title: 'Modern Landing Page',
        description: 'A fast, responsive landing experience crafted without frameworks. Built with pure HTML, CSS, and JavaScript for optimal performance.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        features: [
            'Optimized images and assets',
            'Minimal external dependencies',
            'Efficient CSS/JS bundling',
            'Mobile-first responsive design'
        ],
        liveUrl: 'https://uzmanstudios.netlify.app/',
        githubUrl: 'https://github.com/AhmedElbalal/Uzman-Studio-Website',
        icon: 'code-branch'
    }
];

export const experiences: Experience[] = [
    {
        id: 'oztech',
        period: '2021 - Present',
        position: 'Front End Developer',
        company: 'Oz-Tech Media',
        description: [
            'Led migration from legacy Angular to React/TypeScript, improving performance by 40%',
            'Architected micro-frontend solution serving 2M+ monthly users',
            'Mentored 5 junior developers and established coding standards',
            'Implemented CI/CD pipelines reducing deployment time by 70%'
        ],
        technologies: ['React', 'TypeScript', 'Micro-frontends', 'AWS']
    },
    {
        id: 'sanofi',
        period: '2022 - 2023',
        position: 'Technical Support L2 (Freelance)',
        company: 'Sanofi',
        description: [
            'Built responsive dashboard used by 500k+ active users',
            'Integrated with 10+ third-party APIs with robust error handling',
            'Reduced initial load time from 4s to 1.2s through code splitting',
            'Implemented comprehensive testing suite with 90% coverage'
        ],
        technologies: ['Vue.js', 'GraphQL', 'Jest', 'Webpack']
    },
    {
        id: 'recruiter',
        period: '2020 - 2022',
        position: 'Technical Recruiter',
        company: 'We-Tech (Contractor)',
        description: [
            'Managed full-cycle recruitment for technical roles across engineering, data, and product teams',
            'Partnered with hiring managers to define job requirements and align recruitment strategies',
            'Sourced candidates through LinkedIn Recruiter, GitHub, and specialized tech communities',
            'Conducted screening and behavioral interviews to assess technical aptitude and cultural fit'
        ],
        technologies: ['Vue.js', 'GraphQL', 'Jest', 'Webpack']
    }
];

export const skills: Skill[] = [
    {
        category: 'Frontend',
        items: [
            { name: 'React/TypeScript', level: 95 },
            { name: 'Vue.js/Nuxt', level: 85 },
            { name: 'State Management', level: 90 }
        ]
    },
    {
        category: 'Backend',
        items: [
            { name: 'Node.js/Express', level: 88 },
            { name: 'Database Design', level: 85 },
            { name: 'API Design', level: 92 }
        ]
    },
    {
        category: 'DevOps & Tools',
        items: [
            { name: 'AWS/Docker', level: 80 },
            { name: 'CI/CD', level: 85 },
            { name: 'Testing', level: 90 }
        ]
    }
];

export const heroStats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '5+', label: 'Team Members Led' }
];