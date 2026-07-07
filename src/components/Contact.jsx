import fblogo from '../assets/fblogo.png'
import emaillogo from '../assets/emaillogo.png'
import iglogo from '../assets/iglogo.png'
import tglogo from '../assets/tglogo.png'
import calllogo from '../assets/calllogo.png'

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-inner">
        <p className="section-label reveal">Let's connect</p>
        <h2 className="section-title reveal reveal-d1">Contact Me</h2>
        <p className="contact-intro reveal reveal-d2">
          Feel free to reach out through any of the channels below — whether it's
          for collaboration, questions, or just to say hi!
        </p>
        <div className="contact-list reveal reveal-d3">
          <a
            href="https://www.facebook.com/Aaronpagulayan08"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={fblogo} alt="Facebook" className="contact-icon" />
            <div className="contact-item-info">
              <span className="contact-platform">Facebook</span>
              <span className="contact-handle">Aaron Pagulayan</span>
            </div>
            <span className="contact-arrow">→</span>
          </a>

          <a href="mailto:pagulayanaaron30@gmail.com" className="contact-item">
            <img src={emaillogo} alt="Email" className="contact-icon" />
            <div className="contact-item-info">
              <span className="contact-platform">Email</span>
              <span className="contact-handle">pagulayanaaron30@gmail.com</span>
            </div>
            <span className="contact-arrow">→</span>
          </a>

          <a
            href="https://www.instagram.com/ron_kiel"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={iglogo} alt="Instagram" className="contact-icon" />
            <div className="contact-item-info">
              <span className="contact-platform">Instagram</span>
              <span className="contact-handle">@ron_kiel</span>
            </div>
            <span className="contact-arrow">→</span>
          </a>

          <div className="contact-item">
            <img src={tglogo} alt="Telegram" className="contact-icon" />
            <div className="contact-item-info">
              <span className="contact-platform">Telegram</span>
              <span className="contact-handle">@kielrr</span>
            </div>
          </div>

          <div className="contact-item">
            <img src={calllogo} alt="Phone" className="contact-icon" />
            <div className="contact-item-info">
              <span className="contact-platform">Phone</span>
              <span className="contact-handle">+63 920 686 5149</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
