import { useEffect, useState } from 'react'

/**
 * Tracks which <section id="..."> is currently active based on scroll
 * position, replicating the original nav-highlight-on-scroll script.
 * Returns the active section id (e.g. "home", "about", "skills"...).
 */
export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''

      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 100) {
          current = sec.getAttribute('id')
        }
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}
