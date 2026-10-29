import React from 'react';
import { ShieldCheck, ArrowRight, ExternalLink, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero({ onOpenConsole, onSelectImage }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Ziad Sharara Typographic Layout */}
          <div className="lg:col-span-7 space-y-6 relative">
            {/* The circular warm terracotta backdrop behind the name */}
            <div className="absolute -top-10 -left-6 sm:left-44 w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-terracotta-dark/60 blur-2xl pointer-events-none -z-10"></div>
            <div className="absolute top-2 left-44 w-40 h-40 rounded-full bg-terracotta-dark/40 pointer-events-none -z-10 hidden sm:block"></div>

            {/* Giant Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                Mohamed<br />
                Makhlouf
              </h1>
            </div>

            {/* Subtitle in Terracotta Coral */}
            <div className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-terracotta-500">
              Cloud DevSecOps & AI Security Engineer
            </div>

            {/* Grounded Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-sans">
              I build self-healing cloud infrastructure and sub-115ms AI security guardrails on AWS. Senior CS student at <strong className="text-white">Universiti Teknologi Malaysia (UTM)</strong> and running IT operations at <strong className="text-white">Al-Ameen Medical Complex in Riyadh</strong>: turning manual drift and adversarial prompt injections into automated, sub-second security.
            </p>

            {/* Hackathon Rubric Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800 border border-white/5 text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse"></span>
              <span>AWS Student Builder Challenge 2026</span>
              <span className="text-slate-600">/</span>
              <span className="text-terracotta-400">Tech Superpower</span>
            </div>

            {/* Action Buttons (Cream Pill Button like Ziad Sharara's "GIVE ME TOUR !!") */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsole}
                className="px-6 py-3 rounded-full bg-cream-100 hover:bg-white text-charcoal-900 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-lg hover:shadow-terracotta-500/10 flex items-center gap-2 group"
              >
                <span>Give Me Tour !!</span>
                <span className="text-terracotta-500 group-hover:rotate-45 transition-transform">⚡</span>
              </button>

              <a
                href="#work"
                className="px-5 py-3 rounded-full bg-charcoal-800 hover:bg-charcoal-750 text-slate-300 hover:text-white border border-white/10 font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Telemetry Numbers Ticker */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">UTM GPA</span>
                <span className="text-white font-bold text-sm">3.43</span>
                <span className="text-[10px] text-slate-400 block">Dean's List</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">CTF Podium</span>
                <span className="text-terracotta-400 font-bold text-sm">3rd Place</span>
                <span className="text-[10px] text-slate-400 block">ASEAN Cyber Race</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Remediation</span>
                <span className="text-white font-bold text-sm">&lt; 2.4s</span>
                <span className="text-[10px] text-slate-400 block">A2 EventBridge</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">AI Guardrail</span>
                <span className="text-white font-bold text-sm">115ms</span>
                <span className="text-[10px] text-slate-400 block">Aegis-2B Bedrock</span>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Portrait of Mohamed Makhlouf */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 rounded-2xl bg-charcoal-800 border border-white/10 shadow-2xl max-w-sm w-full group">
              {/* Inner Framed Box */}
              <div className="rounded-xl overflow-hidden bg-charcoal-900 border border-white/5 aspect-square relative flex items-center justify-center">
                <img
                  src="/assets/avatar/mohamed-makhlouf-square.jpg"
                  alt="Mohamed Makhlouf"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/avatar/mohamed-headshot.jpg';
                  }}
                />

                {/* Subtle bottom gradient overlay for name badge */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent pointer-events-none" />

                {/* Subtle caption pill */}
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="px-3 py-1 rounded-full bg-charcoal-900/90 text-slate-200 border border-white/15 font-mono text-[11px] tracking-wider uppercase shadow-lg inline-flex items-center gap-1.5 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Mohamed Makhlouf (Omar)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
