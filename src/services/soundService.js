/**
 * Web Audio API Sound Generator for Tactile Neo-Brutalist Microinteractions
 * Pure synthesizer - zero audio file downloads.
 */

class SoundService {
  constructor() {
    this.audioCtx = null;
    this.enabled = localStorage.getItem('af_sound_enabled') === 'true';
  }

  initContext() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('af_sound_enabled', this.enabled ? 'true' : 'false');
    if (this.enabled) {
      this.initContext();
      this.playBeep(880, 0.08, 'triangle', 0.05);
    }
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.045);
    } catch {
      // AudioContext might be blocked until user gesture
    }
  }

  playBeep(freq = 600, duration = 0.06, type = 'sine', vol = 0.04) {
    if (!this.enabled) return;
    this.initContext();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(vol, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch {
      // Ignore audio error
    }
  }

  playHologramShift(state) {
    if (!this.enabled) return;
    const freqs = {
      reposo: 520,
      escuchando: 740,
      pensando: 880,
      hablando: 1040
    };
    this.playBeep(freqs[state] || 600, 0.1, 'sine', 0.05);
  }
}

export const sound = new SoundService();
