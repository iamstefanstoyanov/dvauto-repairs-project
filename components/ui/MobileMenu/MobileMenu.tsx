"use client";

import { ComponentType } from "react";
import Home from "@/components/ui/Icons/Home";
import Wrench from "@/components/ui/Icons/Wrench";
import Shield from "@/components/ui/Icons/Shield";
import Users from "@/components/ui/Icons/Users";
import Phone from "@/components/ui/Icons/Phone";

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
  onNavigate: (sectionId: string) => void;
}

const MobileMenu = ({ translations, onNavigate }: MobileMenuProps) => (
  <nav className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-lg">
    {NAV_ITEMS.map(({ key, sectionId, Icon }) => (
      <button
        key={sectionId}
        onClick={() => onNavigate(sectionId)}
        className="flex w-full items-center gap-3 border-b border-gray-100 px-6 py-3.5 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
      >
        <Icon className="h-4.5 w-4.5 text-red-600" />
        {translations[key]}
      </button>
    ))}
  </nav>
);

export default MobileMenu;
