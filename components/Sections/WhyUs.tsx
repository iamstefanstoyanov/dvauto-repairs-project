"use client";

import Briefcase from "@/components/ui/Icons/Briefcase";
import Phone from "@/components/ui/Icons/Phone";
import Shield from "@/components/ui/Icons/Shield";
import User from "@/components/ui/Icons/User";
import Card from "@/components/ui/Card/Card";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import useTranslation from "@/hooks/useTranslation";

const WHY_US_CARDS = [
  { key: "engineers", Icon: Briefcase },
  { key: "experience", Icon: User },
  { key: "guarantee", Icon: Phone },
  { key: "trusted", Icon: Shield },
] as const;

const WhyUs = () => {
  const t = useTranslation();

  return (
    <section id="why-us" className="border border-gray-300 bg-transparent px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.sections.whyUs.title} subtitle={t.sections.whyUs.description} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US_CARDS.map(({ key, Icon }) => {
            const card = t.sections.whyUs.cards[key];
            return (
              <Card
                key={key}
                icon={Icon}
                title={card.title}
                description={card.description}
                variant="feature"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
