const SKILL_CATEGORIES = [
  {
    num: '01',
    title: 'Frontend',
    pills: ['HTML & CSS', 'JavaScript', 'Flutter', 'Responsive Design', 'React', 'Tailwind CSS'],
  },
  {
    num: '02',
    title: 'Backend',
    pills: ['Python', 'PHP', 'SSMS', 'MySQL', 'Firebase'],
  },
  {
    num: '03',
    title: 'Design',
    pills: ['Figma', 'Canva', 'UI/UX Basics', 'Photoshop', 'Adobe Illustrator'],
  },
  {
    num: '04',
    title: 'Tools',
    pills: ['GitHub', 'VS Code', 'Notepad++', 'MS Office', 'Godot Engine'],
  },
  {
    num: '05',
    title: 'Hardware & IT Support',
    pills: ['PC Hardware Troubleshooting', 'Computer Assembly & Setup', 'Driver Installation', 'Cable Management', 'Workstation Configuration'],
  },
  {
    num: '06',
    title: 'Soft Skills',
    pills: ['Design Creativity', 'Research', 'Communication', 'Adaptability'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner wide">
        <p className="section-label reveal">What I work with</p>
        <h2 className="section-title reveal reveal-d1">Skills &amp; Tools</h2>
        <div className="skills-section-grid reveal reveal-d2">
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skill-category" key={cat.num}>
              <div className="skill-category-header">
                <span className="skill-category-num">{cat.num}</span>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-pills">
                {cat.pills.map((pill) => (
                  <span className="skill-pill" key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}