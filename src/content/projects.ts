import type { Project } from "../types/portfolio";

export const projects: Project[] = [
    {
        id: "nat-twenty-one",
        title: "NatTwentyOne",
        summary: "A React and TypeScript application for managing D&D characters, widgets, and campaign tools.",
        technologies: ["React", "TypeScript", "Vite", "Dexie", "IndexedDB"],
        links: [
            { label: "GitHub", href: "#" }
        ],
        featured: true
    }
];