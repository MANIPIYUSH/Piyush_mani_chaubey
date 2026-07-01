import { motion } from 'framer-motion'
import { trustStats } from '@/data/trust'
import { SectionHeading } from '@/components/shared/section-heading'
import { AnimatedCounter } from '@/components/shared/animated-counter'
import { Card } from '@/components/ui/card'

export function TrustSection() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-max">
        <SectionHeading
          label="Track Record"
          title="Built for production"
          description="Real metrics from building and shipping production SaaS applications."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="p-6 h-full hover:shadow-md transition-shadow duration-300 group">
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary group-hover:scale-105 transition-transform origin-left">
                  {stat.numericValue !== undefined ? (
                    <AnimatedCounter
                      value={stat.numericValue}
                      suffix={stat.suffix}
                      className="tabular-nums"
                    />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-2 text-sm font-semibold">{stat.label}</p>
                <p className="mt-1 text-sm text-muted">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
