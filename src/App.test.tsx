import { render, screen, within } from "@testing-library/react";
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

  it("renders the main navigation with correct destinations", () => {
    render(<App />);

    const navigation = screen.getByRole("navigation", {
      name: "Main navigation",
    });

    const links = [
      { name: "Projects", href: "#projects" },
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ];

    for (const link of links) {
      expect(
        within(navigation).getByRole("link", {
          name: link.name,
        }),
      ).toHaveAttribute("href", link.href);
    }
  });

  it("links the Explore Projects CTA to Projects", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: "Explore Projects" }),
    ).toHaveAttribute("href", "#projects");
  });

  it("links the Get in Touch CTA to Contact", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: "Get in Touch" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("renders the existing Projects and Services destinations", () => {
    render(<App />);

    expect(
      screen.getByRole("region", { name: "What I'm building" }),
    ).toHaveAttribute("id", "projects");

    expect(screen.getByRole("region", { name: "Dev Help" })).toHaveAttribute(
      "id",
      "services",
    );
  });
});
