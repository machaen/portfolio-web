// Descending order (most recent first). `icon` maps to src/lib/icons.js.
// `milestone: true` renders a highlighted "Key impact" bullet.
export const roles = [
  {
    company: 'Auronix',
    role: 'Technical Lead & Senior Backend Engineer — Finance Vertical',
    period: 'May 2022 — Mar 2026',
    meta: 'Fintech · Banking · Messaging',
    bullets: [
      {
        icon: 'server',
        text:
          'Designed and built backend services in NestJS and Laravel Vapor (AWS Lambda) powering WhatsApp and SMS conversational campaigns and transactional flows for banking clients — handling 3M+ messages per month at scale.',
      },
      {
        icon: 'shield',
        milestone: true,
        text:
          'Delivered secure financial integrations for three major banks — Banorte, Banco Azteca and Invex — implementing OAuth 2.0, payload and asymmetric encryption, and VPN-secured connectivity to meet financial-sector security requirements.',
      },
      {
        icon: 'git',
        text:
          'Led the migration to NestJS + Prisma ORM and optimized Kubernetes deployments on Knative and Rancher, improving maintainability and release reliability.',
      },
      {
        icon: 'db',
        text:
          'Modeled MySQL schemas and built REST APIs consumed by conversational front ends and internal services across many client integrations.',
      },
      {
        icon: 'zap',
        text:
          'Promoted to Technical Lead of the Finance vertical — led delivery and code reviews for a team of four engineers and ran pre-sales and post-sales technical consulting.',
      },
    ],
    tags: ['NestJS', 'TypeScript', 'Laravel Vapor', 'AWS Lambda', 'Prisma', 'MySQL', 'Kubernetes', 'OAuth 2.0'],
  },
  {
    company: 'Independent',
    role: 'Fullstack Developer — Freelance',
    period: '2017 — 2022',
    meta: 'Timeshare · Multiple clients',
    bullets: [
      {
        icon: 'layers',
        milestone: true,
        text:
          'As sole developer, designed and built a complete timeshare sales and reservation platform end to end — a public booking engine, a client booking-management area and an agent CRM — using Laravel, MySQL and Vue.js. Released in 2019 and ran stably in production through 2021.',
      },
      {
        icon: 'boxes',
        text:
          'Modeled the reservation as a first-class object with an explicit lifecycle — holds, deposits, confirmations, changes and cancellations — and a shared domain model reused across all three products, keeping business rules consistent across client and agent flows.',
      },
      {
        icon: 'server',
        text:
          'Built custom full-stack web applications and REST APIs with Laravel, MySQL and Vue.js for multiple clients, owning requirement gathering, database design, frontend and backend development, and deployment.',
      },
    ],
    tags: ['Laravel', 'Vue.js', 'PHP', 'MySQL', 'REST'],
  },
  {
    company: 'Axovia Marketing & Technologies',
    role: 'Fullstack Developer',
    period: '2013 — 2020',
    meta: 'Hospitality · Tourism',
    bullets: [
      {
        icon: 'server',
        text:
          'Built and maintained high-performance booking engines end to end — frontend and backend — for the national and international hospitality sector.',
      },
      {
        icon: 'git',
        milestone: true,
        text:
          'Led the migration of legacy systems from Symfony 1.4 to modern Laravel, improving performance and long-term maintainability.',
      },
      {
        icon: 'db',
        text:
          'Implemented hybrid MySQL + MongoDB solutions for high-volume metrics, tracking and reporting.',
      },
    ],
    tags: ['Laravel', 'Symfony', 'PHP', 'MySQL', 'MongoDB'],
  },
];
