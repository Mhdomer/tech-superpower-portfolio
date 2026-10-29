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

          {/* Right Column: Framed Pixel Art Ronin Cyber-Security Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 rounded-2xl bg-charcoal-800 border border-white/10 shadow-2xl max-w-sm w-full">
              {/* Inner Framed Box */}
              <div className="rounded-xl overflow-hidden bg-[#242129] border border-white/5 aspect-square relative flex items-center justify-center p-4">
                {/* SVG Pixel-Art Cyber Ronin Portrait */}
                <svg
                  viewBox="0 0 240 240"
                  className="w-full h-full object-contain"
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="crispEdges"
                >
                  {/* Subtle warm background tint */}
                  <rect width="240" height="240" fill="#2d2932" />

                  {/* Flowing Dark Samurai Hair */}
                  <path d="M 80 40 Q 120 15 160 40 Q 185 80 180 130 Q 165 95 155 80 Q 140 100 130 85 Q 110 95 95 80 Q 80 110 65 130 Q 60 80 80 40 Z" fill="#12131a" />
                  {/* Topknot bun */}
                  <circle cx="155" cy="35" r="14" fill="#12131a" />
                  <rect x="145" y="32" width="18" height="4" fill="#e05d52" />

                  {/* Face Shadow & Profile */}
                  <polygon points="90,75 150,75 145,135 120,155 95,135" fill="#d4b59d" />
                  <polygon points="120,75 150,75 145,135 120,155" fill="#bfa088" />

                  {/* Stern Eyes & Beard stubble */}
                  <line x1="98" y1="95" x2="114" y2="93" stroke="#12131a" strokeWidth="3" />
                  <line x1="126" y1="93" x2="142" y2="95" stroke="#12131a" strokeWidth="3" />
                  <polygon points="118,98 122,98 120,115" fill="#8f725d" />
                  <line x1="110" y1="126" x2="130" y2="126" stroke="#12131a" strokeWidth="2.5" />

                  {/* Dark Brown Kimono / Haori */}
                  <path d="M 50 155 L 95 135 L 120 170 L 145 135 L 190 155 L 210 240 L 30 240 Z" fill="#3d3338" />

                  {/* Inner White / Cream Layer */}
                  <polygon points="105,145 120,175 135,145" fill="#f7f4ed" />
                  <line x1="120" y1="175" x2="120" y2="240" stroke="#12131a" strokeWidth="3" />

                  {/* Katana Hilt Held at Chest */}
                  <rect x="65" y="150" width="45" height="10" rx="2" transform="rotate(-35 65 150)" fill="#12131a" stroke="#e05d52" strokeWidth="1.5" />
                  <ellipse cx="60" cy="153" rx="5" ry="12" transform="rotate(-35 60 153)" fill="#e05d52" />
                  <line x1="60" y1="153" x2="30" y2="175" stroke="#cbd5e1" strokeWidth="4" />

                  {/* Both Hands Holding Hilt */}
                  <circle cx="85" cy="165" r="9" fill="#d4b59d" />
                  <circle cx="100" cy="175" r="9" fill="#bfa088" />
                </svg>

                {/* Subtle caption pill */}
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="px-2.5 py-1 rounded-full bg-charcoal-900/90 text-slate-300 border border-white/10 font-mono text-[10px] tracking-wider uppercase">
                    Mhdomar // Cyber Ronin
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
