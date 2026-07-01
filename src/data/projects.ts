import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'rankrover',
    title: 'RankRover',
    description:
      'Built the frontend of a production B2B SaaS platform from scratch including dashboards, payments, multi-tenancy, white-label architecture, CRM modules, and marketing tools.',
    features: [
      'Multi-tenant white-label architecture',
      'Payment integration (PayPal & Razorpay)',
      'CRM & marketing automation modules',
      'Role-based access control',
      'Real-time analytics dashboards',
    ],
    tags: ['React', 'Redux Toolkit', 'Vite', 'Material UI', 'PayPal', 'Razorpay', 'Axios'],
    category: 'saas',
    liveUrl: 'https://app.rankrover.io/login',
    githubDisabled: true,
    githubTooltip: 'Private repo',
    caseStudyUrl: '/projects/rankrover',
    featured: true,
  },
  {
    id: 'crm-platform',
    title: 'CRM Platform',
    description:
      'Internal CRM platform for managing campaigns, reporting pipelines, client management, and dashboards. Designed for teams handling high-volume client operations.',
    features: [
      'Campaign management workflows',
      'Automated reporting pipelines',
      'Client lifecycle tracking',
      'Custom dashboard builder',
      'Export & data visualization',
    ],
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'REST APIs'],
    category: 'crm',
    liveDisabled: true,
    liveTooltip: 'Not publicly available',
    githubDisabled: true,
    githubTooltip: 'Private repo',
    caseStudyUrl: '/projects/crm-platform',
    featured: true,
  },
  {
    id: 'movie-recommender',
    title: 'Movie Recommendation System',
    description:
      'AI-powered recommendation platform using collaborative filtering and content-based recommendations to deliver personalized movie suggestions.',
    features: [
      'Collaborative filtering engine',
      'Content-based recommendations',
      'User preference learning',
      'Interactive rating interface',
      'Recommendation explainability',
    ],
    tags: ['React', 'Python', 'Machine Learning', 'Flask', 'MongoDB'],
    category: 'ai',
    liveDisabled: true,
    liveTooltip: 'Not publicly available',
    githubDisabled: true,
    githubTooltip: 'Private repo',
    caseStudyUrl: '/projects/movie-recommender',
    featured: true,
  },
]

export const projectFilters = [
  { label: 'All', value: 'all' as const },
  { label: 'SaaS', value: 'saas' as const },
  { label: 'CRM', value: 'crm' as const },
  { label: 'AI', value: 'ai' as const },
]
