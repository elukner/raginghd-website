import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ServiceCard from "./ServiceCard";
import type { Service } from "../data/services";

describe("ServiceCard", () => {
  it("renders a coming-soon service without optional fields", () => {
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
  });

  it("renders an image and link when provided", () => {
    const service: Service = {
      name: "Live Test Service",
      description: "An available development service.",
      status: "live",
      image: "/services/test.png",
      url: "https://example.com",
      isPublic: true,
    };

    render(<ServiceCard service={service} />);

    expect(
      screen.getByRole("img", {
        name: "Live Test Service service image",
      }),
    ).toHaveAttribute("src", "/services/test.png");

    expect(screen.getByRole("link", { name: "Visit tool" })).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });
});
