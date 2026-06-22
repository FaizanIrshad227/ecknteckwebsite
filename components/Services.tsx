"use client";
import { useState } from "react";

const services = [
  { icon: "🤖", title: "AI Model Development", desc: "Custom machine learning and deep learning models trained on your data — built to solve your specific business problem.", tags: ["LLMs", "Computer Vision", "NLP"] },
  { icon: "📊", title: "Data Engineering", desc: "Robust pipelines that collect, clean, and centralise your data — giving your team a single source of truth.", tags: ["ETL Pipelines", "Data Lakes", "Real-time"] },
  { icon: "⚡", title: "Intelligent Automation", desc: "Automate repetitive workflows using AI agents — reduce manual work and let your team focus on what matters.", tags: ["AI Agents", "RPA", "Workflow AI"] },
  { icon: "📈", title: "Analytics & BI", desc: "Interactive dashboards and predictive analytics that give decision-makers real-time visibility into performance.", tags: ["Dashboards", "Forecasting", "KPI Tracking"] },
  { icon: "🔗", title: "AI Integration", desc: "Embed AI capabilities into your existing products and systems — APIs, SDKs, or custom middleware.", tags: ["API Design", "RAG Systems", "Embeddings"] },
  { icon: "🛡️", title: "AI Strategy & Consulting", desc: "Not sure where to start? We map your data assets and identify high-ROI AI opportunities across your organisation.", tags: ["Roadmap", "Audit", "POC"] },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" style={{ padding: "6rem 6%", background: "var(--bg2)" }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>
          What we do
        </div>
        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: "1rem", lineHeight: 1.15 }}>
          Our services
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: 520, lineHeight: 1.75 }}>
          End-to-end AI and data solutions tailored to your business goals — from strategy to deployment.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
        {services.map((s, i) => (
          <div
            key={s.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${hovered === i ? "rgba(108,99,255,0.3)" : "var(--border)"}`,
              borderRadius: 16, padding: "2rem",
              transform: hovered === i ? "translateY(-4px)" : "none",
              transition: "border-color 0.3s, transform 0.3s",
              position: "relative", overflow: "hidden",
            }}
          >
            {hovered === i && (
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg,var(--accent),var(--accent2))",
              }} />
            )}
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: "rgba(108,99,255,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "1.2rem", fontSize: "1.4rem",
            }}>
              {s.icon}
            </div>
            <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.6rem" }}>
              {s.title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.2rem" }}>
              {s.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: "0.72rem", padding: "0.2rem 0.6rem", borderRadius: 6,
                  background: "rgba(108,99,255,0.1)", color: "#A09BFF",
                  border: "1px solid rgba(108,99,255,0.2)",
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
