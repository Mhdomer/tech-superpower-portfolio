import React, { useState } from 'react';
import { Sparkles, Terminal, Flower2, Menu, X, Cpu } from 'lucide-react';

export default function Navbar({ onOpenEngine, sakuraActive, setSakuraActive }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sakura-500 to-engine-cyan p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-charcoal-900 rounded-[7px] flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-sakura-400 group-hover:rotate-45 transition-transform" />
              </div>
            </div>
            <div>
              <span className="font-bold tracking-tight text-white font-mono text-sm sm:text-base">
                MHDOMAR<span className="text-sakura-400">.DEV</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-mono px-2 py-0.5 rounded bg-charcoal-700 text-engine-cyan border border-white/5">
                AWS BUILDER
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="text-slate-300 hover:text-sakura-300 transition-colors">
              About Story
            </a>
            <a href="#superpowers" className="text-slate-300 hover:text-sakura-300 transition-colors">
              Tech Superpowers
            </a>
            <a href="#projects" className="text-slate-300 hover:text-sakura-300 transition-colors">
              Projects & Demos
            </a>
            <a href="#impact" className="text-slate-300 hover:text-sakura-300 transition-colors">
              Mentorship & Green Tech
            </a>
          </div>

          {/* Action Buttons: Visible Hint + Sakura Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Sakura Toggle */}
            <button
              onClick={() => setSakuraActive(!sakuraActive)}
              title="Toggle Sakura Petals"
              className={`p-2 rounded-lg text-xs font-mono transition-all border ${
                sakuraActive
                  ? 'bg-sakura-500/20 text-sakura-300 border-sakura-500/40'
                  : 'bg-charcoal-800 text-slate-400 border-white/10 hover:text-slate-200'
              }`}
            >
              🌸 {sakuraActive ? 'Petals: ON' : 'Petals: OFF'}
            </button>

            {/* THE VISIBLE HINT (Required by AWS Hackathon) */}
            <button
              onClick={onOpenEngine}
              className="relative group px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-sakura-500/20 via-engine-cyan/20 to-sakura-500/20 border border-sakura-400/50 hover:border-sakura-400 text-sakura-300 hover:text-white transition-all shadow-sm flex items-center gap-2 font-mono text-xs overflow-hidden"
            >
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-sakura-400 rounded-full animate-ping"></span>
              <Cpu className="w-3.5 h-3.5 text-sakura-400 group-hover:rotate-90 transition-transform" />
              <span className="font-bold">Superpower Engine</span>
              <span className="text-[10px] bg-sakura-500/30 px-1.5 py-0.5 rounded text-white font-sans">
                Hint!
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenEngine}
              className="p-1.5 rounded bg-sakura-500/20 text-sakura-300 border border-sakura-500/40 text-xs font-mono flex items-center gap-1"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Engine</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-2 glass-panel border-t border-white/10 text-sm">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-slate-300 hover:text-sakura-300"
          >
            About Story
          </a>
          <a
            href="#superpowers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-slate-300 hover:text-sakura-300"
          >
            Tech Superpowers
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-slate-300 hover:text-sakura-300"
          >
            Projects & Demos
          </a>
          <a
            href="#impact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-slate-300 hover:text-sakura-300"
          >
            Mentorship & Green Tech
          </a>
          <div className="pt-2 flex items-center justify-between border-t border-white/10">
            <button
              onClick={() => setSakuraActive(!sakuraActive)}
              className="text-xs font-mono text-sakura-300"
            >
              🌸 Sakura: {sakuraActive ? 'Active' : 'Muted'}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEngine();
              }}
              className="text-xs font-mono text-engine-cyan underline"
            >
              Open Engine Console ⚡
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
