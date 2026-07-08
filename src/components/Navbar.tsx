import { useEffect, useMemo, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { useActiveSection } from "../hooks/useActiveSection";
import LanguageSwitcher from "./LanguageSwitcher";
import CVDownloadModal from "./CVDownloadModal";
import GooeyNav from "./animations/GooeyNav";

const SECTION_IDS = ["about", "experience", "projects", "tech", "devops", "certifications", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { locale } = useLanguage();
  const activeSection = useActiveSection(SECTION_IDS, "about");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(y / maxScroll, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = useMemo(
    () => [
      { id: "about", label: locale.nav.about, href: "#about" },
      { id: "experience", label: locale.nav.journey, href: "#experience" },
      { id: "projects", label: locale.nav.projects, href: "#projects" },
      { id: "tech", label: locale.nav.stack, href: "#tech" },
      { id: "devops", label: locale.nav.devops, href: "#devops" },
      { id: "certifications", label: locale.nav.certifications, href: "#certifications" },
      { id: "contact", label: locale.nav.contact, href: "#contact" },
    ],
    [locale.nav],
  );

  const activeLabel = navItems.find((item) => item.id === activeSection)?.label ?? locale.nav.about;
  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.id === activeSection),
  );

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "border-primary/15 bg-bg/90 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]" : "border-white/10 bg-bg/55"
        } backdrop-blur-xl`}
      >
        <div
          className="absolute top-0 right-0 left-0 h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary transition-opacity duration-300"
          style={{
            transform: `scaleX(${scrollProgress})`,
            opacity: scrolled ? 0.92 : 0.55,
          }}
        />

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-14">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-3 text-left transition-transform duration-300 hover:scale-[1.02]"
          >
            <motion.div
              animate={scrolled ? { boxShadow: "0 0 20px rgba(var(--primary-rgb), 0.25)" } : { boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-primary/30 ring-2 ring-primary/10"
            >
              <img src="/uploads/profile.png" alt="Ameni Aouiti" className="h-full w-full object-cover object-top" />
            </motion.div>
            <div className="hidden min-w-0 sm:block">
              <motion.div
                key={scrolled ? "scrolled" : "top"}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                className="leading-tight font-semibold tracking-tight text-text"
              >
                Ameni Aouiti
              </motion.div>
              <div className="relative h-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={scrolled ? activeSection : "role"}
                    initial={{ y: 14, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -14, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
                    className={`text-[11px] leading-tight ${scrolled ? "font-medium text-primary" : "text-text/50"}`}
                  >
                    {scrolled ? activeLabel : locale.nav.role}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </button>

          <div className="hidden items-center lg:flex">
            <GooeyNav
              items={navItems}
              activeIndex={activeIndex}
              particleCount={12}
              particleDistances={[70, 10]}
              particleR={80}
              animationTime={550}
              timeVariance={220}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              onItemClick={(item) => {
                if (item.id) scrollToSection(item.id);
              }}
            />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCvOpen(true)}
              className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-all hover:border-primary/50 hover:bg-primary/5"
            >
              <Download className="h-4 w-4" /> {locale.nav.cv}
            </motion.button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-text">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/10 px-6 py-8 md:hidden"
          >
            <div className="flex flex-col gap-5 text-lg">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-1 text-left transition-colors ${activeSection === item.id ? "text-primary" : "text-text hover:text-primary"}`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => {
                  setCvOpen(true);
                  setIsOpen(false);
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-border py-3 text-text hover:bg-primary/5"
              >
                <Download className="h-4 w-4" /> {locale.nav.downloadCv}
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <CVDownloadModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
};

export default Navbar;
