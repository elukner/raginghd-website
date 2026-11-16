import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ServicesSection from "./ServicesSection";

vi.mock("../data/services", () => ({
  services: [
    {
      name: "Public Test Service",
      description: "A public development service.",
      status: "coming-soon",
      isPublic: true,
    },
    {
      name: "Private Test Service",
      description: "A private development service.",
      status: "in-development",
      isPublic: false,
    },
  ],
}));

describe("ServicesSection", () => {
  it("renders public services and hides private services", () => {
    render(<ServicesSection />);

    expect(screen.getByText("Public Test Service")).toBeInTheDocument();

    expect(screen.queryByText("Private Test Service")).not.toBeInTheDocument();
  });

  it("has the correct accessible section heading", () => {
    render(<ServicesSection />);

    expect(screen.getByRole("region", { name: "Dev Help" })).toHaveAttribute(
      "id",
      "services",
    );
  });
});
