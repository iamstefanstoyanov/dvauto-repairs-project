import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { renderWithProviders } from "@/utils/tests";
import { act, renderHook, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("LanguageContext", () => {
  it("renders children inside the provider", () => {
    renderWithProviders(<div data-testid="child">Hello</div>);
    expect(screen.getByTestId("child")).toHaveTextContent("Hello");
  });

  it("defaults to English", () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });
    expect(result.current.language).toBe("en");
  });

  it("toggles language from en to bg", async () => {
    const Display = () => {
      const { language, toggleLanguage } = useLanguage();
      return <button onClick={toggleLanguage}>{language}</button>;
    };

    const { user } = renderWithProviders(<Display />);
    expect(screen.getByRole("button")).toHaveTextContent("en");

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("bg");
  });

  it("sets a specific language with setLanguage", () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => result.current.setLanguage("bg"));
    expect(result.current.language).toBe("bg");

    act(() => result.current.setLanguage("en"));
    expect(result.current.language).toBe("en");
  });

  it("throws when useLanguage is used outside the provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useLanguage())).toThrow(
      "useLanguage must be used within a LanguageProvider",
    );
    spy.mockRestore();
  });
});
