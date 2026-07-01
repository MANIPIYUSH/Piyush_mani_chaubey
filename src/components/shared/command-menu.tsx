import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Command } from 'cmdk'
import { Search, Home, User, FolderOpen, Briefcase, Wrench, Mail, Sun, Moon } from 'lucide-react'
import { navLinks } from '@/data/site'
import { useTheme } from '@/hooks/use-theme'

const iconMap: Record<string, React.ReactNode> = {
  '/': <Home className="h-4 w-4" />,
  '/about': <User className="h-4 w-4" />,
  '/projects': <FolderOpen className="h-4 w-4" />,
  '/experience': <Briefcase className="h-4 w-4" />,
  '/services': <Wrench className="h-4 w-4" />,
  '/contact': <Mail className="h-4 w-4" />,
}

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { toggleTheme, theme } = useTheme()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200]">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="absolute left-1/2 top-[20%] w-full max-w-lg -translate-x-1/2 px-4">
        <Command
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          label="Command Menu"
        >
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Search className="h-4 w-4 text-muted shrink-0" />
            <Command.Input
              placeholder="Search pages and actions..."
              className="flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted"
            />
            <kbd className="hidden sm:inline-flex h-5 items-center rounded border border-border px-1.5 text-[10px] text-muted">
              ESC
            </kbd>
          </div>
          <Command.List className="max-h-72 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted">
              No results found.
            </Command.Empty>
            <Command.Group heading="Pages" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted">
              {navLinks.map((link) => (
                <Command.Item
                  key={link.href}
                  value={link.label}
                  onSelect={() => runCommand(() => navigate(link.href))}
                  className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm aria-selected:bg-foreground/5"
                >
                  {iconMap[link.href]}
                  {link.label}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="Actions" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted">
              <Command.Item
                value="Toggle theme"
                onSelect={() => runCommand(toggleTheme)}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm aria-selected:bg-foreground/5"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
