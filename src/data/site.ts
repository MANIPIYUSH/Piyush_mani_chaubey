import type { SiteConfig, NavLink, SocialLink } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Piyush Mani Chaubey',
  title: 'Piyush Mani Chaubey — Frontend Engineer',
  description:
    'Frontend Engineer building scalable SaaS products with React. Specialized in dashboards, AI-powered applications, and production-ready frontend architectures.',
  email: 'piyushmanic@gmail.com',
  phone: '+91 7838493716',
  location: 'Delhi, India',
  resumeUrl: 'https://drive.google.com/file/d/1sp2zHzkxJ4p1PgjPgpA-hYYD6WpNeK2P/view?usp=sharing',
  ogImage: '/og-image.svg',
  url: 'https://manipiyush.github.io/Piyush_mani_chaubey',
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/MANIPIYUSH', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/piyush-mani-chaubey',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:piyushmanic@gmail.com', icon: 'mail' },
]
