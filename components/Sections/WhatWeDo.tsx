"use client";

import Cpu from "@/components/ui/Icons/Cpu";
import Disc from "@/components/ui/Icons/Disc";
import Snowflake from "@/components/ui/Icons/Snowflake";
import Spring from "@/components/ui/Icons/Spring";
import Tyre from "@/components/ui/Icons/Tyre";
import Wrench from "@/components/ui/Icons/Wrench";
import Card from "@/components/ui/Card/Card";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import useTranslation from "@/hooks/useTranslation";

const SERVICE_CARDS = [
  { key: "maintenance", Icon: Wrench },
  { key: "brakes", Icon: Disc },
  { key: "suspension", Icon: Spring },
  { key: "diagnostics", Icon: Cpu },
  { key: "ac", Icon: Snowflake },
  { key: "tyres", Icon: Tyre },
] as const;

const WhatWeDo = () => {
  const t = useTranslation();

  return (
    <section id="what-we-do" className="border border-gray-300 bg-white/90 px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title={t.sections.whatWeDo.title}
          subtitle={t.sections.whatWeDo.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {SERVICE_CARDS.map(({ key, Icon }) => {
            const card = t.sections.whatWeDo.cards[key];
            return (
              <Card
                key={key}
                icon={Icon}
                title={card.title}
                description={card.description}
                variant="service"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
