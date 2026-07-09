export type PortfolioLink = {
    label: string;
    href: string;
};

export type Project = {
    id: string;
    title: string;
    summary: string;
    technologies: string[];
    links: PortfolioLink[];
    featured?: boolean;
};

export type Research = {
    id: string;
    title: string;
    summary: string;
    technologies: string[];
    links: PortfolioLink[];
    featured?: boolean;
};