"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function OurStaffSection() {
  const t = useTranslation();

  return (
    <section
      id="our-staff"
      className="h-75 border border-gray-300 bg-white/90 p-5"
    >
      <h2 className="text-2xl font-bold">{t.sections.ourStaff.title}</h2>
    </section>
  );
}
