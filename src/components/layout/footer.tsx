import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { siteConfig, socialLinks, navLinks } from '@/data/site'
import { Separator } from '@/components/ui/separator'

const iconComponents = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: HiMail,
}

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-max section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight">
              {siteConfig.name}<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              Frontend Engineer building scalable SaaS products with React.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconComponents[link.icon as keyof typeof iconComponents]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted hover:text-foreground hover:border-foreground/20 transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
