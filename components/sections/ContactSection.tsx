"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function ContactSection() {
  const t = useTranslation();

  return (
    <section
      id="contact"
      className="min-h-dvh border border-gray-300 bg-white p-5"
    >
      <h2 className="text-2xl font-bold">{t.sections.contact.title}</h2>
    </section>
  );
}
