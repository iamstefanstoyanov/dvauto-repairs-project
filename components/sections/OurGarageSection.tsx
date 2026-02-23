"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function OurGarageSection() {
  const t = useTranslation();

  return (
    <section
      id="our-garage"
      className="min-h-dvh border border-gray-300 bg-white p-5"
    >
      <h2 className="text-2xl font-bold">{t.sections.ourGarage.title}</h2>
    </section>
  );
}
