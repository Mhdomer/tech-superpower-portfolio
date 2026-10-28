import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Shield, Swords, Sparkles, Check, FastForward } from 'lucide-react';

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

export default function LinuxBootKatanaIntro({ isOpen, onClose }) {
  // Stages: 'boot' -> 'terminal' -> 'slashing' -> 'splitting' -> 'done'
  const [stage, setStage] = useState('boot');
  const [visibleBootIndex, setVisibleBootIndex] = useState(0);

  // Terminal Typing State
  const [terminalStep, setTerminalStep] = useState(0); // 0: typing whoami, 1: whoami output, 2: typing cat, 3: cat output, 4: typing blade, 5: blade trigger
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const containerRef = useRef(null);

  // Synthesize realistic cyber katana blade draw & slice sound
  const playKatanaAudio = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const now = ctx.currentTime;

      // 1. Blade metallic ping / resonance
      const metalOsc1 = ctx.createOscillator();
      const metalOsc2 = ctx.createOscillator();
      const metalGain = ctx.createGain();

      metalOsc1.type = 'sine';
      metalOsc1.frequency.setValueAtTime(2800, now);
      metalOsc1.frequency.exponentialRampToValueAtTime(1400, now + 0.35);

      metalOsc2.type = 'triangle';
      metalOsc2.frequency.setValueAtTime(4200, now);
      metalOsc2.frequency.exponentialRampToValueAtTime(1800, now + 0.3);

      metalGain.gain.setValueAtTime(0.001, now);
      metalGain.gain.linearRampToValueAtTime(0.22, now + 0.04);
      metalGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      metalOsc1.connect(metalGain);
      metalOsc2.connect(metalGain);
      metalGain.connect(ctx.destination);

      metalOsc1.start(now);
      metalOsc2.start(now);
      metalOsc1.stop(now + 0.5);
      metalOsc2.stop(now + 0.5);

      // 2. High-speed whoosh / air displacement
      const bufferSize = ctx.sampleRate * 0.4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.exponentialRampToValueAtTime(2400, now + 0.12);
      filter.frequency.exponentialRampToValueAtTime(300, now + 0.35);
      filter.Q.setValueAtTime(4.5, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.28, now + 0.1);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.4);
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
        }, 85);
        return () => clearTimeout(timer);
      } else {
        // Boot finished, transition to animated terminal prompt
        const timer = setTimeout(() => {
          setStage('terminal');
          setTerminalStep(0);
        }, 350);
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
        }, 55);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalStep(1);
          setTypedText('');
        }, 250);
        return () => clearTimeout(timeout);
      }
    }

    // Step 1: Show whoami result, then delay to type cat
    if (terminalStep === 1) {
      const timeout = setTimeout(() => {
        setTerminalStep(2);
      }, 350);
      return () => clearTimeout(timeout);
    }

    // Step 2: Type 'cat ~/.superpower'
    if (terminalStep === 2) {
      const command = 'cat ~/.superpower';
      if (typedText.length < command.length) {
        const timeout = setTimeout(() => {
          setTypedText(command.slice(0, typedText.length + 1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalStep(3);
          setTypedText('');
        }, 250);
        return () => clearTimeout(timeout);
      }
    }

    // Step 3: Show superpower output, then trigger sword script
    if (terminalStep === 3) {
      const timeout = setTimeout(() => {
        setTerminalStep(4);
      }, 450);
      return () => clearTimeout(timeout);
    }

    // Step 4: Type './deploy_blade.sh'
    if (terminalStep === 4) {
      const command = './deploy_blade.sh';
      if (typedText.length < command.length) {
        const timeout = setTimeout(() => {
          setTypedText(command.slice(0, typedText.length + 1));
        }, 45);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalStep(5);
        }, 200);
        return () => clearTimeout(timeout);
      }
    }

    // Step 5: Trigger the Katana Slash!
    if (terminalStep === 5) {
      const timeout = setTimeout(() => {
        playKatanaAudio();
        setStage('slashing');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [stage, terminalStep, typedText]);

  // Stage 3 & 4: Katana Slash and Screen Split Reveal
  useEffect(() => {
    if (stage === 'slashing') {
      const splitTimer = setTimeout(() => {
        setStage('splitting');
      }, 350);
      return () => clearTimeout(splitTimer);
    }

    if (stage === 'splitting') {
      const doneTimer = setTimeout(() => {
        setStage('done');
        onClose();
      }, 1100);
      return () => clearTimeout(doneTimer);
    }
  }, [stage, onClose]);

  if (!isOpen || stage === 'done') return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-hidden select-none bg-black font-mono text-xs sm:text-sm text-slate-200"
    >
      {/* Top Controls: Skip Button */}
      <div className="absolute top-5 right-5 z-50 flex items-center gap-2">
        <button
          onClick={onClose}
          className="px-3 py-1.5 rounded-lg bg-charcoal-800/80 hover:bg-charcoal-700 text-slate-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all text-xs font-mono shadow-md"
        >
          <FastForward className="w-3.5 h-3.5 text-sakura-400" />
          <span>Skip [ESC]</span>
        </button>
      </div>

      {/* STAGE 1 & 2: BOOT CONSOLE SCREEN (This gets sliced in half) */}
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
            <span className="text-slate-300">CachyOS Linux (Kernel 6.13-cachyos) x86_64</span>
          </div>
          <div className="hidden sm:block text-slate-400">TTY1 // Dual-Boot UEFI (NTFS /mnt/data)</div>
        </div>

        {/* STAGE 1: BOOT LOGS */}
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
              <span>Loading DevSecOps security modules...</span>
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
                  <div className="mt-1 p-3 rounded-lg bg-charcoal-900 border border-white/10 text-xs font-mono space-y-1 text-slate-300">
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

      {/* THE HIGH-VELOCITY KATANA BLADE SLASH LINE & SPARKS */}
      {(stage === 'slashing' || stage === 'splitting') && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {/* Main Glowing Blade Streak */}
          <div
            className="absolute h-[4px] bg-gradient-to-r from-transparent via-white via-sakura-300 to-transparent shadow-[0_0_35px_12px_rgba(244,114,182,0.9),0_0_15px_4px_rgba(255,255,255,1)] katana-slash-active"
            style={{
              top: '50%',
              left: '-25%',
              right: '-25%',
              transform: 'rotate(-24deg)',
            }}
          />

          {/* Secondary Electric Cyan Edge */}
          <div
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-engine-cyan to-transparent shadow-[0_0_20px_6px_rgba(6,182,212,0.8)]"
            style={{
              top: '50.3%',
              left: '-25%',
              right: '-25%',
              transform: 'rotate(-24deg)',
            }}
          />

          {/* Center Light Flash */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/40 blur-3xl animate-ping pointer-events-none" />
        </div>
      )}
    </div>
  );
}
