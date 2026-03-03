import Contact from "@/components/Sections/Contact";
import Gallery from "@/components/Sections/Gallery";
import Home from "@/components/Sections/Home";
import Reviews from "@/components/Sections/Reviews";
import WhatWeDo from "@/components/Sections/WhatWeDo";
import WhyUs from "@/components/Sections/WhyUs";
import { ComponentType } from "react";

const SECTIONS: { id: string; Component: ComponentType }[] = [
  { id: "section-home", Component: Home },
  { id: "section-what-we-do", Component: WhatWeDo },
  { id: "section-why-us", Component: WhyUs },
  { id: "gallery", Component: Gallery },
  { id: "section-reviews", Component: Reviews },
  { id: "section-contact", Component: Contact },
];

export default function Page() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[url('/garage-background.webp')] bg-cover bg-center bg-no-repeat" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-white/75" />
      <div className="relative">
        {SECTIONS.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </div>
    </main>
  );
}
