import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { PhoneFrame } from "./PhoneFrame";
import { BrowserFrame } from "./BrowserFrame";

const MOBILE_SHOT = "/projects/sabeel.png";
const WEB_SHOT = "/projects/kurubis.png";

const DeviceShowcase = () => {
  const { locale } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative mx-auto mt-8 w-full max-w-[440px] sm:max-w-[520px] lg:mt-0 lg:max-w-none"
    >
      <div className="relative mx-auto aspect-[5/4] w-full max-w-[520px] lg:max-w-none">
        {/* Soft ambient glow — restrained */}
        <div
          className="pointer-events-none absolute top-[30%] right-[10%] h-40 w-40 rounded-full bg-primary/10 blur-3xl sm:h-52 sm:w-52"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[20%] left-[15%] h-32 w-32 rounded-full bg-accent/10 blur-3xl sm:h-44 sm:w-44"
          aria-hidden
        />

        {/* Browser — back / right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: 1,
            y: reduceMotion ? 0 : [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.55, delay: 0.25 },
            y: reduceMotion
              ? { duration: 0 }
              : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
          }}
          className="absolute top-[6%] right-0 z-10 w-[78%] sm:w-[80%]"
        >
          <BrowserFrame src={WEB_SHOT} alt="Web platform preview — Kurubis" url="kurubis.ameni.dev" />
          <p className="mt-2.5 text-center text-[10px] font-semibold tracking-[0.18em] uppercase text-text/40">
            {locale.hero.webLabel}
          </p>
        </motion.div>

        {/* Phone — front / left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: reduceMotion ? 0 : [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.55, delay: 0.35 },
            y: reduceMotion
              ? { duration: 0 }
              : { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          className="absolute bottom-0 left-0 z-20 w-[38%] max-w-[150px] sm:max-w-[170px] md:max-w-[190px]"
        >
          <PhoneFrame src={MOBILE_SHOT} alt="Mobile app preview — Sabeel" className="max-w-none" />
          <p className="mt-2.5 text-center text-[10px] font-semibold tracking-[0.18em] uppercase text-primary/70">
            {locale.hero.mobileLabel}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DeviceShowcase;
