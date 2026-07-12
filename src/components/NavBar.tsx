import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

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

function navItemClass({ isActive }: { isActive: boolean }) {
  return `relative cursor-pointer rounded-full px-4 py-2 text-base leading-6 transition-all duration-300 ${
    isActive
      ? 'bg-[rgba(139,92,246,0.45)] text-[#fdfbf6]'
      : 'text-[rgba(253,251,246,0.65)] hover:text-[#fdfbf6]'
  }`
}

const projectLinks = [
  { to: '/projects', label: 'Tous les projets' },
  { to: '/projects/fine-line-production', label: 'Fine Line Production' },
  { to: '/projects/loreal', label: 'YSL Sélection Privée' },
  { to: '/projects/angry-birds', label: 'Research Ops · Angry Birds' },
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
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className={`flex items-center gap-1.5 ${navItemClass({ isActive })}`}
      >
        Projets
        <CaretDownIcon
          className={`size-4 shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="glass-dark animate-fade-in-up purple-glow absolute left-0 top-full z-10 mt-2 flex w-[240px] flex-col overflow-hidden rounded-xl">
          {projectLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="cursor-pointer px-4 py-2.5 text-base leading-6 text-[#fdfbf6] transition-colors duration-200 hover:bg-[#8b5cf6]/20"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function NavBar() {
  const edgeRef = useRef<HTMLDivElement>(null)

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

  return (
    <header className="sticky top-4 z-20 px-4 md:px-12">
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 flex-col items-start gap-0.5">
          <span className="font-syne text-lg leading-6 text-[#fdfbf6]">
            Athar El Hakim
          </span>
          <span className="text-sm leading-4 text-[rgba(253,251,246,0.5)]">
            UX/UI Designer
          </span>
        </Link>

        <nav
          className="flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/15 p-1 md:absolute md:left-1/2 md:-translate-x-1/2"
          style={{
            background: 'rgba(253,251,246,0.06)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <NavLink to="/" end className={navItemClass}>
            Home
          </NavLink>
          <ProjectsDropdown />
          <NavLink to="/a-propos-de-moi" className={navItemClass}>
            À Propos De Moi
          </NavLink>
        </nav>

        <div ref={edgeRef} className="flex shrink-0 items-center justify-end gap-5">
          <NavLink
            to="/contactez-moi"
            className="group flex cursor-pointer items-center gap-1 text-base leading-6 text-[rgba(253,251,246,0.8)] transition-colors duration-300 hover:text-[#fdfbf6]"
          >
            Contactez-Moi
            <ArrowUpRightIcon className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </NavLink>
          <a
            href="https://drive.google.com/file/d/1ixItPzB_x42w22SA-K9QslNWl_UHh2OB/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group flex cursor-pointer items-center gap-1 text-base leading-6 text-[rgba(253,251,246,0.8)] transition-colors duration-300 hover:text-[#fdfbf6]"
          >
            Mon CV
            <ArrowUpRightIcon className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
