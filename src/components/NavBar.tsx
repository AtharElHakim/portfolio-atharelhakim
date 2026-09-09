import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { Micro1 } from './Typography'
import Button, { focusRing } from './Button'

const CV_HREF = 'https://drive.google.com/file/d/1ixItPzB_x42w22SA-K9QslNWl_UHh2OB/view?usp=sharing'

function CaretDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'size-6'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.75 6.90039C19.8617 6.90039 19.973 6.92211 20.0762 6.96484C20.1792 7.00758 20.2727 7.07052 20.3516 7.14941C20.4305 7.22833 20.4934 7.32171 20.5361 7.4248C20.5788 7.52785 20.6005 7.63846 20.6006 7.75C20.6006 7.86168 20.5789 7.973 20.5361 8.07617C20.4934 8.17925 20.4305 8.27266 20.3516 8.35156L12.8516 15.8516C12.7727 15.9305 12.6792 15.9934 12.5762 16.0361C12.473 16.0789 12.3617 16.1006 12.25 16.1006C12.1384 16.1005 12.0279 16.0789 11.9248 16.0361C11.8217 15.9934 11.7283 15.9305 11.6494 15.8516L4.14941 8.35156C3.98993 8.19208 3.90039 7.97554 3.90039 7.75C3.9005 7.52461 3.99003 7.3088 4.14941 7.14941C4.3088 6.99003 4.52461 6.9005 4.75 6.90039C4.97554 6.90039 5.19208 6.98993 5.35156 7.14941L12.25 14.0479L19.1494 7.14941C19.2283 7.07049 19.3217 7.00758 19.4248 6.96484C19.5279 6.92216 19.6385 6.90045 19.75 6.90039Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.2"
      />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'size-3.5'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M18 6H8M18 6V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Animates between a hamburger (three lines) and a close (X) glyph. */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 7H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={`origin-center transition-transform duration-300 ${open ? 'translate-y-[5px] rotate-45' : ''}`}
      />
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={`origin-center transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
      />
      <path
        d="M5 17H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={`origin-center transition-transform duration-300 ${open ? '-translate-y-[5px] -rotate-45' : ''}`}
      />
    </svg>
  )
}

const projectLinks = [
  { to: '/projects', label: 'Tous les projets' },
  { to: '/projects/fine-line-production', label: 'Fine Line Production' },
  { to: '/projects/loreal', label: 'YSL Sélection Privée' },
  { to: '/projects/angry-birds', label: 'Research Ops · Angry Birds' },
  { to: '/projects/spotify', label: 'Spotify' },
  { to: '/projects/par-ici', label: 'Par ici' },
]

function ProjectsDropdown() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isActive = location.pathname.startsWith('/projects')

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <Button
        variant="ghost"
        active={isActive}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="gap-2"
      >
        Projets
        <CaretDownIcon
          className={`size-4 shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </Button>
      {open && (
        <div className="glass-dark animate-fade-in-up purple-glow absolute left-0 top-full z-10 mt-2 flex w-[240px] flex-col overflow-hidden rounded-xl">
          {projectLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`cursor-pointer px-4 py-2 text-base leading-6 text-white/70 transition-colors duration-200 hover:bg-purple-mid/15 hover:text-white ${focusRing}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function mobileItemClass(active: boolean) {
  return `w-full rounded-2xl px-4 py-4 text-center font-syne text-2xl transition-colors duration-200 ${
    active ? 'bg-purple-mid/45 text-white' : 'text-white/85 hover:bg-white/5 hover:text-white'
  } ${focusRing}`
}

function MobileMenu({
  onClose,
  isHomeActive,
  isAboutActive,
  isProjectsActive,
}: {
  onClose: () => void
  isHomeActive: boolean
  isAboutActive: boolean
  isProjectsActive: boolean
}) {
  const [projectsOpen, setProjectsOpen] = useState(false)

  return createPortal(
    <div className="fixed inset-0 z-30 flex flex-col overflow-y-auto bg-black px-6 pb-10 pt-28 md:hidden">
      <nav className="mx-auto flex w-full max-w-sm flex-1 flex-col items-stretch gap-2">
        <Link to="/" onClick={onClose} className={mobileItemClass(isHomeActive)}>
          Home
        </Link>

        <div className="flex flex-col items-stretch">
          <button
            type="button"
            onClick={() => setProjectsOpen((prev) => !prev)}
            aria-expanded={projectsOpen}
            className={`flex items-center justify-center gap-2 ${mobileItemClass(isProjectsActive)}`}
          >
            Projets
            <CaretDownIcon
              className={`size-6 shrink-0 transition-transform duration-300 ${
                projectsOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {projectsOpen && (
            <div className="flex flex-col items-stretch gap-1 py-2">
              {projectLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={`w-full rounded-xl px-4 py-3 text-center text-lg text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white ${focusRing}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/a-propos-de-moi" onClick={onClose} className={mobileItemClass(isAboutActive)}>
          À Propos De Moi
        </Link>

        <div className="my-4 border-t border-white/10" aria-hidden="true" />

        <Link
          to="/contactez-moi"
          onClick={onClose}
          className={`flex items-center justify-center gap-2 ${mobileItemClass(false)}`}
        >
          Contactez-Moi
          <ArrowUpRightIcon className="size-5 shrink-0" />
        </Link>
        <a
          href={CV_HREF}
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
          className={`flex items-center justify-center gap-2 ${mobileItemClass(false)}`}
        >
          Mon CV
          <ArrowUpRightIcon className="size-5 shrink-0" />
        </a>
      </nav>
    </div>,
    document.body,
  )
}

export default function NavBar() {
  const edgeRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHomeActive = location.pathname === '/'
  const isAboutActive = location.pathname === '/a-propos-de-moi'
  const isProjectsActive = location.pathname.startsWith('/projects')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const el = edgeRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty(
        '--nav-edge-w',
        `${entry.contentRect.width}px`,
      )
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Auto-close the mobile menu on route change (covers link taps and back/forward navigation).
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Lock background scroll while the full-screen mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  // Close on Escape.
  useEffect(() => {
    if (!mobileOpen) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  return (
    <header className="sticky top-4 z-20 px-4 md:px-12">
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 flex-col items-start gap-0.5">
          <span className="font-syne text-lg leading-6 text-white">
            Athar El Hakim
          </span>
          <Micro1>UX/UI Designer</Micro1>
        </Link>

        <nav
          className="glass-dark hidden flex-wrap items-center justify-center gap-2 rounded-full p-2 md:flex md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <Button to="/" variant="ghost" active={isHomeActive}>
            Home
          </Button>
          <ProjectsDropdown />
          <Button to="/a-propos-de-moi" variant="ghost" active={isAboutActive}>
            À Propos De Moi
          </Button>
        </nav>

        <div ref={edgeRef} className="hidden shrink-0 items-center justify-end gap-6 md:flex">
          <Link
            to="/contactez-moi"
            className={`group flex min-h-11 cursor-pointer items-center gap-2 rounded-full text-base leading-6 text-white/70 transition-colors duration-300 hover:text-white ${focusRing}`}
          >
            Contactez-Moi
            <ArrowUpRightIcon className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={CV_HREF}
            target="_blank"
            rel="noreferrer"
            className={`group flex min-h-11 cursor-pointer items-center gap-2 rounded-full text-base leading-6 text-white/70 transition-colors duration-300 hover:text-white ${focusRing}`}
          >
            Mon CV
            <ArrowUpRightIcon className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden ${focusRing}`}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <MobileMenu
          onClose={() => setMobileOpen(false)}
          isHomeActive={isHomeActive}
          isAboutActive={isAboutActive}
          isProjectsActive={isProjectsActive}
        />
      )}
    </header>
  )
}
