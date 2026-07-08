import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
}

const Marquee = ({ children, reverse = false, duration = 38, className = "" }: MarqueeProps) => (
  <div className={`marquee-mask overflow-hidden ${className}`}>
    <div
      className={`marquee-track flex w-max items-center gap-3 ${reverse ? "marquee-reverse" : ""}`}
      style={{ animationDuration: `${duration}s` }}
    >
      <div className="flex shrink-0 items-center gap-3 pr-3">{children}</div>
      <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden>
        {children}
      </div>
    </div>
  </div>
);

export default Marquee;
