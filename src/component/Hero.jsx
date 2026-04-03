import { useEffect, useRef } from "react";
import "../styles/Hero.css";

const terminalSteps = [
  { type: "prompt" },
  { type: "cmd", text: " whoami" },
  { type: "out", text: "frontend-dev + scrum-master", cls: "out" },
  { type: "prompt" },
  { type: "cmd", text: " cat skills.txt" },
  { type: "out", text: "React · TypeScript · CSS", cls: "green" },
  { type: "out", text: "Agile · Scrum · Jira", cls: "green" },
  { type: "prompt" },
];

export default function Hero() {
  const termRef = useRef(null);

  useEffect(() => {
    const box = termRef.current;
    let i = 0,
      ci = 0,
      el = null;
    let timeout;

    const tick = () => {
      if (i >= terminalSteps.length) return;
      const step = terminalSteps[i];

      if (step.type === "prompt") {
        el = document.createElement("div");
        const s = document.createElement("span");
        s.className = "tp";
        s.textContent = "dorela@macbook:~$";
        el.appendChild(s);
        box.appendChild(el);
        i++;
        timeout = setTimeout(tick, 200);
        return;
      }
      if (step.type === "cmd") {
        if (ci <= step.text.length) {
          let tc = el.querySelector(".tc");
          if (!tc) {
            tc = document.createElement("span");
            tc.className = "tc";
            el.appendChild(tc);
          }
          tc.textContent = step.text.slice(0, ci);
          ci++;
          timeout = setTimeout(tick, 55 + Math.random() * 35);
        } else {
          ci = 0;
          i++;
          timeout = setTimeout(tick, 300);
        }
        return;
      }
      if (step.type === "out") {
        const d = document.createElement("div");
        d.className = step.cls === "green" ? "tg" : "to";
        d.textContent = step.text;
        box.appendChild(d);
        i++;
        timeout = setTimeout(tick, 100);
      }
      box.scrollTop = box.scrollHeight;
    };

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-pre">// hello world, i'm</p>
        <h1 className="hero-name">
          Dorela <span>Sela</span>
        </h1>
        <h2 className="hero-title">Frontend Developer &amp; Scrum Master</h2>
        <p className="hero-desc">
          I build <span className="hl">pixel-perfect</span>, accessible web
          experiences and lead agile teams to ship products people love.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            view my work
          </a>
          <a href="#contact" className="btn-secondary">
            get in touch
          </a>
        </div>
      </div>

      <div className="hero-terminal">
        <div className="term-bar">
          <span className="dot r" />
          <span className="dot y" />
          <span className="dot g" />
        </div>
        <div className="term-body" ref={termRef} />
      </div>
    </section>
  );
}
