import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, projectFilters } from '@/data/projects'
import { SEO } from '@/components/shared/seo'
import { SectionHeading } from '@/components/shared/section-heading'
import { ProjectCard } from '../components/project-card'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Project['category'] | 'all'>('all')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <SEO title="Projects" path="/projects" />
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="Portfolio"
            title="Projects"
            description="Production applications spanning SaaS platforms, CRM systems, and AI-powered products."
          />

          <div className="flex flex-wrap gap-2 mb-10">
            {projectFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all',
                  filter === f.value
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-foreground/5 text-muted hover:text-foreground hover:bg-foreground/10'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
