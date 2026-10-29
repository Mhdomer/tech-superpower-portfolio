import React, { useState, useEffect, useRef } from 'react';
import { FastForward, Swords } from 'lucide-react';

const BOOT_LOGS = [
  { status: 'OK', text: 'Started systemd-udevd.service - Rule-based Manager for Device Events.' },
  { status: 'OK', text: 'Mounted /mnt/data (NVMe NTFS Dual-Boot Partition).' },
  { status: 'OK', text: 'Reached target Local File Systems.' },
  { status: 'OK', text: 'Initializing CachyOS Linux x86_64 (Kernel 6.13-cachyos).' },
  { status: 'OK', text: 'Loaded Niri Wayland Compositor & Kitty Terminal.' },
  { status: 'OK', text: 'Connecting AWS Cloud Infrastructure (ap-southeast-1 & me-central-1).' },
  { status: 'OK', text: 'Starting A2 EventBridge Compliance Daemon (Idempotent Boto3).' },
  { status: 'OK', text: 'Deploying Aegis-2B AI Security Guardrail (Sub-115ms p99 Latency).' },
  { status: 'OK', text: 'Verified CTF Credentials: 3rd Place ASEAN Cyber Race 2025.' },
  { status: 'OK', text: 'Reached target Cloud DevSecOps Matrix.' },
];

