// UI copy that isn't part of the CV content data (src/data/*.js). Keyed by
// locale, then dot-path — read via the t() helper from LocaleContext.
export const strings = {
  en: {
    nav: { timeline: 'timeline', stack: 'stack', contact: 'contact' },
    hero: {
      badge: 'OPEN TO SENIOR & LEAD BACKEND ROLES',
      getInTouch: 'Get in touch',
    },
    timeline: {
      heading: 'Career timeline',
      intro:
        'Ten-plus years of engineering work, most recent first. Highlighted entries mark the deliveries with the largest impact.',
      keyImpact: 'Key impact',
    },
    skills: {
      heading: 'Technical stack',
      languagesHeading: 'Languages',
      educationHeading: 'Education & certifications',
      educationPlaceholder:
        "Ready to fill in — add your degree, institution and any certifications (e.g. AWS Certified Developer) and they'll appear here.",
    },
    contact: {
      heading: "Let's build something reliable.",
      intro: 'Available for senior and lead backend roles. Send a message below, or reach me directly.',
    },
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sending: 'Sending…',
      send: 'Send message',
      success: 'Thanks — your message is on its way.',
      genericError: "Couldn't reach the server. Please email me directly.",
      recaptchaPrefix: 'This site is protected by reCAPTCHA and the Google',
      recaptchaPrivacy: 'Privacy Policy',
      recaptchaMiddle: 'and',
      recaptchaTerms: 'Terms of Service',
      recaptchaSuffix: 'apply.',
    },
    footer: {
      builtWith: 'Built with React & Tailwind',
    },
  },
  es: {
    nav: { timeline: 'trayectoria', stack: 'stack', contact: 'contacto' },
    hero: {
      badge: 'DISPONIBLE PARA ROLES SENIOR Y LEAD DE BACKEND',
      getInTouch: 'Contáctame',
    },
    timeline: {
      heading: 'Trayectoria profesional',
      intro:
        'Más de diez años de trabajo en ingeniería, del más reciente al más antiguo. Las entradas resaltadas marcan las entregas de mayor impacto.',
      keyImpact: 'Impacto clave',
    },
    skills: {
      heading: 'Stack técnico',
      languagesHeading: 'Idiomas',
      educationHeading: 'Educación y certificaciones',
      educationPlaceholder:
        'Listo para completar — agrega tu título, institución y cualquier certificación (p. ej. AWS Certified Developer) y aparecerán aquí.',
    },
    contact: {
      heading: 'Construyamos algo confiable.',
      intro: 'Disponible para roles senior y lead de backend. Envía un mensaje abajo, o contáctame directamente.',
    },
    form: {
      nameLabel: 'Nombre',
      emailLabel: 'Correo electrónico',
      messageLabel: 'Mensaje',
      sending: 'Enviando…',
      send: 'Enviar mensaje',
      success: 'Gracias — tu mensaje va en camino.',
      genericError: 'No se pudo conectar con el servidor. Por favor, escríbeme directamente por correo.',
      recaptchaPrefix: 'Este sitio está protegido por reCAPTCHA y se aplican la',
      recaptchaPrivacy: 'Política de Privacidad',
      recaptchaMiddle: 'y los',
      recaptchaTerms: 'Términos del Servicio',
      recaptchaSuffix: 'de Google.',
    },
    footer: {
      builtWith: 'Construido con React y Tailwind',
    },
  },
};
