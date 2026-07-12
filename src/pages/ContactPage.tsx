import emailIcon from '../assets/icon-email.svg'
import phoneIcon from '../assets/icon-phone.svg'
import linkedinIcon from '../assets/icon-linkedin-white.svg'

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
    <section className="flex flex-col items-center gap-12 bg-[#fdfbf6] px-6 py-16 md:px-[var(--nav-edge-w)]">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-syne text-5xl leading-tight text-[#070707] md:text-[72px] md:leading-[72px]">
          Prenons Contact !
        </h1>
        <p className="max-w-[633px] text-xl leading-8 text-[rgba(7,7,7,0.88)] md:text-2xl">
          Je suis toujours ravie d'échanger, que ce soit pour une nouvelle
          opportunité, une collaboration ou simplement discuter design autour
          d'un café !
        </p>
      </div>
      <div className="flex w-full max-w-[730px] items-center justify-center px-4">
        <div className="flex w-full flex-col items-start justify-center gap-6 border border-[rgba(7,7,7,0.88)] bg-[#fbfbfb] px-8 py-16 shadow-[8px_8px_0px_#242424] md:px-16 md:py-24">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-center gap-6">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[rgba(7,7,7,0.88)] p-3">
                <img src={item.icon} alt="" className={item.iconSize} />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-bold leading-5 text-[rgba(0,0,0,0.7)]">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer text-xl leading-8 text-[rgba(7,7,7,0.88)] underline md:text-2xl"
                >
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
