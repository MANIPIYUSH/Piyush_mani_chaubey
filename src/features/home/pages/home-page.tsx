import { SEO } from '@/components/shared/seo'
import { HeroSection } from '../components/hero-section'
import { TrustSection } from '../components/trust-section'
import { FeaturedProjectsSection } from '../components/featured-projects-section'
import { ExperiencePreview } from '../components/experience-preview'
import { ServicesPreview } from '../components/services-preview'
import { TechStackSection } from '../components/tech-stack-section'
import { CTASection } from '../components/cta-section'

export default function HomePage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <TrustSection />
      <FeaturedProjectsSection />
      <ExperiencePreview />
      <ServicesPreview />
      <TechStackSection />
      <CTASection />
    </>
  )
}
