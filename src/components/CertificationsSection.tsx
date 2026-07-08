import { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import SectionTitle from "./animations/SectionTitle";
import { CERTIFICATIONS } from "../data/contact";

const CertCard = ({
  cert,
  title,
  issuer,
  index,
}: {
  cert: (typeof CERTIFICATIONS)[number];
  title: string;
  issuer: string;
  index: number;
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass rounded-3xl border border-border bg-card overflow-hidden group hover:border-primary/30 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden flex items-center justify-center">
        {!imgError ? (
          <img
            src={cert.image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 text-primary/40 p-6">
            <Award size={40} strokeWidth={1.5} />
            <span className="text-[10px] font-bold tracking-widest uppercase text-center">{issuer}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start gap-2 mb-2">
          <Award size={14} className="text-primary mt-1 shrink-0" />
          <h4 className="font-semibold text-text text-sm leading-snug">{title}</h4>
        </div>
        <p className="text-xs text-primary font-medium">{issuer}</p>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const { locale } = useLanguage();
  const t = locale.certifications;

  return (
    <section id="certifications" className="relative border-t border-border bg-transparent py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-14">
          <div className="mb-4 text-xs uppercase tracking-[3px] text-primary">{t.chapter}</div>
          <SectionTitle className="mb-4 text-3xl font-semibold tracking-tighter text-text sm:text-4xl md:text-5xl lg:text-6xl">{t.title}</SectionTitle>
          <p className="max-w-2xl text-base text-text-dim sm:text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, index) => {
            const item = t.items.find((i) => i.id === cert.id);
            if (!item) return null;
            return (
              <CertCard key={cert.id} cert={cert} title={item.title} issuer={item.issuer} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
