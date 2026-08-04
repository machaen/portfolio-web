// UI copy that isn't part of the CV content data (src/data/*.js). Keyed by
// locale, then dot-path — read via the t() helper from LocaleContext.
export const strings = {
  en: {
    nav: { timeline: 'timeline', stack: 'stack', services: 'services', contact: 'contact' },
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
    services: {
      heading: 'Services',
      intro: 'From a simple website to a custom system — pick a starting point.',
      badge: 'Most requested',
      cta: 'Request a quote',
    },
    contact: {
      heading: "Let's build something reliable.",
      intro: 'Available for senior and lead backend roles. Reach me directly, or start a project request.',
      ctaBody: "Tell me about your project — company, budget, timeline — and I'll get back to you within a business day.",
      ctaButton: 'Start a project request',
    },
    modal: {
      title: 'Request a project',
      close: 'Close',
    },
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone (optional)',
      companyLabel: 'Company (optional)',
      projectTypeLabel: 'Project type',
      projectTypeNotSure: 'Not sure yet',
      budgetLabel: 'Budget (optional)',
      budgetOptions: [
        'Under $20,000 MXN',
        '$20,000 – $60,000 MXN',
        '$60,000 – $150,000 MXN',
        '$150,000+ MXN',
        'Not sure yet',
      ],
      timelineLabel: 'Timeline (optional)',
      timelineOptions: ['ASAP (within a month)', '1–3 months', '3+ months', 'Just exploring'],
      selectPlaceholder: 'Select an option',
      messageLabel: 'Project details',
      sending: 'Sending…',
      send: 'Send request',
      success: 'Thanks — your request is on its way. I’ll get back to you within a business day.',
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
    whatsapp: {
      message: "Hi Julio, I'd like to talk about a project.",
    },
  },
  es: {
    nav: { timeline: 'trayectoria', stack: 'stack', services: 'servicios', contact: 'contacto' },
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
    services: {
      heading: 'Servicios',
      intro: 'De un sitio sencillo a un sistema a medida — elige un punto de partida.',
      badge: 'Más solicitado',
      cta: 'Solicitar cotización',
    },
    contact: {
      heading: 'Construyamos algo confiable.',
      intro: 'Disponible para roles senior y lead de backend. Contáctame directamente, o inicia una solicitud de proyecto.',
      ctaBody: 'Cuéntame sobre tu proyecto — empresa, presupuesto, plazo — y te responderé dentro de un día hábil.',
      ctaButton: 'Solicitar un proyecto',
    },
    modal: {
      title: 'Solicitar un proyecto',
      close: 'Cerrar',
    },
    form: {
      nameLabel: 'Nombre',
      emailLabel: 'Correo electrónico',
      phoneLabel: 'Teléfono (opcional)',
      companyLabel: 'Empresa (opcional)',
      projectTypeLabel: 'Tipo de proyecto',
      projectTypeNotSure: 'Aún no estoy seguro',
      budgetLabel: 'Presupuesto (opcional)',
      budgetOptions: [
        'Menos de $20,000 MXN',
        '$20,000 – $60,000 MXN',
        '$60,000 – $150,000 MXN',
        '$150,000+ MXN',
        'Aún no estoy seguro',
      ],
      timelineLabel: 'Plazo (opcional)',
      timelineOptions: ['Lo antes posible (en un mes)', '1–3 meses', '3+ meses', 'Solo estoy explorando'],
      selectPlaceholder: 'Selecciona una opción',
      messageLabel: 'Detalles del proyecto',
      sending: 'Enviando…',
      send: 'Enviar solicitud',
      success: 'Gracias — tu solicitud va en camino. Te responderé dentro de un día hábil.',
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
    whatsapp: {
      message: 'Hola Julio, me gustaría platicar sobre un proyecto.',
    },
  },
};
