import { siteConfig } from "@/config/site";
import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "../Contact";

describe("Contact", () => {
  it("has the section id 'contact'", () => {
    const { container } = renderWithProviders(<Contact />);
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("renders the section title", () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the appointment card", () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText("Make An Appointment")).toBeInTheDocument();
    expect(screen.getByText("Book an Appointment")).toBeInTheDocument();
  });

  it("renders working hours info", () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText(/Mon – Fri: 09:00 – 18:00/)).toBeInTheDocument();
    expect(screen.getByText(/Saturday: CLOSED/)).toBeInTheDocument();
  });

  it("renders the emergency phone number", () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText(siteConfig.phone)).toBeInTheDocument();
  });
});
