import { useLanguage } from "../i18n/LanguageContext";
import { TECH_STACK_META, techIconUrl } from "../data/techStackMeta";
import Marquee from "./animations/Marquee";
import ScrollReveal from "./animations/ScrollReveal";
import SectionTitle from "./animations/SectionTitle";

const TechPill = ({ label, icon, color }: { label: string; icon: string; color: string }) => (
  <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-2 text-xs font-semibold text-text backdrop-blur-sm sm:text-sm">
    <span
      className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0a0e14]"
      style={{ boxShadow: `0 0 0 1px ${color}33` }}
    >
      <img src={techIconUrl(icon, color)} alt="" aria-hidden className="h-3.5 w-3.5 object-contain" loading="lazy" />
    </span>
    {label}
  </span>
);

export const TechStackSection = () => {
  const { locale } = useLanguage();
  const t = locale.tech;
  const items = t.items.map((tech, index) => ({
    ...tech,
    meta: TECH_STACK_META[index] ?? TECH_STACK_META[0],
  }));

  const rowA = items.slice(0, 6);
  const rowB = items.slice(6, 12);
  const rowC = items.slice(12);

  return (
    <section id="tech" className="relative overflow-hidden border-b border-border bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-2 text-xs uppercase tracking-[3px] text-primary">{t.chapter}</div>
              <SectionTitle className="text-4xl font-semibold tracking-tighter text-text sm:text-5xl">
                {t.title}
              </SectionTitle>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-text-dim sm:text-sm md:text-right">{t.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          <Marquee duration={42}>
            {rowA.map((tech) => (
              <TechPill key={tech.label} label={tech.label} icon={tech.meta.icon} color={tech.meta.color} />
            ))}
          </Marquee>
          <Marquee reverse duration={36}>
            {rowB.map((tech) => (
              <TechPill key={tech.label} label={tech.label} icon={tech.meta.icon} color={tech.meta.color} />
            ))}
          </Marquee>
          <Marquee duration={48}>
            {rowC.map((tech) => (
              <TechPill key={tech.label} label={tech.label} icon={tech.meta.icon} color={tech.meta.color} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
