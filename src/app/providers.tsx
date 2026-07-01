import { useState, useCallback } from 'react'
import { RouterProvider } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { router } from './routes'
import { LoadingScreen } from '@/components/shared/loading-screen'
import { ThemeProvider } from '@/providers/theme-provider'

export function AppProviders() {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!loading && <RouterProvider router={router} />}
    </ThemeProvider>
  )
}
