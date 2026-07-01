import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/components/layout/main-layout'
import { PageTransition } from '@/components/shared/page-transition'

const HomePage = lazy(() => import('@/features/home/pages/home-page'))
const AboutPage = lazy(() => import('@/features/about/pages/about-page'))
const ProjectsPage = lazy(() => import('@/features/projects/pages/projects-page'))
const CaseStudyPage = lazy(() => import('@/features/projects/pages/case-study-page'))
const ExperiencePage = lazy(() => import('@/features/experience/pages/experience-page'))
const ServicesPage = lazy(() => import('@/features/services/pages/services-page'))
const ContactPage = lazy(() => import('@/features/contact/pages/contact-page'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  )
}

function withTransition(Component: React.ComponentType) {
  return (
    <Suspense fallback={<PageLoader />}>
      <PageTransition>
        <Component />
      </PageTransition>
    </Suspense>
  )
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: withTransition(HomePage) },
        { path: 'about', element: withTransition(AboutPage) },
        { path: 'projects', element: withTransition(ProjectsPage) },
        { path: 'projects/:id', element: withTransition(CaseStudyPage) },
        { path: 'experience', element: withTransition(ExperiencePage) },
        { path: 'services', element: withTransition(ServicesPage) },
        { path: 'contact', element: withTransition(ContactPage) },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
)
