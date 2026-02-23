"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function AboutSection() {
  const t = useTranslation();

  return (
    <section
      id="about"
      className="min-h-dvh border border-gray-300 bg-white p-5"
    >
      <h2 className="text-2xl font-bold">{t.sections.about.title}</h2>
    </section>
  );
}
