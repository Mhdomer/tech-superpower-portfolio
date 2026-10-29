import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenConsole, onStartTour }) {
  return (
    <section
      id="top"
      className="section-anchor max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 editorial-hero katana-hero grid items-center gap-12 py-16 lg:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16"
      style={{ color: 'var(--ink)' }}
    >
      {/* Left Column: Typographic Editorial Layout (sharara.me clean style) */}
      <div className="katana-hero-content">
        {/* Display Name with Subtle Terracotta Sun Aura */}
        <div className="hero-copy display max-w-[540px]">
          <h1 className="m-0 font-extrabold text-[var(--ink)]">
            <span className="block tracking-[-0.01em]">MOHAMED</span>
            <span className="block tracking-[-0.01em] mt-1 sm:mt-1.5">MAKHLOUF</span>
          </h1>
        </div>

        {/* Editorial Subtitle & Grounded Bio */}
        <div
          className="editorial-hero-copy mt-7 max-w-[520px] text-[14.5px] sm:text-[15.5px] leading-relaxed"
          style={{ color: 'var(--ink)' }}
        >
          <strong
            className="mono block text-[11.5px] uppercase tracking-[0.18em] font-bold"
            style={{ color: 'var(--brand-coral)' }}
          >
            Cloud DevSecOps & AI Security Engineer
          </strong>
          <p className="mt-3.5 opacity-90 leading-relaxed font-sans" id="hero-description">
            I build self-healing cloud infrastructure and sub-115ms AI security guardrails on AWS. Senior CS student at <strong style={{ color: 'var(--ink)' }}>Universiti Teknologi Malaysia (UTM)</strong> and running clinical IT operations at <strong style={{ color: 'var(--ink)' }}>Al-Ameen Medical Complex in Riyadh</strong>: turning manual compliance drift and adversarial prompt injections into automated, sub-second security.
          </p>
        </div>

        {/* Clean Action Buttons: Give Me Tour & Hackathon Security Lab Hint */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <button
            type="button"
            onClick={onStartTour || onOpenConsole}
            className="tour-cta button-primary inline-flex items-center gap-2.5 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.16em] rounded-full shadow-md active:scale-95 transition-all hover:scale-105"
            data-testid="button-hero-tour"
          >
            <span>Give me tour !!</span>
            <span style={{ color: 'var(--brand-coral)' }}>⚡</span>
          </button>

          {/* Visible Hackathon Rubric Invariant Hint */}
          <button
            type="button"
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
      </div>

      {/* Right Column: Framed Portrait of Mohamed Makhlouf (sharara.me clean frame) */}
      <div className="katana-hero-photo justify-self-center lg:justify-self-end w-full max-w-[320px]">
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
            className="px-4 py-2.5 border-t flex items-center justify-between text-[11px] font-mono"
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
