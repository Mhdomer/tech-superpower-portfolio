import React, { useState } from 'react';
import { ExternalLink, Shield, Cloud, Terminal, BookOpen, Layers, Check, Sparkles, Award, Maximize2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ onSelectImage, onOpenConsole }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'aegis-2b',
      title: 'Aegis-2B: Low-Latency AI Security Guardrail',
      tagline: 'Dual-tier prompt injection defense running under 115ms p99 latency',
      category: 'ai-security',
      featured: true,
      github: 'https://github.com/Mhdomer/aegis-2b',
      badge: 'Amazon Bedrock + Lambda',
      image: '/assets/projects/aegis-web-dashboard.png',
      stats: { latency: '115ms p99', accuracy: '98.4%', tests: '6/6 passing' },
      description:
        'A deterministic defense framework designed for autonomous agents and LLM applications. Uses a fast-path regex trie to intercept known attacks in sub-5ms, then routes ambiguous prompts through a quantized 2B parameter SLM verifier before inference. Ready for AWS Bedrock and Lambda container runtimes.',
      tags: ['Python 3.12', 'AWS Bedrock', 'Hugging Face SLM', 'Regex Trie', 'Pytest', 'Docker'],
      awsServices: ['AWS Lambda', 'Amazon Bedrock', 'Amazon CloudWatch'],
    },
    {
      id: 'a2-remediation',
      title: 'A2 Compliance & Auto-Remediation Engine',
      tagline: 'Autonomous cloud security remediation engine with zero human delay',
      category: 'cloud-security',
      featured: true,
      github: 'https://github.com/Mhdomer/aws-compliance-remediation-engine',
      badge: 'AWS EventBridge + Boto3',
      image: '/assets/projects/a2-compliance-architecture.png',
      stats: { mttr: '< 2.4s', tests: '325 Unit Tests', cost: 'Scale to Zero' },
      description:
        'Event-driven serverless daemon on EventBridge and Lambda that detects and remediates public S3 ACLs, open security group ports (22/3389), weak KMS keys, and unencrypted EBS volumes on the triggering CloudTrail event. Features a read-only MCP audit server with Python AST analysis.',
      tags: ['AWS Boto3', 'AWS EventBridge', 'AWS Lambda', 'Model Context Protocol (MCP)', 'Terraform'],
      awsServices: ['AWS EventBridge', 'AWS Lambda', 'AWS CloudTrail', 'AWS IAM'],
    },
    {
      id: 'mindcraft-cicd',
      title: 'Shift-Left CI/CD Gate: Trivy CVE Blocker',
      tagline: 'Gated GitHub Actions pipeline halting releases on critical vulnerabilities',
      category: 'cloud-security',
      featured: true,
      github: 'https://github.com/Mhdomer/mindcraft-aws-migration',
      badge: 'DevSecOps Shift-Left',
      image: '/assets/projects/pr1-trivy-gate-blocked.png',
      stats: { exitCode: 'Exit Code 1', cveCheck: 'CVE-2024-21626', gate: 'PR #1 Blocked' },
      description:
        'Enforcing security before deployment. When a Docker image contains critical container vulnerabilities, Trivy returns exit code 1 inside GitHub Actions, failing the build and preventing unpatched container artifacts from being deployed to AWS EC2 via SSM.',
      tags: ['Trivy', 'GitHub Actions', 'Docker Hardening', 'Exit Code 1', 'AWS SSM'],
      awsServices: ['AWS Systems Manager (SSM)', 'Amazon EC2', 'AWS ECR'],
    },
    {
      id: 'asean-cyber-race',
      title: 'ASEAN Cyber Race 2025 CTF Finals',
      tagline: '3rd Place among 15 finalist teams across 8 Southeast Asian countries',
      category: 'ctf',
      featured: true,
      github: 'https://github.com/Mhdomer',
      badge: 'Cisco Networking Academy',
      image: '/assets/projects/decider-terminal-proof.png',
      stats: { rank: '3rd Place', nations: '8 Countries', venue: 'Cisco NetAcad' },
      description:
        'Represented Universiti Teknologi Malaysia (UTM) in the international CTF finals in November 2025. Solved competitive challenges spanning cloud infrastructure misconfigurations, packet payload inspection with Wireshark, binary exploitation, and reverse engineering.',
      tags: ['Wireshark', 'Packet Forensics', 'Binary Exploitation', 'Linux Defense', 'Reverse Engineering'],
      awsServices: ['Cloud Range', 'Network Telemetry'],
    },
    {
      id: 'secrh-healthcare',
      title: 'SECRH: Healthcare IT Network Hardening',
      tagline: 'Securing clinic networks and patient diagnostic systems at Al-Ameen IT',
      category: 'cloud-security',
      featured: false,
      github: 'https://github.com/Mhdomer',
      badge: 'Hospital IT Placement',
      image: '/assets/projects/alamin-network-topology.svg',
      stats: { uptime: '99.98%', clinics: 'Multi-branch Riyadh', drift: 'Zero unlogged' },
      description:
        'Field implementation at Al-Ameen Medical Complex in Riyadh. Deployed baseline endpoint configurations, segmented medical diagnostic equipment from general administrative subnets, established automated backup validation, and eliminated downtime across daily outpatient shifts.',
      tags: ['Network Segmentation', 'Endpoint Security', 'PowerShell / Bash', 'Syslog'],
      awsServices: ['Amazon S3 Glacier', 'CloudWatch Logs'],
    },
    {
      id: 'youtube-tutoring',
      title: 'Omar Documents & UTM CS Peer Mentorship',
      tagline: 'Bilingual Linux desktop setups, cloud architecture walkthroughs, and peer labs',
      category: 'education',
      featured: false,
      github: 'https://github.com/Mhdomer',
      badge: 'Community Outreach',
      image: '/assets/projects/aegis-production-aws-dataflow.png',
      stats: { reach: 'Bilingual (AR/EN)', sessions: '50+ students', focus: 'Linux & Cloud' },
      description:
        'A public knowledge initiative. Creating deep-dive technical tutorials on YouTube ("Omar Documents") focusing on Linux desktop tuning (CachyOS, Niri Wayland), dual-boot environments, and cloud certifications, alongside weekly hands-on peer tutoring sessions at UTM.',
      tags: ['Technical Writing', 'CachyOS Linux', 'Niri Wayland', 'AWS Certifications', 'Peer Tutoring'],
      awsServices: ['AWS Educate', 'AWS Builder Center'],
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sakura-500/10 border border-sakura-500/30 text-sakura-300 text-xs font-mono mb-3">
            <span>03 // REAL PROGRAM EVIDENCE & IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Tested Code, Real Failures Solved
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Concrete evidence from my repositories and deployments. Click any program screenshot to inspect the full-resolution architecture diagram, terminal proof, or CI/CD gate.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 text-xs font-mono">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'cloud-security', label: 'Cloud DevSecOps' },
            { id: 'ai-security', label: 'AI Security' },
            { id: 'ctf', label: 'CTF Finals' },
            { id: 'education', label: 'Mentorship & Systems' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                filter === tab.id
                  ? 'bg-sakura-500 text-white font-semibold shadow-md shadow-sakura-500/20'
                  : 'bg-charcoal-800 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Real Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-sakura-400/40 relative group"
            >
              <div>
                {/* Real Screenshot Preview */}
                <div
                  onClick={() => onSelectImage && onSelectImage(p.image, p.title)}
                  className="rounded-xl overflow-hidden border border-white/10 bg-charcoal-950 aspect-video mb-4 cursor-pointer relative group/img flex items-center justify-center"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                    <Maximize2 className="w-4 h-4 text-sakura-300" />
                    <span>Click to Inspect High-Res</span>
                  </div>
                </div>

                {/* Top Badge & Links */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-charcoal-900 border border-white/10 text-sakura-300 font-semibold">
                    {p.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-sakura-300 transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-engine-cyan font-mono mb-3">{p.tagline}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{p.description}</p>
              </div>

              <div>
                {/* Key Stats Bar */}
                <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-lg bg-charcoal-900/80 border border-white/5 font-mono text-[11px] mb-4">
                  {Object.entries(p.stats).map(([k, v]) => (
                    <div key={k} className="text-center">
                      <span className="text-slate-500 block uppercase text-[9px]">{k}</span>
                      <span className="text-slate-200 font-semibold truncate block">{v}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-800 text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
