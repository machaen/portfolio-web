// Descending order (most recent first). `icon` maps to src/lib/icons.js.
// `milestone: true` renders a highlighted "Key impact" bullet.
// Fully duplicated per locale (rather than splitting text out of the nested
// bullet arrays) so each locale's data is self-contained and easy to verify.
export const roles = {
  en: [
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
  ],
  es: [
    {
      company: 'Auronix',
      role: 'Líder Técnico e Ingeniero de Backend Senior — Vertical de Finanzas',
      period: 'Mayo 2022 — Mar 2026',
      meta: 'Fintech · Banca · Mensajería',
      bullets: [
        {
          icon: 'server',
          text:
            'Diseñé y construí servicios backend en NestJS y Laravel Vapor (AWS Lambda) que impulsan campañas conversacionales de WhatsApp y SMS, y flujos transaccionales para clientes bancarios — procesando más de 3M de mensajes al mes a escala.',
        },
        {
          icon: 'shield',
          milestone: true,
          text:
            'Entregué integraciones financieras seguras para tres bancos principales — Banorte, Banco Azteca e Invex — implementando OAuth 2.0, cifrado de payload y asimétrico, y conectividad segura por VPN para cumplir los requisitos de seguridad del sector financiero.',
        },
        {
          icon: 'git',
          text:
            'Lideré la migración a NestJS + Prisma ORM y optimicé los despliegues de Kubernetes en Knative y Rancher, mejorando la mantenibilidad y la confiabilidad de los releases.',
        },
        {
          icon: 'db',
          text:
            'Modelé esquemas MySQL y construí APIs REST consumidas por interfaces conversacionales y servicios internos en múltiples integraciones con clientes.',
        },
        {
          icon: 'zap',
          text:
            'Ascendido a Líder Técnico de la vertical de Finanzas — lideré la entrega y las revisiones de código de un equipo de cuatro ingenieros, y brindé consultoría técnica de preventa y posventa.',
        },
      ],
      tags: ['NestJS', 'TypeScript', 'Laravel Vapor', 'AWS Lambda', 'Prisma', 'MySQL', 'Kubernetes', 'OAuth 2.0'],
    },
    {
      company: 'Independiente',
      role: 'Desarrollador Fullstack — Freelance',
      period: '2017 — 2022',
      meta: 'Tiempo compartido · Múltiples clientes',
      bullets: [
        {
          icon: 'layers',
          milestone: true,
          text:
            'Como único desarrollador, diseñé y construí de principio a fin una plataforma completa de ventas y reservaciones de tiempo compartido — un motor de reservas público, un área de gestión de reservas para clientes y un CRM para agentes — usando Laravel, MySQL y Vue.js. Lanzada en 2019 y operando de forma estable en producción hasta 2021.',
        },
        {
          icon: 'boxes',
          text:
            'Modelé la reservación como un objeto de primera clase con un ciclo de vida explícito — apartados, depósitos, confirmaciones, cambios y cancelaciones — y un modelo de dominio compartido reutilizado en los tres productos, manteniendo las reglas de negocio consistentes entre los flujos de clientes y agentes.',
        },
        {
          icon: 'server',
          text:
            'Construí aplicaciones web full-stack a medida y APIs REST con Laravel, MySQL y Vue.js para múltiples clientes, a cargo del levantamiento de requerimientos, diseño de base de datos, desarrollo frontend y backend, y despliegue.',
        },
      ],
      tags: ['Laravel', 'Vue.js', 'PHP', 'MySQL', 'REST'],
    },
    {
      company: 'Axovia Marketing & Technologies',
      role: 'Desarrollador Fullstack',
      period: '2013 — 2020',
      meta: 'Hospitalidad · Turismo',
      bullets: [
        {
          icon: 'server',
          text:
            'Construí y mantuve motores de reservas de alto rendimiento de principio a fin — frontend y backend — para el sector de hospitalidad nacional e internacional.',
        },
        {
          icon: 'git',
          milestone: true,
          text:
            'Lideré la migración de sistemas legacy de Symfony 1.4 a Laravel moderno, mejorando el rendimiento y la mantenibilidad a largo plazo.',
        },
        {
          icon: 'db',
          text:
            'Implementé soluciones híbridas de MySQL + MongoDB para métricas, seguimiento y reportes de alto volumen.',
        },
      ],
      tags: ['Laravel', 'Symfony', 'PHP', 'MySQL', 'MongoDB'],
    },
  ],
};
