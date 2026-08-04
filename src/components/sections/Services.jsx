import { Check } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { useLocale } from '../../i18n/LocaleContext';
import { useRequestModal } from '../../context/RequestModalContext';
import { services } from '../../data/services';
import { iconFor } from '../../lib/icons';

export default function Services() {
  const { locale, t } = useLocale();
  const { openModal } = useRequestModal();

  return (
    <section id="services" className="py-16">
      <Reveal>
        <SectionHeading num="03" title={t('services.heading')} />
      </Reveal>
      <Reveal as="p" className="mb-11 mt-3 max-w-[560px] text-sm text-ink-dim">
        {t('services.intro')}
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services[locale].map((tier) => {
          const Icon = iconFor[tier.icon];
          return (
            <Reveal
              key={tier.id}
              className={
                'relative flex flex-col rounded-2xl p-5 ' +
                (tier.featured ? 'border-2 border-amber bg-panel' : 'border border-line-soft bg-panel')
              }
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-bg">
                  {t('services.badge')}
                </span>
              )}

              <Icon size={20} className={tier.featured ? 'text-amber' : 'text-ink-dim'} />
              <h4 className="mt-3 font-display text-[1.05rem] font-semibold tracking-tight">{tier.name}</h4>
              <p className="mb-3 mt-1 text-[12.5px] leading-snug text-ink-dim">{tier.tagline}</p>

              <div className="font-mono text-[1.3rem] font-semibold tracking-tight text-amber">
                {tier.price}
                <span className="text-[11px] font-normal text-ink-faint"> {tier.priceSuffix}</span>
              </div>
              <div className="mb-4 text-[11px] text-ink-faint">{tier.delivery}</div>

              <ul className="mb-5 flex flex-1 flex-col gap-2 text-[13px] leading-snug text-ink-dim">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={13} className="mt-[3px] flex-none text-amber" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openModal(tier.id)}
                className={'btn w-full ' + (tier.featured ? 'btn-primary' : 'btn-ghost')}
              >
                {t('services.cta')}
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
