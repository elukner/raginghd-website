import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { buttonVariants } from "./ui/button";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

const statusLabels: Record<Project["status"], string> = {
  "in-development": "In development",
  "coming-soon": "Coming soon",
  live: "Live",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      {project.image && (
        <CardContent>
          <img
            src={project.image}
            alt={`${project.name} project image`}
            loading="lazy"
            className="h-40 w-full rounded-md object-contain"
          />
        </CardContent>
      )}

      <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
          {statusLabels[project.status]}
        </span>

        {project.url && (
          <a
            href={project.url}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
            })}
          >
            {project.status === "live" ? "Visit project" : "View preview"}
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
