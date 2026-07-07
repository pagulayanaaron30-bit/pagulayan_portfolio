import beReadyImg from '../assets/be-ready-mobile-app.jpg'
import jorgieImg from '../assets/jorgie-dental-clinic.png'
import redFileImg from '../assets/TheRedFile.png'
import frierenImg from '../assets/frieren.png'
import valTakeImg from '../assets/ValTake.png'
import schedulerImg from '../assets/scheduler-system.png'

const PROJECTS = [
  {
    image: beReadyImg,
    tech: 'Flutter · React · Firebase',
    title: (
      <>Be Ready: Mobile App System<br />Capstone Project</>
    ),
    desc: 'A Mobile Warning and Disaster Preparedness App Focused on Localized Climate Change Risks.',
  },
  {
    image: jorgieImg,
    tech: 'HTML & CSS · JavaScript · Python · MySQL',
    title: 'Jorgie Dental Clinic Appointment System',
    desc: 'A web system for managing dental appointments and patient records.',
  },
  {
    image: redFileImg,
    tech: 'Unity · C#',
    title: 'The Red File: A Interactive Fiction Game',
    desc: 'An interactive fiction game with branching storylines and immersive narrative design.',
  },
  {
    image: frierenImg,
    tech: 'Godot Engine · GDScript',
    title: 'Frieren: Journey Game',
    desc: (
      <>A fan-made 2D game inspired by the anime <em>Frieren: Beyond Journey's End</em>. Developed using Godot Engine and GDScript, showcasing skills in game development, UI design, and storytelling.</>
    ),
  },
  {
    image: valTakeImg,
    tech: 'HTML & CSS · SSMS',
    title: 'ValTake: A Survey Management System',
    desc: 'A survey management system designed for efficient data collection and analysis.',
  },
  {
    image: schedulerImg,
    tech: 'Python · SSMS',
    title: 'BSIT Student Schedule Manager System',
    desc: 'A web-based system for managing student schedules and course registrations.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-inner wide">
        <p className="section-label reveal">What I've built</p>
        <h2 className="section-title reveal reveal-d1">Projects &amp; Achievements</h2>
        <div className="achievements-grid reveal reveal-d2">
          {PROJECTS.map((p, i) => (
            <article className="achievement-card" key={i}>
              <div className="achievement-image">
                <img src={p.image} alt={typeof p.title === 'string' ? p.title : 'Project'} />
              </div>
              <div className="achievement-body">
                <p className="achievement-tech">{p.tech}</p>
                <h3 className="achievement-title">{p.title}</h3>
                <p className="achievement-desc">{p.desc}</p>
              </div>
            </article>
          ))}

          <article className="achievement-card" style={{ opacity: 0.45, pointerEvents: 'none' }}>
            <div
              className="achievement-image"
              style={{ background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em' }}>
                COMING SOON
              </span>
            </div>
            <div className="achievement-body">
              <p className="achievement-tech">Next Project</p>
              <h3 className="achievement-title">More on the way…</h3>
              <p className="achievement-desc">
                Stay tuned for upcoming projects in related to development, creative designing, and beyond.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
