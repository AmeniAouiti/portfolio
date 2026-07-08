import { useLanguage } from "../i18n/LanguageContext";
import SectionTitle from "./animations/SectionTitle";

export const DevOpsSection = () => {
  const { locale } = useLanguage();
  const t = locale.devops;

  return (
    <section id="devops" className="relative border-t border-border bg-card/20 py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-x-12 items-center">
          <div className="md:col-span-5">
            <div className="uppercase tracking-[3px] text-xs mb-4 text-primary">{t.chapter}</div>
            <SectionTitle className="mb-12 text-6xl leading-none font-semibold tracking-tighter text-text">
              {`${t.title} ${t.titleLine2}`}
            </SectionTitle>
            <div className="text-lg text-text-dim max-w-md leading-relaxed">{t.bio}</div>
          </div>

          <div className="md:col-span-7 mt-12 md:mt-0">
            <div className="glass rounded-[32px] p-12 bg-card shadow-2xl shadow-primary/5">
              <div className="space-y-8">
                {t.items.map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start border-b border-border pb-8 last:border-none last:pb-0">
                    <div className="font-mono text-4xl text-primary/80 w-10">0{idx + 1}</div>
                    <div>
                      <div className="text-2xl mb-2 text-text font-semibold">{item[0]}</div>
                      <div className="text-text-dim">{item[1]}</div>
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
