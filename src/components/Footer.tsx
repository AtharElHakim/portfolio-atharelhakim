import { Link } from 'react-router-dom'
import linkedinIcon from '../assets/linkedin-icon.svg'
import mailIcon from '../assets/mail-icon.svg'

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-end bg-black">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-8 py-12 md:flex-row md:px-[var(--nav-edge-w)] md:py-20">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <p className="font-syne text-2xl leading-9 text-white/70 md:text-3xl">
            Athar El Hakim
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center justify-center rounded-full px-4 py-2 text-base leading-6 text-white transition-colors duration-300 hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="flex items-center justify-center rounded-full px-4 py-2 text-base leading-6 text-white transition-colors duration-300 hover:bg-white/10"
            >
              Projets
            </Link>
            <Link
              to="/a-propos-de-moi"
              className="flex items-center justify-center rounded-full px-4 py-2 text-base leading-6 text-white transition-colors duration-300 hover:bg-white/10"
            >
              À Propos De Moi
            </Link>
            <Link
              to="/contactez-moi"
              className="flex items-center justify-center rounded-full px-4 py-2 text-base leading-6 text-white transition-colors duration-300 hover:bg-white/10"
            >
              Contactez-Moi
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100"
          >
            <img src={linkedinIcon} alt="" className="size-8" />
          </a>
          <a
            href="mailto:athar.elhakim@supdepub.com"
            aria-label="Email"
            className="opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100"
          >
            <img src={mailIcon} alt="" className="size-8 p-1" />
          </a>
        </div>
      </div>
      <div className="flex w-full items-center justify-center border-t border-white/10 py-2">
        <p className="whitespace-nowrap text-base leading-5 text-white/50">
          © 2026 Athar El Hakim
        </p>
      </div>
    </footer>
  )
}
