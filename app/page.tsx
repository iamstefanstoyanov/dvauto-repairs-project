import Home from "@/components/sections/Home";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Services from "@/components/sections/Services";
import OurStaff from "@/components/sections/OurStaff";
import Contact from "@/components/sections/Contact";
import { ComponentType } from "react";

const SECTIONS: ComponentType[] = [Home, WhatWeDo, Services, OurStaff, Contact];

export default function Page() {
  return (
    <main className="relative bg-[url('/garage-background.webp')] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="pointer-events-none absolute inset-0 bg-white/75" />
      <div className="relative">
        {SECTIONS.map((Section, i) => (
          <Section key={i} />
        ))}
      </div>
    </main>
  );
}
