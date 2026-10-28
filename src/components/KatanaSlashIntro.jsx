import React, { useEffect, useState } from 'react';
import { X, Sparkles, Shield, Zap } from 'lucide-react';

export default function KatanaSlashIntro({ isOpen, onClose }) {
  const [phase, setPhase] = useState('ready'); // ready -> slashing -> splitting -> done

  useEffect(() => {
    if (!isOpen) {
      setPhase('ready');
      return;
    }

    // Trigger slash sequence
    setPhase('slashing');

    // Synthesize subtle cyber blade whoosh sound
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.35);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);
        filter.Q.setValueAtTime(3, ctx.currentTime);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch {
      // Audio autoplay policy fallback
    }

    // Step 2: Screen splits open along the blade cut
    const splitTimer = setTimeout(() => {
      setPhase('splitting');
    }, 400);

    // Step 3: Finish and reveal the portfolio
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onClose();
    }, 1400);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(doneTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto select-none bg-charcoal-950/90 backdrop-blur-md">
      {/* Top Controls / Skip button */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
        <button
          onClick={onClose}
          className="px-3 py-1.5 rounded-lg bg-charcoal-800/80 hover:bg-charcoal-700 text-xs font-mono text-slate-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all"
        >
          <span>Skip [ESC]</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Cyber Security Blade Grid & Status Banner */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {phase === 'slashing' && (
          <div className="text-center space-y-2 animate-pulse">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sakura-500/20 border border-sakura-400/40 text-sakura-300 text-xs font-mono">
              <Shield className="w-3.5 h-3.5" />
              <span>DEVSECOPS SECURITY BLADE // INITIALIZE</span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Breaching defense perimeter... Slicing attack surface
            </p>
          </div>
        )}
      </div>

      {/* The Diagonal Katana Blade Slash Line */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          phase === 'slashing' || phase === 'splitting' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Diagonal Light Streak */}
        <div
          className={`absolute h-[3px] bg-gradient-to-r from-transparent via-sakura-300 via-white to-transparent shadow-[0_0_25px_8px_rgba(244,114,182,0.8)] ${
            phase === 'slashing' ? 'katana-slash-active' : 'opacity-70'
          }`}
          style={{
            top: '50%',
            left: '-20%',
            right: '-20%',
            transform: 'rotate(-25deg)',
          }}
        />

        {/* Secondary Electric Cyan Accent Streak */}
        <div
          className="absolute h-[1.5px] bg-gradient-to-r from-transparent via-engine-cyan to-transparent shadow-[0_0_20px_4px_rgba(6,182,212,0.7)]"
          style={{
            top: '50.3%',
            left: '-20%',
            right: '-20%',
            transform: 'rotate(-25deg)',
          }}
        />

        {/* Center Spark Burst */}
        {phase === 'slashing' && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/30 blur-2xl animate-ping pointer-events-none"
          />
        )}
      </div>

      {/* Top-Left Half Splitting Apart */}
      <div
        className={`absolute inset-0 bg-charcoal-900 border-b border-sakura-400/30 transition-transform duration-700 ease-out flex items-center justify-center ${
          phase === 'splitting' ? '-translate-x-8 -translate-y-8 opacity-0' : 'translate-x-0 translate-y-0 opacity-95'
        }`}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 32%, 0 68%)',
        }}
      >
        <div className="absolute top-12 left-12 font-mono text-xs text-sakura-400/40 select-none">
          <code>[SEC_GATE_01] TRIVY_CONTAINER_SCAN: CLEAR</code>
          <br />
          <code>[SEC_GATE_02] CHECKOV_IAC_DRIFT: ZERO_DETECTED</code>
        </div>
      </div>

      {/* Bottom-Right Half Splitting Apart */}
      <div
        className={`absolute inset-0 bg-charcoal-900 border-t border-engine-cyan/30 transition-transform duration-700 ease-out flex items-center justify-center ${
          phase === 'splitting' ? 'translate-x-8 translate-y-8 opacity-0' : 'translate-x-0 translate-y-0 opacity-95'
        }`}
        style={{
          clipPath: 'polygon(0 68%, 100% 32%, 100% 100%, 0 100%)',
        }}
      >
        <div className="absolute bottom-12 right-12 font-mono text-xs text-engine-cyan/40 select-none text-right">
          <code>[AWS_EVENTBRIDGE] A2_REMEDIATION_READY</code>
          <br />
          <code>[AEGIS_GUARD] LATENCY: ~115ms p99 VERIFIED</code>
        </div>
      </div>
    </div>
  );
}
