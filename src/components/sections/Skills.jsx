import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { skills } from '../../data/skills';
import { languages } from '../../data/languages';

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <Reveal>
        <SectionHeading num="02" title="Technical stack" />
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
            Languages
          </h4>
          {languages.map((lang) => (
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
            Education &amp; certifications
          </h4>
          <p className="text-[13px] italic leading-relaxed text-ink-faint">
            Ready to fill in — add your degree, institution and any certifications (e.g. AWS
            Certified Developer) and they'll appear here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
