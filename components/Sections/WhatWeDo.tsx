"use client";

import Cpu from "@/components/ui/Icons/Cpu";
import Disc from "@/components/ui/Icons/Disc";
import Snowflake from "@/components/ui/Icons/Snowflake";
import Spring from "@/components/ui/Icons/Spring";
import Tyre from "@/components/ui/Icons/Tyre";
import Wrench from "@/components/ui/Icons/Wrench";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { useTranslation } from "@/hooks/useTranslation";

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
              <div key={key} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-base font-semibold">{card.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
