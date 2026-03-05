import { renderWithProviders } from "@/utils/tests";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LanguageSwitcher from "../LanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("renders the trigger button showing the current language", () => {
    renderWithProviders(<LanguageSwitcher />);
    const trigger = screen.getByRole("button", { name: /select language/i });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent("EN");
  });

  it("opens a dropdown with both language options on click", async () => {
    const { user } = renderWithProviders(<LanguageSwitcher />);
    await user.click(screen.getByRole("button", { name: /select language/i }));
    const listbox = screen.getByRole("listbox", { name: /language/i });
    expect(listbox).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("switches to Bulgarian when selecting BG", async () => {
    const { user } = renderWithProviders(<LanguageSwitcher />);
    await user.click(screen.getByRole("button", { name: /select language/i }));
    await user.click(screen.getByText("BG"));
    expect(screen.getByRole("button", { name: /select language/i })).toHaveTextContent("BG");
  });

  it("closes the dropdown after selecting a language", async () => {
    const { user } = renderWithProviders(<LanguageSwitcher />);
    await user.click(screen.getByRole("button", { name: /select language/i }));
    await user.click(screen.getByText("BG"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
