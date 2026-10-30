/**
 * Procedural Web Audio Engine for Riyadh Dune Sand-Skater.
 * Zero external audio assets, zero network requests, 100% client-side synthesis.
 * Generates tactile sand carving, aerodynamic jumps, powerup chimes, and dust explosions.
 */

class SandAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.carveGain = null;
    this.carveFilter = null;
    this.carveSource = null;
    this.noiseBuffer = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      // Create a 2-second white noise buffer for continuous sand friction synthesis
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      this.noiseBuffer = buffer;
    } catch {
      // Graceful fallback if Web Audio is unsupported
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted && this.carveGain) {
      this.carveGain.gain.setValueAtTime(0, this.ctx.currentTime);
    }
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  // Realistic granular sand carving sound that modulates with board speed
  startCarving() {
    if (!this.ctx || this.muted || !this.noiseBuffer) return;
    if (this.carveSource) return;

    try {
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      src.loop = true;

      // Bandpass filter centered around granular sand crunch
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.8, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      src.start();
      this.carveSource = src;
      this.carveFilter = filter;
      this.carveGain = gain;
    } catch {
      // Ignore audio start errors
    }
  }

  updateCarvingSpeed(speedRatio) {
    if (!this.ctx || this.muted || !this.carveGain || !this.carveFilter) return;
    try {
      // Modulate frequency and volume based on speed
      const targetFreq = 500 + speedRatio * 850;
      const targetGain = Math.min(0.08, 0.02 + speedRatio * 0.05);
      this.carveFilter.frequency.setTargetAtTime(targetFreq, this.ctx.currentTime, 0.05);
      this.carveGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.05);
    } catch {
      // Ignore modulation errors
    }
  }

  stopCarving() {
    if (!this.ctx || !this.carveGain) return;
    try {
      this.carveGain.gain.setValueAtTime(0, this.ctx.currentTime);
      if (this.carveSource) {
        this.carveSource.stop();
        this.carveSource.disconnect();
        this.carveSource = null;
      }
    } catch {
      // Ignore audio stop errors
    }
  }

  // Aerodynamic jump whoosh
  playJump() {
    if (!this.ctx || this.muted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.16);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.18);
    } catch {
      // Ignore
    }
  }

  // Double jump air kick
  playDoubleJump() {
    if (!this.ctx || this.muted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.14);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch {
      // Ignore
    }
  }

  // Soft sand landing thud
  playLand() {
    if (!this.ctx || this.muted || !this.noiseBuffer) return;
    try {
      const now = this.ctx.currentTime;
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      src.start(now);
      src.stop(now + 0.12);
    } catch {
      // Ignore
    }
  }

  // Upbeat Arabian pentatonic chime on collecting AWS Shield or Saudi Qahwa
  playPowerup() {
    if (!this.ctx || this.muted) return;
    try {
      const notes = [587.33, 739.99, 880.0, 1174.66]; // D5, F#5, A5, D6 arpeggio
      notes.forEach((freq, idx) => {
        const now = this.ctx.currentTime + idx * 0.055;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.22);
      });
    } catch {
      // Ignore
    }
  }

  // Collision with obstacle
  playCrash() {
    if (!this.ctx || this.muted || !this.noiseBuffer) return;
    try {
      const now = this.ctx.currentTime;

      // Low frequency thud
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.28);
      oscGain.gain.setValueAtTime(0.2, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);

      // Sand dispersion burst
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(450, now);
      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.16, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      src.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      src.start(now);
      src.stop(now + 0.3);
    } catch {
      // Ignore
    }
  }

  // High-impact anime punch barrage sequence
  playPunchBarrage() {
    this.init();
    if (!this.ctx || this.muted) return;
    try {
      const punches = 6;
      for (let i = 0; i < punches; i++) {
        const time = this.ctx.currentTime + i * 0.07;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = i % 2 === 0 ? 'triangle' : 'sawtooth';
        osc.frequency.setValueAtTime(180 + (i % 3) * 60, time);
        osc.frequency.exponentialRampToValueAtTime(45, time + 0.06);

        gain.gain.setValueAtTime(0.18, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(time);
        osc.stop(time + 0.06);
      }
    } catch {
      // Ignore
    }
  }

  // Dramatic sand storm explosion transition whoosh
  playSandBlast() {
    this.init();
    if (!this.ctx || this.muted || !this.noiseBuffer) return;
    try {
      const now = this.ctx.currentTime;
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(250, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 0.35);
      filter.frequency.exponentialRampToValueAtTime(320, now + 0.85);
      filter.Q.setValueAtTime(1.4, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.28);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      src.start(now);
      src.stop(now + 0.95);
    } catch {
      // Ignore
    }
  }
}

export const sandAudio = new SandAudioEngine();
