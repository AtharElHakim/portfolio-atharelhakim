import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { Body1 } from './Typography'

type Variant = 'primary' | 'ghost' | 'filter'
/** Primary-only. `dark` swaps the purple gradient/glow for a near-black
 *  treatment — used on the purple Contact section, where a purple button on
 *  a purple field has almost no figure-ground contrast. */
type Tone = 'purple' | 'dark'

interface CommonProps {
  variant?: Variant
  tone?: Tone
  /** Selected/current state — nav ghost items and filter toggles only. */
  active?: boolean
  className?: string
  children: ReactNode
}

type ButtonAsLink = CommonProps &
  Omit<LinkProps, 'className' | 'children'> & { href?: undefined }

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    to?: undefined
    href: string
  }

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    to?: undefined
    href?: undefined
  }

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton

/* Focus ring is shared by every variant, and exported so the other
   interactive elements the design-system audit flagged (nav/footer links
   outside Button, lightbox controls, carousel arrows) can reuse the exact
   same treatment — none of the site's interactive elements had one before. */
export const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black'

const base = `inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ${focusRing}`

function variantClasses(variant: Variant, active?: boolean, tone: Tone = 'purple') {
  switch (variant) {
    case 'primary':
      return `px-6 py-2 text-white shadow-glow hover:-translate-y-0.5${
        tone === 'dark' ? ' border border-white/15' : ''
      }`
    case 'ghost':
      return `px-4 py-2 text-base leading-6 ${
        active
          ? 'bg-purple-mid/45 text-white'
          : 'text-white/70 hover:bg-white/10 hover:text-white'
      }`
    case 'filter':
      return `border px-4 py-2 text-sm ${
        active
          ? 'border-purple-pale/70 bg-purple/50 text-white'
          : 'border-white/15 text-white/50 hover:text-white'
      }`
  }
}

/* Primary is anchored on the same purple-mid the nav bar uses for its
   active-route state, instead of the two competing gradients this used
   to be split across (purple-light→purple-deep vs. black-elevated→black-soft).
   The `dark` tone deliberately brings the near-black gradient back for the
   one place it's needed — see the Tone type. */
const primaryToneStyle: Record<Tone, CSSProperties> = {
  purple: {
    background:
      'linear-gradient(135deg, var(--color-purple-mid) 0%, var(--color-purple-deep) 100%)',
  },
  dark: {
    background:
      'linear-gradient(135deg, var(--color-black-elevated) 0%, var(--color-black-soft) 100%)',
    // A purple shadow-glow is invisible on the purple section; swap it for a
    // dark halo so the button still separates from that background.
    '--glow-color': 'var(--color-black-ink)',
    '--glow-opacity': '55%',
  } as CSSProperties,
}

export default function Button({
  variant = 'primary',
  tone = 'purple',
  active,
  className = '',
  children,
  to,
  href,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variantClasses(variant, active, tone)} ${className}`
  const style = variant === 'primary' ? primaryToneStyle[tone] : undefined
  const content =
    variant === 'primary' ? (
      <Body1 className="!text-white whitespace-nowrap text-center">{children}</Body1>
    ) : (
      children
    )

  if (to !== undefined) {
    return (
      <Link to={to} className={classes} style={style} {...(rest as Omit<LinkProps, 'to' | 'className' | 'children'>)}>
        {content}
      </Link>
    )
  }

  if (href !== undefined) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        style={style}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      style={style}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}
