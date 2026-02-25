import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from "../Card";

const MockIcon = ({ className }: { className?: string }) => (
  <svg data-testid="icon" className={className} />
);

describe("Card", () => {
  it("renders the title", () => {
    render(<Card icon={MockIcon} title="Brake Repair" />);
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("Brake Repair");
  });

  it("renders the description text", () => {
    render(<Card icon={MockIcon} title="Test" description="A test description" />);
    expect(screen.getByText("A test description")).toBeInTheDocument();
  });

  it("renders children instead of description when both provided", () => {
    render(
      <Card icon={MockIcon} title="Test" description="Ignored">
        <span>Custom child</span>
      </Card>,
    );
    expect(screen.getByText("Custom child")).toBeInTheDocument();
    expect(screen.queryByText("Ignored")).not.toBeInTheDocument();
  });

  it("renders the icon component", () => {
    render(<Card icon={MockIcon} title="Test" />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies feature variant styles", () => {
    const { container } = render(<Card icon={MockIcon} title="Test" variant="feature" />);
    expect(container.firstChild).toHaveClass("text-center");
  });
});
