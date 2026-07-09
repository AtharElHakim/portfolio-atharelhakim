export default function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-float-blob absolute left-[-10%] top-[-6%] h-[520px] w-[560px] opacity-[0.5] blur-3xl"
        style={{
          background:
            'radial-gradient(circle, #a855f7 0%, #7c3aed 50%, transparent 72%)',
        }}
      />
      <div
        className="animate-float-blob absolute right-[-8%] top-[22%] h-[480px] w-[520px] opacity-[0.4] blur-3xl"
        style={{
          animationDelay: '-4s',
          background:
            'radial-gradient(circle, #9333ea 0%, #6d28d9 50%, transparent 72%)',
        }}
      />
      <div
        className="animate-float-blob absolute left-[-8%] top-[48%] h-[500px] w-[540px] opacity-[0.4] blur-3xl"
        style={{
          animationDelay: '-9s',
          background:
            'radial-gradient(circle, #8b5cf6 0%, #6d28d9 50%, transparent 72%)',
        }}
      />
      <div
        className="animate-float-blob absolute right-[-10%] top-[74%] h-[520px] w-[560px] opacity-[0.45] blur-3xl"
        style={{
          animationDelay: '-12s',
          background:
            'radial-gradient(circle, #a855f7 0%, #7c3aed 50%, transparent 72%)',
        }}
      />
    </div>
  )
}
