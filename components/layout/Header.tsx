"use client";

import { useState, useCallback } from "react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useDevice } from "@/hooks/useDevice";
import { useTranslation } from "@/hooks/useTranslation";

const NAV_KEYS = [
  { key: "home", sectionId: "home" },
  { key: "about", sectionId: "about" },
  { key: "ourWork", sectionId: "our-work" },
  { key: "ourGarage", sectionId: "our-garage" },
  { key: "contact", sectionId: "contact" },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile } = useDevice();
  const t = useTranslation();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 border border-gray-300 bg-white p-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg font-bold"
        >
          {t.brand}
        </button>

        {!isMobile && (
          <nav className="flex items-center gap-6">
            {NAV_KEYS.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm font-medium transition-colors hover:text-gray-600"
              >
                {t.nav[item.key]}
              </button>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-black transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-black transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-black transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          )}
        </div>
      </div>

      {isMobile && mobileMenuOpen && (
        <nav className="absolute left-0 top-full w-full border border-gray-300 bg-white p-5 shadow-md">
          {NAV_KEYS.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="block w-full py-2 text-left text-sm font-medium transition-colors hover:text-gray-600"
            >
              {t.nav[item.key]}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
