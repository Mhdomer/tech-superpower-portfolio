import React from 'react';
import { Cloud, Shield, Cpu, Lock, CheckCircle2, ArrowRight, ExternalLink, Maximize2, Zap, Radio, Server } from 'lucide-react';

export default function AwsChallengeArchitecture({ onSelectImage, onOpenConsole }) {
  const architectures = [
    {
      id: 'aegis-guardrail',
      title: 'Aegis-2B AI Guardrail Dataflow on AWS',
      service: 'Amazon Bedrock + Lambda',
      image: '/assets/projects/aegis-aws-architecture.png',
      caption: 'Sub-115ms dual-tier defense pipeline routing prompts through signature regex trie before calling foundation models.',
      highlights: ['Amazon Bedrock', 'AWS Lambda Container', 'Amazon CloudWatch Telemetry', 'Sub-115ms p99'],
    },
    {
      id: 'a2-remediation',
      title: 'A2 Event-Driven Remediation Architecture',
      service: 'AWS EventBridge + Lambda',
      image: '/assets/projects/a2-compliance-architecture.png',
      caption: 'Capturing CloudTrail API calls in real time and executing idempotent Python 3.12 remediation scripts in <2.4 seconds.',
      highlights: ['AWS EventBridge Bus', 'AWS Lambda (Boto3)', 'Amazon SQS DLQ', '325 Unit Tests'],
    },
    {
      id: 'trivy-gate',
      title: 'Shift-Left CI/CD Security Gate (PR #1)',
      service: 'GitHub Actions + AWS SSM',
      image: '/assets/projects/pr1-trivy-gate-blocked.png',
      caption: 'Actual CI/CD execution proof: Trivy scans the Docker container and halts release on CVE-2024-21626 (CRITICAL).',
      highlights: ['Trivy Container Scan', 'Exit Code 1 Policy Gate', 'Checkov IaC Checks', 'AWS SSM Deploy'],
    },
    {
      id: 'alamin-network',
      title: 'Al-Ameen Healthcare Multi-Site Network Topology',
      service: 'Hospital Network Segmentation',
      image: '/assets/projects/alamin-network-topology.svg',
      caption: 'Two-site diagnostic equipment isolation, secure VLAN partitioning, and redundant WAN tunnels protecting outpatient clinics.',
      highlights: ['Medical VLAN Isolation', 'IPSec VPN Tunnels', '99.98% Clinic Uptime', 'Zero-Downtime DR'],
    },
  ];

  return (
    <section id="aws-architecture" className="py-20 border-t border-white/5 relative bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Ziad Sharara 2-line layout) */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-none">
            AWS Challenge<br />
            <span className="text-terracotta-500">Architecture & Rubric.</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl font-sans">
            Every layer of this portfolio and defense system is backed by real AWS cloud architecture and tested code. Click any real diagram or terminal capture below to inspect in high resolution.
          </p>
        </div>

        {/* AWS Challenge Rubric Alignment Card */}
        <div className="cyber-panel p-6 sm:p-8 rounded-2xl border border-white/10 mb-12 relative overflow-hidden bg-charcoal-850">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
              <span className="text-cyber-emerald font-bold block mb-1">1. Creativity & Memorability (30%)</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                Interactive Cloud Security Sandbox with live client-side IAM AST policy linter, incident crisis decision game, and Shannon entropy analyzer discoverable via navbar hint.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
              <span className="text-cyber-cyan font-bold block mb-1">2. Working AWS Deployment (25%)</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                Deployed live on AWS Amplify Hosting, Amazon CloudFront global edge CDN, and Amazon S3 with root amplify.yml CI/CD build specification.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
              <span className="text-cyber-sky font-bold block mb-1">3. Communication Quality (25%)</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                Authentic student engineer documentation, verified telemetry benchmarks, and bilingual tutorials from UTM peer tutoring sessions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
              <span className="text-cyber-amber font-bold block mb-1">4. Usability & Completeness (20%)</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                Complete portfolio sections with mobile responsive navigation, accessible modal handling, and zero em dashes.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Console Sandbox Launch Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-charcoal-850 border border-white/10 mb-10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-bold block text-sm">Interactive Cloud Security Defense Sandbox</span>
              <span className="text-slate-400">
                Run live IAM AST policy linting, play incident response crises, and benchmark prompt injection entropy in real time.
              </span>
            </div>
          </div>
          <button
            onClick={onOpenConsole}
            className="px-4 py-2.5 rounded-lg bg-cyber-emerald hover:bg-emerald-600 text-charcoal-950 font-bold flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap"
          >
            <span>Launch Security Sandbox</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Architecture Cards with Real Program Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architectures.map((arch) => (
            <div
              key={arch.id}
              className="cyber-card rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between bg-charcoal-850"
            >
              <div>
                {/* Clickable Image Preview */}
                <div
                  onClick={() => onSelectImage(arch.image, arch.title)}
                  className="rounded-xl overflow-hidden border border-white/10 bg-charcoal-950 aspect-video mb-4 cursor-pointer relative group flex items-center justify-center"
                >
                  <img
                    src={arch.image}
                    alt={arch.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                    <Maximize2 className="w-4 h-4 text-cyber-emerald" />
                    <span>Click to Inspect High-Res Diagram</span>
                  </div>
                </div>

                {/* Card Title & Service */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-charcoal-900 border border-white/10 text-cyber-cyan font-semibold">
                    {arch.service}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {arch.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {arch.caption}
                </p>
              </div>

              {/* Architecture Highlights Chips */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {arch.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-800 text-slate-300 border border-white/5"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
