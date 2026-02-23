"use client";

import { useTranslation } from "@/hooks/useTranslation";
import SectionTitle from "@/components/ui/SectionTitle";

const Services = () => {
  const t = useTranslation();

  return (
    <section
      id="services"
      className="h-75 border border-gray-300 bg-transparent px-5 py-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.sections.services.title} />
      </div>
    </section>
  );
};
export default Services;
