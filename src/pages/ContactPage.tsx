import emailIcon from '../assets/icon-email.svg'
import phoneIcon from '../assets/icon-phone.svg'
import linkedinIcon from '../assets/icon-linkedin-white.svg'
import portraitImg from '../assets/portrait-dark-2-transparent.png'
import { H1, Body1, Micro1 } from '../components/Typography'
import { focusRing } from '../components/Button'

const contactItems = [
  {
    icon: emailIcon,
    label: 'Email',
    value: 'atharhakim@outlook.com',
    href: 'mailto:atharhakim@outlook.com',
    iconSize: 'size-6',
  },
  {
    icon: phoneIcon,
    label: 'Téléphone',
    value: '+33 7 63 13 69 38',
    href: 'tel:+33763136938',
    iconSize: 'size-6',
  },
  {
    icon: linkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/atharhakim/',
    href: 'https://www.linkedin.com/in/atharhakim',
    iconSize: 'size-full',
  },
]

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center gap-12 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      <div className="flex flex-col items-center gap-4 text-center">
        <H1>Prenons Contact !</H1>
        <Body1 className="max-w-[633px] font-light">
          Je suis toujours ravie d'échanger, que ce soit pour une nouvelle
          opportunité, une collaboration ou simplement discuter design autour
          d'un café !
        </Body1>
      </div>

      {/* Card + portrait side by side from md, mirroring the Home / About
          hero layout (portrait on the right). */}
      <div className="flex w-full max-w-[920px] flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
        <div className="flex w-full flex-1 flex-col items-start justify-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
          {contactItems.map((item) => (
            <div key={item.label} className="flex w-full items-center gap-6">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-black-elevated p-3">
                <img src={item.icon} alt="" className={item.iconSize} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
                <Micro1 className="!text-white/50 font-bold uppercase tracking-wide">
                  {item.label}
                </Micro1>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex min-h-11 w-full cursor-pointer items-center rounded-lg ${focusRing}`}
                >
                  <span className="min-w-0 break-words text-xl leading-8 text-white/85 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white md:text-2xl">
                    {item.value}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden shrink-0 items-end md:flex">
          <img
            src={portraitImg}
            alt="Portrait illustré d'Athar"
            className="h-[420px] w-auto object-contain lg:h-[480px]"
          />
        </div>
      </div>
    </section>
  )
}
