import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import ContactForm from '../ui/ContactForm';
import { useLocale } from '../../i18n/LocaleContext';
import { profile } from '../../data/profile';

export default function Contact() {
  const { t } = useLocale();
  const tel = profile.phone.replace(/\s/g, '');

  return (
    <section id="contact" className="border-t border-line-soft py-14">
      <Reveal
        as="h3"
        className="mb-2.5 font-display text-[clamp(1.6rem,4vw,2.2rem)] font-semibold tracking-tight"
      >
        {t('contact.heading')}
      </Reveal>
      <Reveal as="p" className="mb-[30px] max-w-[480px] text-ink-dim">
        {t('contact.intro')}
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-fit items-center gap-3 font-mono text-sm text-ink transition-colors hover:text-amber"
            >
              <Mail size={16} className="text-amber" /> {profile.email} <ArrowUpRight size={13} />
            </a>
            <a
              href={`tel:${tel}`}
              className="inline-flex w-fit items-center gap-3 font-mono text-sm text-ink transition-colors hover:text-amber"
            >
              <Phone size={16} className="text-amber" /> {profile.phone}
            </a>
            <span className="inline-flex w-fit items-center gap-3 font-mono text-sm text-ink">
              <MapPin size={16} className="text-amber" /> {profile.location}
            </span>
          </div>

          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
