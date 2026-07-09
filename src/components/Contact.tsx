import { Link } from 'react-router-dom'

export default function Contact({ transparent }: { transparent?: boolean }) {
  return (
    <section
      id="contact"
      className={`relative flex flex-col items-center justify-center gap-10 overflow-hidden p-8 md:py-16 md:px-[var(--nav-edge-w)] ${
        transparent ? '' : 'bg-[rgba(7,7,7,0.88)]'
      }`}
    >
      {!transparent && (
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(600px circle at 50% 30%, rgba(139,92,246,0.3), transparent 70%)',
          }}
        />
      )}
      <div className="animate-fade-in-up relative flex flex-col items-center gap-4 text-center tracking-[-0.5px] text-[#fdfbf6]">
        <h2 className="w-full font-syne text-4xl leading-tight md:text-5xl md:leading-[48px]">
          Travaillons ensemble !
        </h2>
        <p className="w-full text-lg leading-7 md:text-xl">
          Si vous souhaitez collaborer ou discuter d'un projet, n'hésitez pas
          à me contacter.
        </p>
      </div>
      <Link
        to="/contactez-moi"
        className="relative flex cursor-pointer items-center justify-center rounded-full bg-[#8b5cf6] px-5 py-2.5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)]"
      >
        <span className="whitespace-nowrap text-center text-lg font-medium leading-6 tracking-[-0.5px] text-[#fdfbf6]">
          Contactez-Moi
        </span>
      </Link>
    </section>
  )
}
