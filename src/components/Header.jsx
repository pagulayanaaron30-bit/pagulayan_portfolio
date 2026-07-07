import weblogo from '../assets/weblogo.png'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Header({ activeSection }) {
  return (
    <header>
      <div className="logo">
        <img src={weblogo} alt="Logo" />
      </div>
      <nav>
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.label}
            </a>
          </li>
        ))}
      </nav>
    </header>
  )
}
