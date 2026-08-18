export default function ProjectHeroGlow() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[130vw] max-w-none -translate-x-1/2 opacity-70 blur-3xl"
      style={{
        borderRadius: '0 0 50% 50% / 0 0 100% 100%',
        background:
          'radial-gradient(ellipse at top, var(--color-purple-light) 0%, var(--color-purple) 45%, transparent 75%)',
        maskImage: 'radial-gradient(ellipse 50% 100% at 50% 0%, black 55%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 50% 100% at 50% 0%, black 55%, transparent 100%)',
      }}
    />
  )
}
