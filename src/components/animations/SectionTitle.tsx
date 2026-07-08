import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

interface SectionTitleProps {
  children: string;
  className?: string;
  as?: "h2" | "h3";
}

const SectionTitle = ({ children, className = "", as: Tag = "h3" }: SectionTitleProps) => {
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const words = children.split(/\s+/).filter(Boolean);

  if (reduceMotion || words.length === 0) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <motion.div
      key={`${language}-${children}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
      }}
    >
      <Tag className={className}>
        {words.map((word, index) => (
          <span key={`${index}-${word}`} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
            <motion.span
              variants={{
                hidden: { y: "105%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
};

export default SectionTitle;
