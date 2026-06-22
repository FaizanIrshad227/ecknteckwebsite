export default function Footer() {
  return (
    <footer style={{
      padding: "2rem 6%",
      borderTop: "1px solid var(--border)",
      display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
    }}>
      <div style={{ fontFamily: "var(--font-space)", fontSize: "1rem", fontWeight: 700 }}>
        Eckn<span style={{ color: "var(--accent)" }}>teck</span>
      </div>
      <a
        href="https://www.eckntecklearning.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "0.85rem", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}
      >
        Trainings & Workshops →
      </a>
      <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
        © 2026 Ecknteck. All rights reserved.
      </div>
    </footer>
  );
}
