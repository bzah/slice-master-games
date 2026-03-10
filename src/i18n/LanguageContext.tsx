import React, { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { translations, SUPPORTED_LANGS, type Language } from "./translations";

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  localizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  t: (key) => key,
  localizedPath: (path) => path,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const language = useMemo<Language>(() => {
    const firstSegment = location.pathname.split("/").filter(Boolean)[0];
    if (firstSegment && SUPPORTED_LANGS.includes(firstSegment as Language) && firstSegment !== "en") {
      return firstSegment as Language;
    }
    return "en";
  }, [location.pathname]);

  const t = useMemo(() => {
    const trans = translations[language];
    return (key: string) => (trans as Record<string, string>)[key] || key;
  }, [language]);

  const localizedPath = useMemo(() => {
    return (path: string) => (language === "en" ? path : `/${language}${path}`);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, localizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
