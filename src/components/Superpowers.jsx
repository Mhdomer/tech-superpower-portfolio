import React, { useState } from 'react';
import { ShieldCheck, Cloud, Cpu, Terminal, Zap, BookOpen, Layers, CheckCircle } from 'lucide-react';

export default function Superpowers({ onOpenConsole }) {
  const [selectedSuperpower, setSelectedSuperpower] = useState(0);

  const superpowers = [
    {
      id: 'cloud-devsecops',
      title: 'Autonomous Cloud Security & Remediation',
      subtitle: 'Building event-driven self-healing infrastructure on AWS',
      icon: Cloud,
      color: 'from-blue-500/20 to-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30',
      badge: 'Core Superpower #1',
      metric: '< 2.4s Remediation MTTR',
      metricSub: '325 unit tests on A2 EventBridge & Lambda auto-fix engine',
      description:
        'Architecting least-privilege cloud environments where security policies are automated code rather than manual audit checklists. From IAM role scoping and KMS encryption to event-driven drift remediation on CloudTrail and EventBridge.',
      skills: [
        'AWS EventBridge & Lambda (Python 3.12 Boto3)',
        'AWS IAM Least-Privilege & SCP Hierarchy',
        'AWS CloudTrail & CloudWatch Metric Alarms',
        'Terraform (IaC) & Immutable State Management',
        'Model Context Protocol (MCP) Read-Only Audit Tools',
        'Idempotent API Execution & Dead-Letter Queues (DLQ)',
      ],
    },
    {
      id: 'ai-security',
      title: 'AI Security & Agentic Guardrails',
      subtitle: 'Sub-120ms dual-tier defense for LLM applications and agents',
      icon: ShieldCheck,
      color: 'from-emerald-500/20 to-cyber-emerald/20 text-cyber-emerald border-cyber-emerald/30',
      badge: 'Core Superpower #2',
      metric: '< 115ms p99 Latency',
      metricSub: 'Fast regex trie + 2B quantized SLM verifier with zero UX delay',
      description:
        'Defending autonomous agents and large language models against indirect prompt injections, jailbreaks, data exfiltration, and tool manipulation. Designed the Aegis-2B hybrid guardrail architecture combining instant signature scanning with lightweight SLM validation.',
      skills: [
        'Prompt Injection Defense (OWASP LLM01)',
        'RAG Data Poisoning Defense (OWASP LLM04)',
        'Hybrid Verification (Regex Trie + 2B SLM)',
        'AWS Bedrock & Runtime Guardrail Integration',
        'Real-time Token Telemetry & Anomaly Logging',
        'Deterministic Fallback Circuit Breakers',
      ],
    },
    {
      id: 'shift-left',
      title: 'Shift-Left DevSecOps & Gated CI/CD',
      subtitle: 'Enforcing security barriers before code reaches production environments',
      icon: Zap,
      color: 'from-sky-500/20 to-cyber-sky/20 text-cyber-sky border-cyber-sky/30',
      badge: 'Core Superpower #3',
      metric: 'Zero Critical CVE Deployments',
      metricSub: 'Trivy + Checkov exit code 1 gates inside GitHub Actions',
      description:
        'Stopping vulnerabilities before artifact creation. Integrating automated container scanning, static infrastructure security checks, and secret scanning into GitHub Actions pipelines so compromised dependencies never touch staging or production servers.',
      skills: [
        'Trivy Container & Dependency Scanning',
        'Checkov Static Infrastructure as Code Analysis',
        'SonarQube Static Application Security Testing (SAST)',
        'GitHub Actions Multi-Stage Security Workflows',
        'Docker Alpine Minimal Image Hardening',
        'AWS Systems Manager (SSM) Deployment Automation',
      ],
    },
    {
      id: 'systems-linux',
      title: 'Systems Programming & Linux Kernel Workstation',
      subtitle: 'Low-level control over memory, networking, and POSIX environments',
      icon: Terminal,
      color: 'from-amber-500/20 to-cyber-amber/20 text-cyber-amber border-cyber-amber/30',
      badge: 'Core Superpower #4',
      metric: 'Kernel 6.13+ Tuned',
      metricSub: 'CachyOS Linux + Niri Wayland scrollable tiling workstation',
      description:
        'Deep comfort in Unix systems. Operating daily on tuned CachyOS Linux with Wayland compositors, understanding process scheduling, network namespaces, socket communication, and dual-boot cross-filesystem resilience.',
      skills: [
        'CachyOS Linux & Custom Kernel Flags',
        'POSIX Shell Automation & Grep/Sed/Awk',
        'Network Namespace & Packet Analysis (Wireshark)',
        'Cisco Networking (CCNA, CCST Cybersecurity, DevNet)',
        'Dual-Boot NTFS and Ext4 Storage Architecture',
        'Clean Conventional Git Commits and Rebase Flow',
      ],
    },
  ];

  return (
    <section id="superpowers" className="py-24 border-t border-white/5 relative bg-charcoal-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800 border border-white/10 text-cyber-cyan text-xs font-mono mb-3">
            <span>02 / CAPABILITIES & TECH SUPERPOWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Tech Superpowers in Action
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every capability here is grounded in production tests, university labs, medical IT operations, and open-source implementations.
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
                    ? 'bg-charcoal-800 border-cyber-emerald shadow-lg shadow-emerald-500/10'
                    : 'bg-charcoal-850/80 border-white/5 hover:border-white/20 hover:bg-charcoal-800'
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
                  <span className="text-cyber-emerald">{isSelected ? 'Active View' : 'Inspect'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Detail Card for Selected Superpower */}
        {superpowers[selectedSuperpower] && (
          <div className="cyber-panel p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden bg-charcoal-850">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-charcoal-800 text-xs font-mono text-cyber-emerald border border-cyber-emerald/30">
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

                {/* Call to open interactive security console */}
                <div className="pt-2">
                  <button
                    onClick={onOpenConsole}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 border border-cyber-emerald/50 text-cyber-emerald text-xs font-mono transition-all group"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyber-emerald group-hover:scale-110 transition-transform" />
                    <span>Test this superpower in the Interactive Security Lab</span>
                    <span className="text-slate-400">→</span>
                  </button>
                </div>
              </div>

              {/* Skills and Tools List */}
              <div className="lg:col-span-5 bg-charcoal-900/90 p-6 rounded-xl border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyber-cyan" />
                  <span>Tools, Runtimes & AWS Services</span>
                </h4>
                <div className="space-y-2.5">
                  {superpowers[selectedSuperpower].skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-cyber-emerald shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 bg-charcoal-950 p-3 rounded-lg">
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
