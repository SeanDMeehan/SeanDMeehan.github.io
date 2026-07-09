import { projects } from "../content/projects";
import  ProjectCard  from "../components/cards/ProjectCard";

export default function Projects() {
    return (
        <section>
            <h1>Projects</h1>

            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
        </section>
    );
}