import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Layers, Gauge, Code } from 'lucide-react'
import { SEO } from '@/components/shared/seo'
import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { skillCategories } from '@/data/skills'
import { Badge } from '@/components/ui/badge'

const values = [
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Production-First Mindset',
    description:
      'Every line of code is written with production in mind — error boundaries, loading states, edge cases, and real user flows.',
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Scalable Architecture',
    description:
      'Feature-based folder structures, reusable components, and state management patterns that grow with your product.',
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: 'Performance Obsessed',
    description:
      'Bundle optimization, code splitting, memoization, and lazy loading to deliver sub-second interactions.',
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: 'Clean, Maintainable Code',
    description:
      'TypeScript strict mode, consistent patterns, and documentation that makes onboarding new developers effortless.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Frontend Engineer specializing in production SaaS development, frontend architecture, and performance optimization."
        path="/about"
      />
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="About Me"
            title="Building products that scale"
            description="I'm a Frontend Engineer who turns complex business requirements into elegant, performant web applications."
          />

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 space-y-6 text-muted leading-relaxed"
            >
              <p className="text-lg text-foreground font-medium">
                I didn't start as a frontend engineer chasing trends. I started by solving
                real problems — building dashboards that sales teams actually used, payment
                flows that didn't break at checkout, and multi-tenant architectures that
                let one codebase serve dozens of white-labeled clients.
              </p>
              <p>
                At Avija Digital, I built the entire frontend of RankRover — a production
                B2B SaaS platform — from zero. That meant architecting 70+ routes, designing
                50+ Redux modules for complex state flows, integrating PayPal and Razorpay
                payment systems, and shipping CRM and marketing tools that real businesses
                depend on daily.
              </p>
              <p>
                Before that, at Consolebit Technologies, I honed my craft building
                enterprise web applications and reusable component libraries. And at PepCoding,
                I spent a year not just writing code, but teaching it — mentoring 100+
                students and debugging their projects daily, which made me a sharper
                problem-solver.
              </p>
              <p>
                What sets me apart isn't just React knowledge — it's the ability to think
                in systems. I understand how frontend architecture decisions impact backend
                API design, how state management choices affect team velocity six months
                later, and how a 200ms improvement in load time can change conversion rates.
              </p>
              <p>
                I write TypeScript with strict types, structure projects for teams not
                individuals, and optimize for the metrics that matter: performance scores,
                maintainability, and user experience.
              </p>

              <Button asChild className="mt-4">
                <Link to="/contact">
                  Let's work together
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-border bg-card p-6 sticky top-24">
                <h3 className="font-semibold mb-4">Quick Facts</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted">Location</dt>
                    <dd className="font-medium mt-0.5">Delhi, India (Remote-friendly)</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Experience</dt>
                    <dd className="font-medium mt-0.5">3+ years</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Focus</dt>
                    <dd className="font-medium mt-0.5">SaaS & B2B Products</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Current Role</dt>
                    <dd className="font-medium mt-0.5">Frontend Engineer @ Avija Digital</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3">Core Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skillCategories[0].skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">What I value</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
