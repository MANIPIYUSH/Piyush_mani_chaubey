import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useActiveSection() {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState(location.pathname)

  useEffect(() => {
    setActiveSection(location.pathname)
  }, [location.pathname])

  return activeSection
}
