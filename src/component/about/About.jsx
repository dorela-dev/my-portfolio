import { useState } from "react";
import "../styles/About.css";

import may from "../assets/bookclub/may.png";
import april from "../assets/bookclub/april.png";
import march from "../assets/bookclub/march.png";

const stats = [
  { num: "3", label: "years exp." },
  { num: "3", label: "projects" },
  { num: "25+", label: "sprints led" },
  { num: "2", label: "teams worked with" },
];

const posters = [
  { img: march, title: "March", book: "The Bell Jar Poster" },
  { img: april, title: "April", book: "Piranesi Poster" },
  { img: may, title: "May", book: "Água Viva Poster" },
];

const facts = [
  "On weekends I like to paint with oil colours",
  "I founded a book club based in Tirana",
  "I design the monthly read posters myself on Canva, you can view them above :D",
  "Unwinding in the afternoon with Stardew Valley, Sudoku & NYT puzzles",
  "Introduced Scrum from scratch to two teams at once",
  "I went from intern to lead developer in under two years",
];

export default function About() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="about" id="about">
      <p className="section-label">// 01. get to know me</p>
      <h2 className="section-title">about me</h2>

      <div className="about-grid">
        {/* LEFT — bio + stats */}
        <div className="left-col">
          <div className="bio">
            <p>
              Hi! I'm <span className="hl">Dorela</span>, a frontend developer
              and scrum master at <span className="hl2">TeamSystem</span> in
              Tirana, Albania. I started as a React intern in 2023 and grew into
              a lead developer and scrum master role, introducing Agile
              ceremonies from scratch across teams.
            </p>
            <p>
              I love the intersection of{" "}
              <span className="hl2">design and logic</span>, turning a Figma
              file into a living UI is genuinely one of my favourite things. I
              work with React, TypeScript, Redux and Zustand daily.
            </p>
            <p>
              Beyond code, I keep teams moving as a{" "}
              <span className="hl">scrum master</span> — running planning,
              retros and reviews, tracking velocity in Jira, and making sure
              everyone ships things that actually matter.
            </p>
          </div>

          <div className="stats-block">
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
        </div>

        {/* RIGHT — book club + fun facts */}
        <div className="right-col">
          <div>
            <p className="facts-title">// book club — monthly reads</p>
            <div className="bookclub-grid">
              {posters.map((p) => (
                <div
                  className="book-card"
                  key={p.title}
                  onClick={() => setSelected(p)}
                >
                  <div className="book-card-icon">#</div>
                  <div className="book-card-info">
                    <div className="book-card-title">{p.book}</div>
                    <div className="book-card-sub">{p.title}</div>
                  </div>
                  <div className="book-card-arrow">→</div>
                </div>
              ))}
            </div>
          </div>

          <div className="facts-block">
            <p className="facts-title">// fun facts</p>
            <ul className="facts-list">
              {facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* lightbox */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <img src={selected.img} alt={selected.title} />
            <p className="lightbox-title">{selected.book}</p>
          </div>
        </div>
      )}
    </section>
  );
}
