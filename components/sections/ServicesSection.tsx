"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function ServicesSection() {
  const t = useTranslation();

  return (
    <section
      id="services"
      className="h-75 border border-gray-300 bg-transparent p-5"
    >
      <h2 className="text-2xl font-bold">{t.sections.services.title}</h2>
    </section>
  );
}
