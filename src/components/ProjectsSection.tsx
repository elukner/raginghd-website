import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const publicProjects = projects.filter((project) => project.isPublic);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24"
    >
      <h2
        id="projects-heading"
        className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        What I'm building
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {publicProjects.map((project) => (
          <li key={project.name} className="min-w-0">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
