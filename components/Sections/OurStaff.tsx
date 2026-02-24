"use client";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import useTranslation from "@/hooks/useTranslation";

const OurStaff = () => {
  const t = useTranslation();

  return (
    <section id="our-staff" className="h-75 border border-gray-300  bg-gray-100/90 px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.sections.ourStaff.title} />
      </div>
    </section>
  );
};
export default OurStaff;
