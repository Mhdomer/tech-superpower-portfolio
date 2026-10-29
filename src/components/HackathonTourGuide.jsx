import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, ArrowLeft, X, Sparkles, Cloud, CheckCircle2, ExternalLink } from 'lucide-react';

/**
 * AWS Student Builder Challenge: Interactive Guided Tour
 * Walks hackathon judges step-by-step through the 4 official rubric gates.
 */
export default function HackathonTourGuide({ isOpen, onClose, onOpenLab }) {
  const [currentStep, setCurrentStep] = useState(0);

  const tourSteps = [
    {
      targetId: 'top',
      badge: 'CANDIDATE & IDENTITY',
      rubricGate: 'Candidate Profile',
      title: 'Mohamed Makhlouf // Senior CS Student & Healthcare IT Ops',
      description:
        'Mohamed Makhlouf (Omar) is a final-year Computer Science student specializing in Networks and Security at Universiti Teknologi Malaysia (UTM, CGPA 3.43 Dean\'s List), currently running outpatient healthcare IT operations at Al-Ameen Medical Complex in Riyadh. Built on dual-boot CachyOS Linux with high-precision engineering standards.',
      highlights: ['UTM Dean\'s List (3.43 GPA)', '3rd Place ASEAN Cyber Race CTF Finals', 'Al-Ameen Medical Complex IT, Riyadh'],
      actionLabel: null,
    },
    {
      targetId: 'top',
      badge: 'RUBRIC GATE 1 (30%)',
      rubricGate: 'Creativity & Memorability (30%)',
      title: 'The Superpower Feature: Interactive Cloud Security Lab',
      description:
        'A fully interactive in-browser security defense simulator with zero server roundtrips. Features: (1) Live AST IAM Policy Linter detecting wildcards and privilege escalation in real time, (2) Incident Response Crisis Simulator, and (3) Shannon Entropy Adversarial Prompt Analyzer. Discoverable via the visible hint button in the navbar!',
      highlights: ['Client-Side AST IAM Linter', 'Incident Crisis Decision Game', 'Shannon Entropy Prompt Analyzer', 'Visible Navbar Hint Invariant'],
      actionLabel: 'Launch Security Sandbox Now',
      actionFn: () => onOpenLab && onOpenLab(),
    },
    {
      targetId: 'aws-architecture',
      badge: 'RUBRIC GATE 2 (25%)',
      rubricGate: 'Working AWS Implementation (25%)',
      title: 'Production AWS Architecture & Edge Hosting',
      description:
        'Deployed live on AWS Amplify Hosting, Amazon CloudFront global edge CDN, and Amazon S3 using a root amplify.yml build specification. Backed by real production architecture: EventBridge + Lambda auto-remediation daemon (<2.4s MTTR) and Aegis-2B Bedrock AI guardrails (sub-115ms p99 latency).',
      highlights: ['AWS Amplify Hosting + CloudFront CDN', 'A2 EventBridge Serverless Auto-Remediation', 'Aegis-2B Bedrock Guardrail Pipeline', 'Root amplify.yml CI/CD Build Spec'],
      actionLabel: null,
    },
    {
      targetId: 'skills',
      badge: 'RUBRIC GATE 3 (25%)',
      rubricGate: 'Communication Quality (25%)',
      title: 'Verified Telemetry, Pytest Suites & Knowledge Sharing',
      description:
        'Every benchmark is backed by real project code: Aegis-2B passing 6/6 deterministic tests, hospital network segmentation protecting patient records, and weekly peer tutoring sessions for junior CS students at UTM in C++ and POSIX systems (YouTube channel: "Omar Documents").',
      highlights: ['115ms p99 Latency Benchmarks', '325 Passed Pytest Units on A2 Engine', '99.98% Clinical Outpatient Uptime', 'Bilingual Technical Walkthroughs'],
      actionLabel: null,
    },
    {
      targetId: 'experience',
      badge: 'RUBRIC GATE 4 (20%)',
      rubricGate: 'Portfolio Completeness & Usability (20%)',
      title: 'Dual-Theme Japanese Editorial Craft & Resume',
      description:
        'Full 3 core sections (About Me, Skills, Projects) engineered with high aesthetic discipline: authentic Japanese washi paper light mode and obsidian dark mode, 14-leaf falling sakura animation, lower hanging katana pendulum, and 1-page ATS-verified LaTeX resume preview with instant PDF download.',
      highlights: ['Dual-Theme Light/Dark Switcher', '1-Page LaTeX PDF Resume Download', 'Responsive Mobile & Desktop Layout', 'Strictly Zero Em Dashes'],
      actionLabel: null,
    },
  ];

  const step = tourSteps[currentStep];

  useEffect(() => {
    if (!isOpen) return;

    // Smoothly scroll to the target section
    const targetElement = document.getElementById(step.targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStep, step.targetId, onClose]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 pointer-events-none">
      <div
        className="max-w-3xl mx-auto rounded-2xl shadow-2xl border p-5 sm:p-6 pointer-events-auto backdrop-blur-xl transition-all duration-300"
        style={{
          background: 'var(--surface-sheet)',
          borderColor: 'var(--line-strong)',
          color: 'var(--ink)',
          boxShadow: '0 20px 40px var(--editorial-shadow)',
        }}
        role="dialog"
        aria-label="AWS Hackathon Guided Tour"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between gap-3 pb-3 border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full animate-ping"
              style={{ background: 'var(--brand-coral)' }}
            />
            <span
              className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--line)',
                color: 'var(--brand-coral)',
              }}
            >
              {step.badge}
            </span>
            <span className="text-xs font-mono opacity-60 hidden sm:inline">
              Stop {currentStep + 1} of {tourSteps.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Step Indicators */}
            <div className="flex items-center gap-1.5 mr-2">
              {tourSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background: idx === currentStep ? 'var(--brand-coral)' : 'var(--line-strong)',
                    transform: idx === currentStep ? 'scale(1.4)' : 'scale(1)',
                  }}
                  title={`Jump to step ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-lg opacity-70 hover:opacity-100 transition-opacity"
              title="Close tour [ESC]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Body */}
        <div className="pt-4 pb-2">
          <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug">
            {step.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed opacity-85 mb-4">
            {step.description}
          </p>

          {/* Highlights Chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {step.highlights.map((h, hIdx) => (
              <span
                key={hIdx}
                className="text-[10px] font-mono px-2 py-0.5 rounded border"
                style={{
                  background: 'var(--surface)',
                  borderColor: 'var(--line)',
                  opacity: 0.9,
                }}
              >
                ✓ {h}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls Footer */}
        <div className="pt-3 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: 'var(--line)' }}>
          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button
                onClick={handlePrev}
                className="px-3 py-1.5 rounded-lg border text-xs font-mono font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity"
                style={{
                  background: 'var(--surface)',
                  borderColor: 'var(--line)',
                }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="px-4 py-1.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 text-white transition-all"
              style={{ background: 'var(--brand-coral)' }}
            >
              <span>{currentStep === tourSteps.length - 1 ? 'Finish Tour' : 'Next Rubric Gate'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {step.actionLabel && step.actionFn && (
            <button
              onClick={step.actionFn}
              className="px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--brand-coral)',
                color: 'var(--brand-coral)',
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{step.actionLabel}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
