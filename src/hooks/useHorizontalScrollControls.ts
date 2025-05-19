import { useRef, useCallback } from 'react'

/**
 * A custom hook to add horizontal scroll controls to a container element. It allows scrolling left or right by a specific amount or a fallback value.
 *
 * accepts scrollAmountFallback=300 - The fallback scroll amount in pixels when the width of a child element cannot be determined.
 * return {Object} An object containing references and functions to control horizontal scrolling:
 * - `containerRef` {React.RefObject<HTMLDivElement>} - A ref to be attached to the scrollable container.
 * - `scroll` {(direction: 'left' | 'right') => void} - A function to scroll the container in the specified direction ('left' or 'right') smoothly.
 * - `scrollElementToCenter` {(elementId: string) => void} - A function to scroll an element with the given ID to the center of the container.
 */

export function useHorizontalScrollControls(scrollAmountFallback = 300) {
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = useCallback(
    (direction: 'left' | 'right') => {
      const container = containerRef.current
      if (!container) return

      const firstCard = container.querySelector('button')
      // `offsetWidth` is a read-only property that returns the width of an element in pixels (content + padding + border)
      // It's part of the standard DOM API and gives you the actual rendered width of an element on the page.
      // For example, if your card has a width of 200px, plus 10px padding on each side and a 1px border,
      // the would be 222px (200 + 10 + 10 + 1 + 1).
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

  const scrollElementToCenter = useCallback((elementId: string) => {
    const container = containerRef.current
    const element = document.getElementById(elementId)

    if (!container || !element) return

    // Calculate the position to center the element in the container
    const containerWidth = container.offsetWidth
    const elementWidth = element.offsetWidth
    const elementLeft = element.offsetLeft

    // Center position calculation
    const scrollPosition = elementLeft - containerWidth / 2 + elementWidth / 2

    // Smooth scroll to the calculated position
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    })
  }, [])

  return { containerRef, scroll, scrollElementToCenter }
}
