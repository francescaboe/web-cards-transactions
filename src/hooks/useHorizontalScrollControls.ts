import { useRef, useCallback } from 'react'

/**
 * A custom hook to add horizontal scroll controls to a container element. It allows scrolling left or right by a specific amount or a fallback value.
 *
 * accepts scrollAmountFallback=300 - The fallback scroll amount in pixels when the width of a child element cannot be determined.
 * return {Object} An object containing references and functions to control horizontal scrolling:
 * - `containerRef` {React.RefObject<HTMLDivElement>} - A ref to be attached to the scrollable container.
 * - `scroll` {(direction: 'left' | 'right') => void} - A function to scroll the container in the specified direction ('left' or 'right') smoothly.
 */

export function useHorizontalScrollControls(scrollAmountFallback = 300) {
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = useCallback(
    (direction: 'left' | 'right') => {
      const container = containerRef.current
      if (!container) return

      const firstCard = container.querySelector('button')
      const scrollAmount = firstCard
        ? (firstCard as HTMLElement).offsetWidth + 24 // adjust based on gap
        : scrollAmountFallback

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    },
    [scrollAmountFallback],
  )

  return { containerRef, scroll }
}
