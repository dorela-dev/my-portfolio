import { useState, useEffect, useRef } from "react";

const steps = [
  { type: "cmd", text: "pwd" },
  { type: "out", text: "/home/dorela/projects", cls: "white" },
  { type: "cmd", text: "cd portfolio" },
  { type: "cmd", text: "ls -la" },
  { type: "out", text: "drwxr-xr-x  src/", cls: "" },
  { type: "out", text: "drwxr-xr-x  public/", cls: "" },
  { type: "out", text: "-rw-r--r--  index.html", cls: "green" },
  { type: "out", text: "-rw-r--r--  package.json", cls: "green" },
  { type: "out", text: "-rw-r--r--  vite.config.js", cls: "green" },
  { type: "cmd", text: "npm run dev" },
  { type: "out", text: "> portfolio@1.0.0 dev", cls: "" },
  { type: "out", text: "> vite", cls: "" },
  { type: "out", text: "  VITE v5.0.0  ready in 320ms", cls: "yellow" },
  { type: "out", text: "  -> Local:   http://localhost:5173/", cls: "green" },
];

export default function TerminalLoader({ onDone }) {
  const [lines, setLines] = useState([]);
  const [skipped, setSkipped] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (skipped) return;
    let stepIdx = 0,
      charIdx = 0;
    let timeout;

    const tick = () => {
      if (stepIdx >= steps.length) {
        onDone();
        return;
      }
      const step = steps[stepIdx];

      if (step.type === "cmd") {
        if (charIdx <= step.text.length) {
          setLines((prev) => {
            const updated = [...prev];
            if (charIdx === 0) updated.push({ type: "cmd", text: "" });
            else
              updated[updated.length - 1] = {
                type: "cmd",
                text: step.text.slice(0, charIdx),
              };
            return updated;
          });
          charIdx++;
          timeout = setTimeout(tick, 60 + Math.random() * 40);
        } else {
          charIdx = 0;
          stepIdx++;
          timeout = setTimeout(tick, 300);
        }
      } else {
        setLines((prev) => [
          ...prev,
          { type: "out", text: step.text, cls: step.cls },
        ]);
        stepIdx++;
        timeout = setTimeout(tick, 80);
      }
      boxRef.current?.scrollTo(0, boxRef.current.scrollHeight);
    };

    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [skipped, onDone]);

  const handleSkip = () => {
    setSkipped(true);
    onDone();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0d1117",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        zIndex: 9999,
      }}
    >
      <button
        onClick={handleSkip}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          background: "transparent",
          border: "1px solid #444",
          color: "#888",
          fontSize: 12,
          padding: "4px 10px",
          borderRadius: 4,
          cursor: "pointer",
          fontFamily: "monospace",
        }}
      >
        skip &gt;&gt;
      </button>

      <div
        ref={boxRef}
        style={{
          width: "90%",
          maxWidth: 600,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        {lines.map((line, i) => (
          <div
            key={i}
            style={{ fontSize: 13, lineHeight: 1.8, whiteSpace: "pre" }}
          >
            {line.type === "cmd" ? (
              <>
                <span style={{ color: "#c792ea" }}>dorela</span>
                <span style={{ color: "#888" }}>@</span>
                <span style={{ color: "#82aaff" }}>macbook</span>
                <span style={{ color: "#ccc" }}>:~$ </span>
                <span style={{ color: "#f8f8f2" }}>{line.text}</span>
                {i === lines.length - 1 && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 14,
                      background: "#4ec9b0",
                      verticalAlign: "middle",
                      animation: "blink 1s step-end infinite",
                    }}
                  />
                )}
              </>
            ) : (
              <span
                style={{
                  color:
                    line.cls === "green"
                      ? "#c3e88d"
                      : line.cls === "yellow"
                      ? "#ffcb6b"
                      : line.cls === "white"
                      ? "#eeffff"
                      : "#637777",
                }}
              >
                {line.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
