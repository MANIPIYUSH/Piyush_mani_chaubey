import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Code2,
  LayoutDashboard,
  PanelLeft,
  Plug,
  Zap,
  Brain,
  Smartphone,
  ArrowRight,
} from 'lucide-react'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/shared/section-heading'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="h-5 w-5" />,
  'layout-dashboard': <LayoutDashboard className="h-5 w-5" />,
  'panel-left': <PanelLeft className="h-5 w-5" />,
  plug: <Plug className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
  brain: <Brain className="h-5 w-5" />,
  smartphone: <Smartphone className="h-5 w-5" />,
}

export function ServicesPreview() {
  const preview = services.slice(0, 4)

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            label="Services"
            title="What I can build for you"
            description="End-to-end frontend development for ambitious products."
            className="mb-0"
          />
          <Button asChild variant="outline">
            <Link to="/services">
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {preview.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="p-6 h-full hover:shadow-md transition-all duration-300 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
