export default function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] max-h-full overflow-hidden">
      <div
        className="animate-float-blob absolute left-[-10%] top-[-6%] h-[520px] w-[560px] opacity-[0.5] blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--color-purple-light) 0%, var(--color-purple) 50%, transparent 72%)',
        }}
      />
      <div
        className="animate-float-blob absolute right-[-8%] top-[16%] h-[480px] w-[520px] opacity-[0.4] blur-3xl"
        style={{
          animationDelay: '-4s',
          background:
            'radial-gradient(circle, var(--color-purple) 0%, var(--color-purple-deep) 50%, transparent 72%)',
        }}
      />
    </div>
  )
}
