import linkedinIcon from '../assets/linkedin-icon.svg'
import mailIcon from '../assets/mail-icon.svg'
import Button, { focusRing } from './Button'

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-end bg-black">
      {/* Phones: compact two-row grid (name + icons, then the links) so the footer
          doesn't take half the screen; one row from md up. */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 px-8 py-6 md:flex md:flex-row md:justify-between md:gap-8 md:px-[var(--nav-edge-w)] md:py-12 lg:py-20">
        <div className="contents md:flex md:flex-row md:items-center md:gap-12">
          <p className="col-start-1 row-start-1 whitespace-nowrap font-syne text-xl leading-9 text-white/70 md:text-3xl">
            Athar El Hakim
          </p>
          <nav className="col-span-2 row-start-2 -ml-3 flex flex-wrap items-center gap-x-1 md:ml-0 md:justify-center md:gap-4 max-md:[&>a]:!px-3 max-md:[&>a]:text-sm">
            <Button to="/" variant="ghost">
              Home
            </Button>
            <Button to="/projects" variant="ghost">
              Projets
            </Button>
            <Button to="/a-propos-de-moi" variant="ghost">
              À Propos De Moi
            </Button>
            <Button to="/contactez-moi" variant="ghost">
              Contactez-Moi
            </Button>
          </nav>
        </div>
        <div className="col-start-2 row-start-1 -mr-2 flex items-center gap-1 md:mr-0 md:gap-4">
          <a
            href="https://www.linkedin.com/in/atharhakim"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={`flex size-11 items-center justify-center rounded-full opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100 ${focusRing}`}
          >
            <img loading="lazy" decoding="async" src={linkedinIcon} alt="" className="size-8" />
          </a>
          <a
            href="mailto:athar.elhakim@supdepub.com"
            aria-label="Email"
            className={`flex size-11 items-center justify-center rounded-full opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100 ${focusRing}`}
          >
            <img loading="lazy" decoding="async" src={mailIcon} alt="" className="size-8 p-1" />
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
