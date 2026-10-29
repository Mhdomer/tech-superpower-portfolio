import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FastForward, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';

/**
 * Interactive Virtual Mouse Tour Guide
 * An animated virtual cursor navigates between targets:
 * - Moves over GitHub and LinkedIn links in navbar with informative callout bubbles
 * - Highlights the bio text in yellow word-by-word with real browser text selection
 * - Smoothly scrolls to each section (Architecture, Superpowers, Projects, Experience, Resume)
 * - Supports keyboard navigation ([Space] next, [Arrow Left/Right] prev/next, [ESC] exit)
 * - Progress indicator pill showing Step X / 9 with progress bar
 */

const TOUR_STEPS = [
  {
    selector: '[data-testid="link-nav-github"]',
    caption: 'Start here. All my open source security projects and code live here.',
    action: 'hover',
    hold: 2400,
  },
  {
    selector: '[data-testid="link-nav-linkedin"]',
    caption: "Pick your platform and let's connect.",
    action: 'hover',
    hold: 2200,
  },
  {
    selector: '#hero-description',
    caption: '',
    action: 'select',
    hold: 2600,
    silent: true,
  },
  {
    selector: '[data-testid="button-hero-hint"]',
    caption: 'Interactive Cloud Security Lab: Walk through an authentic hospital breach investigation in 3 quick steps.',
    action: 'click',
    hold: 2400,
  },
  {
    selector: '#aws-architecture',
    caption: 'Production AWS architecture: Amazon Bedrock guardrails and EventBridge remediation.',
    action: 'visit',
    hold: 2800,
  },
  {
    selector: '#skills',
    caption: 'Core engineering capabilities: Cloud DevSecOps, AI Security, and Linux systems.',
    action: 'visit',
    hold: 2600,
  },
  {
    selector: '#projects',
    caption: 'Aegis-2B AI Guardrail: sub-115ms p99 latency passing 6/6 deterministic tests.',
    action: 'visit',
    hold: 2600,
  },
  {
    selector: '#experience',
    caption: "A few wins worth pinning up: UTM Dean's List and 3rd Place ASEAN Cyber Race CTF.",
    action: 'visit',
    hold: 2400,
  },
  {
    selector: '[data-testid="card-resume-preview"]',
    caption: 'Click here to view or download my 1-page LaTeX resume with clickable contact links.',
    action: 'hover',
    hold: 2600,
  },
];

