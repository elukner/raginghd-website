
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "./App"

describe("RagingHD app", () => {
  it("renders the company name", () => {
    render(<App />)

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "RagingHD",
      })
    ).toBeInTheDocument()
  })

  it("renders the company logo", () => {
    render(<App />)

    expect(
      screen.getByRole("img", {
        name: "RagingHD logo",
      })
    ).toHaveAttribute("src", "/raginghd-logo.svg")
  })
})
