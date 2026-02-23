"use client";

import { useLanguage } from "@/context/LanguageContext";
import translations from "@/i18n/translations";

const useTranslation = () => {
  const { language } = useLanguage();
  return translations[language];
};

export default useTranslation;
