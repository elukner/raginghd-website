import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("RagingHD app", () => {
  it("renders the hero headline", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Software that solves real problems.",
      }),
    ).toBeInTheDocument();
  });

  it("links the company name to the top of the page", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: "RagingHD" })).toHaveAttribute(
      "href",
      "#top",
    );
  });

  it("links the Explore Projects link to the Projects section", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: "Explore Projects" }),
    ).toHaveAttribute("href", "#projects");
  });

  it("links the Get in Touch link to the Contact section", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: "Get in Touch" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });
});
