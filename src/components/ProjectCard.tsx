import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
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
    <Card className="flex h-full flex-col border-white/15 bg-[#12121a] text-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">
          {project.name}
        </CardTitle>

        <CardDescription className="text-sm leading-relaxed text-slate-300">
          {project.description}
        </CardDescription>
      </CardHeader>

      {project.image && (
        <CardContent>
          <div className="flex h-44 items-center justify-center">
            <img
              src={project.image}
              alt={`${project.name} project image`}
              loading="lazy"
              className="max-h-40 max-w-full rounded-md object-contain"
            />
          </div>
        </CardContent>
      )}

      <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">
          {statusLabels[project.status]}
        </span>

        {project.url && (
          <a
            href={project.url}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
              }),
              "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
            )}
          >
            {project.status === "live" ? "Visit project" : "View preview"}
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
