import React from 'react';
import { ArrowRight, ShieldCheck, Terminal, ExternalLink, Swords, Cloud, Lock } from 'lucide-react';

export default function Hero({ onOpenConsole, onTriggerKatana }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sakura-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-engine-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          {/* Top Pill / Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-800/80 border border-white/10 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300">UTM CS Senior · Industrial Training at Al-Ameen IT, Riyadh</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Automating <span className="text-transparent bg-clip-text bg-gradient-to-r from-sakura-300 via-white to-engine-cyan">cloud security defenses</span> and securing agentic AI.
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
            I am <strong className="text-white font-semibold">Mohamed Makhlouf</strong> (Mhdomar), a Cloud DevSecOps & AI Security engineer. 
            I build event-driven self-healing cloud architectures on AWS, enforce shift-left security gates with Trivy and Checkov, and engineer low-latency guardrails for autonomous AI systems.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-sakura-500 hover:bg-sakura-600 text-white font-semibold transition-all shadow-lg shadow-sakura-500/25 flex items-center gap-2 text-sm"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Creative Feature Trigger Button in Hero */}
            <button
              onClick={onOpenConsole}
              className="px-6 py-3 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 border border-white/10 hover:border-sakura-400/50 text-slate-200 hover:text-white font-medium transition-all flex items-center gap-2 text-sm font-mono shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-sakura-400" />
              <span>Launch Security Console 🛡️</span>
            </button>

            {/* Katana Screen Slash Trigger */}
            <button
              onClick={onTriggerKatana}
              className="px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all"
              title="Slice screen with cyber katana"
            >
              <Swords className="w-4 h-4 text-sakura-400" />
              <span>Slice Screen ⚔️</span>
            </button>

            <a
              href="https://github.com/Mhdomer"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-sm font-mono flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Feature Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="p-3 rounded-lg glass-card">
              <span className="text-slate-400 block mb-1">CTF Finals</span>
              <span className="text-sakura-300 font-bold">3rd Place ASEAN</span>
            </div>
            <div className="p-3 rounded-lg glass-card">
              <span className="text-slate-400 block mb-1">AI Guardrail Latency</span>
              <span className="text-engine-cyan font-bold">~115ms p99 Aegis</span>
            </div>
            <div className="p-3 rounded-lg glass-card">
              <span className="text-slate-400 block mb-1">Remediation Engine</span>
              <span className="text-emerald-300 font-bold">325+ Unit Tests</span>
            </div>
            <div className="p-3 rounded-lg glass-card">
              <span className="text-slate-400 block mb-1">Academic Standing</span>
              <span className="text-amber-300 font-bold">UTM Dean's List (3.43)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
