import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Reviews from "../Reviews";

describe("Reviews", () => {
  it("has the section id 'reviews'", () => {
    const { container } = renderWithProviders(<Reviews />);
    expect(container.querySelector("#reviews")).toBeInTheDocument();
  });

  it("renders the section title", () => {
    renderWithProviders(<Reviews />);
    expect(screen.getByText("What Customers Say")).toBeInTheDocument();
  });

  it("renders reviewer names", () => {
    renderWithProviders(<Reviews />);
    expect(screen.getByText("James Mitchell")).toBeInTheDocument();
    expect(screen.getByText("Sarah Thompson")).toBeInTheDocument();
  });

  it("renders previous and next navigation buttons", () => {
    renderWithProviders(<Reviews />);
    expect(screen.getByLabelText("Previous review")).toBeInTheDocument();
    expect(screen.getByLabelText("Next review")).toBeInTheDocument();
  });

  it("truncates long review text with a read more button", () => {
    renderWithProviders(<Reviews />);
    const readMoreButtons = screen.getAllByText("Read more");
    expect(readMoreButtons.length).toBeGreaterThan(0);
  });
});
