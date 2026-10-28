import React, { useState } from 'react';
import { ExternalLink, Shield, Cloud, Terminal, BookOpen, Layers, Check, Sparkles, Award } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ onOpenConsole }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'aegis-2b',
      title: 'Aegis-2B: Hybrid AI Security Guardrail',
      tagline: 'Dual-tier prompt injection defense running under 115ms p99 latency',
      category: 'ai-security',
      featured: true,
      github: 'https://github.com/Mhdomer/aegis-2b',
      badge: 'Hackathon Project',
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
      badge: 'Cloud DevSecOps',
      stats: { mttr: '< 2.4s', tests: '325 Unit Tests', cost: 'Scale to Zero' },
      description:
        'Event-driven serverless daemon on EventBridge and Lambda that detects and remediates public S3 ACLs, open security group ports (22/3389), weak KMS keys, and unencrypted EBS volumes on the triggering CloudTrail event. Features a read-only MCP audit server with Python AST analysis.',
      tags: ['AWS Boto3', 'AWS EventBridge', 'AWS Lambda', 'Model Context Protocol (MCP)', 'Terraform'],
      awsServices: ['AWS EventBridge', 'AWS Lambda', 'AWS CloudTrail', 'AWS IAM'],
    },
    {
      id: 'asean-cyber-race',
      title: 'ASEAN Cyber Race 2025 CTF Finals',
      tagline: '3rd Place among 15 finalist teams across 8 Southeast Asian countries',
      category: 'ctf',
      featured: true,
      github: 'https://github.com/Mhdomer',
      badge: 'Competitive Cyber Finals',
      stats: { rank: '3rd Place', nations: '8 Countries', venue: 'Cisco NetAcad' },
      description:
        'Represented Universiti Teknologi Malaysia (UTM) in the international CTF finals in November 2025. Solved competitive challenges spanning cloud infrastructure misconfigurations, packet payload inspection with Wireshark, binary exploitation, and reverse engineering.',
      tags: ['Wireshark', 'Packet Forensics', 'Binary Exploitation', 'Linux Defense', 'Reverse Engineering'],
      awsServices: ['Cloud Range', 'Network Telemetry'],
    },
    {
      id: 'mindcraft',
      title: 'MindCraft: AWS Three-Tier Infrastructure & Gated CI/CD',
      tagline: 'Full-stack AWS infrastructure provisioned with Terraform and Trivy CI/CD gating',
      category: 'cloud-security',
      featured: false,
      github: 'https://github.com/Mhdomer/mindcraft-aws-migration',
      badge: 'Infrastructure as Code',
      stats: { resources: '47 Terraform Res', gate: 'Trivy Exit Code 1', deploy: 'SSM Automated' },
      description:
        'Migrated a multi-tier application to self-managed AWS infrastructure with isolated public/private subnets, Application Load Balancers, and least-privilege IAM roles. Built a GitHub Actions pipeline enforcing shift-left Trivy vulnerability scanning that automatically blocks critical CVE deployments.',
      tags: ['Terraform', 'AWS VPC', 'Trivy', 'GitHub Actions', 'Docker', 'AWS SSM'],
      awsServices: ['AWS VPC', 'Amazon EC2', 'Application Load Balancer', 'AWS SSM'],
    },
    {
      id: 'secrh-healthcare',
      title: 'SECRH: Healthcare IT Infrastructure Hardening',
      tagline: 'Securing clinic networks and patient diagnostic systems at Al-Ameen IT',
      category: 'cloud-security',
      featured: false,
      github: 'https://github.com/Mhdomer',
      badge: 'Industrial Placement',
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sakura-500/10 border border-sakura-500/30 text-sakura-300 text-xs font-mono mb-3">
            <span>03 // IMPLEMENTATIONS & EXPERIMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Featured Projects & Engineering Work
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real code solving real problems. From sub-120ms AI security guardrails and event-driven cloud remediation to international CTF podiums and healthcare network hardening.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-sakura-400/40 relative group"
            >
              <div>
                {/* Top Badge & Links */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-charcoal-900 border border-white/10 text-sakura-300">
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
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sakura-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-engine-cyan font-mono mb-3">{p.tagline}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{p.description}</p>
              </div>

              <div>
                {/* Key Stats Bar */}
                <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-lg bg-charcoal-900/80 border border-white/5 font-mono text-[11px] mb-4">
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
