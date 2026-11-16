import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const publicProjects = projects.filter((project) => project.isPublic);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 pt-16 pb-6 sm:pt-24 sm:pb-8"
    >
      <h2 id="projects-heading" className="mb-5 text-lg font-semibold">
        What I'm building
      </h2>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {publicProjects.map((project) => (
          <li key={project.name} className="min-w-0">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
