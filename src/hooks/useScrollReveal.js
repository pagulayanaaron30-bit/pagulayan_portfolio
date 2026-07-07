import { useEffect } from 'react'

/**
 * Replicates the original vanilla-JS IntersectionObserver behavior:
 * adds the 'visible' class to any element with class 'reveal'
 * once it scrolls into view.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    // Cleanup on unmount to avoid memory leaks
    return () => observer.disconnect()
  }, [])
}
