import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Globe } from "lucide-react";
import { LANGUAGES, useLanguage } from "../i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState<{ top: number; left: number; minWidth: number } | null>(
    null,
  );
  const current = LANGUAGES.find((lang) => lang.code === language) ?? LANGUAGES[0];

  const updateMenuPosition = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMenuStyle({
      top: rect.bottom + 6,
      left: rect.right,
      minWidth: Math.max(rect.width, 88),
    });
  }, []);

  useEffect(() => {
    if (!open) return;

    updateMenuPosition();

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    const handleReposition = () => updateMenuPosition();

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [open, updateMenuPosition]);

  const menu =
    open && menuStyle
      ? createPortal(
          <div
            ref={menuRef}
            role="listbox"
            style={{
              position: "fixed",
              top: menuStyle.top,
              left: menuStyle.left,
              minWidth: menuStyle.minWidth,
              transform: "translateX(-100%)",
            }}
            className="z-[200] overflow-hidden rounded-xl border border-border bg-card py-1 shadow-2xl"
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
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs font-semibold transition-colors ${
                  language === lang.code
                    ? "bg-primary/10 text-primary"
                    : "text-text-dim hover:bg-primary/5 hover:text-text"
                }`}
              >
                <span aria-hidden>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => {
          setOpen((prev) => {
            const next = !prev;
            if (!prev) updateMenuPosition();
            return next;
          });
        }}
        className="flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-2.5 py-1.5 text-xs font-bold text-text backdrop-blur-sm transition-colors hover:border-primary/40"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Change language"
      >
        <Globe size={14} className="shrink-0 text-primary" />
        <span>{current.label}</span>
      </button>
      {menu}
    </div>
  );
};

export default LanguageSwitcher;
