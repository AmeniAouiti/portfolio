import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { CONTACT_INFO } from "../data/contact";

const name = "AMENI AOUITI";
const fadeUp = { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } };

const Hero = () => {
  const { locale } = useLanguage();
  const t = locale.contact;

  const socials = [
    { href: CONTACT_INFO.linkedin, icon: Linkedin, label: t.linkedin },
    { href: CONTACT_INFO.github, icon: Github, label: t.github },
    { href: `mailto:${CONTACT_INFO.email}`, icon: Mail, label: t.emailLabel },
  ];

  return (
    <section className="relative flex min-h-dvh items-center overflow-x-hidden overflow-y-visible bg-transparent">
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pt-24 pb-20 sm:px-6 sm:pt-28 md:px-10 lg:px-14">
        <div className="flex flex-col items-start text-left">
          <motion.p
            key={`job-${locale.hero.jobTitle}`}
            {...fadeUp}
            transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
            className="mb-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-primary/80 sm:mb-4"
          >
            {locale.hero.jobTitle}
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.215, 0.61, 0.355, 1] }}
            className="mb-4 text-[clamp(2.75rem,10vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.055em] text-text sm:mb-5"
          >
            {name}
          </motion.h1>

          <motion.p
            key={`intro-${locale.hero.introRest}`}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.215, 0.61, 0.355, 1] }}
            className="mb-8 max-w-2xl text-base leading-relaxed text-text-dim sm:mb-10 sm:text-lg"
          >
            <span className="font-medium text-text">{locale.hero.introHello}</span>{" "}
            {locale.hero.introRest}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex w-full flex-col items-start gap-5"
          >
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-primary/20 transition-all hover:brightness-110 sm:px-9 sm:text-base"
              >
                {t.getInTouch}
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-card/50 px-8 py-3.5 text-sm font-semibold text-text backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card sm:px-9 sm:text-base"
              >
                {locale.hero.explore}
              </a>
            </div>

            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-text/70 transition-all hover:border-primary/40 hover:bg-card hover:text-text"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-text-dim/70 transition-colors hover:text-primary"
        aria-label="Scroll to about"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
