import React, { useState } from 'react';
import { ShieldCheck, Cloud, Cpu, Terminal, Zap, BookOpen, Layers, CheckCircle } from 'lucide-react';

export default function Superpowers({ onOpenEngine }) {
  const [selectedSuperpower, setSelectedSuperpower] = useState(0);

  const superpowers = [
    {
      id: 'cloud-devsecops',
      title: 'Cloud DevSecOps & Resilient AWS Architecture',
      subtitle: 'Building automated defense into continuous delivery pipelines',
      icon: Cloud,
      color: 'from-blue-500/20 to-engine-cyan/20 text-engine-cyan border-engine-cyan/30',
      badge: 'Core Superpower #1',
      metric: 'Zero-Downtime Releases',
      metricSub: 'Automated policy enforcement & immutable infrastructure',
      description:
        'Architecting least-privilege cloud environments where security policies are automated code rather than manual checklists. From IAM role scoping and KMS encryption to automated CI/CD security drift scans with custom Python engines.',
      skills: [
        'AWS Amplify Hosting & CloudFront',
        'AWS Lambda (Serverless Python)',
        'AWS IAM Least-Privilege & SCPs',
        'Terraform & Infrastructure as Code',
        'GitHub Actions CI/CD Security Workflows',
        'Docker & Minimal Alpine Container Hardening',
      ],
    },
    {
      id: 'ai-security',
      title: 'AI Security & Agentic Guardrails',
      subtitle: 'Sub-120ms dual-tier defense for LLM applications and agents',
      icon: ShieldCheck,
      color: 'from-sakura-500/20 to-purple-500/20 text-sakura-300 border-sakura-500/30',
      badge: 'Core Superpower #2',
      metric: '< 115ms p99 Latency',
      metricSub: 'Regex trie + 2B SLM verifier with zero UX lag',
      description:
        'Defending autonomous agents and large language models against indirect prompt injections, jailbreaks, data exfiltration, and tool manipulation. Designed the Aegis-2B hybrid guardrail architecture combining instant pattern matching with lightweight SLM validation.',
      skills: [
        'Prompt Injection Defense (OWASP LLM01)',
        'Tool & Agent Sandbox Hardening',
        'Hybrid Verification (Regex Trie + 2B SLM)',
        'AWS Bedrock & Guardrails Integration',
        'Real-time Telemetry & Anomaly Logging',
        'Deterministic Fallback Circuit Breakers',
      ],
    },
    {
      id: 'green-finops',
      title: 'Green Cloud Computing & FinOps',
      subtitle: 'Eliminating wasted compute cycles to lower carbon and cost barriers',
      icon: Zap,
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
      badge: 'Core Superpower #3',
      metric: 'Scale-to-Zero Architecture',
      metricSub: 'Ensuring zero idle energy consumption during off-peak hours',
      description:
        'Treating efficiency as an ethical and environmental mandate. By architecting applications to scale to absolute zero when idle and adopting lightweight runtimes, we drastically reduce cloud bills and carbon footprints for grassroots organizations.',
      skills: [
        'Serverless On-Demand Compute',
        'Carbon-Aware Workload Placement',
        'AWS CloudWatch Cost Anomaly Detection',
        'Micro-instance Optimization & Right-Sizing',
        'S3 Tiering & Automated Data Lifecycle',
        'FinOps Resource Tagging & Auditing',
      ],
    },
    {
      id: 'systems-linux',
      title: 'Systems Programming & Linux Kernel Craft',
      subtitle: 'Ground-level control over memory, networking, and POSIX environments',
      icon: Terminal,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30',
      badge: 'Core Superpower #4',
      metric: 'Kernel 6.13+ Tuned',
      metricSub: 'Wayland / CachyOS Linux custom workstation workflow',
      description:
        'Deep comfort in Unix environments. Operating daily on tuned CachyOS Linux with Wayland compositors, understanding process scheduling, file descriptors, network namespace isolation, and dual-boot cross-filesystem resilience.',
      skills: [
        'CachyOS Linux & Custom Kernel Flags',
        'POSIX Shell Automation & Grep/Sed/Awk',
        'Network Namespace & Firewall Rules (iptables/nftables)',
        'Dual-Boot NTFS / Ext4 Data Partitioning',
        'C / C++ Memory Safety & Systems Analysis',
        'Git Clean Conventional Commits & Rebase Flow',
      ],
    },
  ];

  return (
    <section id="superpowers" className="py-24 border-t border-white/5 relative bg-charcoal-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-engine-cyan/10 border border-engine-cyan/30 text-engine-cyan text-xs font-mono mb-3">
            <span>02 // CAPABILITIES & TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Tech Superpowers in Action
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I do not collect buzzwords. Every capability here is grounded in production tests, university labs, medical IT operations, and open-source implementations.
          </p>
        </div>

        {/* Superpowers Grid / Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {superpowers.map((sp, idx) => {
            const Icon = sp.icon;
            const isSelected = selectedSuperpower === idx;
            return (
              <button
                key={sp.id}
                onClick={() => setSelectedSuperpower(idx)}
                className={`text-left p-5 rounded-xl transition-all border relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-charcoal-800 border-sakura-400 shadow-lg shadow-sakura-500/10 scale-[1.02]'
                    : 'bg-charcoal-800/40 border-white/5 hover:border-white/20 hover:bg-charcoal-800/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-charcoal-900 border ${sp.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{sp.badge}</span>
                  </div>
                  <h3 className="font-semibold text-white text-base leading-snug mb-1">
                    {sp.title.split('&')[0]}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{sp.subtitle}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-semibold">{sp.metric}</span>
                  <span className="text-sakura-400">{isSelected ? 'Active View' : 'Inspect'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Detail Card for Selected Superpower */}
        {superpowers[selectedSuperpower] && (
          <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-charcoal-800 text-xs font-mono text-sakura-300 border border-white/10">
                  <span>{superpowers[selectedSuperpower].badge}</span>
                  <span>•</span>
                  <span>Production Telemetry Verified</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {superpowers[selectedSuperpower].title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {superpowers[selectedSuperpower].description}
                </p>

                {/* Call to open interactive engine */}
                <div className="pt-2">
                  <button
                    onClick={onOpenEngine}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 border border-sakura-400/40 text-sakura-300 text-xs font-mono transition-all group"
                  >
                    <Cpu className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                    <span>Test this superpower in the interactive engine</span>
                    <span className="text-slate-400">→</span>
                  </button>
                </div>
              </div>

              {/* Skills and Tools List */}
              <div className="lg:col-span-5 bg-charcoal-900/80 p-6 rounded-xl border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-engine-cyan" />
                  <span>Tools, Runtimes & AWS Services</span>
                </h4>
                <div className="space-y-2.5">
                  {superpowers[selectedSuperpower].skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 bg-charcoal-950/50 p-3 rounded-lg">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Benchmark Metric</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    {superpowers[selectedSuperpower].metric}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {superpowers[selectedSuperpower].metricSub}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
