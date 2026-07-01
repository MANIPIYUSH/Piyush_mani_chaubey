import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { ScrollProgress } from '@/components/shared/scroll-progress'
import { ScrollToTop } from '@/components/shared/scroll-to-top'
import { CustomCursor } from '@/components/shared/custom-cursor'
import { CommandMenu } from '@/components/shared/command-menu'

export function MainLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <CommandMenu />
      <Navbar />
      <main id="main-content" className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
