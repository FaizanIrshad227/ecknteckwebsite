"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" style={{ padding: "6rem 6%", background: "var(--bg2)", textAlign: "center" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>
          Get started
        </div>
        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: "1rem" }}>
          Let&apos;s build something smart
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
          Tell us about your challenge and we&apos;ll get back to you within 24 hours.
        </p>

        <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 20, padding: "2.5rem", textAlign: "left" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
              <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Message sent!</h3>
              <p style={{ color: "var(--muted)" }}>We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                {[{ id: "name", label: "Full name", type: "text", placeholder: "Ahmed Khan" },
                  { id: "email", label: "Email address", type: "email", placeholder: "you@company.com" }].map(f => (
                  <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label htmlFor={f.id} style={{ fontSize: "0.82rem", color: "var(--muted)" }}>{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} style={{
                      background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
                      borderRadius: 10, padding: "0.7rem 1rem", color: "#F0EFF8", fontSize: "0.9rem", outline: "none",
                    }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1rem" }}>
                <label htmlFor="service" style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Service of interest</label>
                <select id="service" style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
                  borderRadius: 10, padding: "0.7rem 1rem", color: "#F0EFF8", fontSize: "0.9rem", outline: "none",
                }}>
                  <option value="">Select a service...</option>
                  {["AI Model Development","Data Engineering","Intelligent Automation","Analytics & BI","AI Integration","AI Strategy & Consulting"].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1rem" }}>
                <label htmlFor="message" style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Tell us about your project</label>
                <textarea id="message" rows={4} placeholder="Describe your challenge, data sources, and desired outcome..." style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
                  borderRadius: 10, padding: "0.7rem 1rem", color: "#F0EFF8", fontSize: "0.9rem",
                  outline: "none", resize: "vertical", fontFamily: "inherit",
                }} />
              </div>
              <button onClick={() => setSubmitted(true)} style={{
                width: "100%", background: "var(--accent)", color: "#fff", border: "none",
                padding: "0.85rem", borderRadius: 10, fontSize: "0.95rem", fontWeight: 600,
                cursor: "pointer",
              }}>
                Send message →
              </button>
            </>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Email", val: "letsdoit@ecknteck.com" },
            { label: "Location", val: "Lahore, Pakistan" },
            { label: "Response time", val: "Within 24 hours" },
          ].map(c => (
            <div key={c.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{c.label}</span>
              <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{c.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
