export interface NavLink {
  label: string
  href: string
}

export interface TrustStat {
  label: string
  value: string
  description: string
  numericValue?: number
  suffix?: string
}

export interface Experience {
  id: string
  role: string
  company: string
  duration: string
  location: string
  technologies: string[]
  achievements: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  features: string[]
  tags: string[]
  category: 'saas' | 'crm' | 'ai' | 'all'
  liveUrl?: string
  liveDisabled?: boolean
  liveTooltip?: string
  githubUrl?: string
  githubDisabled?: boolean
  githubTooltip?: string
  caseStudyUrl?: string
  featured?: boolean
}

export interface CaseStudy {
  projectId: string
  subtitle: string
  role: string
  timeline: string
  company: string
  overview: string
  problem: string
  solution: string
  process: {
    title: string
    description: string
  }[]
  challenges: {
    title: string
    description: string
  }[]
  results: {
    label: string
    value: string
    description?: string
  }[]
  learnings: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  email: string
  phone: string
  location: string
  resumeUrl: string
  ogImage: string
  url: string
}
