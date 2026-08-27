import { useEffect, useRef } from 'react'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], audio[controls], [tabindex]:not([tabindex="-1"])'

/**
 * Traps Tab/Shift+Tab within the modal container for as long as it's
 * mounted, closes on Escape, and restores focus to whatever triggered it
 * once it unmounts. Attach the returned ref to the modal's outermost
 * element. Assumes the modal is conditionally *rendered* (mounted only
 * while open), matching how every modal in this codebase is used.
 */
export function useModalFocus<T extends HTMLElement>(onClose: () => void) {
  const containerRef = useRef<T>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    const triggerEl = document.activeElement as HTMLElement | null
    const container = containerRef.current

    function getFocusable() {
      return container
        ? Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
        : []
    }

    const focusables = getFocusable()
    ;(focusables[0] ?? container)?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab' || !container) return

      const nodes = getFocusable()
      if (nodes.length === 0) {
        event.preventDefault()
        return
      }
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      const active = document.activeElement

      if (event.shiftKey) {
        if (active === first || !container.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else {
        if (active === last || !container.contains(active)) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      triggerEl?.focus()
    }
  }, [])

  return containerRef
}
