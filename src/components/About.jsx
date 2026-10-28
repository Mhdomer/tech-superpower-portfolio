import React, { useState } from 'react';
import { Compass, Cog, Leaf, Users, Award, BookOpen, HeartHandshake, Shield } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: Compass },
    { id: 'philosophy', label: 'Engine Precision & Kaizen', icon: Cog },
    { id: 'impact', label: 'Sustainability & Poverty', icon: Leaf },
    { id: 'mentorship', label: 'Peer Tutoring & Community', icon: Users },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sakura-500/10 border border-sakura-500/30 text-sakura-300 text-xs font-mono mb-3">
            <span>01 // THE STORY & ROOTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Where Precision Meets Purpose
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From the lecture halls of UTM in Malaysia to medical healthcare IT in Riyadh, my goal is to build resilient systems that protect people, conserve energy, and lift others up.
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-sakura-500 text-white shadow-lg shadow-sakura-500/20'
                    : 'bg-charcoal-800 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-sakura-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-sakura-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {activeTab === 'journey' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Student of Systems, Builder on the Ground</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  I grew up fascinated by how things work under the hood. As a senior Computer Science student at <strong>Universiti Teknologi Malaysia (UTM)</strong>, I channeled that drive into distributed infrastructure, cloud architecture, and security defenses.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Currently, I am conducting my Industrial Training at the <strong>Al-Ameen Medical Complex IT Department in Riyadh</strong>. Here, uptime is not a vanity metric; it directly protects clinic operations, diagnostic devices, and patient workflow integrity. 
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Operating across dual cultures and high-stakes healthcare networks taught me to write resilient code, automate drift detection, and treat security as an enabler rather than an afterthought.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                  <span className="px-2.5 py-1 rounded bg-charcoal-800 border border-white/5 text-engine-cyan">
                    UTM Johor Bahru
                  </span>
                  <span className="px-2.5 py-1 rounded bg-charcoal-800 border border-white/5 text-sakura-300">
                    Al-Ameen IT Riyadh
                  </span>
                  <span className="px-2.5 py-1 rounded bg-charcoal-800 border border-white/5 text-emerald-400">
                    AWS Free Tier / Builder Center
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5">
                  <div className="text-2xl font-bold text-white font-mono mb-1">2023-Present</div>
                  <div className="text-xs font-medium text-sakura-300 mb-1">UTM Computer Science</div>
                  <div className="text-xs text-slate-400">Specializing in networks, operating systems, and systems security.</div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5">
                  <div className="text-2xl font-bold text-white font-mono mb-1">2026-2027</div>
                  <div className="text-xs font-medium text-engine-cyan mb-1">Al-Ameen IT Dept</div>
                  <div className="text-xs text-slate-400">Healthcare infrastructure, endpoint defense, and clinic automation.</div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5">
                  <div className="text-2xl font-bold text-white font-mono mb-1">6+</div>
                  <div className="text-xs font-medium text-emerald-400 mb-1">Open Source Projects</div>
                  <div className="text-xs text-slate-400">AI security guardrails, drift remediation engines, and learning tools.</div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5">
                  <div className="text-2xl font-bold text-white font-mono mb-1">50+</div>
                  <div className="text-xs font-medium text-amber-300 mb-1">Students Tutored</div>
                  <div className="text-xs text-slate-400">Peer mentoring in data structures, Linux, and algorithms.</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'philosophy' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>The Mechanical Engine Metaphor & Kaizen</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  I have a deep love for mechanical engines: high-revving rotary engines, quad-cam V8s, and the exacting balance of pistons and valves. In an engine, if tolerances are off by fractions of a millimeter or cooling fails, the entire block seizes.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Software architecture is no different. Cloud microservices, CI/CD pipelines, and AI inference runtimes are modern combustion chambers. When you balance your compute loads, tune kernel parameters, and eliminate latency bottlenecks, your system runs cleanly with minimal thermal and financial waste.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  I combine this mechanical rigor with <em>Kaizen</em> (continuous daily improvement) and the serene focus of Sakura. Clean aesthetics make complex security telemetry readable and actionable.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-engine-cyan/10 text-engine-cyan mt-0.5">
                    <Cog className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Deterministic Tolerances</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      No sloppy timeouts or ambiguous fallbacks. Every API response and guardrail check has explicit latency budgets.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sakura-500/10 text-sakura-300 mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Thermal & Resource Efficiency</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      FinOps and green compute. Running SLM 2B models instead of massive LLMs saves energy, compute bills, and latency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Green Tech & Fighting Poverty Through Code</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Technology is most rewarding when it serves human survival and opportunity. Excessive cloud waste and bloated compute directly consume power grids and inflate infrastructure bills that small organizations or charities cannot afford.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  I care deeply about sustainable architectures: leveraging AWS serverless scale-to-zero (Lambda, DynamoDB on-demand, S3 Glacier), right-sizing workloads, and adopting green engineering practices. By cutting waste, we lower the cost barrier so essential non-profit, educational, and healthcare services can thrive.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Every watt saved in data centers and every dollar reclaimed from idle cloud resources is a dollar that can fund scholarships, clean water initiatives, or medical outreach.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1">
                    <Leaf className="w-4 h-4" />
                    <span>Scale-To-Zero Cloud Pattern</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Designing systems that consume zero kWh when idle. Zero zombies, zero zombie bills.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm mb-1">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Accessible Open Tech</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Publishing lightweight, open-source security modules so budget-constrained institutions don't need enterprise licenses to stay safe.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mentorship' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>UTM Peer Tutoring & YouTube Knowledge Sharing</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  True mastery is tested by whether you can explain a pointer arithmetic problem or an AWS IAM evaluation logic to a struggling first-year student.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  At Universiti Teknologi Malaysia, I have led peer tutoring sessions for junior CS students, breaking down discrete structures, object-oriented design, and Linux systems programming. Seeing someone have their "aha!" moment is the best feeling in engineering.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Through my YouTube channel (<strong>Omar Documents</strong>) and technical write-ups, I share honest build logs, Linux setup walkthroughs, and DevSecOps experiments in both English and Arabic to help fellow student developers level up their careers.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sakura-500/10 text-sakura-300 mt-0.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Peer Tutoring Program</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      One-on-one and group labs covering C++, data structures, and computer organization at UTM.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">YouTube: "Omar Documents"</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Documenting Linux desktop configurations, cloud pipelines, and real-world system architecture walkthroughs.
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
