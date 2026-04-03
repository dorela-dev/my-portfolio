import { useState } from "react";
import TerminalLoader from "../src/component/TerminalLoader";
import Navbar from "../src/component/Navbar";
import Hero from "../src/component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) return <TerminalLoader onDone={() => setLoaded(true)} />;

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
