"use client";

import Chevron from "@/components/ui/Icons/Chevron";
import { type Language, useLanguage } from "@/context/LanguageContext";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import BgFlag from "../Icons/BgFlag";
import UkFlag from "../Icons/UkFlag";

const OPTIONS: { code: Language; label: string; Flag: React.FC<{ className?: string }> }[] = [
  { code: "en", label: "EN", Flag: UkFlag },
  { code: "bg", label: "BG", Flag: BgFlag },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const current = OPTIONS.find((o) => o.code === language)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-1.5 rounded border border-gray-300 bg-gray-200 p-1 text-sm font-medium shadow-sm transition-colors hover:bg-gray-400 md:h-9 md:px-2 md:py-1"
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <current.Flag className="h-3.5 w-5" />
        {current.label}
        <Chevron direction={open ? "up" : "down"} className="h-3.5 w-3.5" />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full z-50 mt-1 min-w-full overflow-hidden rounded border border-gray-300 bg-gray-200 shadow-lg"
        >
          {OPTIONS.map(({ code, label, Flag }) => (
            <li key={code} role="option" aria-selected={language === code}>
              <button
                onClick={() => {
                  setLanguage(code);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-sm font-medium transition-colors",
                  language === code ? "bg-gray-400 text-white" : "text-gray-700 hover:bg-gray-300",
                )}
              >
                <Flag className="h-3.5 w-5" />
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
