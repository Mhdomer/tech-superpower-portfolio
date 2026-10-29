import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenConsole }) {
  return (
    <section
      id="top"
      className="section-anchor max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 editorial-hero katana-hero grid items-center gap-10 py-12 lg:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
      style={{ color: 'var(--ink)' }}
    >
      {/* Left Column: Typographic Editorial Layout (sharara.me style) */}
      <div className="katana-hero-content">
        {/* Giant Display Name with Circular Terracotta Sun Aura */}
        <div className="hero-copy display max-w-[900px]">
          <h1 className="m-0 leading-[0.88] font-extrabold tracking-[-0.05em] text-[var(--ink)]">
            <span className="block">MOHAMED</span>
            <span className="block">MAKHLOUF</span>
          </h1>
        </div>

        {/* Editorial Subtitle & Grounded Bio */}
        <div
          className="editorial-hero-copy mt-8 max-w-[560px] text-[15px] sm:text-[16px] leading-7"
          style={{ color: 'var(--ink)' }}
        >
          <strong
            className="mono block text-[12px] uppercase tracking-[0.18em] font-bold"
            style={{ color: 'var(--brand-coral)' }}
          >
            Cloud DevSecOps & AI Security Engineer
          </strong>
          <span className="mt-4 block opacity-90" id="hero-description">
            I build self-healing cloud infrastructure and sub-115ms AI security guardrails on AWS. Senior CS student at <strong style={{ color: 'var(--ink)' }}>Universiti Teknologi Malaysia (UTM)</strong> and running clinical IT operations at <strong style={{ color: 'var(--ink)' }}>Al-Ameen Medical Complex in Riyadh</strong>: turning manual compliance drift and adversarial prompt injections into automated, sub-second security.
          </span>
        </div>

        {/* Action Buttons: Tour CTA, View Projects, and Visible Rubric Hint */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onOpenConsole}
            className="tour-cta button-primary inline-flex items-center gap-3 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] rounded-full shadow-md active:scale-95"
            data-testid="button-hero-tour"
          >
            <span>Give me tour !!</span>
            <span style={{ color: 'var(--brand-coral)' }}>⚡</span>
          </button>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] rounded-full border transition-all hover:scale-105 shadow-sm"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--line-strong)',
              color: 'var(--ink)',
            }}
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Visible Hackathon Rubric Hint */}
          <button
            onClick={onOpenConsole}
            className="inline-flex items-center gap-2 px-4 py-3 text-[11px] font-mono font-bold tracking-wider uppercase rounded-full border transition-transform hover:scale-105 shadow-sm"
            style={{
              background: 'var(--surface-soft)',
              borderColor: 'var(--line)',
              color: 'var(--brand-coral)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ background: 'var(--brand-coral)' }}
            />
            <span>AWS Security Lab (Hint!)</span>
          </button>
        </div>

        {/* Telemetry numbers row */}
        <div
          className="mt-10 pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono"
          style={{ borderColor: 'var(--line)' }}
        >
          <div>
            <span className="opacity-60 block text-[10px] uppercase">UTM GPA</span>
            <span className="font-bold text-sm">3.43</span>
            <span className="text-[10px] opacity-70 block">Dean's List</span>
          </div>
          <div>
            <span className="opacity-60 block text-[10px] uppercase">CTF Podium</span>
            <span className="font-bold text-sm" style={{ color: 'var(--brand-coral)' }}>
              3rd Place
            </span>
            <span className="text-[10px] opacity-70 block">ASEAN Cyber Race</span>
          </div>
          <div>
            <span className="opacity-60 block text-[10px] uppercase">Remediation</span>
            <span className="font-bold text-sm">&lt; 2.4s</span>
            <span className="text-[10px] opacity-70 block">A2 EventBridge</span>
          </div>
          <div>
            <span className="opacity-60 block text-[10px] uppercase">AI Guardrail</span>
            <span className="font-bold text-sm">115ms</span>
            <span className="text-[10px] opacity-70 block">Aegis-2B Bedrock</span>
          </div>
        </div>
      </div>

      {/* Right Column: Framed Portrait of Mohamed Makhlouf (sharara.me exact frame) */}
      <div className="katana-hero-photo justify-self-center lg:justify-self-end w-full max-w-[340px]">
        <div className="hero-photo-wrap relative shadow-2xl">
          <div className="hero-photo-slot" data-testid="hero-photo-slot">
            <div className="hero-photo-filled">
              <img
                src="/assets/avatar/mohamed-makhlouf-square.jpg"
                alt="Mohamed Makhlouf - portrait"
                width={480}
                height={482}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.src = '/assets/avatar/mohamed-headshot.jpg';
                }}
              />
            </div>
          </div>
          <div
            className="px-4 py-3 border-t flex items-center justify-between text-[11px] font-mono"
            style={{ borderColor: 'var(--line)' }}
          >
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Riyadh & UTM</span>
            </span>
            <span className="opacity-60 uppercase text-[10px]">Cloud DevSecOps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
