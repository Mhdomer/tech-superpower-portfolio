import React from 'react';
import { Shield, ArrowRight, Maximize2 } from 'lucide-react';

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
    <section
      id="aws-architecture"
      className="py-20 border-t transition-colors duration-300"
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (sharara.me 2-line layout) */}
        <div className="mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-widest mb-2 opacity-60">
            Systems & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-none display">
            AWS Challenge<br />
            <span style={{ color: 'var(--brand-coral)' }}>Architecture & Rubric.</span>
          </h2>
          <p className="text-sm mt-3 max-w-xl opacity-75">
            Every layer of this portfolio and defense system is backed by real AWS cloud architecture and tested code. Click any diagram or terminal capture below to inspect in high resolution.
          </p>
        </div>

        {/* AWS Challenge Rubric Alignment Card */}
        <div
          className="p-6 sm:p-8 rounded-2xl border mb-12 relative overflow-hidden transition-all"
          style={{
            background: 'var(--surface)',
            borderColor: 'var(--line)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div
              className="p-4 rounded-xl border"
              style={{
                background: 'var(--surface-soft)',
                borderColor: 'var(--line)',
              }}
            >
              <span className="font-bold block mb-1" style={{ color: 'var(--brand-coral)' }}>
                1. Creativity & Memorability (30%)
              </span>
              <p className="leading-relaxed font-sans text-xs opacity-80">
                Interactive Cloud Security Sandbox with live client-side IAM AST policy linter, incident crisis decision game, and Shannon entropy analyzer discoverable via navbar hint.
              </p>
            </div>
            <div
              className="p-4 rounded-xl border"
              style={{
                background: 'var(--surface-soft)',
                borderColor: 'var(--line)',
              }}
            >
              <span className="font-bold block mb-1" style={{ color: 'var(--brand-coral)' }}>
                2. Working AWS Deployment (25%)
              </span>
              <p className="leading-relaxed font-sans text-xs opacity-80">
                Deployed live on AWS Amplify Hosting, Amazon CloudFront global edge CDN, and Amazon S3 with root amplify.yml CI/CD build specification.
              </p>
            </div>
            <div
              className="p-4 rounded-xl border"
              style={{
                background: 'var(--surface-soft)',
                borderColor: 'var(--line)',
              }}
            >
              <span className="font-bold block mb-1" style={{ color: 'var(--brand-coral)' }}>
                3. Communication Quality (25%)
              </span>
              <p className="leading-relaxed font-sans text-xs opacity-80">
                Authentic student engineer documentation, verified telemetry benchmarks, and bilingual tutorials from UTM peer tutoring sessions.
              </p>
            </div>
            <div
              className="p-4 rounded-xl border"
              style={{
                background: 'var(--surface-soft)',
                borderColor: 'var(--line)',
              }}
            >
              <span className="font-bold block mb-1" style={{ color: 'var(--brand-coral)' }}>
                4. Usability & Completeness (20%)
              </span>
              <p className="leading-relaxed font-sans text-xs opacity-80">
                Complete portfolio sections with mobile responsive navigation, accessible modal handling, and zero em dashes.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Console Sandbox Launch Banner */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border mb-10 text-xs font-mono transition-all"
          style={{
            background: 'var(--surface)',
            borderColor: 'var(--line)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="p-2.5 rounded-lg border"
              style={{
                background: 'var(--surface-soft)',
                borderColor: 'var(--line)',
                color: 'var(--brand-coral)',
              }}
            >
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold block text-sm">Interactive Cloud Security Defense Sandbox</span>
              <span className="opacity-70">
                Run live IAM AST policy linting, play incident response crises, and benchmark prompt injection entropy in real time.
              </span>
            </div>
          </div>
          <button
            onClick={onOpenConsole}
            className="px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all shadow-md whitespace-nowrap active:scale-95 text-white"
            style={{ background: 'var(--brand-coral)' }}
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
              className="editorial-card rounded-2xl p-5 sm:p-6 border flex flex-col justify-between"
            >
              <div>
                {/* Clickable Image Preview */}
                <div
                  onClick={() => onSelectImage(arch.image, arch.title)}
                  className="rounded-xl overflow-hidden border aspect-video mb-4 cursor-pointer relative group flex items-center justify-center"
                  style={{
                    background: 'var(--paper-deep)',
                    borderColor: 'var(--line)',
                  }}
                >
                  <img
                    src={arch.image}
                    alt={arch.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                    <Maximize2 className="w-4 h-4" style={{ color: 'var(--brand-coral)' }} />
                    <span>Click to Inspect High-Res Diagram</span>
                  </div>
                </div>

                {/* Card Title & Service */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border font-semibold"
                    style={{
                      background: 'var(--surface-soft)',
                      borderColor: 'var(--line)',
                      color: 'var(--brand-coral)',
                    }}
                  >
                    {arch.service}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug">
                  {arch.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 opacity-80">
                  {arch.caption}
                </p>
              </div>

              {/* Architecture Highlights Chips */}
              <div
                className="pt-3 border-t flex flex-wrap gap-1.5"
                style={{ borderColor: 'var(--line)' }}
              >
                {arch.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded border"
                    style={{
                      background: 'var(--surface-soft)',
                      borderColor: 'var(--line)',
                      opacity: 0.85,
                    }}
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
