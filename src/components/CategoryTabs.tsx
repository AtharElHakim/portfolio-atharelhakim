import { NavLink } from 'react-router-dom'
import { focusRing } from './Button'

/* Pill switch between the two project listings (UX/UI and Communication).
   Mirrors the Par ici risk-matrix toggle. Real links, so each tab has its
   own URL. */
const tabs = [
  { label: 'UX/UI Design', to: '/projects' },
  { label: 'Communication', to: '/communication' },
]

export default function CategoryTabs() {
  return (
    <nav
      aria-label="Catégories de projets"
      className="flex gap-1 rounded-full border border-white/15 bg-black-soft p-1"
    >
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end
          className={({ isActive }) =>
            `rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 md:text-base ${focusRing} ${
              isActive ? 'bg-purple text-white' : 'text-white/60 hover:text-white'
            }`
          }
        >
          {t.label}
        </NavLink>
      ))}
    </nav>
  )
}
