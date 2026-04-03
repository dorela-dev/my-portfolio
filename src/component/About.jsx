import "../styles/About.css";

const stats = [
  { num: "3+", label: "years exp." },
  { num: "20+", label: "projects" },
  { num: "10+", label: "sprints led" },
  { num: "5+", label: "teams worked with" },
];

const facts = [
  "I debug best with a strong coffee in hand",
  "I've never met a CSS bug I couldn't eventually fix",
  "I keep a running list of UI details that annoy me — it's long",
  "I genuinely enjoy sprint retrospectives (yes, really)",
  "Dark mode everywhere, always, no exceptions",
];

export default function About() {
  return (
    <section className="about" id="about">
      <p className="section-label">// 01. get to know me</p>
      <h2 className="section-title">about me</h2>

      <div className="about-grid">
        <div className="bio">
          <p>
            Hi! I'm <span className="hl">Dorela</span>, a frontend developer and
            scrum master. I love crafting clean, intuitive interfaces that make
            people's lives a little easier — one component at a time.
          </p>
          <p>
            I got into frontend development because I've always been fascinated
            by the intersection of <span className="hl2">design and logic</span>
            . There's something deeply satisfying about turning a Figma file
            into a living, breathing UI.
          </p>
          <p>
            Beyond coding, I wear the <span className="hl">scrum master</span>{" "}
            hat — keeping teams aligned, removing blockers, and making sure we
            ship things that actually matter.
          </p>
          <p>
            When I'm not in the terminal, you'll find me exploring new tech,
            reading about agile methodologies, or pretending I'll finish my side
            projects.
          </p>
        </div>

        <div className="right-col">
          <div>
            <p className="facts-title">// stats</p>
            <div className="stats-grid">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="facts-title">// fun facts</p>
            <ul className="facts-list">
              {facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
