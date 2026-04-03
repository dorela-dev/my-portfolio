import "../styles/Experience.css";

const jobs = [
  {
    date: "01/2025 – Present",
    company: "TeamSystem",
    role: "Frontend Developer & Scrum Master",
    accent: "accent",
    bullets: [
      "Introduced Agile ceremonies across two teams.",
      "Story points & velocity tracking in Jira.",
      "Coordinated one project to production.",
      "Lead Dev + Scrum Master across multiple teams.",
    ],
  },
  {
    date: "09/2023 – Present",
    company: "TeamSystem",
    role: "Frontend Developer (React)",
    accent: "purple",
    bullets: [
      "Built a new project from scratch.",
      "Integrated APIs via Swagger & Postman.",
      "Adopted Redux, Zustand, Yup, TypeScript.",
    ],
  },
  {
    date: "06/2023 – 08/2023",
    company: "TeamSystem",
    role: "React Intern",
    accent: "blue",
    bullets: ["Extensive React training.", "Selected for full-time role."],
  },
  {
    date: "03/2023 – 05/2023",
    company: "Ikons",
    role: "Mendix Intern",
    accent: "blue",
    bullets: [
      "Built projects on Mendix low-code.",
      "Earned Rapid Developer cert.",
    ],
  },
  {
    date: "09/2021 – 11/2021",
    company: "Taleas",
    role: "Software Developer Intern",
    accent: "blue",
    bullets: [
      "Implemented features & debugged apps.",
      "Deepened software design knowledge.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <p className="section-label">// 03. where i've worked</p>
      <h2 className="section-title">experience</h2>

      <div className="h-timeline">
        <div className="h-line" />
        <div className="h-track">
          {jobs.map((job, i) => (
            <div className="h-item" key={i}>
              <div className="h-dot-wrap">
                <div className={`h-dot ${job.accent}`} />
              </div>
              <div className={`h-card ${job.accent}`}>
                <div className="h-date">{job.date}</div>
                <div className={`h-company ${job.accent}`}>{job.company}</div>
                <div className="h-role">{job.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="edu-section">
        <p className="edu-label">// education</p>
        <div className="edu-card">
          <div>
            <div className="edu-name">
              Bachelor of Technology — Information and Communication
            </div>
            <div className="edu-sub">
              Faculty of Natural Science · Tirana, Albania
            </div>
          </div>
          <div className="edu-date">09/2019 – 07/2022</div>
        </div>
      </div>
    </section>
  );
}
