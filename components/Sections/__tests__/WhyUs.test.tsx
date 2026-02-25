import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WhyUs from "../WhyUs";

describe("WhyUs", () => {
  it("has the section id 'why-us'", () => {
    const { container } = renderWithProviders(<WhyUs />);
    expect(container.querySelector("#why-us")).toBeInTheDocument();
  });

  it("renders the section title", () => {
    renderWithProviders(<WhyUs />);
    expect(screen.getByText("Why Choose Us")).toBeInTheDocument();
  });

  it("renders all four feature cards", () => {
    renderWithProviders(<WhyUs />);
    expect(screen.getByText("Expert Engineers")).toBeInTheDocument();
    expect(screen.getByText("Experience & Skills")).toBeInTheDocument();
    expect(screen.getByText("Guarantee Service")).toBeInTheDocument();
    expect(screen.getByText("Trusted Work")).toBeInTheDocument();
  });

  it("renders card descriptions", () => {
    renderWithProviders(<WhyUs />);
    expect(screen.getByText(/Skilled professionals delivering/)).toBeInTheDocument();
  });
});
