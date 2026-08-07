import type { Project } from "../types/portfolio";
import satelliteML from "../assets/images/SatelliteML.png";
import natTwentyOne from "../assets/images/NatTwentyOne.png";
import linAlgLib from "../assets/images/LinAlgLib.png";

export const projects: Project[] = [
    {
        id: "satellite-ml",
        title: "Am ML Derived Error Correction Term in Satellite Orbital Path Projections",
        summary: "An end to end Data Science project using a Physics-Informed Neural Network trained on satellite and solar weather data to reduce the error in satellite orbital path propogations made using the method of simplified general perturbations. The project began with the automated aquasition of NASA and CelesTrack data. It continued to data cleaning, exploratory data analysis, the merging of the datasets, feature engineering, and modeling. The result was a hybrid Gated Recurrent Unit - Multi Layer Perceptron machine learning algorithm capable of reducing the average error in the predicted position of a satellite by 49%.",
        technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "PyTorch", "BeautifulSoup", "sgp4", "requests"],
        links: [
            { label: "Github", href: "#" }
        ],
        image: satelliteML,
        featured: true
    },
    {
        id: "nat-twenty-one",
        title: "NatTwentyOne",
        summary: "A React and TypeScript DnD application for customizable character and story creation and management. The app utilizes IndexedDB via Dexie to manage user and game data, a custom built database interface and state management system, and several libraries -- namely ReactFlow, React-Grid-Layout, and Material UI. The result is widget based character management and graph based story management systems that allow the user to create and interact with their own characters and their own stories in an individualized environment through a seemless, aesthetic, and intuitive User Interface.",
        technologies: ["React", "TypeScript", "Vite", "Dexie", "IndexedDB", "Python", "Pandas", "Ollama"],
        links: [
            { label: "GitHub", href: "#" }
        ],
        image: natTwentyOne,
        featured: true
    },
    {
        id: "python-linalg-module",
        title: "Python and Matlab Linear Algebra Libraries",
        summary: "Python and MATLAB Linear Algebra libraries developed over time in conjunction with several research projects. The libraries are equipped for tasks such as the Gram-Schmidt Process, GMRES, PCA, and several others.",
        technologies: ["Python", "MATLAB", "Numpy"],
        links: [
            { label: "GitHub", href: "https://github.com/SeanDMeehan/NumericalMethods"}
        ],
        image: linAlgLib,
        featured: false
    },
    {
        id: "this-website",
        title: "This Website",
        summary: "My personal website. You are here. This website was created from scratch, entirely by myself, using Typescript, React, and Vite.",
        technologies: ["React", "Typescript", "Vite"],
        links: [
            { label: "GitHub", href: "https://github.com/SeanDMeehan/SeanDMeehan.github.io"}
        ],
        image: natTwentyOne,
        featured: false
    },
    
];
