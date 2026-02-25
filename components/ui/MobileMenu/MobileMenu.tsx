"use client";

import Home from "@/components/ui/Icons/Home";
import Phone from "@/components/ui/Icons/Phone";
import Shield from "@/components/ui/Icons/Shield";
import Users from "@/components/ui/Icons/Users";
import Wrench from "@/components/ui/Icons/Wrench";
import { cn } from "@/utils/cn";
import { ComponentType } from "react";

interface NavItem {
  key: string;
  sectionId: string;
  Icon: ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { key: "home", sectionId: "home", Icon: Home },
  { key: "whatWeDo", sectionId: "what-we-do", Icon: Wrench },
  { key: "whyUs", sectionId: "why-us", Icon: Shield },
  { key: "reviews", sectionId: "reviews", Icon: Users },
  { key: "contact", sectionId: "contact", Icon: Phone },
];

interface MobileMenuProps {
  translations: Record<string, string>;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const MobileMenu = ({ translations, activeSection, onNavigate }: MobileMenuProps) => (
  <nav className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-gray-100 shadow-lg">
    {NAV_ITEMS.map(({ key, sectionId, Icon }) => (
      <button
        key={sectionId}
        onClick={() => onNavigate(sectionId)}
        className={cn(
          "flex w-full items-center gap-3 border-b border-gray-200 px-6 py-3.5 text-left text-sm font-medium",
          activeSection === sectionId
            ? "bg-red-600 text-white"
            : "text-gray-700 hover:bg-gray-50 hover:text-red-600",
        )}
      >
        <Icon
          className={cn("h-4.5 w-4.5", activeSection === sectionId ? "text-white" : "text-red-600")}
        />
        {translations[key]}
      </button>
    ))}
  </nav>
);

export default MobileMenu;
