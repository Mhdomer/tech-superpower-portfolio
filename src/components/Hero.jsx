import React from 'react';
import { MousePointerClick, ArrowRight, Terminal } from 'lucide-react';

export default function Hero({ onOpenConsole, onStartTour, onOpenTerminal }) {
  return (
    <section
      id="top"
      className="section-anchor max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 editorial-hero katana-hero grid min-h-[calc(100dvh-72px)] items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
      style={{ color: 'var(--ink)' }}
    >
      {/* Left Column: Typographic Editorial Layout (sharara.me clean layout) */}
      <div className="katana-hero-content">
        {/* Display Name with Subtle Terracotta Sun Aura */}
        <div className="hero-copy display max-w-[900px]">
          <h1 className="m-0 font-bold text-[var(--ink)]">
            <span className="block">MOHAMED</span>
            <span className="block mt-1 sm:mt-2">MAKHLOUF</span>
          </h1>
        </div>

        {/* Editorial Subtitle & Grounded Bio */}
        <div
          className="editorial-hero-copy mt-8 max-w-[480px] text-[15.5px] leading-7 opacity-85"
          style={{ color: 'var(--ink)' }}
        >
          <strong
            className="mono block text-[12px] uppercase tracking-[0.18em]"
            style={{ color: 'var(--brand-coral)' }}
          >
            Cloud DevSecOps & AI Security Engineer
          </strong>
          <span className="mt-4 block font-sans" id="hero-description">
            I build self-healing cloud infrastructure and sub-115ms AI security guardrails on AWS. Senior CS student at <strong style={{ color: 'var(--ink)' }}>Universiti Teknologi Malaysia (UTM)</strong> and running clinical IT operations at <strong style={{ color: 'var(--ink)' }}>Al-Ameen Medical Complex in Riyadh</strong>: turning manual compliance drift and adversarial prompt injections into automated, sub-second security.
          </span>
        </div>

        {/* Action Buttons: Tour CTA, View Projects, Visible Rubric Hint & CLI */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          {/* 1. Take Me To Tour CTA (with mouse-pointer-click icon) */}
          <button
            type="button"
            onClick={onStartTour || onOpenConsole}
            className="tour-cta button-primary inline-flex items-center gap-2.5 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] rounded-full shadow-md active:scale-95 transition-all hover:scale-105"
            data-testid="button-hero-tour"
          >
            <span>Give me tour !!</span>
            <MousePointerClick className="w-4 h-4 ml-0.5" />
          </button>

          {/* 2. View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] rounded-full border transition-all hover:scale-105 shadow-sm"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--line-strong)',
              color: 'var(--ink)',
            }}
            data-testid="button-hero-projects"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* 3. The Unified Creative Feature: DevSecOps Command Center */}
          <div
            className="inline-flex items-center rounded-full p-1 border shadow-sm transition-all"
            style={{
              background: 'var(--surface-soft)',
              borderColor: 'var(--line-strong)',
            }}
          >
            <button
              type="button"
              onClick={onOpenConsole}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-mono font-bold tracking-wider uppercase rounded-full transition-transform hover:scale-105 active:scale-95 shadow-sm"
              style={{
                background: 'var(--button-bg)',
                color: 'var(--button-fg)',
              }}
              data-testid="button-hero-hint"
              title="The Creative Feature: DevSecOps Command Center (Visual Mode)"
            >
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ background: 'var(--brand-coral)' }}
              />
              <span>Command Center (Hint!)</span>
            </button>

            <button
              type="button"
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono font-semibold rounded-full opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: 'var(--ink)' }}
              title="CLI Mode (Hotkey: ~)"
              data-testid="button-hero-terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-500" />
              <span>CLI Mode</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-black/10 dark:bg-white/10 font-mono text-[10px] opacity-70">~</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Framed Portrait of Mohamed Makhlouf (sharara.me clean square frame) */}
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
        </div>
      </div>
    </section>
  );
}
