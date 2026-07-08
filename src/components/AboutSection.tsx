import { MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import ScrollReveal from "./animations/ScrollReveal";
import SectionTitle from "./animations/SectionTitle";

export const AboutSection = () => {
  const { locale } = useLanguage();
  const t = locale.about;

  return (
    <section id="about" className="relative border-t border-border bg-transparent py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-3 text-xs uppercase tracking-[3px] text-primary">{t.chapter}</div>

          <div className="mb-6 space-y-1">
            <SectionTitle as="h2" className="text-3xl leading-[1.05] font-semibold tracking-tighter text-text sm:text-4xl md:text-5xl lg:text-6xl">
              {t.title}
            </SectionTitle>
            <SectionTitle as="h2" className="text-3xl leading-[1.05] font-semibold tracking-tighter text-text sm:text-4xl md:text-5xl lg:text-6xl">
              {t.titleLine2}
            </SectionTitle>
            <SectionTitle as="h2" className="text-3xl leading-[1.05] font-semibold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              {t.titleLine3}
            </SectionTitle>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-1.5 text-xs font-semibold text-green-700 dark:text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            {t.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-text-dim">
            <MapPin size={12} className="text-primary" />
            Tunis, Tunisia
          </span>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
        <p className="mb-8 max-w-[58ch] text-base leading-relaxed text-text-dim sm:text-lg">{t.bio}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
        <ul className="mb-8 space-y-2.5 border-l-2 border-primary/30 pl-5">
          {t.highlights.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-text-dim sm:text-base">
              {item}
            </li>
          ))}
        </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-primary">
            {t.diploma}
          </span>
          <span className="rounded-xl border border-border bg-card px-4 py-2 text-sm text-text-dim">
            {t.role}
          </span>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
