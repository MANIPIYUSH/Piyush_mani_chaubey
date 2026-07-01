import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Building2, Calendar, User } from 'lucide-react'
import { projects } from '@/data/projects'
import { getCaseStudyByProjectId } from '@/data/case-studies'
import { SEO } from '@/components/shared/seo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)
  const caseStudy = id ? getCaseStudyByProjectId(id) : undefined

  if (!project || !caseStudy) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      <SEO
        title={`${project.title} — Case Study`}
        description={caseStudy.overview}
        path={`/projects/${project.id}`}
      />
      <article className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </Button>

            <header className="max-w-3xl mb-12">
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
                Case Study
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-muted leading-relaxed">{caseStudy.subtitle}</p>

              <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  {caseStudy.role}
                </span>
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  {caseStudy.company}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {caseStudy.timeline}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="p-5 h-full text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">{result.value}</p>
                  <p className="font-medium mt-1 text-sm">{result.label}</p>
                  {result.description && (
                    <p className="text-xs text-muted mt-2 leading-relaxed">{result.description}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <CaseStudySection title="Overview">
                <p>{caseStudy.overview}</p>
              </CaseStudySection>

              <CaseStudySection title="The Problem">
                <p>{caseStudy.problem}</p>
              </CaseStudySection>

              <CaseStudySection title="The Solution">
                <p>{caseStudy.solution}</p>
              </CaseStudySection>

              <section>
                <h2 className="text-2xl font-bold mb-6">Process</h2>
                <div className="space-y-6">
                  {caseStudy.process.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="rounded-2xl border border-border bg-card p-6"
                    >
                      <div className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-semibold">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6">Key Challenges</h2>
                <div className="space-y-4">
                  {caseStudy.challenges.map((challenge) => (
                    <div
                      key={challenge.title}
                      className="rounded-2xl border border-border bg-card p-6"
                    >
                      <h3 className="font-semibold mb-2">{challenge.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <Card className="p-6 sticky top-24">
                <h3 className="font-semibold mb-4">Key Learnings</h3>
                <ul className="space-y-4">
                  {caseStudy.learnings.map((learning) => (
                    <li key={learning} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full mt-6">
                  <Link to="/contact">
                    Discuss a project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}

function CaseStudySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-muted leading-relaxed prose-width space-y-4">{children}</div>
    </section>
  )
}
