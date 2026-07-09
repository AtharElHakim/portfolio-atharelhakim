import { Link } from 'react-router-dom'
import linkedinIcon from '../assets/linkedin-icon.svg'
import mailIcon from '../assets/mail-icon.svg'

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-end">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-8 py-12 md:flex-row md:px-[var(--nav-edge-w)] md:py-20">
        <p className="font-syne text-2xl leading-9 tracking-[-0.5px] text-[rgba(253,251,246,0.7)] md:text-[30px]">
          Athar El Hakim
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center justify-center rounded-full px-3 py-1.5 text-base leading-6 tracking-[-0.5px] text-[#fdfbf6] transition-colors duration-300 hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="flex items-center justify-center rounded-full px-3 py-1.5 text-base leading-6 tracking-[-0.5px] text-[#fdfbf6] transition-colors duration-300 hover:bg-white/10"
          >
            Projets
          </Link>
          <Link
            to="/a-propos-de-moi"
            className="flex items-center justify-center rounded-full px-3 py-1.5 text-base leading-6 tracking-[-0.5px] text-[#fdfbf6] transition-colors duration-300 hover:bg-white/10"
          >
            À Propos De Moi
          </Link>
          <Link
            to="/contactez-moi"
            className="flex items-center justify-center rounded-full px-3 py-1.5 text-base leading-6 tracking-[-0.5px] text-[#fdfbf6] transition-colors duration-300 hover:bg-white/10"
          >
            Contactez-Moi
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-4">
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
            <img src={mailIcon} alt="" className="size-8 p-1.5" />
          </a>
        </div>
      </div>
      <div className="flex w-full items-center justify-center py-2">
        <p className="whitespace-nowrap text-base leading-5 tracking-[-0.5px] text-[rgba(253,251,246,0.5)]">
          © 2026 Athar El Hakim
        </p>
      </div>
    </footer>
  )
}
