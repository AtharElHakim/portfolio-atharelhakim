import { H2, Body1 } from './Typography'
import Button from './Button'

export default function Contact({ transparent }: { transparent?: boolean }) {
  return (
    <section
      id="contact"
      className={`relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex w-screen flex-col items-center justify-center gap-10 overflow-hidden p-8 md:py-16 md:px-[var(--nav-edge-w)] ${
        transparent ? '' : 'bg-black-ink/85'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-black-ink" />
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
            'linear-gradient(100deg, var(--color-purple-void) 0%, var(--color-purple-dark) 25%, var(--color-purple-deep) 50%, var(--color-purple-dark) 75%, var(--color-purple-deep) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-8%] h-[320px] w-[380px] rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--color-purple) 0%, transparent 70%)',
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
      <Button to="/contactez-moi" tone="dark" className="relative">
        Contactez-Moi
      </Button>
    </section>
  )
}