// Detailed Katana Sword Vector Graphic
function RealKatanaGraphic({ className, style }) {
  return (
    <svg
      viewBox="0 0 1000 240"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Blade steel gradient with metallic reflection */}
        <linearGradient id="katanaBladeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#e2e8f0" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Razor-sharp hamon temper line glow */}
        <linearGradient id="katanaHamonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
        </linearGradient>

        {/* Traditional gold tsuba and kashira accents */}
        <linearGradient id="katanaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>

        {/* Tsuka handle grip wrap */}
        <linearGradient id="katanaHandleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Glow filter for blade gleam */}
        <filter id="katanaGleamFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 1. Curved Steel Katana Blade with traditional kissaki tip */}
      <path
        d="M 320,118 Q 650,110 940,95 Q 985,92 995,85 Q 970,108 930,122 Q 650,132 320,128 Z"
        fill="url(#katanaBladeGrad)"
        stroke="#cbd5e1"
        strokeWidth="1.2"
        filter="url(#katanaGleamFilter)"
      />

      {/* 2. Razor Sharp Hamon Temper Edge */}
      <path
        d="M 325,126 Q 650,130 930,121 Q 970,107 995,85"
        stroke="url(#katanaHamonGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* 3. Habaki (Polished Gold Blade Collar) */}
      <path
        d="M 310,112 L 325,114 L 325,130 L 310,132 Z"
        fill="url(#katanaGoldGrad)"
        stroke="#78350f"
        strokeWidth="1"
      />

      {/* 4. Tsuba (Ornate Japanese Oval Handguard) */}
      <ellipse
        cx="308"
        cy="122"
        rx="14"
        ry="38"
        fill="url(#katanaGoldGrad)"
        stroke="#451a03"
        strokeWidth="2.5"
      />
      <ellipse cx="308" cy="112" rx="4" ry="7" fill="#0f172a" />
      <ellipse cx="308" cy="132" rx="4" ry="7" fill="#0f172a" />

      {/* 5. Tsuka (Handle / Grip) */}
      <path
        d="M 60,116 L 302,114 L 302,130 L 60,128 Z"
        fill="url(#katanaHandleGrad)"
        stroke="#0f172a"
        strokeWidth="1.5"
      />

      {/* Diamond wrap pattern (Tsuka-ito) */}
      {[85, 115, 145, 175, 205, 235, 265].map((x) => (
        <g key={x}>
          <polygon
            points={`${x},122 ${x + 12},115 ${x + 24},122 ${x + 12},129`}
            fill="#eab308"
            opacity="0.9"
          />
          <line x1={x + 12} y1="115" x2={x + 12} y2="129" stroke="#78350f" strokeWidth="1" />
        </g>
      ))}

      {/* 6. Kashira (Gold Pommel End Cap) */}
      <rect
        x="48"
        y="114"
        width="14"
        height="16"
        rx="3"
        fill="url(#katanaGoldGrad)"
        stroke="#78350f"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function LinuxBootKatanaIntro({ isOpen, onClose }) {
  // Stages: 'boot' -> 'terminal' -> 'slashing' -> 'splitting' -> 'done'
  const [stage, setStage] = useState('boot');
  const [visibleBootIndex, setVisibleBootIndex] = useState(0);

  // Terminal Typing State
  const [terminalStep, setTerminalStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Synthesize realistic metallic katana blade draw & whoosh sound
  const playKatanaAudio = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      // 1. Blade metallic draw resonance
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(3200, now);
      osc1.frequency.exponentialRampToValueAtTime(1600, now + 0.35);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(4800, now);
      osc2.frequency.exponentialRampToValueAtTime(2100, now + 0.3);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.55);
      osc2.stop(now + 0.55);

      // 2. High-speed whoosh / air displacement
      const bufferSize = ctx.sampleRate * 0.45;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(500, now);
      filter.frequency.exponentialRampToValueAtTime(2600, now + 0.15);
      filter.frequency.exponentialRampToValueAtTime(350, now + 0.4);
      filter.Q.setValueAtTime(4, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.3, now + 0.12);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.45);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 450);
    return () => clearInterval(cursorInterval);
  }, []);

  // Handle ESC or Space to skip immediately
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Stage 1: Boot sequence log output
  useEffect(() => {
    if (!isOpen) {
      setStage('boot');
      setVisibleBootIndex(0);
      setTerminalStep(0);
      setTypedText('');
      return;
    }

    if (stage === 'boot') {
      if (visibleBootIndex < BOOT_LOGS.length) {
        const timer = setTimeout(() => {
          setVisibleBootIndex((prev) => prev + 1);
        }, 75);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setStage('terminal');
          setTerminalStep(0);
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, stage, visibleBootIndex]);

  // Stage 2: Realistic Terminal Typing sequence
  useEffect(() => {
    if (stage !== 'terminal') return;

    // Step 0: Type 'whoami'
    if (terminalStep === 0) {
      const command = 'whoami';
      if (typedText.length < command.length) {
        const timeout = setTimeout(() => {
          setTypedText(command.slice(0, typedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalStep(1);
          setTypedText('');
        }, 220);
        return () => clearTimeout(timeout);
      }
    }

    // Step 1: Show whoami result, then delay to type cat
    if (terminalStep === 1) {
      const timeout = setTimeout(() => {
        setTerminalStep(2);
      }, 300);
      return () => clearTimeout(timeout);
    }

    // Step 2: Type 'cat ~/.superpower'
    if (terminalStep === 2) {
      const command = 'cat ~/.superpower';
      if (typedText.length < command.length) {
        const timeout = setTimeout(() => {
          setTypedText(command.slice(0, typedText.length + 1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalStep(3);
          setTypedText('');
        }, 220);
        return () => clearTimeout(timeout);
      }
    }

    // Step 3: Show superpower output, then trigger sword script
    if (terminalStep === 3) {
      const timeout = setTimeout(() => {
        setTerminalStep(4);
      }, 400);
      return () => clearTimeout(timeout);
    }

    // Step 4: Type './deploy_blade.sh'
    if (terminalStep === 4) {
      const command = './deploy_blade.sh';
      if (typedText.length < command.length) {
        const timeout = setTimeout(() => {
          setTypedText(command.slice(0, typedText.length + 1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalStep(5);
        }, 180);
        return () => clearTimeout(timeout);
      }
    }

    // Step 5: Trigger the Katana Slash!
    if (terminalStep === 5) {
      const timeout = setTimeout(() => {
        playKatanaAudio();
        setStage('slashing');
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [stage, terminalStep, typedText]);

  // Stage 3 & 4: Katana Slash and Screen Split Reveal
  useEffect(() => {
    if (stage === 'slashing') {
      const splitTimer = setTimeout(() => {
        setStage('splitting');
      }, 450);
      return () => clearTimeout(splitTimer);
    }

    if (stage === 'splitting') {
      const doneTimer = setTimeout(() => {
        setStage('done');
        onClose();
      }, 1000);
      return () => clearTimeout(doneTimer);
    }
  }, [stage, onClose]);

  if (!isOpen || stage === 'done') return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none bg-black font-mono text-xs sm:text-sm text-slate-200">
      {/* Top Controls: Skip Button */}
      <div className="absolute top-5 right-5 z-50 flex items-center gap-2">
        <button
          onClick={onClose}
          className="px-3 py-1.5 rounded-lg bg-charcoal-800/90 hover:bg-charcoal-700 text-slate-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all text-xs font-mono shadow-lg"
        >
          <FastForward className="w-3.5 h-3.5 text-sakura-400" />
          <span>Skip [ESC]</span>
        </button>
      </div>

      {/* STAGE 1 & 2: BOOT CONSOLE SCREEN */}
      <div
        className={`absolute inset-0 bg-[#08090d] p-6 sm:p-12 overflow-hidden flex flex-col justify-start transition-all duration-700 ${
          stage === 'splitting' ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
        style={
          stage === 'splitting'
            ? {
                clipPath: 'polygon(0 0, 100% 0, 100% 28%, 0 72%)',
                transform: 'translate(-40px, -40px) rotate(-1.5deg)',
              }
            : {}
        }
      >
        {/* Subtle Scanlines */}
        <div className="absolute inset-0 scanlines pointer-events-none opacity-40"></div>

        {/* Top Header */}
        <div className="pb-4 mb-4 border-b border-white/10 text-slate-500 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300 font-semibold">CachyOS Linux (Kernel 6.13-cachyos) x86_64</span>
          </div>
          <div className="hidden sm:block text-slate-400 font-mono">
            TTY1 // Dual-Boot UEFI (NTFS /mnt/data)
          </div>
        </div>

        {/* STAGE 1: SYSTEMD BOOT LOGS */}
        {stage === 'boot' && (
          <div className="space-y-1.5 text-slate-300 overflow-y-auto max-h-[80vh]">
            {BOOT_LOGS.slice(0, visibleBootIndex).map((log, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">
                  [{log.status.padStart(6, ' ')}]
                </span>
                <span className="text-slate-300">{log.text}</span>
              </div>
            ))}
            <div className="pt-2 text-slate-500 flex items-center gap-2">
              <span className="animate-spin text-sakura-400">⠋</span>
              <span>Loading AWS DevSecOps security modules...</span>
            </div>
          </div>
        )}

        {/* STAGE 2: TERMINAL PROMPT & TYPING ANIMATION */}
        {(stage === 'terminal' || stage === 'slashing' || stage === 'splitting') && (
          <div className="space-y-4 max-w-3xl">
            {/* Command 1: whoami */}
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span>mhdomar@cachyos-aegis:~$</span>
                <span className="text-white">
                  {terminalStep === 0 ? typedText : 'whoami'}
                  {terminalStep === 0 && showCursor && <span className="text-sakura-400">▋</span>}
                </span>
              </div>
              {terminalStep >= 1 && (
                <div className="mt-1 pl-4 border-l-2 border-emerald-500/50 text-slate-300 font-sans text-sm">
                  <strong>Mohamed Makhlouf</strong> (Mhdomar) · Cloud DevSecOps & AI Security Builder
                </div>
              )}
            </div>

            {/* Command 2: cat ~/.superpower */}
            {terminalStep >= 2 && (
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span>mhdomar@cachyos-aegis:~$</span>
                  <span className="text-white">
                    {terminalStep === 2 ? typedText : 'cat ~/.superpower'}
                    {terminalStep === 2 && showCursor && <span className="text-sakura-400">▋</span>}
                  </span>
                </div>
                {terminalStep >= 3 && (
                  <div className="mt-1 p-3.5 rounded-lg bg-charcoal-900 border border-white/10 text-xs font-mono space-y-1.5 text-slate-300">
                    <div>
                      <span className="text-sakura-300 font-bold">[IDENTITY] </span>
                      <span>Senior CS (Networks & Security) @ UTM Malaysia (CGPA 3.43)</span>
                    </div>
                    <div>
                      <span className="text-engine-cyan font-bold">[OPERATIONS] </span>
                      <span>Al-Ameen Medical Complex IT Dept, Riyadh (Hospital Uptime)</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-bold">[CTF TRIAL] </span>
                      <span>3rd Place Overall, ASEAN Cyber Race 2025 Finals (15 Teams, 8 Nations)</span>
                    </div>
                    <div>
                      <span className="text-amber-300 font-bold">[SUPERPOWER] </span>
                      <span>Autonomous AWS remediation (A2) + Sub-115ms Aegis-2B guardrails</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Command 3: ./deploy_blade.sh */}
            {terminalStep >= 4 && (
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span>mhdomar@cachyos-aegis:~$</span>
                  <span className="text-white">
                    {terminalStep === 4 ? typedText : './deploy_blade.sh'}
                    {terminalStep === 4 && showCursor && <span className="text-sakura-400">▋</span>}
                  </span>
                </div>
                {terminalStep >= 5 && (
                  <div className="mt-2 text-xs font-mono text-rose-400 animate-pulse flex items-center gap-2">
                    <Swords className="w-4 h-4 text-sakura-400" />
                    <span>[!] Perimeter defense breached. Unshelving cyber katana blade...</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* SECOND HALF SPLITTING IN REVERSE DIRECTION FOR CLEAN SCREEN-TEAR */}
      {stage === 'splitting' && (
        <div
          className="absolute inset-0 bg-[#08090d] p-6 sm:p-12 overflow-hidden flex flex-col justify-end transition-all duration-700 opacity-0 scale-105"
          style={{
            clipPath: 'polygon(0 72%, 100% 28%, 100% 100%, 0 100%)',
            transform: 'translate(40px, 40px) rotate(1.5deg)',
          }}
        >
          <div className="font-mono text-xs text-engine-cyan/40 text-right">
            <code>[AWS_EVENTBRIDGE] A2_REMEDIATION_TRIGGERED</code>
          </div>
        </div>
      )}

      {/* THE REAL KATANA SWORD ANIMATION (PHYSICAL BLADE SWEEPING ACROSS SCREEN) */}
      {(stage === 'slashing' || stage === 'splitting') && (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
          {/* Real Detailed Katana Sword Graphic Sweeping Across */}
          <div className="absolute inset-0 flex items-center justify-center katana-sword-sweep">
            <RealKatanaGraphic
              className="w-[900px] sm:w-[1200px] h-auto drop-shadow-[0_0_35px_rgba(244,114,182,0.8)]"
              style={{
                transform: 'rotate(-24deg)',
              }}
            />
          </div>

          {/* Glowing Slash Arc Streak following the blade */}
          <div
            className="absolute h-[5px] bg-gradient-to-r from-transparent via-white via-sakura-300 to-transparent shadow-[0_0_40px_14px_rgba(244,114,182,0.9),0_0_20px_6px_rgba(255,255,255,1)] katana-slash-active"
            style={{
              top: '50%',
              left: '-25%',
              right: '-25%',
              transform: 'rotate(-24deg)',
            }}
          />

          {/* Secondary Electric Edge */}
          <div
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-engine-cyan to-transparent shadow-[0_0_25px_8px_rgba(6,182,212,0.85)]"
            style={{
              top: '50.3%',
              left: '-25%',
              right: '-25%',
              transform: 'rotate(-24deg)',
            }}
          />

          {/* Impact Sparks Burst */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/40 blur-3xl animate-ping pointer-events-none" />
        </div>
      )}
    </div>
  );
}
