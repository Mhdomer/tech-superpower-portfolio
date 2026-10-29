import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, ExternalLink, Swords, Cloud, Terminal, CheckCircle2, AlertTriangle, Layers, Maximize2 } from 'lucide-react';

export default function Hero({ onOpenConsole, onTriggerKatana, onSelectImage }) {
  const [activeTab, setActiveTab] = useState('aegis');

  const liveEvidence = {
    aegis: {
      title: 'Aegis-2B: Low-Latency AI Guardrail on AWS',
      subtitle: 'Sub-115ms dual-tier defense against prompt injection (OWASP LLM01) & RAG poisoning',
      image: '/assets/projects/aegis-aws-architecture.png',
      badge: 'Amazon Bedrock + Lambda',
      metric: '115ms p99 Latency',
      metricLabel: 'Verified Benchmark',
      description: 'Fast regex trie intercepts signatures in <5ms; quantized 2B SLM evaluates semantic intent before foundation model invocation.',
    },
    trivy: {
      title: 'Shift-Left CI/CD Gate in GitHub Actions',
      subtitle: 'Automated Trivy container scanning returning exit code 1 to block critical CVE releases',
      image: '/assets/projects/pr1-trivy-gate-blocked.png',
      badge: 'CI/CD DevSecOps Gate',
      metric: 'Exit Code 1 Blocker',
      metricLabel: 'CVE-2024-21626 Intercepted',
      description: 'Real production workflow blocking container artifacts containing high/critical CVEs before EC2 SSM deployment.',
    },
    a2: {
      title: 'A2 Compliance & Auto-Remediation Engine',
      subtitle: 'Event-driven serverless daemon on AWS EventBridge & Lambda resolving drift in <2.4s',
      image: '/assets/projects/a2-compliance-architecture.png',
      badge: 'AWS EventBridge + Boto3',
      metric: '325 Unit Tests',
      metricLabel: 'Zero Drift MTTR <2.4s',
      description: 'Detects unauthorized public S3 ACLs and open security groups on the CloudTrail event, executing idempotent remediation instantly.',
    },
  };

  const current = liveEvidence[activeTab];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sakura-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-engine-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Authentic Identity & Thesis */}
          <div className="lg:col-span-7 space-y-6">
            {/* Hackathon Rubric Header Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-800/90 border border-sakura-400/40 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-sakura-400 animate-pulse"></span>
              <span className="text-sakura-300 font-bold">AWS Student Builder Challenge 2026</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-engine-cyan hidden sm:inline">Tech Superpower Submission</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-sakura-300 via-white to-engine-cyan">Cloud DevSecOps</span> & low-latency AI defense.
            </h1>

            {/* Grounded Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I am <strong className="text-white font-semibold">Mohamed Makhlouf</strong> (Mhdomar), a senior Computer Science student specializing in Networks and Security at <strong className="text-white">Universiti Teknologi Malaysia (UTM)</strong> and running IT operations at <strong className="text-white">Al-Ameen Medical Complex in Riyadh</strong>.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              I build self-healing cloud infrastructure on AWS: intercepting security drift on the triggering CloudTrail event (<span className="text-engine-cyan font-mono">&lt;2.4s MTTR</span>), halting vulnerable deployments with Trivy CI/CD gates, and defending LLM agents in <span className="text-sakura-300 font-mono">~115ms</span> with Aegis-2B.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-sakura-500 hover:bg-sakura-600 text-white font-semibold transition-all shadow-lg shadow-sakura-500/25 flex items-center gap-2 text-xs sm:text-sm font-mono"
              >
                <span>Inspect Real Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenConsole}
                className="px-4 py-2.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 border border-sakura-400/40 text-sakura-300 hover:text-white font-medium transition-all flex items-center gap-2 text-xs sm:text-sm font-mono shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-sakura-400" />
                <span>Security Console</span>
                <span className="text-[10px] bg-sakura-500/30 px-1 rounded text-white">Hint!</span>
              </button>

              <button
                onClick={onTriggerKatana}
                className="px-3.5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all"
                title="Trigger Katana Blade Screen Slice"
              >
                <Swords className="w-3.5 h-3.5 text-sakura-400" />
                <span>Katana Slice ⚔️</span>
              </button>

              <a
                href="https://github.com/Mhdomer"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Grounded Key Credentials Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-charcoal-800/60 border border-white/5">
                <span className="text-slate-500 block text-[10px] uppercase">CTF Podium</span>
                <span className="text-sakura-300 font-bold">3rd ASEAN Finals</span>
              </div>
              <div className="p-2.5 rounded-lg bg-charcoal-800/60 border border-white/5">
                <span className="text-slate-500 block text-[10px] uppercase">SLM Guardrail</span>
                <span className="text-engine-cyan font-bold">~115ms Latency</span>
              </div>
              <div className="p-2.5 rounded-lg bg-charcoal-800/60 border border-white/5">
                <span className="text-slate-500 block text-[10px] uppercase">A2 Engine Tests</span>
                <span className="text-emerald-300 font-bold">325 Unit Tests</span>
              </div>
              <div className="p-2.5 rounded-lg bg-charcoal-800/60 border border-white/5">
                <span className="text-slate-500 block text-[10px] uppercase">UTM Standing</span>
                <span className="text-amber-300 font-bold">Dean's List (3.43)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Program Screenshot & Evidence Deck */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-charcoal-900/90">
              {/* Card Header with Real Program Tabs */}
              <div className="px-4 py-3 bg-charcoal-800 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 font-mono text-[11px] font-semibold text-slate-300">
                    REAL_PROGRAM_EVIDENCE.log
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-900 text-engine-cyan border border-white/5">
                  {current.badge}
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 border-b border-white/10 text-xs font-mono bg-charcoal-950/60">
                <button
                  onClick={() => setActiveTab('aegis')}
                  className={`py-2 px-2 text-center transition-all border-b-2 ${
                    activeTab === 'aegis'
                      ? 'border-sakura-400 text-sakura-300 bg-charcoal-800/50 font-bold'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Aegis-2B AI
                </button>
                <button
                  onClick={() => setActiveTab('trivy')}
                  className={`py-2 px-2 text-center transition-all border-b-2 ${
                    activeTab === 'trivy'
                      ? 'border-rose-400 text-rose-300 bg-charcoal-800/50 font-bold'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Trivy CI/CD
                </button>
                <button
                  onClick={() => setActiveTab('a2')}
                  className={`py-2 px-2 text-center transition-all border-b-2 ${
                    activeTab === 'a2'
                      ? 'border-engine-cyan text-engine-cyan bg-charcoal-800/50 font-bold'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  A2 Drift Fix
                </button>
              </div>

              {/* Real Program Screenshot Preview (Clickable to enlarge) */}
              <div className="p-4 space-y-3">
                <div
                  onClick={() => onSelectImage && onSelectImage(current.image, current.title)}
                  className="relative group rounded-xl overflow-hidden border border-white/10 bg-charcoal-950 cursor-pointer aspect-video flex items-center justify-center"
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                    <Maximize2 className="w-4 h-4 text-sakura-300" />
                    <span>Click to Inspect High-Res</span>
                  </div>
                </div>

                {/* Subtitle & Benchmark Metric */}
                <div>
                  <h3 className="text-sm font-bold text-white leading-snug">{current.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{current.description}</p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <div className="text-slate-400">
                    <span className="text-[10px] uppercase text-slate-500 block">{current.metricLabel}</span>
                    <span className="text-emerald-400 font-bold text-sm">{current.metric}</span>
                  </div>
                  <a
                    href="https://github.com/Mhdomer"
                    target="_blank"
                    rel="noreferrer"
                    className="text-engine-cyan hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <span>View GitHub Implementation</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
