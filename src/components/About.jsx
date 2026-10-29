import React from 'react';
import { Award, BookOpen, Download, ExternalLink, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenConsole }) {
  const achievements = [
    {
      title: "UTM DEAN'S LIST // CGPA 3.43",
      category: 'Academic Honor',
      description:
        'Senior Computer Science student specializing in Networks and Security at Universiti Teknologi Malaysia (UTM). Maintained high academic standing with focus on distributed systems, memory management, and network protocols.',
    },
    {
      title: '3RD PLACE // ASEAN CYBER RACE 2025 FINALS',
      category: 'International CTF Podium',
      description:
        'Represented UTM in the international finals (Cisco Networking Academy) in November 2025. Solved competitive challenges spanning cloud infrastructure misconfigurations, packet payload forensics with Wireshark, and reverse engineering.',
    },
    {
      title: 'AL-AMEEN MEDICAL COMPLEX IT // RIYADH',
      category: 'Healthcare Infrastructure',
      description:
        'Industrial Training in clinical outpatient IT operations. Segmented diagnostic PACS medical subnets from administrative networks, hardened multi-clinic endpoints, and automated backup validation to protect patient health records.',
    },
    {
      title: 'PEER TUTORING & "OMAR DOCUMENTS"',
      category: 'Knowledge Sharing',
      description:
        'Conducted weekly peer tutoring sessions for junior CS students at UTM in C++, data structures, and POSIX operating system fundamentals. Creating bilingual technical walkthroughs on YouTube covering CachyOS Linux, Niri Wayland, and cloud architectures.',
    },
  ];

  return (
    <section id="experience" className="py-24 border-t border-white/5 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Achievements (Ziad Sharara layout) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
                Proven Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-none">
                Experience &<br />
                <span className="text-terracotta-500">Achievements.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {achievements.map((item, idx) => (
                <div key={idx} className="space-y-1.5 pb-6 border-b border-white/5 last:border-none">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-800 text-terracotta-400 border border-white/5">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Resume Card (Ziad Sharara layout) */}
          <div className="lg:col-span-5">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-4">
              Resume & Credentials
            </div>

            <div className="rounded-2xl overflow-hidden bg-white text-charcoal-900 shadow-2xl border border-white/20 p-6 sm:p-8 space-y-5 font-sans relative">
              {/* Resume Header */}
              <div className="border-b border-slate-200 pb-4 text-center">
                <h4 className="text-xl sm:text-2xl font-extrabold text-charcoal-900 tracking-tight">
                  Mohamed Makhlouf
                </h4>
                <div className="text-xs font-semibold text-terracotta-600 mt-0.5 font-mono">
                  Cloud DevSecOps & AI Security Engineer
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  muhamedomar.g@gmail.com · Riyadh, Saudi Arabia / UTM Malaysia
                </div>
              </div>

              {/* Core Summary Snippet */}
              <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <div className="font-bold text-charcoal-900 uppercase font-mono text-[10px] tracking-wider text-slate-400">
                  Profile Summary
                </div>
                <p>
                  Senior CS student at Universiti Teknologi Malaysia (3.43 CGPA) undergoing Industrial Training at Al-Ameen Medical Complex IT Dept in Riyadh. Specializing in autonomous drift remediation, shift-left CI/CD gating, and sub-115ms AI security guardrails on AWS.
                </p>
              </div>

              {/* Skills Highlights */}
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="font-bold text-charcoal-900 uppercase font-mono text-[10px] tracking-wider text-slate-400">
                  Core Technologies
                </div>
                <p className="font-mono text-[11px]">
                  <strong>AWS:</strong> EventBridge, Lambda, Bedrock, CloudFront, S3, IAM, SSM<br />
                  <strong>Security:</strong> Trivy, Checkov, CIS AWS Benchmarks, OWASP LLM01/LLM04<br />
                  <strong>Languages:</strong> Python, Bash, Terraform (IaC), POSIX Shell, C++
                </p>
              </div>

              {/* Download CTA Bar */}
              <div className="pt-2">
                <a
                  href="mailto:muhamedomar.g@gmail.com?subject=Mohamed%20Makhlouf%20Resume%20Request"
                  className="w-full py-3 rounded-xl bg-charcoal-900 hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4 text-terracotta-400" />
                  <span>Request Full PDF Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
