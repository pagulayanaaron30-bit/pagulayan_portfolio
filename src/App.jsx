import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'
import useActiveSection from './hooks/useActiveSection.js'

function App() {
  // Handles the .reveal / .visible IntersectionObserver animation
  useScrollReveal()

  // Handles highlighting the active nav link based on scroll position
  const activeSection = useActiveSection()

  return (
    <>
      <Header activeSection={activeSection} />
      <Home />
      <About />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}

export default App
