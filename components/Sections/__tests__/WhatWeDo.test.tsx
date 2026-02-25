import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WhatWeDo from "../WhatWeDo";

describe("WhatWeDo", () => {
  it("has the section id 'what-we-do'", () => {
    const { container } = renderWithProviders(<WhatWeDo />);
    expect(container.querySelector("#what-we-do")).toBeInTheDocument();
  });

  it("renders the section title", () => {
    renderWithProviders(<WhatWeDo />);
    expect(screen.getByText("What We Do")).toBeInTheDocument();
  });

  it("renders all six service cards", () => {
    renderWithProviders(<WhatWeDo />);
    expect(screen.getByText("Auto Maintenance Services")).toBeInTheDocument();
    expect(screen.getByText("Brake Repair Pads & Rotors")).toBeInTheDocument();
    expect(screen.getByText("Shocks, Struts Replacement")).toBeInTheDocument();
    expect(screen.getByText("System Diagnosis & Repair")).toBeInTheDocument();
    expect(screen.getByText("Air Conditioning Services")).toBeInTheDocument();
    expect(screen.getByText("Tires & Wheel Balancing")).toBeInTheDocument();
  });

  it("renders card descriptions", () => {
    renderWithProviders(<WhatWeDo />);
    expect(screen.getByText(/Keep your car in top condition/)).toBeInTheDocument();
  });
});
