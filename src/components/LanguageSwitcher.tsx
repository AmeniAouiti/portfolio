import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { LANGUAGES, useLanguage } from "../i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((lang) => lang.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-2.5 py-1.5 text-xs font-bold text-text backdrop-blur-sm transition-colors hover:border-primary/40"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Change language"
      >
        <Globe size={14} className="text-primary shrink-0" />
        <span>{current.label}</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-1.5 min-w-[5.5rem] overflow-hidden rounded-xl border border-border bg-card py-1 shadow-xl"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={language === lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full px-3 py-1.5 text-left text-xs font-semibold transition-colors ${
                language === lang.code
                  ? "bg-primary/10 text-primary"
                  : "text-text-dim hover:bg-primary/5 hover:text-text"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
