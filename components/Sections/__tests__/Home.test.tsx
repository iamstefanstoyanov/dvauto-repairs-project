import { siteConfig } from "@/config/site";
import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../Home";

describe("Home", () => {
  it("has the section id 'home'", () => {
    const { container } = renderWithProviders(<Home />);
    expect(container.querySelector("#home")).toBeInTheDocument();
  });

  it("renders the headline", () => {
    renderWithProviders(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("We Care about Your Car");
  });

  it("renders the subtitle text", () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(/Reliable, fast, and expert/)).toBeInTheDocument();
  });

  it("has an emergency call link with the phone number", () => {
    renderWithProviders(<Home />);
    const link = screen.getByRole("link", { name: /emergency call/i });
    expect(link).toHaveAttribute("href", `tel:${siteConfig.phone}`);
  });
});
