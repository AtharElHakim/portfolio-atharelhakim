import type { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  className?: string
}

/** Biggest tier: standalone landing greeting (Home hero "Salut, moi c'est Athar !"). At most one per site. */
export function Display({ children, className = '' }: TextProps) {
  return (
    <h1
      className={`font-syne text-5xl leading-tight text-white md:text-[72px] md:leading-[72px] ${className}`}
    >
      {children}
    </h1>
  )
}

/** Page-level title (case-study/page names: "Fine Line Production", "À Propos De Moi"...). One per page. */
export function H1({ children, className = '' }: TextProps) {
  return (
    <h1
      className={`font-syne text-4xl leading-tight text-white md:text-6xl md:leading-[1.1] ${className}`}
    >
      {children}
    </h1>
  )
}

/** Section title (Contexte, Audit, Budget...). Centered by default. */
export function H2({ children, className = '' }: TextProps) {
  return (
    <p
      className={`w-full text-center font-syne text-4xl leading-tight text-white md:text-5xl md:leading-[48px] ${className}`}
    >
      {children}
    </p>
  )
}

/** Subsection / card title (Insights Benchmark, Sondage, Cible card names...). */
export function H3({ children, className = '' }: TextProps) {
  return (
    <p className={`font-syne text-2xl leading-tight text-white md:text-3xl ${className}`}>
      {children}
    </p>
  )
}

/** Large uppercase kicker (Recherche Secondaire, Recherche Primaire). Centered. */
export function H4({ children, className = '' }: TextProps) {
  return (
    <p
      className={`w-full text-center text-lg font-semibold uppercase tracking-widest text-purple-pale/70 ${className}`}
    >
      {children}
    </p>
  )
}

/** Small uppercase kicker (Overview, Mon Rôle, Cible Primaire...). */
export function H5({ children, className = '' }: TextProps) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-widest text-white/50 ${className}`}
    >
      {children}
    </p>
  )
}

/** Bold compact card label (01 Recherche, 02 Création Visuelle...). Not uppercase, not a kicker. */
export function H6({ children, className = '' }: TextProps) {
  return (
    <p className={`font-semibold text-white ${className}`}>{children}</p>
  )
}

/** Primary paragraph text. */
export function Body1({ children, className = '' }: TextProps) {
  return (
    <p
      className={`text-lg leading-7 text-white/85 md:text-xl ${className}`}
    >
      {children}
    </p>
  )
}

/** Secondary / supporting text (list items, meta). */
export function Body2({ children, className = '' }: TextProps) {
  return (
    <p className={`text-base leading-6 text-white/70 ${className}`}>
      {children}
    </p>
  )
}

/** Small meta text (captions, inline stats, lightbox counters). */
export function Micro1({ children, className = '' }: TextProps) {
  return (
    <p className={`text-sm leading-5 text-white/50 ${className}`}>
      {children}
    </p>
  )
}

/** Smallest tier: fine print, timestamps, legal. */
export function Micro2({ children, className = '' }: TextProps) {
  return (
    <p className={`text-xs leading-4 text-white/40 ${className}`}>
      {children}
    </p>
  )
}
