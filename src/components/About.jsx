import React from 'react';
import { Award, BookOpen, Download, ExternalLink, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenConsole, onSelectImage }) {
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
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-none font-display">
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
          <div className="lg:col-span-5 flex flex-col">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-4">
              RESUME
            </div>

            <div className="rounded-2xl overflow-hidden bg-white text-charcoal-900 shadow-2xl border border-white/20 flex flex-col group">
              {/* Document Image Container with Click-to-Zoom */}
              <div
                className="relative overflow-hidden cursor-pointer bg-slate-100 max-h-[460px] sm:max-h-[500px]"
                onClick={() =>
                  onSelectImage &&
                  onSelectImage(
                    '/assets/resume/resume-preview.png',
                    'Mohamed Makhlouf // Cloud DevSecOps & AI Security Resume'
                  )
                }
              >
                <img
                  src="/assets/resume/resume-preview.png"
                  alt="Mohamed Makhlouf Resume"
                  className="w-full object-top object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Inspect Overlay on Hover */}
                <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-charcoal-900/90 text-white font-mono text-xs font-semibold border border-white/20 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                    <ExternalLink className="w-3.5 h-3.5 text-terracotta-400" />
                    <span>Click to Inspect High-Res</span>
                  </span>
                </div>
              </div>

              {/* Bottom Action Footer Bar */}
              <div className="p-3 sm:p-4 bg-charcoal-900 border-t border-slate-200/20 flex items-center gap-2">
                <a
                  href="/assets/resume/Mohamed_Makhlouf_Resume.pdf"
                  download="Mohamed_Makhlouf_Resume.pdf"
                  className="flex-1 py-3 px-4 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                <a
                  href="/assets/resume/Mohamed_Makhlouf_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-slate-200 border border-white/10 font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="w-4 h-4 text-terracotta-400" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
