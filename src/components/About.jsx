import profilepic from '../assets/profilepic.png'

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <p className="section-label reveal">Get to know me</p>
        <h2 className="section-title reveal reveal-d1">About Me</h2>
        <div className="about-grid reveal reveal-d2">
          <div className="profile-pic-wrap">
            <img src={profilepic} alt="Aaron Pagulayan" className="profile-pic" />
          </div>
          <div className="about-content">
            <h2>Hi, I'm Aaron 👋</h2>
            <p>
              My name is <strong style={{ color: 'var(--white)' }}>Aaron Kiel D. Pagulayan</strong>,
              an Information Technology student at{' '}
              <strong style={{ color: 'var(--white)' }}>Pamantasan ng Lungsod ng Valenzuela</strong>.
              I have a passion for UI/UX development and designing, specializing in
              front-end work. My journey into IT started with a curiosity for creating
              websites, and I'm now honing my skills to become a web front-end developer.Beyond the front-end, 
              I also have hands-on experience in hardware troubleshooting and computer setup, giving me a well-rounded 
              foundation in both software and hardware.
            </p>
            <div className="divider"></div>
            <h2>Career Aims</h2>
            <p>
              I'm working towards becoming a front-end developer focused on building
              clean, functional, and visually engaging web experiences. As I grow in
              the field, I want to contribute to real projects that solve real problems
              — and keep pushing my skills in UI/UX, modern frameworks, and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
