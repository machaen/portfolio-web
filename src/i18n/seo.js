const SEO = {
  en: {
    title: 'Julio Betancourt — Senior Backend Engineer',
    description:
      'Senior Backend Engineer with 10+ years building secure, high-volume transactional systems across fintech, banking and tourism.',
  },
  es: {
    title: 'Julio Betancourt — Ingeniero de Backend Senior',
    description:
      'Ingeniero de Backend Senior con más de 10 años construyendo sistemas transaccionales seguros y de alto volumen en fintech, banca y turismo.',
  },
};

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setLink(rel, href, hreflang) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    if (hreflang) tag.setAttribute('hreflang', hreflang);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

/**
 * Updates <title>, meta description, canonical link, and hreflang alternates
 * for the current locale. Runs client-side (no SSR), but search engines that
 * execute JS (Googlebot does) pick these up same as a server-rendered page would.
 */
export function updateSeoTags(locale, supportedLocales) {
  const meta = SEO[locale] ?? SEO.en;
  document.title = meta.title;
  setMeta('description', meta.description);

  const origin = window.location.origin;
  setLink('canonical', `${origin}/${locale}`);
  supportedLocales.forEach((code) => setLink('alternate', `${origin}/${code}`, code));
  setLink('alternate', `${origin}/`, 'x-default');
}
