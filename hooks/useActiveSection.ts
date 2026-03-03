"use client";

import { useState, useEffect } from "react";

const SECTION_IDS = ["home", "what-we-do", "why-us", "gallery", "reviews", "contact"];

const useActiveSection = (): string => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const stickyHeader = document.querySelector("[data-sticky-header]");
    const headerHeight = stickyHeader?.getBoundingClientRect().height ?? 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${headerHeight + 1}px 0px -40% 0px`,
        threshold: 0,
      },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
};

export default useActiveSection;
