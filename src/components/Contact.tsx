import { Link } from 'react-router-dom'

export default function Contact({ transparent }: { transparent?: boolean }) {
  return (
    <section
      id="contact"
      className={`relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex w-screen flex-col items-center justify-center gap-10 overflow-hidden p-8 md:py-16 md:px-[var(--nav-edge-w)] ${
        transparent ? '' : 'bg-[rgba(7,7,7,0.88)]'
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #1e1147 0%, #2a1463 35%, #241457 65%, #1a1040 100%)',
        }}
      />
      {!transparent && (
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(700px circle at 50% 10%, rgba(124,58,237,0.35), transparent 70%)',
          }}
        />
      )}
      <div
        className="animate-float-blob pointer-events-none absolute left-[-15%] top-1/2 h-[280px] w-[130%] -translate-y-1/2 rotate-[-4deg] opacity-70 blur-3xl"
        style={{
          background:
            'linear-gradient(100deg, #4c1d95 0%, #4338ca 28%, #6d28d9 52%, #7c3aed 75%, #a855f7 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-12%] left-[-6%] h-[300px] w-[340px] rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-12%] right-[-6%] h-[300px] w-[340px] rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #4338ca 0%, transparent 70%)',
        }}
      />
      <div className="animate-fade-in-up relative flex flex-col items-center gap-4 text-center text-[#fdfbf6]">
        <h2 className="w-full font-syne text-4xl leading-tight md:text-5xl md:leading-[48px]">
          Travaillons ensemble !
        </h2>
        <p className="w-full font-light text-lg leading-7 md:text-xl">
          Si vous souhaitez collaborer ou discuter d'un projet, n'hésitez pas
          à me contacter.
        </p>
      </div>
      <Link
        to="/contactez-moi"
        className="relative flex cursor-pointer items-center justify-center border border-violet-300/60 bg-[rgba(124,58,237,0.55)] px-4 py-2 backdrop-blur-[20px] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]"
      >
        <span className="whitespace-nowrap text-center text-lg font-medium leading-6 text-[#fdfbf6]">
          Contactez-Moi
        </span>
      </Link>
    </section>
  )
}
