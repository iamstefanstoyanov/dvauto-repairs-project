"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BgFlag } from "./Icons/BgFlag";
import { UkFlag } from "./Icons/UkFlag";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 rounded border border-gray-300 py-1 px-2 text-sm font-medium transition-colors hover:bg-gray-100"
      aria-label="Switch language"
    >
      {language === "en" ? (
        <BgFlag className="h-3.5 w-5 rounded-sm" />
      ) : (
        <UkFlag className="h-3.5 w-5 rounded-sm" />
      )}
      {language === "en" ? "BG" : "EN"}
    </button>
  );
}
