import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const publicProjects = projects.filter((project) => project.isPublic);

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">What I'm building</h2>

      <div>
        {publicProjects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}
