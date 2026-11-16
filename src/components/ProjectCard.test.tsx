import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectCard from "./ProjectCard";
import type { Project } from "../data/projects";

describe("ProjectCard", () => {
  it("renders a live project with an image and link", () => {
    const project: Project = {
      name: "Example App",
      description: "An example software application.",
      status: "live",
      image: "/projects/example.png",
      url: "https://example.com",
      isPublic: true,
    };

    render(<ProjectCard project={project} />);

    expect(screen.getByText("Example App")).toBeInTheDocument();
    expect(
      screen.getByText("An example software application."),
    ).toBeInTheDocument();

    expect(screen.getByText("Live")).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: "Example App project image" }),
    ).toHaveAttribute("src", "/projects/example.png");

    expect(screen.getByRole("link", { name: "Visit project" })).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });

  it("handles an in-development project without optional fields", () => {
    const project: Project = {
      name: "Unreleased App",
      description: "A project currently in development.",
      status: "in-development",
      isPublic: true,
    };

    render(<ProjectCard project={project} />);

    expect(screen.getByText("Unreleased App")).toBeInTheDocument();
    expect(screen.getByText("In development")).toBeInTheDocument();

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
