import React, { useState } from 'react';
import { ExternalLink, Shield, Cloud, Terminal, BookOpen, Layers, Check, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
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
      title: 'A2 Remediation Engine: AWS Security & Drift Fixer',
      tagline: 'Autonomous cloud security remediation engine with zero human delay',
      category: 'cloud-security',
      featured: true,
      github: 'https://github.com/Mhdomer',
      badge: 'Cloud DevSecOps',
      stats: { mttr: '< 2.4s', coverage: 'CIS AWS Benchmark', cost: 'Scale to Zero' },
      description:
        'Event-driven serverless daemon that listens to AWS Security Hub and AWS Config finding streams. Automatically remediates misconfigured S3 public policies, unrestricted ingress security groups (0.0.0.0/0 on port 22/3389), and non-compliant KMS keys using idempotent Python execution.',
      tags: ['AWS Boto3', 'AWS Config', 'AWS Security Hub', 'EventBridge', 'Terraform'],
      awsServices: ['AWS EventBridge', 'AWS Lambda', 'AWS Security Hub', 'AWS IAM'],
    },
    {
      id: 'mindcraft',
      title: 'MindCraft: Gamified CS Educational Platform',
      tagline: 'Interactive learning platform helping student engineers master core algorithms',
      category: 'education',
      featured: false,
      github: 'https://github.com/Mhdomer',
      badge: 'UTM Coursework & Community',
      stats: { users: '120+ students', modules: '12 interactive labs', rating: '4.8/5' },
      description:
        'Built at Universiti Teknologi Malaysia to combat high failure rates in early computer science courses. Turns abstract data structures like AVL trees, graph traversals, and dynamic programming into interactive sandbox challenges with immediate feedback loops.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      awsServices: ['AWS Amplify', 'Amazon RDS'],
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
      awsServices: ['Amazon S3 Glacier (Cold Backup)', 'CloudWatch Logs'],
    },
    {
      id: 'youtube-tutoring',
      title: 'Omar Documents & UTM CS Peer Mentorship',
      tagline: 'Demystifying Linux, cloud infrastructure, and systems programming',
      category: 'education',
      featured: false,
      github: 'https://github.com/Mhdomer',
      badge: 'Community Outreach',
      stats: { reach: 'Bilingual (AR/EN)', sessions: '50+ students', repos: 'Open notes' },
      description:
        'A public knowledge initiative. Creating deep-dive technical tutorials on YouTube ("Omar Documents") focusing on Linux desktop tuning (CachyOS, Niri Wayland), dual-boot environments, and cloud certifications, alongside weekly hands-on peer tutoring sessions at UTM.',
      tags: ['Technical Writing', 'Curriculum Design', 'Linux Workstations', 'Mentorship'],
      awsServices: ['AWS Educate / Builder Center'],
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
            Real code solving real problems. From sub-120ms AI security guardrails to healthcare infrastructure hardening and peer education.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai-security', label: 'AI Security & Guardrails' },
            { id: 'cloud-security', label: 'Cloud DevSecOps & AWS' },
            { id: 'education', label: 'Education & Community' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                filter === item.id
                  ? 'bg-sakura-500 text-white font-semibold shadow-md shadow-sakura-500/20'
                  : 'bg-charcoal-800 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-panel p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                project.featured
                  ? 'border-sakura-500/30 bg-charcoal-800/80 shadow-lg shadow-sakura-500/5'
                  : 'border-white/10 bg-charcoal-800/40 hover:border-white/20'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-charcoal-900 border border-white/10 text-sakura-300">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-charcoal-900 text-slate-300 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-sakura-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-engine-cyan mb-4">{project.tagline}</p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics / Stats */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-charcoal-900/80 border border-white/5 mb-6 text-center">
                  {Object.entries(project.stats).map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[10px] font-mono uppercase text-slate-400">{k}</div>
                      <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tags & AWS Badges */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-charcoal-900/90 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-engine-cyan">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>AWS: {project.awsServices.join(', ')}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
