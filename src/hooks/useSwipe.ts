import { useRef } from 'react'
import type { TouchEvent } from 'react'

/**
 * Detects a horizontal swipe gesture and calls onSwipeLeft/onSwipeRight
 * once the touch travels past `threshold` px, predominantly horizontally
 * (so a vertical scroll doesn't get misread as a swipe). Spread the
 * returned handlers onto the element that should be swipeable.
 */
export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50,
) {
  const start = useRef<{ x: number; y: number } | null>(null)

  function onTouchStart(event: TouchEvent) {
    const touch = event.touches[0]
    start.current = { x: touch.clientX, y: touch.clientY }
  }

  function onTouchEnd(event: TouchEvent) {
    if (!start.current) return
    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - start.current.x
    const deltaY = touch.clientY - start.current.y
    start.current = null

    if (Math.abs(deltaX) < threshold || Math.abs(deltaX) < Math.abs(deltaY)) return
    if (deltaX < 0) onSwipeLeft()
    else onSwipeRight()
  }

  return { onTouchStart, onTouchEnd }
}
