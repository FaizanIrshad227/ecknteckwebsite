const metrics = [
  { val: "97%", label: "Model accuracy avg.", color: "var(--accent)" },
  { val: "3x", label: "Faster time-to-insight", color: "var(--accent2)" },
  { val: "40%", label: "Cost reduction", color: "var(--accent)" },
  { val: "24/7", label: "System uptime", color: "var(--accent2)" },
];

const bars = [
  { label: "AI / ML", pct: 92 },
  { label: "Data Engineering", pct: 88 },
  { label: "Cloud & MLOps", pct: 85 },
];

const points = [
  { title: "Outcome-focused:", body: "Every project is scoped around a business metric, not just a technical deliverable." },
  { title: "Full-stack AI:", body: "From raw data ingestion to deployed model — we own the entire pipeline." },
  { title: "Transparent process:", body: "Weekly updates, clear milestones, and no black-box models." },
  { title: "Scalable by design:", body: "We build systems that grow with your business, not ones you'll have to replace." },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: "6rem 6%", display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "5rem", alignItems: "center",
    }}>
      <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 20, padding: "2rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -80, right: -80, width: 250, height: 250,
          borderRadius: "50%", background: "radial-gradient(circle,rgba(0,212,170,0.15) 0%,transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.2rem" }}>
          {metrics.map(m => (
            <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem 1.2rem" }}>
              <div style={{ fontFamily: "var(--font-space)", fontSize: "1.6rem", fontWeight: 700, color: m.color }}>{m.val}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.2rem" }}>{m.label}</div>
            </div>
          ))}
        </div>
        {bars.map((b, i) => (
          <div key={b.label} style={{ marginTop: i === 0 ? 0 : "0.8rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--muted)", marginBottom: "0.4rem" }}>
              <span>{b.label}</span><span>{b.pct}%</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 6, overflow: "hidden" }}>
              <div style={{ width: `${b.pct}%`, height: "100%", background: "linear-gradient(90deg,var(--accent),var(--accent2))", borderRadius: 6 }} />
            </div>
          </div>
        ))}
      </div>

      <div>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>
          Who we are
        </div>
        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: "1rem", lineHeight: 1.15 }}>
          Built by data scientists,<br />driven by outcomes
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem" }}>
          Ecknteck is a specialist AI and data services firm. We partner with startups and enterprises
          to build production-ready AI systems that deliver measurable business impact — not just demos.
        </p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {points.map(p => (
            <li key={p.title} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start", fontSize: "0.92rem", color: "var(--muted)" }}>
              <span style={{ color: "var(--accent)", fontSize: "0.65rem", marginTop: "0.35rem", flexShrink: 0 }}>✦</span>
              <span><strong style={{ color: "#F0EFF8", fontWeight: 500 }}>{p.title}</strong> {p.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
