"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BgFlag } from "./Icons/BgFlag";
import { UkFlag } from "./Icons/UkFlag";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex cursor-pointer items-center gap-1.5 h-9 rounded border bg-gray-100 border-gray-300 py-1 px-2 text-sm font-medium transition-colors hover:bg-gray-500"
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
