import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { Project } from "../types";
import { parseTech } from "../utils";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectPreview } from "./ProjectPreview";
import ScrollReveal from "./animations/ScrollReveal";
import SectionTitle from "./animations/SectionTitle";

interface ProjectsSectionProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

export const ProjectsSection = ({ projects, onOpenProject }: ProjectsSectionProps) => {
  const { locale } = useLanguage();
  const t = locale.projects;

  return (
    <section id="projects" className="relative overflow-hidden border-t border-border bg-transparent py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(123,97,255,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-2 text-xs uppercase tracking-[3px] text-primary">{t.chapter}</div>
              <SectionTitle className="text-4xl leading-none font-semibold tracking-tighter text-text sm:text-5xl">
                {t.title}
              </SectionTitle>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-text-dim sm:text-sm md:text-right">{t.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: (index % 4) * 0.08,
                duration: 0.55,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{ y: -6 }}
              onClick={() => onOpenProject(project)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card/70 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:shadow-[0_12px_40px_-12px_rgba(var(--primary-rgb),0.25)]"
            >
              <div className="relative group/preview h-40 overflow-hidden sm:h-48 md:h-52 lg:h-56">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                <ProjectPreview project={project} variant="card" />
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-card/90 px-3 py-1.5 text-[10px] font-semibold text-primary backdrop-blur-sm">
                    <Eye size={12} />
                    {t.explore}
                  </span>
                </div>
              </div>

              <div className="relative p-3 sm:p-3.5">
                <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent sm:left-3.5 sm:right-3.5" />

                <h4 className="mb-2 line-clamp-2 text-sm leading-snug font-bold text-text transition-colors group-hover:text-primary sm:text-[15px]">
                  {project.title}
                </h4>

                <div className="mb-2.5 flex flex-wrap gap-1">
                  {parseTech(project.technologies)
                    .slice(0, 3)
                    .map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-md border border-primary/15 bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary/90 sm:text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                <div className="flex items-center justify-between gap-2 border-t border-border pt-2">
                  <div className="min-w-0 text-[10px] leading-snug text-text-dim line-clamp-2 sm:text-[11px]">
                    {project.period && <div className="text-text/70">{project.period}</div>}
                    {project.type_label && <div>{project.type_label}</div>}
                    {!project.period && !project.type_label && <div>{project.category}</div>}
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-0.5 text-[10px] font-semibold text-text-dim transition-all duration-300 group-hover:gap-1 group-hover:text-primary sm:text-[11px]">
                    <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
