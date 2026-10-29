import React, { useState } from 'react';
import { Compass, Terminal, Leaf, Users, Award, BookOpen, Shield, Code2, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenConsole }) {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = [
    { id: 'journey', label: 'My Journey & Roots', icon: Compass },
    { id: 'devsecops-craft', label: 'DevSecOps & Systems Craft', icon: Terminal },
    { id: 'green-finops', label: 'Scale-to-Zero & FinOps', icon: Leaf },
    { id: 'mentorship', label: 'Peer Tutoring & Community', icon: Users },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800 border border-white/10 text-cyber-emerald text-xs font-mono mb-3">
            <span>01 / THE STORY & ROOTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Ground Truth: University Labs to Hospital Ops
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From computer science research in Malaysia to live healthcare IT infrastructure in Riyadh: building resilient, zero-drift cloud environments that withstand real attacks.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-charcoal-800 text-cyber-emerald border border-cyber-emerald/50 shadow-md'
                    : 'bg-charcoal-850 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyber-emerald' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="cyber-panel p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden bg-charcoal-850">
          {/* TAB 1: JOURNEY */}
          {activeTab === 'journey' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Student of Systems, Builder in the Trenches</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  I grew up fascinated by how software interfaces directly with hardware. As a senior Computer Science student at <strong className="text-white">Universiti Teknologi Malaysia (UTM)</strong> specializing in Networks and Security (Dean's List, 3.43 CGPA), I focused on cloud infrastructure, container security, and defense automation.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Currently, I am conducting my Industrial Training at the <strong className="text-white">Al-Ameen Medical Complex IT Department in Riyadh</strong>. In a hospital clinic environment, uptime and zero-drift security are not theoretical: they protect active patient diagnostics, internal electronic health records, and clinical doctor workflows every single day.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  In November 2025, our team represented UTM at the <strong className="text-white">ASEAN Cyber Race 2025 CTF Finals</strong>, securing 3rd place across 15 finalist teams representing 8 Southeast Asian countries. That competitive trial hardened my instinct for packet analysis, reverse engineering, and threat identification under live incident conditions.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                  <span className="px-2.5 py-1 rounded bg-charcoal-800 border border-white/5 text-cyber-cyan">
                    UTM Johor Bahru
                  </span>
                  <span className="px-2.5 py-1 rounded bg-charcoal-800 border border-white/5 text-cyber-emerald">
                    Al-Ameen IT Riyadh
                  </span>
                  <span className="px-2.5 py-1 rounded bg-charcoal-800 border border-white/5 text-slate-300">
                    ASEAN Cyber Race 3rd Place
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
                  <div className="text-2xl font-bold text-white font-mono mb-1">3.43</div>
                  <div className="text-xs font-medium text-cyber-emerald mb-1">UTM Dean's List</div>
                  <div className="text-xs text-slate-400">B.Sc. Computer Science in Networks and Security.</div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
                  <div className="text-2xl font-bold text-white font-mono mb-1">2026-2027</div>
                  <div className="text-xs font-medium text-cyber-cyan mb-1">Al-Ameen IT Dept</div>
                  <div className="text-xs text-slate-400">Clinic infrastructure, endpoint hardening, and network segmentation.</div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
                  <div className="text-2xl font-bold text-white font-mono mb-1">3rd Place</div>
                  <div className="text-xs font-medium text-cyber-emerald mb-1">ASEAN Cyber Race</div>
                  <div className="text-xs text-slate-400">CTF finals among 15 teams representing 8 countries.</div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
                  <div className="text-2xl font-bold text-white font-mono mb-1">325+</div>
                  <div className="text-xs font-medium text-cyber-sky mb-1">Automated Unit Tests</div>
                  <div className="text-xs text-slate-400">Zero-drift resilience on A2 EventBridge remediation engine.</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DEVSECOPS & SYSTEMS CRAFT */}
          {activeTab === 'devsecops-craft' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Deterministic Security & Workstation Craft</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Security cannot be an afterthought or a quarterly compliance spreadsheet. In modern cloud architecture, every deployment must be verified before artifact creation, and every security drift must self-heal at runtime.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  I prioritize rigorous software craft: writing clean code, maintaining thorough test coverage, and continuously eliminating failure modes. In the A2 Compliance Engine, we built botocore adaptive rate limiting, self-invocation loop prevention, and SQS dead-letter queues backed by 325 unit tests.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  On the workstation side, I operate in a keyboard-driven CachyOS Linux environment running the Niri Wayland scrollable tiling compositor and Kitty terminal. Tuning kernel flags, managing POSIX namespaces, and automating daily pipelines is how I stay grounded in deep systems reality.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyber-emerald/10 text-cyber-emerald mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Shift-Left Enforcement</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Enforcing Trivy container CVE scans and Checkov static IaC policies inside GitHub Actions to block vulnerabilities before release.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan mt-0.5">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Event-Driven Self Healing</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Capturing CloudTrail events in EventBridge and dispatching idempotent Lambda remediation in sub-2.4 seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SUSTAINABLE CLOUD & FINOPS */}
          {activeTab === 'green-finops' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Scale-to-Zero & Lowering the Cost of Cloud Security</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Cloud computing should not be a continuous drain on budgets or energy grids. When small organizations, clinics, or student projects overprovision idle resources, they face prohibitive monthly bills that stifle their core mission.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  I advocate for scale-to-zero serverless patterns: leveraging AWS Lambda, S3 Glacier lifecycle tiering, and EventBridge instead of paying for idle 24/7 worker nodes. In AI security, this means running quantized 2B parameter SLMs (like Aegis-2B) on CPU containers rather than booking dedicated high-wattage GPU clusters for basic guardrail checks.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Eliminating wasted compute directly reduces cloud expenditures and data center carbon emissions, keeping technology accessible and sustainable.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
                  <div className="flex items-center gap-2 text-cyber-emerald font-semibold text-sm mb-1">
                    <Leaf className="w-4 h-4" />
                    <span>Scale-To-Zero Serverless Pattern</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Designing event-driven Lambda architectures that consume zero kWh and zero dollars when idle.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5">
                  <div className="flex items-center gap-2 text-cyber-cyan font-semibold text-sm mb-1">
                    <Code2 className="w-4 h-4" />
                    <span>Open & Accessible DevSecOps</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Publishing open-source compliance and guardrail tools so grassroots organizations do not need five-figure enterprise licenses.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: MENTORSHIP & YOUTUBE */}
          {activeTab === 'mentorship' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>UTM Peer Tutoring & YouTube Knowledge Sharing</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  True engineering mastery is proven when you can clearly explain AWS IAM evaluation logic or memory pointer arithmetic to a first-year student without jargon.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  At Universiti Teknologi Malaysia, I have conducted peer tutoring sessions for junior CS students, breaking down discrete mathematics, data structures, and POSIX operating system fundamentals. Helping someone overcome an intellectual barrier is one of the most fulfilling parts of engineering.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Through my YouTube channel (<strong className="text-white">Omar Documents</strong>) and technical blog posts, I document Linux workstation setups, cloud infrastructure migrations, and DevSecOps tooling in both English and Arabic to support fellow student builders.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyber-emerald/10 text-cyber-emerald mt-0.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Peer Tutoring Program</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Hands-on labs in C++, data structures, and computer organization at UTM.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800 border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">YouTube: "Omar Documents"</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Bilingual guides covering CachyOS Linux, Niri Wayland, dual-boot setups, and AWS cloud security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
