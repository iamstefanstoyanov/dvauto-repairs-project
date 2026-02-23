import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { OurGarageSection } from "@/components/sections/OurGarageSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <OurWorkSection />
      <OurGarageSection />
      <ContactSection />
    </main>
  );
}
