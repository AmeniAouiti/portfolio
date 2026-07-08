import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Lock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const PdfAttestationViewer = lazy(() => import("./PdfAttestationViewer"));

interface AttestationModalProps {
  open: boolean;
  onClose: () => void;
  src?: string;
  title?: string;
}

const AttestationModal = ({ open, onClose, src, title }: AttestationModalProps) => {
  const { locale } = useLanguage();
  const t = locale.experience;
  const [blurred, setBlurred] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      const key = e.key.toLowerCase();
      const blockCombo =
        (e.ctrlKey || e.metaKey) && ["s", "p", "u", "c"].includes(key);
      if (key === "printscreen" || blockCombo) {
        e.preventDefault();
        setBlurred(true);
        window.setTimeout(() => setBlurred(false), 1200);
      }
    };

    const onContext = (e: MouseEvent) => e.preventDefault();
    const onBlur = () => setBlurred(true);
    const onFocus = () => setBlurred(false);

    document.addEventListener("keydown", onKey, true);
    document.addEventListener("contextmenu", onContext, true);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.removeEventListener("contextmenu", onContext, true);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setLoadError(false);
  }, [open, src]);

  const isImage = src ? /\.(png|jpe?g|webp|gif)$/i.test(src) : false;
  const isPdf = src ? /\.pdf$/i.test(src) : false;
  const viewerClass = `transition-all duration-300 ${blurred ? "blur-xl" : ""}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-4 md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-[min(88dvh,100vh)] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-border bg-card shadow-2xl select-none sm:rounded-3xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-2 text-primary">
                  <ShieldCheck size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold text-text">
                    {title ?? t.viewAttestation}
                  </h3>
                  <p className="flex items-center gap-1.5 text-[11px] text-text-dim">
                    <Lock size={11} /> {t.attestationNote}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 rounded-full p-2 text-text/60 transition-colors hover:bg-primary/10 hover:text-text"
                aria-label={t.attestationClose}
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative flex-1 overflow-auto bg-bg">
              {src && isImage && !loadError && (
                <div className="flex min-h-full items-center justify-center p-4">
                  <img
                    key={src}
                    src={src}
                    alt={title ?? t.viewAttestation}
                    draggable={false}
                    onError={() => setLoadError(true)}
                    className={`max-h-full w-full max-w-full object-contain ${viewerClass}`}
                  />
                </div>
              )}

              {src && isPdf && !loadError && (
                <Suspense
                  fallback={
                    <div className="flex min-h-[40vh] items-center justify-center p-8 text-sm text-text-dim">
                      {t.attestationLoading}
                    </div>
                  }
                >
                  <PdfAttestationViewer
                    key={src}
                    src={src}
                    loadingLabel={t.attestationLoading}
                    onError={() => setLoadError(true)}
                    className={viewerClass}
                  />
                </Suspense>
              )}

              {loadError && (
                <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 p-6 text-center">
                  <p className="text-sm text-text-dim">{t.attestationLoadError}</p>
                  {src && (
                    <a
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20"
                    >
                      {t.attestationOpenNewTab}
                    </a>
                  )}
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                <span className="rotate-[-24deg] text-4xl font-bold tracking-[0.3em] text-text/5 sm:text-6xl">
                  AMENI AOUITI
                </span>
              </div>

              {blurred && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/80">
                  <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-text-dim">
                    <Lock size={14} /> {t.attestationNote}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AttestationModal;
