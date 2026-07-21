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
    image: string;
    featured?: boolean;
};

export type Research = {
    id: string;
    title: string;
    summary: string;
    techniques: string[];
    technologies: string[];
    links: PortfolioLink[];
    image: string;
    featured?: boolean;
};