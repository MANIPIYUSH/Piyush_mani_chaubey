import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/use-media-query'

export function CustomCursor() {
  const isDesktop = useMediaQuery('(min-width: 1024px) and (pointer: fine)')
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isDesktop) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"], input, textarea, select')
      setIsHovering(!!interactive)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
  <>
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      animate={{
        x: position.x - 4,
        y: position.y - 4,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="h-2 w-2 rounded-full bg-white" />
    </motion.div>
    <style>{`*, *::before, *::after { cursor: none !important; }`}</style>
  </>
  )
}
