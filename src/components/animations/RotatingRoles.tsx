import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface RotatingRolesProps {
  roles: readonly string[];
}

const RotatingRoles = ({ roles }: RotatingRolesProps) => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || roles.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [roles.length, reduceMotion]);

  if (reduceMotion) {
    return <span className="text-primary">{roles[0]}</span>;
  }

  return (
    <span className="relative inline-flex min-h-[1.4em] min-w-[12ch] items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
          className="absolute left-0 whitespace-nowrap text-primary"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingRoles;
