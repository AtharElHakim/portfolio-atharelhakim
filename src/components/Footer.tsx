import linkedinIcon from '../assets/linkedin-icon.svg'
import mailIcon from '../assets/mail-icon.svg'
import Button, { focusRing } from './Button'

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-end bg-black">
      {/* Phones: compact centred stack (name, links on one line, icons) so the
          footer doesn't take half the screen; one row from md up. */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-1 px-4 py-6 md:flex md:flex-row md:justify-between md:gap-8 md:px-[var(--nav-edge-w)] md:py-12 lg:py-20">
        <div className="flex flex-col items-center gap-1 md:flex-row md:gap-12">
          <p className="whitespace-nowrap font-syne text-xl leading-9 text-white/70 md:text-3xl">
            Athar El Hakim
          </p>
          <nav className="flex flex-wrap items-center justify-center md:gap-4 max-md:[&>a]:!px-2.5 max-md:[&>a]:text-[15px]">
            <Button to="/" variant="ghost">
              Home
            </Button>
            <Button to="/projects" variant="ghost">
              Projets
            </Button>
            <Button to="/a-propos-de-moi" variant="ghost" aria-label="À Propos De Moi">
              {/* Shorter on phones so the 4 links fit one line at a readable size. */}
              <span className="md:hidden">À Propos</span>
              <span className="hidden md:inline">À Propos De Moi</span>
            </Button>
            <Button to="/contactez-moi" variant="ghost">
              Contactez-Moi
            </Button>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
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
