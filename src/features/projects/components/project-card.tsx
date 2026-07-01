import { ExternalLink, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import type { Project } from '@/types'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  project: Project
}

function TooltipWrap({
  tooltip,
  children,
}: {
  tooltip: string
  children: React.ReactNode
}) {
  return (
    <span className="relative group/tooltip inline-flex cursor-not-allowed">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2.5 py-1.5 text-xs font-medium text-background opacity-0 shadow-md transition-opacity group-hover/tooltip:opacity-100"
      >
        {tooltip}
      </span>
    </span>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const showLive = Boolean(project.liveUrl) || project.liveDisabled
  const showGithub = Boolean(project.githubUrl) || project.githubDisabled

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group/card overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-primary/10 group-hover/card:scale-110 transition-transform duration-500">
            {project.title.charAt(0)}
          </span>
        </div>
        {project.featured && (
          <Badge className="absolute top-4 left-4">Featured</Badge>
        )}
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 mb-6 flex-1">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-muted">
              <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {showLive &&
            (project.liveDisabled ? (
              <TooltipWrap tooltip={project.liveTooltip ?? 'Not available'}>
                <Button size="sm" variant="default" disabled>
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </Button>
              </TooltipWrap>
            ) : (
              <Button asChild size="sm" variant="default">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </Button>
            ))}

          {showGithub &&
            (project.githubDisabled ? (
              <TooltipWrap tooltip={project.githubTooltip ?? 'Private repo'}>
                <Button size="sm" variant="secondary" disabled>
                  <FaGithub className="h-3.5 w-3.5" />
                  GitHub
                </Button>
              </TooltipWrap>
            ) : (
              <Button asChild size="sm" variant="secondary">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>
            ))}

          {project.caseStudyUrl && (
            <Button asChild size="sm" variant="outline">
              {project.caseStudyUrl.startsWith('/') ? (
                <Link to={project.caseStudyUrl}>
                  <FileText className="h-3.5 w-3.5" />
                  Case Study
                </Link>
              ) : (
                <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-3.5 w-3.5" />
                  Case Study
                </a>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
