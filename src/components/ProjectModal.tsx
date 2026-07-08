import { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FileText, X, Tag } from "lucide-react";
import { Project } from "../types";
import { parseTech } from "../utils";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { locale } = useLanguage();
  const m = locale.modal;
  const techs = parseTech(project.technologies);
  const hasLinks =
    project.github_url !== "#" ||
    project.demo_url !== "#" ||
    Boolean(project.report_url && project.report_url !== "#");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_80px_-16px_rgba(0,0,0,0.7)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Preview */}
        <div className="relative h-56 shrink-0 overflow-hidden border-b border-border sm:h-72 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <ProjectPreview project={project} variant="modal" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors hover:border-primary/40 hover:bg-black/80"
            aria-label={m.close}
          >
            <X size={18} />
          </button>

          {project.category && (
            <div className="absolute top-4 left-4 z-10 rounded-full border border-primary/30 bg-card/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-primary backdrop-blur-md">
              {project.category}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-7 scrollbar-hide">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
                {project.title}
              </h2>
              {(project.period || project.type_label) && (
                <p className="mt-2 text-sm text-text-dim">
                  {project.period && <span>{project.period}</span>}
                  {project.period && project.type_label && <span className="mx-1.5 text-primary/50">·</span>}
                  {project.type_label && (
                    <span className="font-medium text-primary/90">{project.type_label}</span>
                  )}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <Tag size={12} />
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech: string, index: number) => (
                <span
                  key={`${tech}-${index}`}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-border bg-bg/40 p-4 sm:p-5">
            <h3 className="mb-2.5 text-sm font-semibold text-text">{m.about}</h3>
            <p className="text-[15px] leading-relaxed text-text-dim">{project.long_description}</p>
          </div>

          {hasLinks && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-text">{m.links}</h3>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {project.github_url !== "#" && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-bg/50 px-4 py-3.5 text-sm font-semibold text-text transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  >
                    <Github size={16} /> {m.github}
                  </a>
                )}
                {project.report_url && project.report_url !== "#" && (
                  <a
                    href={project.report_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-bg/50 px-4 py-3.5 text-sm font-semibold text-text transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
                  >
                    <FileText size={16} /> {m.report}
                  </a>
                )}
                {project.demo_url !== "#" && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-black shadow-lg shadow-primary/20 transition-all hover:brightness-110 sm:col-span-2"
                  >
                    <ExternalLink size={16} /> {m.demo}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
