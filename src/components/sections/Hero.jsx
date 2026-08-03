import { Mail, Phone } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { useLocale } from '../../i18n/LocaleContext';
import { profile } from '../../data/profile';
import { metrics } from '../../data/metrics';

export default function Hero() {
  const { locale, t } = useLocale();
  const tel = profile.phone.replace(/\s/g, '');

  return (
    <header className="relative pb-[72px] pt-24">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-40px] h-[520px] w-[620px] -translate-x-1/2 blur-[6px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(62,50,40,.08), transparent 62%)' }}
      />

      <Reveal className="mb-6 inline-flex items-center gap-[9px] font-mono text-[12.5px] tracking-wide text-amber">
        <span className="h-[7px] w-[7px] animate-blink rounded-full bg-amber shadow-[0_0_0_4px_rgba(62,50,40,.14)]" />
        {t('hero.badge')} · {profile.location.toUpperCase()}
      </Reveal>

      <Reveal
        as="h1"
        className="mb-3.5 font-display text-[clamp(2.8rem,8vw,4.6rem)] font-bold leading-[1.02] tracking-tight"
      >
        Julio <span className="text-amber">Betancourt</span>
      </Reveal>

      <Reveal className="mb-7 font-mono text-[clamp(.95rem,2.4vw,1.15rem)] tracking-wide text-ink-dim">
        $ {profile.title[locale]}
      </Reveal>

      <Reveal as="p" className="mb-9 max-w-[640px] text-[clamp(1.02rem,2.4vw,1.2rem)] leading-[1.62]">
        {profile.thesis[locale]}
      </Reveal>

      <Reveal className="mb-[52px] flex flex-wrap gap-3.5">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          <Mail size={15} /> {t('hero.getInTouch')}
        </a>
        <a href={`tel:${tel}`} className="btn btn-ghost">
          <Phone size={15} /> {profile.phone}
        </a>
      </Reveal>

      <Reveal>
        <div className="metrics-grid">
          {metrics.map((m) => (
            <div key={m.value + m.label.en}>
              <div className="font-display text-[1.9rem] font-semibold leading-none tracking-tight text-amber">
                {m.value}
              </div>
              <div className="mt-[9px] text-[12.5px] leading-snug text-ink-dim">{m.label[locale]}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </header>
  );
}
