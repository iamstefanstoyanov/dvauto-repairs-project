"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Language = "en" | "bg";

const STORAGE_KEY = "dv-auto-repairs-ltd-lang";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

let listeners: (() => void)[] = [];

const subscribe = (listener: () => void) => {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};

const getSnapshot = (): Language => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "bg" ? "bg" : "en";
};

const getServerSnapshot = (): Language => "en";

const setStoredLanguage = (lang: Language) => {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  listeners.forEach((l) => l());
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleLanguage = useCallback(() => {
    setStoredLanguage(language === "en" ? "bg" : "en");
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setStoredLanguage(lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
