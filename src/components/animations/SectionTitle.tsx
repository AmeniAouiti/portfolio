import { motion, useReducedMotion } from "framer-motion";

interface SectionTitleProps {
  children: string;
  className?: string;
  as?: "h2" | "h3";
}

const SectionTitle = ({ children, className = "", as: Tag = "h3" }: SectionTitleProps) => {
  const reduceMotion = useReducedMotion();
  const words = children.split(" ");

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
    >
      <Tag className={className}>
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="mr-[0.22em] inline-block overflow-hidden">
            <motion.span
              variants={{
                hidden: { y: "115%", opacity: 0, rotateX: 40 },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  transition: { duration: 0.65, ease: [0.215, 0.61, 0.355, 1] },
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
