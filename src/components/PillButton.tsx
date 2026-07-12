import type { ReactNode } from 'react'
import { Body1 } from './Typography'

interface PillButtonProps {
  href: string
  children: ReactNode
  className?: string
}

export default function PillButton({ href, children, className = '' }: PillButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex cursor-pointer items-center justify-center rounded-full px-6 py-2 text-white transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{
        background: 'linear-gradient(135deg, var(--color-purple-light) 0%, var(--color-purple-deep) 100%)',
        boxShadow: '0 0 20px color-mix(in oklab, var(--color-purple-mid) 35%, transparent)',
      }}
    >
      <Body1 className="!text-white whitespace-nowrap text-center">{children}</Body1>
    </a>
  )
}
