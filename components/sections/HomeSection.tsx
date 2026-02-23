"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function HomeSection() {
  const t = useTranslation();

  return (
    <section
      id="home"
      className="min-h-dvh border border-gray-300 bg-white p-5"
    >
      <h2 className="text-2xl font-bold">{t.sections.home.title}</h2>
    </section>
  );
}
