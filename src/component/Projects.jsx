import "../styles/Projects.css";

const projects = [
  {
    name: "Sicurezza Cantieri",
    company: "TeamSystem",
    status: "live",
    accent: "accent",
    desc: "A construction site safety management platform. Built from the ground up as lead developer, handling frontend architecture and API integration.",
    tags: ["React", "TypeScript", "Redux", "Swagger"],
    link: "https://www.teamsystem.com/construction/sicurezza-cantieri/",
  },
  {
    name: "Construction Project",
    company: "TeamSystem",
    status: "wip",
    accent: "purple",
    desc: "A construction management solution developed with cross-functional teams. Integrated backend services and improved performance.",
    tags: ["React", "TypeScript", "Zustand", "Postman"],
  },
  {
    name: "Art në Lagje",
    company: "Freelance",
    status: "wip",
    accent: "blue",
    desc: "A community platform for an apartment area — connecting residents, sharing local updates and managing neighbourhood activities.",
    tags: ["React", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="section-label">// 04. things i've built</p>
      <h2 className="section-title">projects</h2>
      <div className="projects-grid">
        {projects.map((p) => {
          const CardWrapper = p.link ? "a" : "div";
          const linkProps = p.link
            ? { href: p.link, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <CardWrapper
              className={`proj-card ${p.accent}`}
              key={p.name}
              {...linkProps}
            >
              <div className="proj-top">
                <div className={`proj-icon ${p.accent}`}>{"{ }"}</div>
                <div className="proj-top-right">
                  <span
                    className={`proj-status ${p.status === "live" ? "live" : "wip"}`}
                  >
                    {p.status === "live" ? "live" : "in progress"}
                  </span>
                  {p.link && <span className="proj-arrow">↗</span>}
                </div>
              </div>
              <div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-company">{p.company}</div>
              </div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span className="proj-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}
