import React from 'react';
import { ShieldCheck, Cloud, Terminal, Zap, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Superpowers({ onOpenConsole }) {
  const stackCategories = [
    {
      category: 'Cloud DevSecOps',
      skills: [
        { name: 'AWS EventBridge', note: 'Drift Routing' },
        { name: 'AWS Lambda (Python 3.12 Boto3)', note: 'Auto-Remediation' },
        { name: 'AWS IAM', note: 'Least-Privilege & SCP' },
        { name: 'Terraform', note: 'Immutable IaC' },
        { name: 'Amazon S3 & CloudWatch', note: 'Encrypted Audits' },
      ],
    },
    {
      category: 'AI Security & Defense',
      skills: [
        { name: 'Aegis-2B Engine', note: 'Sub-115ms p99 Latency' },
        { name: 'Amazon Bedrock', note: 'Runtime Interception' },
        { name: 'Hugging Face SLMs', note: 'Quantized 2B Models' },
        { name: 'Regex Trie Signatures', note: 'OWASP LLM01 & LLM04' },
      ],
    },
    {
      category: 'Shift-Left CI/CD & Gating',
      skills: [
        { name: 'Trivy', note: 'Container CVE Blocker' },
        { name: 'Checkov', note: 'Static IaC Scans' },
        { name: 'GitHub Actions', note: 'Exit Code 1 Gates' },
        { name: 'Docker', note: 'Alpine Hardening' },
        { name: 'AWS Systems Manager (SSM)', note: 'Fleet Deploy' },
      ],
    },
    {
      category: 'Systems & Workstation',
      skills: [
        { name: 'CachyOS Linux (Kernel 6.13+)', note: 'Tuned Workstation' },
        { name: 'Niri Wayland', note: 'Scrollable Tiling' },
        { name: 'POSIX Shell (Bash, Sed, Awk)', note: 'Automation' },
        { name: 'Wireshark & Packet Forensics', note: 'CTF Finals' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 border-t border-white/5 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Ziad Sharara 2-line layout) */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-none">
              Tech Stack<br />
              <span className="text-terracotta-500">I Work With.</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl font-sans">
              Daily engineering runtimes, cloud platforms, and security tools tested in production and university laboratories.
            </p>
          </div>

          <button
            onClick={onOpenConsole}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-charcoal-800 hover:bg-charcoal-750 border border-terracotta-500/40 text-xs font-mono text-slate-200 hover:text-white flex items-center gap-2 transition-all shadow-sm group"
          >
            <ShieldCheck className="w-4 h-4 text-terracotta-500 group-hover:scale-110 transition-transform" />
            <span>Launch Interactive Security Lab</span>
            <span className="text-terracotta-400">→</span>
          </button>
        </div>

        {/* Tech Stack Horizontal Table (Ziad Sharara rows) */}
        <div className="divide-y divide-white/5 border-y border-white/5 font-mono text-xs">
          {stackCategories.map((cat, idx) => (
            <div
              key={idx}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start group hover:bg-white/[0.015] px-2 rounded-lg transition-colors"
            >
              {/* Category Name */}
              <div className="md:col-span-4 uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500"></span>
                <span>{cat.category}</span>
              </div>

              {/* Skills List */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-charcoal-800 border border-white/5 text-slate-200 flex items-center gap-2 hover:border-terracotta-500/40 transition-colors"
                  >
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-[10px] text-slate-500 font-sans">/ {skill.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
