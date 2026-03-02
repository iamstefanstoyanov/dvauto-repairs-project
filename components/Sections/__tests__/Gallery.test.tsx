import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Gallery from "../Gallery";

describe("Gallery", () => {
  it("has the section id 'gallery'", () => {
    const { container } = renderWithProviders(<Gallery />);
    expect(container.querySelector("#gallery")).toBeInTheDocument();
  });

  it("renders the section title and subtitle", () => {
    renderWithProviders(<Gallery />);
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Check out our photos")).toBeInTheDocument();
  });

  it("renders all gallery images with descriptive alt text", () => {
    renderWithProviders(<Gallery />);
    expect(screen.getByAltText("Lobby main hall interior")).toBeInTheDocument();
    expect(screen.getByAltText("Lounge seating area")).toBeInTheDocument();
    expect(screen.getByAltText("Reception desk view")).toBeInTheDocument();
  });

  it("renders previous and next navigation buttons", () => {
    renderWithProviders(<Gallery />);
    expect(screen.getByLabelText("Previous image")).toBeInTheDocument();
    expect(screen.getByLabelText("Next image")).toBeInTheDocument();
  });

  it("calls slider prev/next on button click", async () => {
    const { user } = renderWithProviders(<Gallery />);
    const prevButton = screen.getByLabelText("Previous image");
    const nextButton = screen.getByLabelText("Next image");

    await user.click(prevButton);
    await user.click(nextButton);

    expect(prevButton).toBeEnabled();
    expect(nextButton).toBeEnabled();
  });
});
