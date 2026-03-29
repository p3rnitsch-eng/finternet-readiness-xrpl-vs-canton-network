import { useState } from "react";

export default function DashboardHeader() {
  const [rulesOpen, setRulesOpen] = useState(false);

  return (
    <header className="px-0 pb-8 pt-16 text-center">
      <div className="animate-fade-up-1 mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-fin-cyan">
        Finternet Glossary — Concept Alignment
      </div>

      <h1 className="animate-fade-up-2 mb-4 font-syne text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.1]">
        <span className="text-fin-xrpl">XRPL</span>
        <span className="text-fin-text"> vs </span>
        <span className="text-fin-cyan">Canton</span>
        <br />
        <span className="text-fin-text">Finternet Alignment Map</span>
      </h1>

      <p className="animate-fade-up-3 mx-auto max-w-[660px] text-[14px] leading-[1.7] text-fin-muted">
        Glossary concepts are <em>definitions</em>, not a compliance checklist.
        Scores below indicate how strongly each network aligns (natively vs via
        wrappers), and whether claims require public evidence.
      </p>

      {/* Scoring rules accordion */}
      <div className="animate-fade-up-3 mx-auto mt-[34px] max-w-[820px] rounded-[14px] border border-fin-border bg-white/[0.02] px-4 py-3.5 text-left">
        <button
          type="button"
          onClick={() => setRulesOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-2 font-syne text-[12px] font-bold uppercase tracking-[0.12em] text-fin-text outline-none"
          aria-expanded={rulesOpen}
          data-ocid="rules.toggle"
        >
          <span>Scoring rules (read this before arguing on the internet)</span>
          <span
            className="shrink-0 text-fin-muted transition-transform duration-200"
            style={{ transform: rulesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ▾
          </span>
        </button>

        {rulesOpen && (
          <div className="mt-3 font-mono text-[12px] leading-[1.7] text-fin-muted">
            <span className="text-fin-text font-semibold">
              ✅ Strong alignment
            </span>{" "}
            = native / first-class support for the concept.
            <span className="px-2 opacity-60">•</span>
            <span className="text-fin-text font-semibold">⚠️ Partial</span> =
            possible but depends on wrappers, integrations, or constrained
            feature-set.
            <span className="px-2 opacity-60">•</span>
            <span className="text-fin-text font-semibold">❌ Weak</span> = not
            supported by design (or conflicts with base architecture).
            <br />
            <br />
            <span className="text-fin-text font-semibold">Basis tags:</span>{" "}
            "Protocol-native" (base layer), "System-level (wrappers)"
            (achievable via surrounding systems), "Deployment-claim" (needs
            cited evidence).
          </div>
        )}
      </div>
    </header>
  );
}
