import { useRef } from 'react'
import type { PointerEvent, WheelEvent, MouseEvent, DragEvent } from 'react'

/**
 * Swipe gestures for the homepage carousels, on every input:
 * - touch and mouse drag (pointer events), past `threshold` px and mostly
 *   horizontal so vertical page scroll isn't hijacked;
 * - horizontal trackpad swipe (wheel deltaX), throttled to one step per gesture.
 * After a drag, the click that follows is swallowed so dragging over the
 * active card doesn't also open it. Spread the handlers on the carousel stage.
 */
export function useCarouselGestures(onNext: () => void, onPrev: () => void, threshold = 50) {
  const start = useRef<{ x: number; y: number } | null>(null)
  const dragged = useRef(false)
  const wheelLock = useRef(0)
  const wheelSum = useRef(0)

  function onPointerDown(e: PointerEvent) {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    start.current = { x: e.clientX, y: e.clientY }
    dragged.current = false
  }

  function onPointerUp(e: PointerEvent) {
    if (!start.current) return
    const dx = e.clientX - start.current.x
    const dy = e.clientY - start.current.y
    start.current = null
    if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return
    dragged.current = true
    if (dx < 0) onNext()
    else onPrev()
  }

  function onPointerCancel() {
    start.current = null
  }

  // Links and images are natively draggable: that starts an HTML drag, which
  // cancels the pointer gesture. Block it so a mouse drag swipes instead.
  function onDragStart(e: DragEvent) {
    e.preventDefault()
  }

  function onClickCapture(e: MouseEvent) {
    if (!dragged.current) return
    dragged.current = false
    e.preventDefault()
    e.stopPropagation()
  }

  function onWheel(e: WheelEvent) {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return
    const now = Date.now()
    if (now < wheelLock.current) return
    wheelSum.current += e.deltaX
    if (Math.abs(wheelSum.current) < 40) return
    if (wheelSum.current > 0) onNext()
    else onPrev()
    wheelSum.current = 0
    wheelLock.current = now + 600
  }

  return { onPointerDown, onPointerUp, onPointerCancel, onDragStart, onClickCapture, onWheel }
}
