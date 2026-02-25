import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import useTranslation from "@/hooks/useTranslation";
import translations from "@/i18n/translations";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe("useTranslation", () => {
  it("returns English translations by default", () => {
    const { result } = renderHook(() => useTranslation(), { wrapper });
    expect(result.current.brand).toBe(translations.en.brand);
  });

  it("includes all nav keys", () => {
    const { result } = renderHook(() => useTranslation(), { wrapper });
    expect(result.current.nav).toEqual(translations.en.nav);
  });

  it("includes section translations", () => {
    const { result } = renderHook(() => useTranslation(), { wrapper });
    expect(result.current.sections.home.headline).toBe(translations.en.sections.home.headline);
  });

  it("returns Bulgarian translations when language is bg", () => {
    const { result } = renderHook(
      () => {
        const lang = useLanguage();
        const t = useTranslation();
        return { lang, t };
      },
      { wrapper },
    );

    act(() => result.current.lang.setLanguage("bg"));
    expect(result.current.t.nav.home).toBe(translations.bg.nav.home);
  });
});
