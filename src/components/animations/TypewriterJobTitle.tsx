import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterJobTitleProps {
  text: string;
  startDelay?: number;
  speed?: number;
  className?: string;
}

const TypewriterJobTitle = ({
  text,
  startDelay = 280,
  speed = 22,
  className = "",
}: TypewriterJobTitleProps) => {
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(() => (reduceMotion ? text.length : 0));

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCount(text.length);
      return;
    }

    setVisibleCount(0);
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      let index = 0;
      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleCount(index);
        if (index >= text.length && intervalId) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, startDelay, speed, reduceMotion]);

  return (
    <span className={`inline font-semibold text-primary ${className}`} aria-label={text}>
      {text.slice(0, visibleCount)}
      {!reduceMotion && visibleCount < text.length && (
        <span className="sr-only">{text.slice(visibleCount)}</span>
      )}
    </span>
  );
};

export default TypewriterJobTitle;
