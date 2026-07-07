import blackngraylogo from '../assets/blackngraylogo.png'

export default function Footer() {
  return (
    <footer>
      <div className="footercontent">
        <p>© 2026 Aaron Kiel D. Pagulayan &nbsp;|&nbsp; Coding the structure. Designing the soul.</p>
        <img src={blackngraylogo} alt="Footer Logo" className="footer-logo" />
      </div>
    </footer>
  )
}
