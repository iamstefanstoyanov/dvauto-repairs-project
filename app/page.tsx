import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { OurStaffSection } from "@/components/sections/OurStaffSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-[url('/garage-background.webp')] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="pointer-events-none absolute inset-0 bg-white/70" />
      <div className="relative">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <OurStaffSection />
        <ContactSection />
      </div>
    </main>
  );
}
