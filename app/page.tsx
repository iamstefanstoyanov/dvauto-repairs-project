import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeSection } from "@/components/sections/HomeSection";
import { OurStaffSection } from "@/components/sections/OurStaffSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="relative bg-[url('/garage-background.webp')] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="pointer-events-none absolute inset-0 bg-white/75" />
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
