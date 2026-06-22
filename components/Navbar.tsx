"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1.1rem 6%",
      background: "rgba(10,10,15,0.85)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <Link href="/" style={{
        fontFamily: "var(--font-space)", fontSize: "1.3rem", fontWeight: 700,
        letterSpacing: "-0.5px", color: "#F0EFF8", textDecoration: "none",
      }}>
        Eckn<span style={{ color: "var(--accent)" }}>teck</span>
      </Link>

      <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none" }}>
        {["Services", "About", "Contact", "Trainings"].map((item) => (
          <li key={item}>
            <a href={item === "Trainings" ? "https://www.eckntecklearning.com" : `#${item.toLowerCase()}`}
            target={item === "Trainings" ? "_blank" : undefined}
            rel={item === "Trainings" ? "noopener noreferrer" : undefined}
            style={{
              color: "var(--muted)", fontSize: "0.9rem", textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F0EFF8")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{item}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" style={{
        background: "var(--accent)", color: "#fff", padding: "0.55rem 1.3rem",
        borderRadius: "8px", fontSize: "0.875rem", fontWeight: 500,
        textDecoration: "none",
      }}>
        Get in touch
      </a>
    </nav>
  );
}
