import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LanguageSwitcher from "../LanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("renders the switch button", () => {
    renderWithProviders(<LanguageSwitcher />);
    expect(screen.getByRole("button", { name: /switch language/i })).toBeInTheDocument();
  });

  it("shows 'BG' when the current language is English", () => {
    renderWithProviders(<LanguageSwitcher />);
    expect(screen.getByRole("button")).toHaveTextContent("BG");
  });

  it("shows 'EN' after toggling to Bulgarian", async () => {
    const { user } = renderWithProviders(<LanguageSwitcher />);
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("EN");
  });

  it("has an accessible aria-label", () => {
    renderWithProviders(<LanguageSwitcher />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Switch language");
  });
});
