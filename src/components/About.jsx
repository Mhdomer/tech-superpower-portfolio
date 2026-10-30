import React from 'react';
import { Download, Maximize2, ExternalLink } from 'lucide-react';

export default function About({ onOpenConsole, onSelectImage, onOpenResume, onScrollToFunFact, onOpenSandGame }) {
  const achievements = [
    {
      title: 'TEAM LEAD · DEPI CLOUD SECURITY',
      htmlDescription:
        'Led university peer group through the <strong>Digital Egypt Pioneers Initiative (DEPI)</strong> capstone, architecting a hardened AWS environment with automated vulnerability triage, IAM least privilege policies, and CI/CD security gates.',
    },
    {
      title: "UTM DEAN'S LIST · CGPA 3.43",
      htmlDescription:
        'Senior Computer Science student specializing in <strong>Networks and Security</strong> at <strong>Universiti Teknologi Malaysia (UTM)</strong>. Maintained high academic standing with focus on distributed systems, memory safety, and network protocols.',
    },
    {
      title: '3RD PLACE · ASEAN CYBER RACE 2025 FINALS',
      htmlDescription:
        'Represented UTM in the international finals (<strong>Cisco Networking Academy</strong>) in November 2025. Solved competitive challenges spanning cloud infrastructure misconfigurations, packet payload forensics with <strong>Wireshark</strong>, and reverse engineering.',
    },
    {
      title: 'HEALTHCARE INFRASTRUCTURE · AL-AMEEN IT',
      htmlDescription:
        'Industrial Training in clinical outpatient IT operations at <strong>Al-Ameen Medical Complex in Riyadh</strong>. Segmented diagnostic <strong>PACS medical subnets</strong> from administrative networks, hardened multi-clinic endpoints, and automated backup validation.',
    },
    {
      title: 'KNOWLEDGE SHARING · "OMAR DOCUMENTS"',
      htmlDescription:
        'Conducted weekly peer tutoring sessions for junior CS students at UTM in <strong>C++, data structures, and POSIX OS fundamentals</strong>. Creating bilingual technical walkthroughs on YouTube covering <strong>CachyOS Linux</strong>, <strong>Niri Wayland</strong>, and cloud architectures.',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 border-t transition-colors duration-300 relative"
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-14 items-start">
          {/* Left Column: ACHIEVEMENTS */}
          <div className="flex flex-col">
            {/* Header matching exact layout */}
            <div
              className="mb-6 pb-2 border-b flex items-center justify-between"
              style={{ borderColor: 'var(--line)' }}
            >
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest opacity-70">
                ACHIEVEMENTS
              </h3>
            </div>

            {/* Achievements List */}
            <div className="space-y-7">
              {achievements.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="text-sm font-bold font-mono uppercase tracking-tight text-[var(--ink)]">
                    {item.title}
                  </h4>
                  <p
                    className="text-xs sm:text-sm leading-relaxed opacity-80 font-sans"
                    dangerouslySetInnerHTML={{ __html: item.htmlDescription }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center Vertical Divider Line (Exact match to screenshot) */}
          <div
            className="hidden lg:block w-px self-stretch opacity-60"
            style={{ background: 'var(--line)' }}
          />

          {/* Right Column: RESUME */}
          <div className="flex flex-col">
            {/* Header matching exact layout */}
            <div
              className="mb-6 pb-2 border-b flex items-center justify-between"
              style={{ borderColor: 'var(--line)' }}
            >
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest opacity-70">
                RESUME
              </h3>
              <button
                type="button"
                onClick={() => onOpenResume && onOpenResume()}
                className="text-[11px] font-mono opacity-70 hover:opacity-100 flex items-center gap-1.5 transition-opacity"
                title="View Fullscreen Resume"
              >
                <Maximize2 className="w-3 h-3 text-[var(--brand-coral)]" />
                <span>View Fullscreen</span>
              </button>
            </div>

            {/* Framed Resume Card (Exact sharara.me geometry with curved top-right) */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border flex flex-col group transition-all"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--line)',
              }}
              data-testid="card-resume-preview"
            >
              {/* Document Image Container with Asymmetric Top-Right Curve */}
              <div
                className="relative overflow-hidden cursor-pointer bg-white p-2.5 sm:p-3.5 transition-transform duration-300 group-hover:scale-[1.01]"
                style={{
                  borderTopLeftRadius: '14px',
                  borderTopRightRadius: '42px',
                }}
                onClick={() => (onOpenResume ? onOpenResume() : null)}
              >
                <img
                  src="/assets/resume/resume-preview.png"
                  alt="Mohamed Makhlouf Resume"
                  className="w-full h-auto object-top object-contain block rounded-t-lg"
                />

                {/* Inspect Overlay on Hover */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold bg-black/85 text-white border border-white/20 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                    <Maximize2 className="w-3.5 h-3.5" style={{ color: 'var(--brand-coral)' }} />
                    <span>Click to View Fullscreen</span>
                  </span>
                </div>
              </div>

              {/* Bottom Full-Width Dark Download Bar (Exact sharara.me aesthetic) */}
              <div className="p-0 border-t" style={{ borderColor: 'var(--line)' }}>
                <a
                  href="/assets/resume/Mohamed_Makhlouf_Resume.pdf"
                  download="Mohamed_Makhlouf_Resume.pdf"
                  className="w-full py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-white active:scale-[0.99] hover:opacity-90 shadow-inner"
                  style={{ background: '#3b414a' }}
                >
                  <span>DOWNLOAD RESUME</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* The Authentic Fun Fact: Sand-Skater Card (One Piece Alabasta x Riyadh Red Dunes) */}
            <div
              className="mt-6 rounded-2xl overflow-hidden border shadow-lg flex flex-col p-5 transition-all group hover:border-[var(--brand-coral)]"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--line)',
              }}
              data-testid="card-fun-fact-sandskate"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏴‍☠️</span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--brand-coral)]">
                    FUN FACT // ALABASTA x RIYADH RED DUNE RUNNER
                  </span>
                </div>
                <span
                  className="px-2 py-0.5 rounded-full text-[10px] font-mono border"
                  style={{
                    background: 'var(--paper)',
                    borderColor: 'var(--line)',
                    color: 'var(--ink)',
                  }}
                >
                  One Piece & Dunes
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3 p-2.5 rounded-xl border bg-black/5" style={{ borderColor: 'var(--line)' }}>
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border" style={{ borderColor: 'var(--brand-coral)' }}>
                  <img
                    src="/assets/decorations/matsuge-luffy-alabasta.jpg"
                    alt="Matsuge and Luffy in Alabasta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs leading-relaxed opacity-90 font-sans">
                  Surfing 40-degree red desert dunes in Riyadh with pure Alabasta energy! Collect water barrels and unleash Gomu Gomu no Storm on Sir Crocodile.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onScrollToFunFact) onScrollToFunFact();
                  else if (onOpenSandGame) onOpenSandGame();
                }}
                className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-98 shadow-sm group-hover:scale-[1.01]"
                style={{
                  background: 'var(--button-bg)',
                  color: 'var(--button-fg)',
                }}
              >
                <span>EXPLORE ALABASTA SHOWDOWN & DEFEAT CROCODILE</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">🥊</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
