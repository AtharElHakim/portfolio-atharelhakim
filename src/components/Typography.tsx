import type { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  className?: string
}

/** Biggest tier: standalone landing greeting (Home hero "Salut, moi c'est Athar !"). At most one per site. */
export function Display({ children, className = '' }: TextProps) {
  return (
    <h1
      className={`font-syne text-5xl leading-tight text-white md:text-7xl md:leading-none ${className}`}
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
      className={`w-full text-center font-syne text-4xl leading-tight text-white md:text-5xl md:leading-none ${className}`}
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
      className={`w-full text-center text-lg font-semibold uppercase leading-tight tracking-widest text-purple-pale/70 ${className}`}
    >
      {children}
    </p>
  )
}

/** Small uppercase kicker (Overview, Mon Rôle, Cible Primaire...). */
export function H5({ children, className = '' }: TextProps) {
  return (
    <p
      className={`text-sm font-semibold uppercase leading-tight tracking-widest text-white/50 ${className}`}
    >
      {children}
    </p>
  )
}

/** Bold compact card label (01 Recherche, 02 Création Visuelle...). Not uppercase, not a kicker. */
export function H6({ children, className = '' }: TextProps) {
  return (
    <p className={`font-semibold leading-tight text-white ${className}`}>{children}</p>
  )
}

/** Primary paragraph text. Line-height is unitless 1.55 (was `leading-7` /
 *  28px, which read as a tight 1.4 once the size bumps to 20px at `md`). */
export function Body1({ children, className = '' }: TextProps) {
  return (
    <p
      className={`text-lg leading-[1.55] text-white/85 md:text-xl ${className}`}
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

/** Smallest tier: captions, inline stats, lightbox counters, fine print. */
export function Micro1({ children, className = '' }: TextProps) {
  return (
    <p className={`text-sm leading-5 text-white/50 ${className}`}>
      {children}
    </p>
  )
}

/* Micro2 (12px / white/40) was removed 2026-08-27: unused, and white/40 on
   the page background is 3.7:1 — below WCAG AA for body text. If a genuine
   fine-print tier is ever needed, add it back at white/55 or darker-safe. */
