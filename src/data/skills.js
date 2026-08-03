// Tech/tool names are the same in both locales — only group labels translate.
const groups = [
  { key: 'languages', items: ['JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML/CSS'] },
  { key: 'backend', items: ['Node.js', 'NestJS', 'Laravel', 'Symfony', 'REST', 'SOAP', 'Microservices'] },
  { key: 'apis', items: ['REST', 'SOAP', 'OAuth 2.0', 'Webhooks', 'Financial integrations'] },
  { key: 'security', items: ['OAuth 2.0', 'Payload encryption', 'Asymmetric encryption', 'VPN-secured integrations'] },
  { key: 'databases', items: ['MySQL', 'MongoDB', 'SQLite', 'Prisma'] },
  { key: 'cloud', items: ['AWS Lambda', 'Laravel Vapor', 'Kubernetes', 'Knative', 'Rancher', 'CI/CD', 'New Relic'] },
  { key: 'automation', items: ['n8n', 'Local AI model integration'] },
  { key: 'frontend', items: ['React', 'Vue', 'Tailwind', 'SASS', 'Blade'] },
];

const labels = {
  en: {
    languages: 'Languages',
    backend: 'Backend & Frameworks',
    apis: 'APIs & Integrations',
    security: 'Security',
    databases: 'Databases & ORMs',
    cloud: 'Cloud & DevOps',
    automation: 'Automation & AI',
    frontend: 'Frontend (secondary)',
  },
  es: {
    languages: 'Lenguajes',
    backend: 'Backend y Frameworks',
    apis: 'APIs e Integraciones',
    security: 'Seguridad',
    databases: 'Bases de datos y ORMs',
    cloud: 'Cloud y DevOps',
    automation: 'Automatización e IA',
    frontend: 'Frontend (secundario)',
  },
};

export function getSkills(locale) {
  const dict = labels[locale] ?? labels.en;
  return groups.map((g) => ({ label: dict[g.key], items: g.items }));
}
