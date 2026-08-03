import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { useLocale } from '../../i18n/LocaleContext';
import { getSkills } from '../../data/skills';
import { languages } from '../../data/languages';

export default function Skills() {
  const { locale, t } = useLocale();
  const skills = getSkills(locale);

  return (
    <section id="skills" className="py-16">
      <Reveal>
        <SectionHeading num="02" title={t('skills.heading')} />
      </Reveal>
      <Reveal className="mb-[46px] mt-3.5 h-px bg-line-soft" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <Reveal
            key={group.label}
            className="rounded-2xl border border-line-soft bg-panel p-5 transition-colors hover:border-line"
          >
            <div className="mb-3.5 font-mono text-[11.5px] uppercase tracking-wide text-amber">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Reveal className="rounded-2xl border border-line-soft bg-panel px-[22px] py-5">
          <h4 className="mb-3.5 font-mono text-[11.5px] uppercase tracking-wide text-amber">
            {t('skills.languagesHeading')}
          </h4>
          {languages[locale].map((lang) => (
            <div
              key={lang.name}
              className="flex items-baseline justify-between border-b border-line-soft py-[7px] text-sm last:border-b-0"
            >
              {lang.name}
              <span className="font-mono text-xs text-ink-dim">{lang.level}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="rounded-2xl border border-line-soft bg-panel px-[22px] py-5">
          <h4 className="mb-3.5 font-mono text-[11.5px] uppercase tracking-wide text-amber">
            {t('skills.educationHeading')}
          </h4>
          <p className="text-[13px] italic leading-relaxed text-ink-faint">
            {t('skills.educationPlaceholder')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
