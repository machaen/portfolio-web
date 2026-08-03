import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import RoleCard from '../timeline/RoleCard';
import { useLocale } from '../../i18n/LocaleContext';
import { roles } from '../../data/roles';

export default function Timeline() {
  const { locale, t } = useLocale();

  return (
    <section id="timeline" className="py-16">
      <Reveal>
        <SectionHeading num="01" title={t('timeline.heading')} />
      </Reveal>
      <Reveal as="p" className="mb-11 mt-3 max-w-[560px] text-sm text-ink-dim">
        {t('timeline.intro')}
      </Reveal>

      <div className="relative pl-[34px]">
        <div className="timeline-spine">
          <div className="spine-pulse" />
        </div>
        {roles[locale].map((role) => (
          <RoleCard key={role.company + role.period} role={role} />
        ))}
      </div>
    </section>
  );
}
