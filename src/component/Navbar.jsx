import { useState, useEffect } from "react";
import useTheme from "../hooks/useTheme";
import "../styles/Navbar.css";

const links = ["about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map((l) => document.getElementById(l));
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom >= 80;
      });
      setActive(current ? current.id : "");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">
        <span>dorela</span>.dev
      </a>
      <ul className="nav-links">
        {links.map((link, i) => (
          <li key={link}>
            <a href={`#${link}`} className={active === link ? "active" : ""}>
              <span className="num">0{i + 1}.</span>
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button className="theme-toggle" onClick={toggle} title="toggle theme">
          {theme === "dark" ? "[ light_mode ]" : "[ dark_mode ]"}
        </button>
        <a href="/resume.pdf" target="_blank" className="nav-resume">
          resume.pdf
        </a>
      </div>
    </nav>
  );
}
