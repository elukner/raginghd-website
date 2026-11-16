import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ProjectsSection from "./ProjectsSection";

vi.mock("../data/projects", () => ({
  projects: [
    {
      name: "Public Test Project",
      description: "A publicly visible project.",
      status: "live",
      isPublic: true,
    },
    {
      name: "Private Test Project",
      description: "A private project.",
      status: "in-development",
      isPublic: false,
    },
  ],
}));

describe("ProjectsSection", () => {
  it("renders public projects and hides private projects", () => {
    render(<ProjectsSection />);

    expect(screen.getByText("Public Test Project")).toBeInTheDocument();

    expect(screen.queryByText("Private Test Project")).not.toBeInTheDocument();
  });
});
