import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/shared/section-heading'
import { ProjectCard } from '@/features/projects/components/project-card'
import { Button } from '@/components/ui/button'

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            label="Portfolio"
            title="Featured projects"
            description="Production applications built from the ground up."
            className="mb-0"
          />
          <Button asChild variant="outline">
            <Link to="/projects">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
