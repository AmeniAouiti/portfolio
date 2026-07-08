import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { CV_FILES } from "../i18n/types";

interface CVDownloadModalProps {
  open: boolean;
  onClose: () => void;
}

const CVDownloadModal = ({ open, onClose }: CVDownloadModalProps) => {
  const { locale } = useLanguage();

  const download = (lang: "en" | "fr") => {
    const file = CV_FILES[lang];
    const link = document.createElement("a");
    link.href = file.href;
    link.download = file.filename;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-text">{locale.cvModal.title}</h3>
                <p className="text-text-dim text-sm mt-1">{locale.cvModal.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-primary/10 text-text/60 hover:text-text transition-colors"
                aria-label={locale.cvModal.close}
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => download("en")}
                className="w-full flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/40 bg-bg/50 hover:bg-primary/5 transition-all text-left group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <FileText size={22} />
                </div>
                <div>
                  <div className="font-semibold text-text">{locale.cvModal.english}</div>
                  <div className="text-xs text-text-dim font-mono">{CV_FILES.en.filename}</div>
                </div>
                <Download className="ml-auto w-5 h-5 text-text/30 group-hover:text-primary transition-colors" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => download("fr")}
                className="w-full flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-accent/40 bg-bg/50 hover:bg-accent/5 transition-all text-left group"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <FileText size={22} />
                </div>
                <div>
                  <div className="font-semibold text-text">{locale.cvModal.french}</div>
                  <div className="text-xs text-text-dim font-mono">{CV_FILES.fr.filename}</div>
                </div>
                <Download className="ml-auto w-5 h-5 text-text/30 group-hover:text-accent transition-colors" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVDownloadModal;
