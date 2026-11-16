import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ServiceCard from "./ServiceCard";
import type { Service } from "../data/services";

describe("ServiceCard", () => {
  it("renders an upcoming service without optional fields", () => {
    const service: Service = {
      name: "Test Service",
      description: "An upcoming development service.",
      status: "coming-soon",
      isPublic: true,
    };

    render(<ServiceCard service={service} />);

    expect(screen.getByText("Test Service")).toBeInTheDocument();
    expect(
      screen.getByText("An upcoming development service."),
    ).toBeInTheDocument();
    expect(screen.getByText("Coming soon")).toBeInTheDocument();

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.queryByText(/Pricing:/)).not.toBeInTheDocument();
    expect(screen.queryByText("Accepting clients")).not.toBeInTheDocument();
  });

  it("renders optional availability, pricing, image, and link", () => {
    const service: Service = {
      name: "Available Service",
      description: "A test development service.",
      status: "live",
      availability: "accepting-clients",
      pricing: "From $150",
      image: "/services/test.png",
      url: "https://example.com",
      isPublic: true,
    };

    render(<ServiceCard service={service} />);

    expect(screen.getByText("Live")).toBeInTheDocument();
    expect(screen.getByText("Accepting clients")).toBeInTheDocument();
    expect(screen.getByText("Pricing: From $150")).toBeInTheDocument();

    expect(
      screen.getByRole("img", {
        name: "Available Service service image",
      }),
    ).toHaveAttribute("src", "/services/test.png");

    expect(screen.getByRole("link", { name: "View service" })).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });
});
