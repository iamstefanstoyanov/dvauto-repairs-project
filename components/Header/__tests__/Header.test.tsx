import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "../Header";

vi.mock("@/hooks/useDevice", () => ({
  default: () => ({ isMobile: false, isDesktop: true, width: 1024, isHydrated: true }),
}));

vi.mock("@/hooks/useActiveSection", () => ({
  default: () => "home",
}));

describe("Header", () => {
  it("renders the logo image", () => {
    renderWithProviders(<Header />);
    expect(screen.getByAltText("DV AUTO REPAIRS LTD")).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("What We Do")).toBeInTheDocument();
    expect(screen.getByText("Why Us")).toBeInTheDocument();
    expect(screen.getByText("Reviews")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("highlights the active section in the nav", () => {
    renderWithProviders(<Header />);
    const homeButton = screen.getByText("Home");
    expect(homeButton).toHaveClass("bg-red-600");
  });

  it("does not show the hamburger menu on desktop", () => {
    renderWithProviders(<Header />);
    expect(screen.queryByLabelText("Toggle menu")).not.toBeInTheDocument();
  });

  it("renders the language switcher", () => {
    renderWithProviders(<Header />);
    expect(screen.getByLabelText("Switch language")).toBeInTheDocument();
  });
});
