"use client";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import useTranslation from "@/hooks/useTranslation";

const Services = () => {
  const t = useTranslation();

  return (
    <section id="services" className="h-75 border border-gray-300 bg-transparent px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.sections.services.title} />
      </div>
    </section>
  );
};
export default Services;
