import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Cloud,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Maximize2,
  Lock,
  Cpu,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero({ onOpenConsole, onSelectImage }) {
  const [activeTab, setActiveTab] = useState('aegis');

  const liveEvidence = {
    aegis: {
      title: 'Aegis-2B: Low-Latency AI Guardrail on AWS',
      subtitle: 'Sub-115ms dual-tier defense against prompt injection (OWASP LLM01) & RAG poisoning',
      image: '/assets/projects/aegis-aws-architecture.png',
      badge: 'Amazon Bedrock + Lambda',
      metric: '115ms p99 Latency',
      metricLabel: 'Verified Benchmark',
      description:
        'Fast regex trie intercepts known adversarial signatures in <5ms; quantized 2B SLM evaluates semantic intent before foundation model invocation.',
    },
    trivy: {
      title: 'Shift-Left CI/CD Gate in GitHub Actions',
      subtitle: 'Automated Trivy container scanning returning exit code 1 to block critical CVE releases',
      image: '/assets/projects/pr1-trivy-gate-blocked.png',
      badge: 'CI/CD DevSecOps Gate',
      metric: 'Exit Code 1 Blocker',
      metricLabel: 'CVE-2024-21626 Intercepted',
      description:
        'Real production workflow blocking container artifacts containing high/critical CVEs before EC2 SSM deployment.',
    },
    a2: {
      title: 'A2 Compliance & Auto-Remediation Engine',
      subtitle: 'Event-driven serverless daemon on AWS EventBridge & Lambda resolving drift in <2.4s',
      image: '/assets/projects/a2-compliance-architecture.png',
      badge: 'AWS EventBridge + Boto3',
      metric: '325 Unit Tests',
      metricLabel: 'Zero Drift MTTR <2.4s',
      description:
        'Detects unauthorized public S3 ACLs and open security groups on the CloudTrail event, executing idempotent remediation instantly.',
    },
  };

  const current = liveEvidence[activeTab];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/5 bg-charcoal-900">
      {/* Precision ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-emerald/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Authentic Identity & Thesis */}
          <div className="lg:col-span-7 space-y-6">
            {/* Hackathon Rubric Header Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-800 border border-cyber-emerald/40 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse"></span>
              <span className="text-white font-bold">AWS Student Builder Challenge 2026</span>
              <span className="text-slate-600">/</span>
              <span className="text-cyber-emerald font-semibold">Tech Superpower</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Deterministic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-mint via-cyber-cyan to-cyber-sky">Cloud DevSecOps</span> & sub-115ms AI security defense.
            </h1>

            {/* Grounded Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I am <strong className="text-white font-semibold">Mohamed Makhlouf</strong> (Mhdomar), a senior Computer Science student specializing in Networks and Security at <strong className="text-white">Universiti Teknologi Malaysia (UTM)</strong> and running IT operations at <strong className="text-white">Al-Ameen Medical Complex in Riyadh</strong>.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              I build self-healing cloud infrastructure on AWS: intercepting security drift on the triggering CloudTrail event (<span className="text-cyber-cyan font-mono font-bold">&lt;2.4s MTTR</span>), halting vulnerable deployments with Trivy CI/CD gates, and defending LLM agents in <span className="text-cyber-mint font-mono font-bold">~115ms</span> with Aegis-2B.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-cyber-emerald hover:bg-emerald-600 text-charcoal-950 font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 text-xs sm:text-sm font-mono"
              >
                <span>Inspect Production Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* The Visible Hint */}
              <button
                onClick={onOpenConsole}
                className="px-4 py-2.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 border border-cyber-emerald/50 text-cyber-mint hover:text-white font-medium transition-all flex items-center gap-2 text-xs sm:text-sm font-mono shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-cyber-emerald" />
                <span>Security Lab & Linter</span>
                <span className="text-[10px] bg-cyber-emerald/20 text-cyber-mint px-1.5 py-0.5 rounded font-bold border border-cyber-emerald/40">
                  Hint!
                </span>
              </button>

              <a
                href="https://github.com/Mhdomer"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 border border-white/10 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4 fill-current" />
                <span>GitHub @Mhdomer</span>
              </a>
            </div>

            {/* Verified Credentials Ticker */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-charcoal-800/80 border border-white/5">
                <span className="text-slate-500 block text-[10px]">CGPA STANDING</span>
                <span className="text-white font-bold text-sm">3.43 / 4.00</span>
                <span className="text-[10px] text-cyber-cyan block">UTM Dean's List</span>
              </div>
              <div className="p-2.5 rounded-lg bg-charcoal-800/80 border border-white/5">
                <span className="text-slate-500 block text-[10px]">CTF PODIUM</span>
                <span className="text-cyber-amber font-bold text-sm">3rd Place</span>
                <span className="text-[10px] text-amber-400/80 block">ASEAN Cyber Race '25</span>
              </div>
              <div className="p-2.5 rounded-lg bg-charcoal-800/80 border border-white/5">
                <span className="text-slate-500 block text-[10px]">DRIFT REMEDIATION</span>
                <span className="text-cyber-cyan font-bold text-sm">&lt; 2.4s MTTR</span>
                <span className="text-[10px] text-cyber-sky block">A2 EventBridge Lambda</span>
              </div>
              <div className="p-2.5 rounded-lg bg-charcoal-800/80 border border-white/5">
                <span className="text-slate-500 block text-[10px]">AI GUARDRAILS</span>
                <span className="text-cyber-mint font-bold text-sm">115ms p99</span>
                <span className="text-[10px] text-emerald-400/80 block">Aegis-2B Bedrock</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Program Evidence Deck */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse"></span>
                <span>PRODUCTION EVIDENCE DECK</span>
              </span>
              <span className="text-[11px] text-slate-500">Click preview to enlarge</span>
            </div>

            {/* Evidence Selector Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-charcoal-800 border border-white/10 text-xs font-mono">
              <button
                onClick={() => setActiveTab('aegis')}
                className={`py-2 px-1 rounded-lg transition-all text-center ${
                  activeTab === 'aegis'
                    ? 'bg-charcoal-700 text-cyber-emerald font-bold border border-cyber-emerald/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Aegis-2B
              </button>
              <button
                onClick={() => setActiveTab('trivy')}
                className={`py-2 px-1 rounded-lg transition-all text-center ${
                  activeTab === 'trivy'
                    ? 'bg-charcoal-700 text-cyber-cyan font-bold border border-cyber-cyan/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Trivy CI/CD Gate
              </button>
              <button
                onClick={() => setActiveTab('a2')}
                className={`py-2 px-1 rounded-lg transition-all text-center ${
                  activeTab === 'a2'
                    ? 'bg-charcoal-700 text-cyber-emerald font-bold border border-cyber-emerald/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                A2 Remediation
              </button>
            </div>

            {/* Active Evidence Card */}
            <div className="rounded-2xl cyber-card overflow-hidden border border-white/10 bg-charcoal-850 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-charcoal-750 text-cyber-emerald border border-white/5 font-semibold">
                  {current.badge}
                </span>
                <span className="text-slate-400">{current.metric}</span>
              </div>

              {/* Clickable Screenshot Preview */}
              <div
                onClick={() => onSelectImage(current.image, current.title)}
                className="relative group cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-charcoal-950 aspect-video flex items-center justify-center"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-charcoal-900/90 text-white font-mono text-xs flex items-center gap-1.5 shadow-lg border border-white/10">
                    <Maximize2 className="w-3.5 h-3.5 text-cyber-emerald" />
                    <span>Expand High-Res</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white font-sans">{current.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{current.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
