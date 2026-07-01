import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { experiences } from '@/data/experience'
import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function ExperiencePreview() {
  const latest = experiences[0]

  return (
    <section className="section-padding bg-foreground/[0.02]">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            label="Experience"
            title="Where I've built"
            description="Shipping production software for companies that scale."
            className="mb-0"
          />
          <Button asChild variant="outline">
            <Link to="/experience">
              Full timeline
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-8 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-semibold">{latest.role}</h3>
              <p className="text-primary font-medium mt-1">{latest.company}</p>
            </div>
            <p className="text-sm text-muted">{latest.duration}</p>
          </div>
          <ul className="space-y-3 mb-6">
            {latest.achievements.slice(0, 3).map((achievement) => (
              <li key={achievement} className="flex gap-3 text-sm text-muted leading-relaxed">
                <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {latest.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
