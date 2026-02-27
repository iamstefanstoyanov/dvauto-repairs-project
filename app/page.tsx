import Contact from "@/components/Sections/Contact";
import Home from "@/components/Sections/Home";
import Reviews from "@/components/Sections/Reviews";
import WhyUs from "@/components/Sections/WhyUs";
import WhatWeDo from "@/components/Sections/WhatWeDo";
import { ComponentType } from "react";
import Gallery from "@/components/Sections/Gallery";

const SECTIONS: { id: string; Component: ComponentType }[] = [
  { id: "section-home", Component: Home },
  { id: "section-what-we-do", Component: WhatWeDo },
  { id: "section-why-us", Component: WhyUs },
  { id: "section-reviews", Component: Reviews },
  { id: "section-contact", Component: Contact },
  { id: "gallery", Component: Gallery },
];

export default function Page() {
  return (
    <main className="relative bg-[url('/garage-background.webp')] bg-cover bg-center bg-no-repeat bg-fixed md:bg-fixed">
      <div className="pointer-events-none absolute inset-0 bg-white/75" />
      <div className="relative">
        {SECTIONS.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </div>
    </main>
  );
}
