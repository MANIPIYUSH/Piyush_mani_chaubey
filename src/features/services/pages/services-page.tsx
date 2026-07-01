import { motion } from 'framer-motion'
import {
  Code2,
  LayoutDashboard,
  PanelLeft,
  Plug,
  Zap,
  Brain,
  Smartphone,
} from 'lucide-react'
import { services } from '@/data/services'
import { SEO } from '@/components/shared/seo'
import { SectionHeading } from '@/components/shared/section-heading'
import { Card } from '@/components/ui/card'

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="h-6 w-6" />,
  'layout-dashboard': <LayoutDashboard className="h-6 w-6" />,
  'panel-left': <PanelLeft className="h-6 w-6" />,
  plug: <Plug className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  brain: <Brain className="h-6 w-6" />,
  smartphone: <Smartphone className="h-6 w-6" />,
}

export default function ServicesPage() {
  return (
    <>
      <SEO title="Services" path="/services" />
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="What I Offer"
            title="Services"
            description="Specialized frontend development for teams building ambitious SaaS products."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 rounded-2xl border border-border bg-card p-8 sm:p-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">How I work</h3>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              I focus on understanding your product goals first, then architect frontend
              solutions that scale. Every project includes clean code, performance
              optimization, responsive design, and thorough documentation. I communicate
              clearly, meet deadlines, and treat your product like my own.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
