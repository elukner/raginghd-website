import { expect, vi } from "vitest";
import { projects } from "../data/projects";

vi.mock(import("./data/projects.ts"), async (importOriginal) => {
  const originalModule = await importOriginal();
  const publicProjects = projects.filter((project) => project.isPublic);
  return {
    answer: vi.fn(originalModule.answer),
    variable: "mock",
  };
});

expect(screen.getByText("Public Test Project")).toBeInTheDocument();

expect(screen.queryByText("Private Test Project")).not.toBeInTheDocument();
