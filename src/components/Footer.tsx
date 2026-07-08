import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { CONTACT_INFO } from "../data/contact";

export const Footer = () => {
  const { locale } = useLanguage();
  const f = locale.footer;
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { href: CONTACT_INFO.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: CONTACT_INFO.github, icon: Github, label: "GitHub" },
    { href: `mailto:${CONTACT_INFO.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-bg transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-8 safe-bottom sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <p className="text-sm text-text-dim text-center sm:text-left">
            {f.copyright.replace("{year}", String(year))}{" "}
            <span className="text-text/50">{f.rights}</span>
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text/50 hover:text-text transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 mx-auto text-sm text-text/40 hover:text-text-dim transition-colors"
        >
          <ArrowUp size={14} />
          {f.backToTop}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
