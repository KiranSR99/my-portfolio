export interface Profile {
    name: string;
    headline: string;
    location: string;
    summary: string;
    aboutSummary: string;
    technologies: string[];
    email: string;
    linkedIn: string;
    github: string;
    x: string;
    instagram: string;
}

export interface Job {
    company: string;
    title: string;
    range: string;
    url: string;
    duties: string[];
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    external?: string;
}

export const PROFILE: Profile = {
    name: 'Kiran Shrestha',
    headline: 'I build scalable, modern web experiences.',
    location: 'Kathmandu, Nepal',
    summary: `Motivated frontend developer with hands-on experience in Angular, TypeScript, JavaScript, and RESTful APIs integration. Proficient in HTML, CSS, Tailwind CSS, Spring Boot, MySQL, and PostgreSQL. Committed to continuous learning and growth in the field of web development.`,
    aboutSummary: `I'm an Angular Developer specialized in building robust frontend applications. Currently, I'm focused on creating accessible, human-centered products while exploring the intersection of modern frameworks and backend integration.`,
    technologies: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'Spring Boot',
        'Java',
        'React',
        'REST',
        'PrimeNG',
        'Postman',
        'Tailwind CSS',
    ],
    email: 'kiranxtha99@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/kiranstha',
    github: 'https://github.com/KiranSR99',
    x: 'https://x.com',
    instagram: 'https://instagram.com',
};

export const JOBS: Job[] = [
    {
        company: 'Independent Client',
        title: 'Angular Developer',
        range: 'November 2025 — Present',
        url: '#',
        duties: [
            'Building scalable front-end features using Angular, TypeScript, RxJS, and REST APIs',
            'Integrating APIs and handling authentication and role-based access',
            'Following best practices for modular architecture and maintainability'
        ]
    },
    {
        company: 'Aadim Innovation',
        title: 'Angular Developer',
        range: 'December 2023 — April 2025',
        url: '#',
        duties: [
            'Actively participated in the research and development of School Content Management System utilizing Angular and TypeScript',
            'Integrated Java REST APIs to enhance functionality and connectivity of the School Content Management System',
            'Successfully contributed to the development of other projects like Event Enroll System, Attendance System'
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'Doodle Dash: A CNN Based Sketch Recognition Game',
        description: `A game similar to Google's Quick Draw about drawing doodles where prompts are given by the system and a CNN model guesses them. Features single player and multiplayer (play with a friend) modes.`,
        tech: ['Angular', 'Python', 'Flask', 'SocketIO']
    },
    {
        title: 'School Content Management System',
        description: 'A system for creation and management of school websites. It offers tools to update content through an easy-to-use user interface.',
        tech: ['Angular', 'Spring Boot', 'PostgreSQL']
    },
    {
        title: 'Physical Assessment Report Generator',
        description: 'A system that helps to create report cards for students based on how they perform in physical education games and activities.',
        tech: ['Angular', 'Spring Boot', 'PostgreSQL']
    },
    {
        title: 'College Hub Nepal',
        description: 'An easy way to find information about colleges, courses, and universities across Nepal.',
        tech: ['Angular', 'Spring Boot', 'PostgreSQL']
    }
];
