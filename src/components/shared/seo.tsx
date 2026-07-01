import { useEffect } from 'react'
import { siteConfig } from '@/data/site'

interface SEOProps {
  title?: string
  description?: string
  path?: string
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  let element = document.querySelector(`meta[${attr}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function SEO({ title, description, path = '' }: SEOProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const pageDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`

  useEffect(() => {
    document.title = pageTitle
    setMeta('description', pageDescription)
    setMeta('og:title', pageTitle, true)
    setMeta('og:description', pageDescription, true)
    setMeta('og:url', url, true)
    setMeta('og:image', `${siteConfig.url}${siteConfig.ogImage}`, true)
    setMeta('twitter:title', pageTitle)
    setMeta('twitter:description', pageDescription)

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    let script = document.querySelector('#structured-data') as HTMLScriptElement
    if (!script) {
      script = document.createElement('script')
      script.id = 'structured-data'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: 'Frontend Engineer',
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email,
    })
  }, [pageTitle, pageDescription, url])

  return null
}
