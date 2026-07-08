import { useLanguage } from "../i18n/LanguageContext";
import SectionTitle from "./animations/SectionTitle";

export const DevOpsSection = () => {
  const { locale } = useLanguage();
  const t = locale.devops;

  return (
    <section id="devops" className="relative border-t border-border bg-card/20 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-center gap-x-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-4 text-xs uppercase tracking-[3px] text-primary">{t.chapter}</div>
            <SectionTitle className="mb-8 text-3xl font-semibold leading-none tracking-tighter text-text sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl lg:text-6xl">
              {`${t.title} ${t.titleLine2}`}
            </SectionTitle>
            <div className="max-w-md text-base leading-relaxed text-text-dim sm:text-lg">{t.bio}</div>
          </div>

          <div className="mt-10 md:col-span-7 md:mt-0">
            <div className="glass rounded-3xl bg-card p-6 shadow-2xl shadow-primary/5 sm:rounded-[32px] sm:p-8 md:p-12">
              <div className="space-y-6 sm:space-y-8">
                {t.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 border-b border-border pb-6 last:border-none last:pb-0 sm:gap-6 sm:pb-8">
                    <div className="w-8 shrink-0 font-mono text-2xl text-primary/80 sm:w-10 sm:text-4xl">0{idx + 1}</div>
                    <div className="min-w-0">
                      <div className="mb-1.5 text-lg font-semibold text-text sm:mb-2 sm:text-2xl">{item[0]}</div>
                      <div className="text-sm text-text-dim sm:text-base">{item[1]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsSection;
