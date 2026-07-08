import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { de } from "./locales/de";
import type { Language, LocaleContent } from "./types";

const locales: Record<Language, LocaleContent> = { en, fr, de };

interface LanguageContextValue {
  language: Language;
  locale: LocaleContent;
  setLanguage: (lang: Language) => void;
  translateText: (text: string, target?: Language) => Promise<string>;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-language";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    return saved && locales[saved] ? saved : "en";
  });
  const [isTranslating, setIsTranslating] = useState(false);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = locales[language].meta.title;
  }, [language]);

  const translateText = useCallback(
    async (text: string, target: Language = language): Promise<string> => {
      if (!text.trim()) return text;
      setIsTranslating(true);
      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, source: "en", target }),
        });
        if (!res.ok) return text;
        const data = await res.json();
        return data.translated || text;
      } catch {
        return text;
      } finally {
        setIsTranslating(false);
      }
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        locale: locales[language],
        setLanguage,
        translateText,
        isTranslating,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "de", label: "DE", flag: "🇩🇪" },
];
