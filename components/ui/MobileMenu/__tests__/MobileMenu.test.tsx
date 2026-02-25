import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MobileMenu from "../MobileMenu";

const translations: Record<string, string> = {
  home: "Home",
  whatWeDo: "What We Do",
  whyUs: "Why Us",
  reviews: "Reviews",
  contact: "Contact",
};

describe("MobileMenu", () => {
  it("renders all navigation items", () => {
    render(<MobileMenu translations={translations} activeSection="home" onNavigate={vi.fn()} />);
    Object.values(translations).forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("calls onNavigate with the correct section id", () => {
    const onNavigate = vi.fn();
    render(<MobileMenu translations={translations} activeSection="home" onNavigate={onNavigate} />);

    fireEvent.click(screen.getByText("Contact"));
    expect(onNavigate).toHaveBeenCalledWith("contact");
  });

  it("highlights the active section", () => {
    render(<MobileMenu translations={translations} activeSection="reviews" onNavigate={vi.fn()} />);
    const activeButton = screen.getByText("Reviews");
    expect(activeButton).toHaveClass("bg-red-600");
  });

  it("renders as a nav element", () => {
    render(<MobileMenu translations={translations} activeSection="home" onNavigate={vi.fn()} />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
