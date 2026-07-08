import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Education } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import SectionTitle from "./animations/SectionTitle";

interface EducationSectionProps {
  items: Education[];
}

export const EducationSection = ({ items }: EducationSectionProps) => {
  const { locale } = useLanguage();
  const t = locale.education;

  return (
    <section id="education" className="relative border-t border-border bg-card/10 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-4 text-xs uppercase tracking-[3px] text-primary">{t.chapter}</div>
        <SectionTitle className="mb-3 text-3xl font-semibold tracking-tighter text-text sm:text-4xl md:text-5xl lg:text-6xl">
          {t.title}
        </SectionTitle>
        <p className="mb-10 max-w-2xl text-base text-text-dim sm:mb-12 sm:text-lg">{t.subtitle}</p>

        <div className="relative space-y-12 sm:space-y-14 before:absolute before:left-4 before:top-6 before:bottom-6 before:w-px before:bg-border sm:before:left-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-14 sm:pl-20"
            >
              <div className="timeline-dot absolute left-0 top-2 flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-primary/60 bg-card p-1.5 shadow-lg shadow-primary/5 sm:h-14 sm:w-14 sm:p-2">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.school}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <GraduationCap className="h-6 w-6 text-primary" />
                )}
              </div>

              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="text-sm font-mono font-bold tracking-wider text-primary">{item.period}</span>
                {item.type_label && (
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {item.type_label}
                  </span>
                )}
              </div>

              <div className="mb-2 flex flex-wrap items-center gap-3">
                <div className="text-xl font-semibold text-text sm:text-2xl">{item.school}</div>
                <div className="rounded border border-border px-3 py-0.5 text-xs text-text-dim">{item.location}</div>
              </div>

              <div className="mb-4 text-lg font-medium text-text sm:text-xl">{item.degree}</div>

              {item.description && (
                <p className="mb-5 max-w-[62ch] leading-relaxed text-text-dim">{item.description}</p>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <ul className="max-w-[62ch] space-y-2 text-sm leading-relaxed text-text-dim">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
