export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "7rem 6% 4rem", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.07,
        backgroundImage: "linear-gradient(rgba(108,99,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.6) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div style={{
        position: "absolute", top: -200, left: -200, width: 700, height: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle,rgba(108,99,255,0.12) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -150, right: -100, width: 500, height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle,rgba(0,212,170,0.1) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 750 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.3)",
          padding: "0.35rem 1rem", borderRadius: 100, fontSize: "0.8rem",
          color: "#A09BFF", marginBottom: "2rem",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
          AI & Data Services
        </div>

        <h1 style={{
          fontFamily: "var(--font-space)", fontSize: "clamp(2.8rem,6vw,5rem)",
          fontWeight: 700, lineHeight: 1.08, letterSpacing: "-1.5px", marginBottom: "1.5rem",
        }}>
          Intelligent solutions<br />
          for <span style={{ color: "var(--accent)" }}>data-driven</span><br />
          <span style={{ color: "var(--accent2)" }}>businesses</span>
        </h1>

        <p style={{ fontSize: "1.1rem", color: "var(--muted)", maxWidth: 560, marginBottom: "2.5rem", lineHeight: 1.8 }}>
          Ecknteck builds AI systems, data pipelines, and automation tools
          that turn your raw data into actionable insight — faster than you thought possible.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#services" style={{
            background: "var(--accent)", color: "#fff", padding: "0.8rem 2rem",
            borderRadius: 10, fontSize: "0.95rem", fontWeight: 500, textDecoration: "none",
          }}>
            Explore services
          </a>
          <a href="#contact" style={{
            background: "transparent", color: "#F0EFF8", padding: "0.8rem 2rem",
            borderRadius: 10, fontSize: "0.95rem", fontWeight: 500, textDecoration: "none",
            border: "1px solid var(--border)",
          }}>
            Talk to us
          </a>
        </div>

        <div style={{
          display: "flex", gap: "3rem", marginTop: "4rem",
          paddingTop: "2.5rem", borderTop: "1px solid var(--border)", flexWrap: "wrap",
        }}>
          {[
            { num: "50+", label: "Projects delivered" },
            { num: "98%", label: "Client satisfaction" },
            { num: "5x", label: "Avg. efficiency gain" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "var(--font-space)", fontSize: "2rem", fontWeight: 700 }}>
                {num.replace(/[+%x]/, "")}
                <span style={{ color: "var(--accent)" }}>{num.match(/[+%x]/)?.[0]}</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "0.2rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
