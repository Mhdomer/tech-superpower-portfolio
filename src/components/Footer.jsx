import React from 'react';
import { Mail, ExternalLink, Cloud, Heart, Flower2 } from 'lucide-react';
import { GithubIcon, YoutubeIcon } from './Icons';

export default function Footer({ onOpenEngine }) {
  return (
    <footer className="border-t border-white/10 bg-charcoal-950 py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Column 1: Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sakura-500/20 border border-sakura-400/40 flex items-center justify-center">
                <Flower2 className="w-4 h-4 text-sakura-300" />
              </div>
              <span className="font-bold text-white font-mono text-base">
                MHDOMAR<span className="text-sakura-400">.DEV</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Mohamed Makhlouf. Senior Computer Science student at Universiti Teknologi Malaysia (UTM) undergoing Industrial Training at Al-Ameen Medical Complex IT Dept, Riyadh. Dedicated to Cloud DevSecOps, AI Security, green compute, and peer mentorship.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEngine}
                className="text-xs font-mono text-sakura-300 hover:text-white transition-colors underline underline-offset-4 flex items-center gap-1.5"
              >
                <span>Re-launch The Superpower Engine Console</span>
                <span>⚙️🌸</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Sections</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-sakura-300 transition-colors">
                  About Story & Philosophy
                </a>
              </li>
              <li>
                <a href="#superpowers" className="hover:text-sakura-300 transition-colors">
                  Tech Superpowers & Verified Metrics
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sakura-300 transition-colors">
                  Projects & AWS Implementations
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mhdomer/aegis-2b"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sakura-300 transition-colors flex items-center gap-1"
                >
                  <span>Aegis-2B Guardrail Repo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication & Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Connect & Inquiries</h4>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500">Work Email: </span>
                <a href="mailto:muhamedomar.g@gmail.com" className="text-slate-300 hover:text-sakura-300">
                  muhamedomar.g@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500">UTM Academic: </span>
                <a href="mailto:omarmohamed.m@graduate.utm.my" className="text-slate-300 hover:text-sakura-300">
                  omarmohamed.m@graduate.utm.my
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://github.com/Mhdomer"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-charcoal-800 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-charcoal-800 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                title="YouTube: Omar Documents"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:muhamedomar.g@gmail.com"
                className="p-2 rounded-lg bg-charcoal-800 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: AWS Builder Center Credit & Open Source */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-engine-cyan" />
            <span>Deployed globally with AWS Amplify Hosting · Free Tier compliant</span>
          </div>

          <div>
            Built for the <span className="text-white">AWS Student Builder Challenge 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
