import { siteConfig } from "@/config/site";
import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("Company Name LTD")).toBeInTheDocument();
  });

  it("renders the phone contact link", () => {
    renderWithProviders(<Footer />);
    const phoneLink = screen.getByRole("link", { name: new RegExp(siteConfig.phone) });
    expect(phoneLink).toHaveAttribute("href", `tel:${siteConfig.phone}`);
  });

  it("renders the services list", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("Auto Maintenance")).toBeInTheDocument();
    expect(screen.getByText("Brake Repair Pads & Rotors")).toBeInTheDocument();
  });

  it("renders social media links", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByRole("link", { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /instagram/i })).toBeInTheDocument();
  });

  it("renders copyright with the current year", () => {
    renderWithProviders(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
