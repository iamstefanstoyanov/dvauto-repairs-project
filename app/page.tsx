import Contact from "@/components/Sections/Contact";
import Home from "@/components/Sections/Home";
import OurStaff from "@/components/Sections/OurStaff";
import Services from "@/components/Sections/Services";
import WhatWeDo from "@/components/Sections/WhatWeDo";
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
