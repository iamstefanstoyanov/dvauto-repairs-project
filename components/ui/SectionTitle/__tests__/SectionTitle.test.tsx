import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SectionTitle from "../SectionTitle";

describe("SectionTitle", () => {
  it("renders the title text", () => {
    render(<SectionTitle title="Our Services" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Our Services");
  });

  it("renders the subtitle when provided", () => {
    render(<SectionTitle title="Title" subtitle="Some description" />);
    expect(screen.getByText("Some description")).toBeInTheDocument();
  });

  it("does not render a subtitle paragraph when omitted", () => {
    const { container } = render(<SectionTitle title="Title" />);
    expect(container.querySelector("p")).not.toBeInTheDocument();
  });

  it("renders the decorative red divider", () => {
    const { container } = render(<SectionTitle title="Title" />);
    const divider = container.querySelector(".bg-red-600");
    expect(divider).toBeInTheDocument();
  });
});
