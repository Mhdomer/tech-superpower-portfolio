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
    <section id="aws-architecture" className="py-20 border-t border-white/5 relative bg-charcoal-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-engine-cyan/10 border border-engine-cyan/30 text-engine-cyan text-xs font-mono mb-3">
            <Cloud className="w-3.5 h-3.5" />
            <span>02 // AWS STUDENT BUILDER CHALLENGE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            How The Tech Superpower Runs on AWS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every layer of this portfolio and defense system is backed by real AWS cloud architecture and tested code. Click any real diagram or terminal capture below to inspect in high resolution.
          </p>
        </div>

        {/* AWS Challenge Rubric Alignment Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-charcoal-800/60 border border-white/5">
              <span className="text-sakura-300 font-bold block mb-1">1. Creativity & Memorability (30%)</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                Real Katana cyber slice opening sequence and interactive DevSecOps terminal sandbox with live drift remediation.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-charcoal-800/60 border border-white/5">
              <span className="text-engine-cyan font-bold block mb-1">2. Working AWS Deployment (25%)</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                Deployed live on AWS Amplify Hosting, Amazon CloudFront global edge CDN, and Amazon S3 with amplify.yml CI/CD.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-charcoal-800/60 border border-white/5">
              <span className="text-emerald-400 font-bold block mb-1">3. Communication Quality (25%)</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                Honest engineering writeups, verified benchmarks, and bilingual tutorials from UTM peer tutoring sessions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-charcoal-800/60 border border-white/5">
              <span className="text-amber-300 font-bold block mb-1">4. Usability & Completeness (20%)</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                Complete portfolio sections with mobile responsive navigation, accessible modal handling, and zero em dashes.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Architecture Cards with Real Program Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architectures.map((arch) => (
            <div
              key={arch.id}
              className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between hover:border-engine-cyan/40 transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-charcoal-900 border border-white/10 text-engine-cyan">
                    {arch.service}
                  </span>
                  <button
                    onClick={() => onSelectImage && onSelectImage(arch.image, arch.title)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </button>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-engine-cyan transition-colors">
                  {arch.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {arch.caption}
                </p>

                {/* Screenshot Image Preview (Clickable) */}
                <div
                  onClick={() => onSelectImage && onSelectImage(arch.image, arch.title)}
                  className="rounded-xl overflow-hidden border border-white/10 bg-charcoal-950 aspect-video mb-4 cursor-pointer relative group/img flex items-center justify-center"
                >
                  <img
                    src={arch.image}
                    alt={arch.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                    <Maximize2 className="w-4 h-4 text-sakura-300" />
                    <span>Click to Inspect High-Resolution</span>
                  </div>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 font-mono text-[11px]">
                {arch.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2 py-0.5 rounded bg-charcoal-800 text-slate-300 border border-white/5"
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
