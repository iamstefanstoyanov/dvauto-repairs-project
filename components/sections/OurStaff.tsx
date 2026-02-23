"use client";

import { useTranslation } from "@/hooks/useTranslation";
import SectionTitle from "@/components/ui/SectionTitle";

const OurStaff = () => {
  const t = useTranslation();

  return (
    <section
      id="our-staff"
      className="h-75 border border-gray-300 bg-white/90 px-5 py-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.sections.ourStaff.title} />
      </div>
    </section>
  );
};
export default OurStaff;
