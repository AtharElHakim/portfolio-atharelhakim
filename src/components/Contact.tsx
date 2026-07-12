import { Link } from 'react-router-dom'
import { H2, Body1 } from './Typography'

export default function Contact({ transparent }: { transparent?: boolean }) {
  return (
    <section
      id="contact"
      className={`relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex w-screen flex-col items-center justify-center gap-10 overflow-hidden p-8 md:py-16 md:px-[var(--nav-edge-w)] ${
        transparent ? '' : 'bg-black-ink/88'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#040308]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(900px 520px at 50% -10%, color-mix(in oklab, var(--color-purple) 40%, transparent), transparent 65%)',
        }}
      />
      <div
        className="animate-float-blob pointer-events-none absolute left-[-20%] top-[55%] h-[320px] w-[140%] -translate-y-1/2 rotate-[-3deg] opacity-90 blur-3xl"
        style={{
          background:
            'linear-gradient(100deg, #2e1a6b 0%, #3730a3 25%, #4338ca 50%, var(--color-purple-dark) 75%, var(--color-purple-deep) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-8%] h-[320px] w-[380px] rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #9333ea 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] right-[-8%] h-[320px] w-[380px] rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--color-purple) 0%, transparent 70%)',
        }}
      />
      <div className="animate-fade-in-up relative flex flex-col items-center gap-4 text-center">
        <H2>Travaillons ensemble !</H2>
        <Body1 className="font-light">
          Si vous souhaitez collaborer ou discuter d'un projet, n'hésitez pas
          à me contacter.
        </Body1>
      </div>
      <Link
        to="/contactez-moi"
        className="relative flex cursor-pointer items-center justify-center rounded-full px-6 py-2 text-white transition-all duration-300 hover:-translate-y-0.5"
        style={{
          background: 'linear-gradient(135deg, #2a2a30 0%, var(--color-black-soft) 100%)',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        }}
      >
        <Body1 className="!text-white whitespace-nowrap text-center">
          Contactez-Moi
        </Body1>
      </Link>
    </section>
  )
}
