import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/site'
import { fadeInUp, staggerContainer } from '@/lib/animations'

function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-primary/5"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-16 w-56 h-56 rounded-full bg-accent/5"
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border/50"
        animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--color-background)_70%)]" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative section-padding min-h-[90vh] flex items-center overflow-hidden">
      <FloatingShapes />

      <div className="container-max relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Available for freelance projects
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]"
            >
              Frontend Engineer building scalable{' '}
              <span className="text-primary">SaaS products</span> with React.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-muted leading-relaxed prose-width"
            >
              I build modern SaaS dashboards, AI-powered web applications, CRM systems,
              and production-ready frontend architectures focused on performance,
              scalability, and user experience.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl border border-border bg-card shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl sm:text-7xl font-bold text-primary/20 select-none">
                    P
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs text-muted">Currently at</p>
                <p className="text-sm font-semibold">Avija Digital</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
