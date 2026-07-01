import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { SEO } from '@/components/shared/seo'
import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'

export default function ExperiencePage() {
  return (
    <>
      <SEO title="Experience" path="/experience" />
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="Career"
            title="Experience"
            description="A timeline of building production software across startups and enterprises."
          />

          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-20"
                >
                  <div className="absolute left-2.5 sm:left-6.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                  <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted text-left sm:text-right">
                        <p>{exp.duration}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-3 text-sm text-muted leading-relaxed"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
