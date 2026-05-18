import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "./config";

type Direction = "ltr" | "rtl";

interface I18nContextType {
  language: string;
  direction: Direction;
  changeLanguage: (lng: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState<Direction>("ltr");
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    setDirection(dir);
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
    setLanguage(i18n.language);
  }, [language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <I18nContext.Provider value={{ language, direction, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
