import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { CONTACT_INFO } from "../data/contact";
import ScrollReveal from "./animations/ScrollReveal";
import SectionTitle from "./animations/SectionTitle";

const ContactCard = ({
  href,
  label,
  value,
  icon: Icon,
  index,
}: {
  href?: string;
  label: string;
  value: string;
  icon: typeof Mail;
  index: number;
}) => {
  const content = (
    <>
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary shadow-[0_0_20px_-6px_rgba(var(--primary-rgb),0.45)] transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/15"
      >
        <Icon size={20} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 text-[11px] font-bold tracking-[0.18em] uppercase text-primary/75">{label}</div>
        <div className="text-[15px] leading-snug font-semibold break-words text-text sm:text-base">{value}</div>
      </div>
      {href && (
        <ArrowUpRight
          size={16}
          className="shrink-0 text-text-dim opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100"
        />
      )}
    </>
  );

  const className =
    "group flex items-center gap-4 rounded-2xl border border-border bg-card/70 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/35 hover:bg-card/90 hover:shadow-[0_8px_32px_-12px_rgba(var(--primary-rgb),0.2)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {href ? (
        <a href={href} className={className}>
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
    </motion.div>
  );
};

const SocialSquare = ({
  href,
  icon: Icon,
  label,
  index,
}: {
  href: string;
  icon: typeof Linkedin;
  label: string;
  index: number;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.35 + index * 0.08 }}
    whileHover={{ y: -3, scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/70 text-text/80 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
  >
    <Icon size={20} />
  </motion.a>
);

export const ContactSection = () => {
  const { locale } = useLanguage();
  const t = locale.contact;

  const followSocials = [
    { href: CONTACT_INFO.linkedin, icon: Linkedin, label: t.linkedin },
    { href: CONTACT_INFO.github, icon: Github, label: t.github },
  ];

  return (
    <section id="contact" className="relative border-t border-border bg-transparent px-4 pt-16 pb-20 safe-bottom sm:px-6 sm:pt-20 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,242,254,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-2xl">
        <ScrollReveal className="mb-10 text-center">
          <div className="mb-3 text-xs uppercase tracking-[3px] text-primary">{locale.nav.contact}</div>
          <SectionTitle className="mb-4 text-3xl font-semibold tracking-tighter text-text sm:text-4xl md:text-5xl">
            {t.getInTouch}
          </SectionTitle>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-text-dim sm:text-base">{t.ctaText}</p>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          <ContactCard
            index={0}
            href={`mailto:${CONTACT_INFO.email}`}
            label={t.emailLabel}
            value={CONTACT_INFO.email}
            icon={Mail}
          />
          <ContactCard
            index={1}
            href={CONTACT_INFO.phoneHref}
            label={t.phone}
            value={CONTACT_INFO.phone}
            icon={Phone}
          />
          <ContactCard index={2} label={t.address} value={CONTACT_INFO.address} icon={MapPin} />
        </div>

        <ScrollReveal delay={0.15} className="mt-10 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] uppercase text-text-dim">{t.followMe}</p>
          <div className="flex gap-3">
            {followSocials.map((social, i) => (
              <SocialSquare key={social.label} index={i} {...social} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
