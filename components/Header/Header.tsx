"use client";

import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import MobileMenu from "@/components/ui/MobileMenu/MobileMenu";
import useActiveSection from "@/hooks/useActiveSection";
import useDevice from "@/hooks/useDevice";
import useTranslation from "@/hooks/useTranslation";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useCallback, useState } from "react";

const NAV_KEYS = [
  { key: "home", sectionId: "home" },
  { key: "whatWeDo", sectionId: "what-we-do" },
  { key: "whyUs", sectionId: "why-us" },
  { key: "reviews", sectionId: "reviews" },
  { key: "contact", sectionId: "contact" },
] as const;
const baseClasses = "block h-0.5 w-6 bg-black";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile, isHydrated } = useDevice();
  const t = useTranslation();
  const activeSection = useActiveSection();

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
    <header className="border border-gray-300 bg-gray-100 p-2 md:p-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button onClick={() => scrollToSection("home")}>
          <Image src="/logo.png" alt={t.brand} width={90} height={60} priority />
        </button>

        {isHydrated && !isMobile && (
          <nav className="flex flex-row items-center gap-5 border border-gray-300 bg-gray-200 rounded-full shadow-sm">
            {NAV_KEYS.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-colors md:px-4 md:py-2",
                  activeSection === item.sectionId ? "bg-red-600 text-white" : "hover:bg-gray-400",
                )}
              >
                {t.nav[item.key]}
              </button>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {isHydrated && isMobile && (
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={cn(
                  baseClasses,
                  "transition-transform",
                  mobileMenuOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(baseClasses, "transition-opacity", mobileMenuOpen && "opacity-0")}
              />
              <span
                className={cn(
                  baseClasses,
                  "transition-transform",
                  mobileMenuOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </button>
          )}
        </div>
      </div>

      {isHydrated && isMobile && mobileMenuOpen && (
        <MobileMenu
          translations={t.nav}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />
      )}
    </header>
  );
};

export default Header;
