import { motion } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'

export function TechStackSection() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-max">
        <SectionHeading
          label="Tech Stack"
          title="Tools I work with"
          description="A focused stack for building reliable, scalable frontend applications."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="text-center"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
