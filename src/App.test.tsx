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
});

/*todo add tests for the Projects and Contact CTAs,
 including their destination IDs.*/
