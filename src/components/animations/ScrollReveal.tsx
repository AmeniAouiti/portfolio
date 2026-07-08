import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
}

const ScrollReveal = ({ children, className = "", delay = 0, y = 36, x = 0 }: ScrollRevealProps) => {
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key={language}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
