"use client";

import { useLanguage } from "@/context/LanguageContext";
import BgFlag from "../Icons/BgFlag";
import UkFlag from "../Icons/UkFlag";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex cursor-pointer shadow-sm justify-center items-center md:h-9 gap-1.5 rounded border bg-gray-200 border-gray-300 p-1 md:py-1 md:px-2 text-sm font-medium transition-colors hover:bg-gray-400"
      aria-label="Switch language"
    >
      {language === "en" ? <BgFlag className="h-3.5 w-5" /> : <UkFlag className="h-3.5 w-5" />}
      {language === "en" ? "BG" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