// Helper to find all word boundary text nodes inside a container
function getTextWordBoundaries(element) {
  const walker = document.createTreeWalker(element, window.NodeFilter.SHOW_TEXT);
  const boundaries = [];
  let node = walker.nextNode();
  while (node) {
    const text = node.textContent ?? '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];
      if (!/\s/.test(char) && (i + 1 >= text.length || /\s/.test(nextChar))) {
        boundaries.push({ node, offset: i + 1 });
      }
    }
    node = walker.nextNode();
  }
  return boundaries;
}

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function HackathonTourGuide({ isOpen, onClose, onOpenLab }) {
  const [active, setActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [caption, setCaption] = useState('');
  const [captionOn, setCaptionOn] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorRef = useRef(null);
  const isCancelledRef = useRef(false);
  const currentStepRef = useRef(0);
  const holdTimeoutRef = useRef(null);
  const currentPosRef = useRef({ x: 60, y: 120 });
  const activeAnimationRef = useRef(null);

  const setCursorPos = (targetX, targetY) => {
    const maxX = window.innerWidth - 24;
    const maxY = window.innerHeight - 24;
    const clampedX = Math.round(Math.max(12, Math.min(targetX, maxX)));
    const clampedY = Math.round(Math.max(12, Math.min(targetY, maxY)));
    currentPosRef.current = { x: clampedX, y: clampedY };

    if (!cursorRef.current) return;
    cursorRef.current.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0)`;

    const captionEl = cursorRef.current.querySelector('.tour-caption');
    if (!captionEl) return;
    const captionW = captionEl.offsetWidth || 220;
    const captionH = captionEl.offsetHeight || 60;

    const placeLeft = clampedX + 24 + captionW > maxX;
    const placeTop = clampedY + 28 + captionH > maxY;

    captionEl.style.left = placeLeft ? `-${captionW + 12}px` : '24px';
    captionEl.style.top = placeTop ? `-${captionH + 8}px` : '24px';
  };

  const waitMs = (ms) =>
    new Promise((resolve) => {
      const start = performance.now();
      const tick = () => {
        if (isCancelledRef.current || performance.now() - start >= ms) {
          resolve();
        } else {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    });

  const animateCursorTo = (destX, destY, durationMs = 600) =>
    new Promise((resolve) => {
      if (isCancelledRef.current) return resolve();
      const startX = currentPosRef.current.x;
      const startY = currentPosRef.current.y;
      const startTime = performance.now();

      const step = (now) => {
        if (isCancelledRef.current) return resolve();
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        const eased = easeInOutCubic(progress);

        const curX = startX + (destX - startX) * eased;
        const curY = startY + (destY - startY) * eased;
        setCursorPos(curX, curY);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(step);
    });

  const animateScrollTo = (targetY, durationMs = 650) =>
    new Promise((resolve) => {
      const startY = window.scrollY;
      const diff = targetY - startY;
      if (Math.abs(diff) < 6) return resolve();
      const startTime = performance.now();

      const step = (now) => {
        if (isCancelledRef.current) return resolve();
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        const eased = easeInOutCubic(progress);

        window.scrollTo({ top: startY + diff * eased, behavior: 'instant' });

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(step);
    });

  const animateTextSelection = async (element, holdMs = 2000) => {
    const selection = window.getSelection();
    if (!selection) return;

    const wordBoundaries = getTextWordBoundaries(element);
    if (wordBoundaries.length < 2) return;

    const firstNode = wordBoundaries[0].node;
    const startOffset = Math.max(0, (firstNode.textContent ?? '').search(/\S/));

    for (let i = 0; i < wordBoundaries.length; i++) {
      if (isCancelledRef.current) break;
      const boundary = wordBoundaries[i];

      const range = document.createRange();
      range.setStart(firstNode, startOffset);
      range.setEnd(boundary.node, boundary.offset);

      selection.removeAllRanges();
      selection.addRange(range);

      const probeRange = document.createRange();
      probeRange.setStart(boundary.node, Math.max(0, boundary.offset - 1));
      probeRange.setEnd(boundary.node, boundary.offset);
      const rect = probeRange.getBoundingClientRect();

      setCursorPos(rect.right + 2, rect.top + rect.height / 2);
      await waitMs(75);
    }

    await waitMs(holdMs);
    selection.removeAllRanges();
  };

  const closeTour = useCallback(() => {
    isCancelledRef.current = true;
    if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
    window.getSelection()?.removeAllRanges();
    document.body.classList.remove('tour-active');
    setActive(false);
    onClose && onClose();
  }, [onClose]);

  const executeStep = async (stepIdx) => {
    if (isCancelledRef.current) return;
    if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);

    const step = TOUR_STEPS[stepIdx];
    if (!step) {
      // Completed all steps
      setCaption('Tour complete. Explore at your own pace.');
      setCaptionOn(true);
      await waitMs(2000);
      closeTour();
      return;
    }

    currentStepRef.current = stepIdx;
    setCurrentStepIndex(stepIdx);

    const el = document.querySelector(step.selector);
    if (!el) {
      // If target element is not mounted, advance to next
      goToNextStep();
      return;
    }

    // Scroll into view if needed
    const rect = el.getBoundingClientRect();
    const absTop = window.scrollY + rect.top;
    const targetScrollY = Math.max(0, absTop - window.innerHeight / 3);

    if (Math.abs(window.scrollY - targetScrollY) > 80) {
      await animateScrollTo(targetScrollY, 600);
    }

    if (isCancelledRef.current) return;

    // Move cursor to center of element
    const updatedRect = el.getBoundingClientRect();
    const destX = updatedRect.left + updatedRect.width * 0.45;
    const destY = updatedRect.top + updatedRect.height * 0.45;
    await animateCursorTo(destX, destY, 550);

    if (isCancelledRef.current) return;

    // Show caption bubble
    if (!step.silent && step.caption) {
      setCaption(step.caption);
      setCaptionOn(true);
    } else {
      setCaptionOn(false);
      setCaption('');
    }

    if (step.action === 'select') {
      await animateTextSelection(el, step.hold);
    } else if (step.action === 'click') {
      setIsClicking(true);
      await waitMs(200);
      setIsClicking(false);
      await waitMs(step.hold);
    } else {
      await waitMs(step.hold);
    }

    if (isCancelledRef.current) return;
    setCaptionOn(false);

    // Auto-advance to next step if not manually changed
    holdTimeoutRef.current = setTimeout(() => {
      goToNextStep();
    }, 300);
  };

  const goToNextStep = () => {
    if (isCancelledRef.current) return;
    const nextIdx = currentStepRef.current + 1;
    if (nextIdx < TOUR_STEPS.length) {
      executeStep(nextIdx);
    } else {
      closeTour();
    }
  };

  const goToPrevStep = () => {
    if (isCancelledRef.current) return;
    const prevIdx = Math.max(0, currentStepRef.current - 1);
    executeStep(prevIdx);
  };

  // Keyboard navigation listener: Space, ArrowRight, ArrowLeft, ESC
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeTour();
      } else if (e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        goToNextStep();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevStep();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, closeTour]);

  // Launch tour when isOpen changes to true
  useEffect(() => {
    if (isOpen) {
      isCancelledRef.current = false;
      setActive(true);
      document.body.classList.add('tour-active');
      setCursorPos(80, 140);
      executeStep(0);
    } else {
      closeTour();
    }
  }, [isOpen]);

  if (!active && !isOpen) return null;

  const totalSteps = TOUR_STEPS.length;
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  return (
    <>
      {/* Floating Tour Header HUD in Top-Right with Step Counter and Keyboard Controls */}
      <div className="fixed top-4 right-4 sm:top-5 sm:right-6 z-[10000] flex flex-col items-end gap-1.5 animate-fade-in font-mono">
        <div className="px-3.5 py-2 rounded-2xl bg-black/85 text-slate-100 border border-white/20 shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs">
          {/* Step Counter & Progress Bar */}
          <div className="flex flex-col gap-1 min-w-[85px]">
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span style={{ color: 'var(--brand-coral, #e06b5c)' }}>
                Step {currentStepIndex + 1}
              </span>
              <span className="text-slate-400">/ {totalSteps}</span>
            </div>
            <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${progressPercent}%`,
                  background: 'var(--brand-coral, #e06b5c)',
                }}
              />
            </div>
          </div>

          <div className="h-4 w-px bg-white/20" />

          {/* Stepper Buttons: Prev and Next */}
          <div className="flex items-center gap-1">
            <button
              onClick={goToPrevStep}
              disabled={currentStepIndex === 0}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white transition-all"
              title="Previous Step [Arrow Left]"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={goToNextStep}
              className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 text-[11px] transition-all"
              title="Next Step [Space or Arrow Right]"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-4 w-px bg-white/20" />

          {/* Exit Button */}
          <button
            onClick={closeTour}
            className="p-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 hover:text-white transition-all flex items-center gap-1 text-[11px] px-2 py-1 border border-rose-500/30"
            title="Exit Tour [ESC]"
          >
            <X className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Exit [ESC]</span>
          </button>
        </div>

        {/* Keyboard Shortcuts Hint Bar */}
        <div className="text-[10px] text-slate-400/90 bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10 hidden sm:flex items-center gap-2">
          <span>[Space] Next</span>
          <span>•</span>
          <span>[←/→] Navigate</span>
          <span>•</span>
          <span>[ESC] Exit</span>
        </div>
      </div>

      {/* The Animated Virtual Mouse Cursor */}
      <div
        ref={cursorRef}
        className={`tour-cursor ${active ? 'tour-cursor-on' : ''} ${
          isClicking ? 'tour-cursor-click' : ''
        }`}
        aria-hidden="true"
      >
        {/* SVG Terracotta Pointer Arrow */}
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path
            d="M5 2.6 L17.6 13 L11.4 13.7 L14.3 20 L11.7 21.1 L8.9 14.7 L5 18 Z"
            fill="var(--brand-coral)"
            stroke="#202a36"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>

        {/* Speech Bubble Tooltip Caption */}
        <div
          className={`tour-caption ${captionOn ? 'tour-caption-on' : ''}`}
          role="status"
        >
          {caption}
        </div>
      </div>
    </>
  );
}
