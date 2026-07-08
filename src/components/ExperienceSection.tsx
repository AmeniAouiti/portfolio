import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, FileBadge } from "lucide-react";
import { Experience } from "../types";
import { parseTech } from "../utils";
import { useLanguage } from "../i18n/LanguageContext";
import SectionTitle from "./animations/SectionTitle";
import AttestationModal from "./AttestationModal";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  const { locale } = useLanguage();
  const t = locale.experience;
  const [attestation, setAttestation] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="experience" className="relative border-t border-border bg-transparent py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="uppercase tracking-[3px] text-xs mb-4 text-primary">{t.chapter}</div>
        <SectionTitle className="mb-16 text-6xl font-semibold tracking-tighter text-text">{t.title}</SectionTitle>

        <div className="space-y-16 relative before:absolute before:left-6 before:top-6 before:bottom-6 before:w-px before:bg-border">
          {experiences.map((exp, index) => {
            const isContinuation =
              index > 0 && experiences[index - 1].company === exp.company;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative pl-20 ${isContinuation ? "-mt-6" : ""}`}
              >
                <div
                  className={`timeline-dot absolute left-0 flex items-center justify-center overflow-hidden border border-primary/60 shadow-lg shadow-primary/5 ${
                    isContinuation
                      ? "top-3 h-5 w-5 rounded-full bg-primary/20 border-primary/40"
                      : "top-2 h-14 w-14 rounded-2xl bg-card p-2"
                  }`}
                >
                  {!isContinuation && exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : !isContinuation ? (
                    <Calendar className="h-6 w-6 text-primary" />
                  ) : null}
                </div>

                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-mono font-bold tracking-wider text-primary">
                    {exp.period}
                  </span>
                  {exp.type_label && (
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                      {exp.type_label}
                    </span>
                  )}
                </div>

                {!isContinuation && (
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <div className="text-2xl font-semibold text-text">{exp.company}</div>
                    <div className="rounded border border-border px-3 py-0.5 text-xs text-text-dim">
                      {exp.location}
                    </div>
                  </div>
                )}

                <div className={`text-xl text-text ${isContinuation ? "mb-4 mt-1" : "mb-4"}`}>
                  {exp.role}
                </div>

                <p className="mb-5 max-w-[62ch] leading-relaxed text-text-dim">{exp.description}</p>

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mb-6 max-w-[62ch] space-y-2 text-sm leading-relaxed text-text-dim">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {(exp.attestations?.length
                  ? exp.attestations
                  : exp.attestation
                    ? [{ src: exp.attestation, label: exp.attestation_label ?? t.viewAttestation }]
                    : []
                ).length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {(exp.attestations?.length
                      ? exp.attestations
                      : [{ src: exp.attestation as string, label: exp.attestation_label ?? t.viewAttestation }]
                    ).map((item) => (
                      <button
                        key={item.src}
                        onClick={() => setAttestation({ src: item.src, title: item.label })}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:border-primary/60 hover:bg-primary/20"
                      >
                        <FileBadge className="h-4 w-4" />
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {parseTech(exp.technologies).map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AttestationModal
        open={attestation !== null}
        onClose={() => setAttestation(null)}
        src={attestation?.src}
        title={attestation?.title}
      />
    </section>
  );
};

export default ExperienceSection;
