import type { Research } from "../types/portfolio";
import IterativeMethodsPaper from "/src/assets/papers/IterativeMethodsPaper.pdf";
import LawOfHarmonies from "/src/assets/papers/LawOfHarmoniesPaper.pdf";
import BrainNetworkPaper from "/src/assets/papers/BrainNetworkPaper.pdf";
import RSAPaper from "/src/assets/papers/PublicKeyCryptographyPaper.pdf";
import PCAPaper from "/src/assets/papers/PCAPaper.pdf";
import FourrierAnalysisPaper from "/src/assets/papers/FourrierAnalysisPaper.pdf";

export const research: Research[] = [
    {
        id: "sparse-linear-systems",
        title: "Variable Relaxation Parameter in Iterative Methods for Solving Sparse Linear Systems",
        summary: "A research project that explored the introduction of variable and non-variable relaxation parameters into the Jacobi and Gauss Seidel iterative methods for solving ordinary and partial differential equations that have been discretized into sparse linear systems. The introduction of such parameters yeilds a family of algorithms: Jacobi, Gauss-Seidel, Weighted Jacobi, Succesive Over-Relaxation (SOR), Scheduled Relaxation Jacobi, and Adaptive SOR. This research implemented all of these algorithms and ran numerical experiments on them using the 2D Laplace's equation as a test problem.",
        techniques: ["Iterative Methods", "Numerical Linear Algebra", "Sparse Systems", "Partial Differential Equations"],
        technologies: ["MATLAB"],
        links: [
            { label: "PDF", href: IterativeMethodsPaper },
            { label: "GitHub", href: "https://github.com/SeanDMeehan/NumericalMethods"}
        ],
        image: "src/assets/images/NumericalMethods.png",
        featured: true
    },
    {
        id: "law-of-harmonies",
        title: "An Analysis of the Law of Hamronies",
        summary: "A research project that investigated the real-world predictive power of Kepler's Law of Harmonies on NASA's exo-planet data. The Law of Harmonies states that the orbital period of a planet is proportional to the semi-major axis of that orbit. Taking the logarithm of this law yeilds a linear equation. This research used a Linear Model to recover the coefficients consistent with the linearized version of Newton's derivaiton of the Law of Harmonies and used ANOVA analysis to investigate which particular deviations of an orbital system from an ideal two body system cause the law to break down.",
        techniques: ["Linear Models", "ANOVA", "DFBETAs", "Cook's Distance" ],
        technologies: ["R", "Python", "Pandas"],
        links: [
            { label: "PDF", href: LawOfHarmonies}
        ],
        image: "/src/assets/images/LawofHarmonies.png",
        featured: false
    },
    {
        id: "brain-network-research",
        title: "A Graph-Theoretic Investigation of Brain Network Structure in Parkinson's Disease Using Resting-State fMRIs",
        summary: "A study of macroscale brain network properties based on resting-state functional MRI data from a set of control subjects and a set of individuals with Parkinson's disease. A small-worldness coefficient calculated using the characteristic path length, clustering coefficients, and matched random Erdos-Renyi graphs for each brain graph was used to analyze the difference in network structure and efficiency between the two groups. ",
        techniques: ["Graph Theory", "Small World Graphs", "Thresholding", "Data Visualization"],
        technologies: ["Python", "NetworkX", "Pandas", "Matplotlib"],
        links: [
            { label: "PDF", href: BrainNetworkPaper },
            { label: "GitHub", href: "https://github.com/SeanDMeehan/BrainNetworkResearch" }
        ],
        image: "/src/assets/images/BrainGraph.png",
        featured: false
        
    },
    {
        id: "RSA-paper",
        title: "A Theoretical Exploration of RSA Cryptography",
        summary: "A survey paper on the history of cryptography culminating in a theoretical treatment of Rivest-Shamir-Adleman (RSA) cryptography, the first modern cryptographic system. The theoretical treatment takes several basic theorems about prime numbers as well as Fermat's Little Theorem and uses them to prove all theorems necessary to provide a theoretical basis for RSA. It then gives a brief guide on how to implement a simple RSA system on a network.",
        techniques: ["RSA cryptography", "Number Theory", "Abstract Algebra"],
        technologies: [],
        links: [
            { label: "PDF", href: RSAPaper}
        ],
        image: "/src/assets/images/RSA.png",
        featured: false
    },
    {
        id: "SVD-for-PCA-paper",
        title: "A Singular Value Decomposition Approach to Principle Component Analysis",
        summary: "A research and programming project that implemented, compared, and contrasted methods to use Eigendecomposition and Singular Value Decomposition as a means to perform Principle Component Analysis.",
        techniques: ["Numerical Linear Algebra", "Principle Component Analysis", "Numerical Methods"],
        technologies: ["Python", "Numpy"],
        links: [
            {label: "PDF", href: PCAPaper},
            {label: "GitHub", href: "https://github.com/SeanDMeehan/NumericalMethods/blob/main/lin_alg_module.py"}
        ],
        image: "/src/assets/images/SVD.png",
        featured: false
    },
    {
        id: "fourrier-analysis-paper",
        title: "The History and Applications of Fourier Analysis",
        summary: "A survey paper on the development and applications of the Fourier Series and Transform. The paper begins with the initial theory created by Fourier himself, discusses the work done by Cauchy and Dirichlet to refine the theory, gives a full canonical presentation of the Fourier Transform and its properties, and concludes with a discussion of the various applications of the transform and series.",
        techniques: ["Fourrier Analysis", "Complex Analysis"],
        technologies: [],
        links: [
            { label: "PDF", href: FourrierAnalysisPaper}
        ],
        image: "/src/assets/images/Fourrier.png",
        featured: false
    }
];