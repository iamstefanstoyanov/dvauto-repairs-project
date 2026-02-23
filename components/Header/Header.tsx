"use client";

import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import MobileMenu from "@/components/ui/MobileMenu/MobileMenu";
import { useDevice } from "@/hooks/useDevice";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { useCallback, useState } from "react";

const NAV_KEYS = [
  { key: "home", sectionId: "home" },
  { key: "whatWeDo", sectionId: "what-we-do" },
  { key: "services", sectionId: "services" },
  { key: "ourStaff", sectionId: "our-staff" },
  { key: "contact", sectionId: "contact" },
] as const;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile } = useDevice();
  const t = useTranslation();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const stickyHeader = document.querySelector("[data-sticky-header]");
      const offset = stickyHeader?.getBoundingClientRect().height ?? 0;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className="border border-gray-300 bg-white p-2 md:p-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button onClick={() => scrollToSection("home")}>
          <Image src="/logo.png" alt={t.brand} width={90} height={60} priority />
        </button>

        {!isMobile && (
          <nav className="flex items-center gap-6">
            {NAV_KEYS.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm cursor-pointer font-medium transition-colors hover:text-white hover:bg-gray-500 bg-gray-100 py-1 px-3 md:px-4 md:py-2 rounded-full"
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
        <MobileMenu translations={t.nav} onNavigate={scrollToSection} />
      )}
    </header>
  );
};

export default Header;
