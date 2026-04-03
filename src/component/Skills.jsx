import "../styles/Skills.css";

const skillGroups = [
  {
    title: "frontend",
    color: "accent",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
      "Redux",
      "Zustand",
      "Yup",
      "UseForm",
    ],
  },
  {
    title: "tools & devops",
    color: "blue",
    skills: ["GitHub", "GitLab", "Docker", "Postman", "Swagger"],
  },
  {
    title: "agile & management",
    color: "purple",
    skills: ["Scrum", "Agile", "Jira", "Trello", "Notion"],
  },
];

const languages = [
  { name: "Albanian", level: "native" },
  { name: "English", level: "fluent" },
  { name: "German", level: "basic" },
];

const certs = [
  { name: "Mendix Rapid Developer", issuer: "Mendix · April 2023" },
  {
    name: "Scrum Master Accredited Certification",
    issuer: "Scrum Institute · October 2025",
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <p className="section-label">// 02. what i work with</p>
      <h2 className="section-title">skills</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className={`group-title ${group.color}`}>{group.title}</div>
            <div className="tags">
              {group.skills.map((s) => (
                <span className={`tag ${group.color}`} key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="skill-group span-full">
          <div className="group-title accent">languages</div>
          <div className="tags">
            {languages.map((l) => (
              <span className="tag accent" key={l.name}>
                {l.name} <span className="lang-level">{l.level}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="certs-label">// certifications</p>
      <div className="certs">
        {certs.map((c) => (
          <div className="cert-card" key={c.name}>
            <div className="cert-icon">#</div>
            <div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
