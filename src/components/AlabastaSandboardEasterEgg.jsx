import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Droplets, RotateCcw } from 'lucide-react';
import { sandAudio } from './SandAudioEngine';

/**
 * Alabasta Sandboard Easter Egg
 * Single unified interactive stage card (Linear / Vercel Dark Style).
 * Strictly zero em dashes, zero AI slop, zero canvas-drawn characters.
 */

const ASSETS = {
  luffyExhausted: 'https://media.giphy.com/media/eu9sJREEHAjROnLepO/giphy.gif',
  luffySticker:   'https://media.giphy.com/media/cdeUtK2pXvf1HySA4J/giphy.gif',
  luffyJump:      'https://media.giphy.com/media/EiFEPQYVGAif3hCHBw/giphy.gif',
  crocClash:      'https://media.giphy.com/media/1ymq2QMKuW6Px3hHqf/giphy.gif',
  luffyPunch:     'https://media.giphy.com/media/dl1CI1vFewb8tLan6A/giphy.gif',
  alabastaRain:   'https://media.giphy.com/media/SiM0wwVgKdUVRSKBXm/giphy.gif',
};

export default function AlabastaSandboardEasterEgg({ onContinueReading }) {
  // 4 Core States: 'INTRO' | 'SKATING' | 'CLASH' | 'STORM' | 'FINISHED'
  const [stage, setStage] = useState('INTRO');
  const [waterCount, setWaterCount] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [barrels, setBarrels] = useState([]);
  const [splashVfx, setSplashVfx] = useState(null);

  // Physics & Animation Loop Refs
  const viewportRef = useRef(null);
  const playerYRef = useRef(0);
  const velocityYRef = useRef(0);
  const isJumpingRef = useRef(false);
  const barrelsRef = useRef([]);
  const frameRef = useRef(0);
  const waterCountRef = useRef(0);
  const animFrameIdRef = useRef(null);
  const stageRef = useRef('INTRO');

  // Keep stageRef in sync for loop callbacks
  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  // Jump physics trigger (velocityY = 13, gravity = 0.75)
  const triggerJump = useCallback(() => {
    if (stageRef.current !== 'SKATING') return;
    if (!isJumpingRef.current) {
      isJumpingRef.current = true;
      velocityYRef.current = 13;
      setIsJumping(true);
      try {
        sandAudio.init();
        sandAudio.playJump();
      } catch {
        // Fallback gracefully if Web Audio is suspended
      }
    }
  }, []);

  // Keyboard space bar listener for jumping
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        if (stageRef.current === 'SKATING') {
          e.preventDefault();
          triggerJump();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerJump]);

  // Transition to CLASH when 3 barrels are collected
  const handleTransitionToClash = useCallback(() => {
    setStage('CLASH');
    try {
      sandAudio.playDoubleJump();
    } catch {}
  }, []);

  // Interactive Mini-Game Runner Loop (requestAnimationFrame)
  useEffect(() => {
    if (stage !== 'SKATING') {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
      return;
    }

    // Reset loop state when entering SKATING
    playerYRef.current = 0;
    velocityYRef.current = 0;
    isJumpingRef.current = false;
    setIsJumping(false);
    barrelsRef.current = [];
    frameRef.current = 0;
    waterCountRef.current = 0;
    setWaterCount(0);
    setBarrels([]);

    let spawnCountdown = 45; // First barrel appears quickly

    const loop = () => {
      frameRef.current += 1;

      // 1. Update Player Jump Physics
      if (isJumpingRef.current) {
        playerYRef.current += velocityYRef.current;
        velocityYRef.current -= 0.75; // gravity = 0.75

        if (playerYRef.current <= 0) {
          playerYRef.current = 0;
          velocityYRef.current = 0;
          isJumpingRef.current = false;
          setIsJumping(false);
        }
      }

      // 2. Spawn Barrels (Move right to left at 6.5px per frame)
      spawnCountdown -= 1;
      if (spawnCountdown <= 0 && waterCountRef.current < 3) {
        const stageWidth = viewportRef.current ? viewportRef.current.clientWidth : 680;
        // Alternate heights: ground level (0) or jump height (32px)
        const isAirborne = barrelsRef.current.length % 2 === 1;
        barrelsRef.current.push({
          id: Date.now() + Math.random(),
          x: stageWidth + 30,
          y: isAirborne ? 32 : 4,
          collected: false,
        });
        spawnCountdown = 120 + Math.floor(Math.random() * 40); // 120-160 frames between barrels
      }

      // 3. Move Barrels and Check Collisions
      const luffyX = 68;
      const luffyY = playerYRef.current;
      const luffyWidth = 50;
      const luffyHeight = 56;

      const updatedBarrels = [];
      for (const barrel of barrelsRef.current) {
        barrel.x -= 6.5; // Exactly 6.5px per frame

        // Hitbox overlap test
        const barrelWidth = 32;
        const barrelHeight = 36;
        const isColliding =
          !barrel.collected &&
          luffyX < barrel.x + barrelWidth &&
          luffyX + luffyWidth > barrel.x &&
          luffyY < barrel.y + barrelHeight &&
          luffyY + luffyHeight > barrel.y;

        if (isColliding) {
          barrel.collected = true;
          waterCountRef.current += 1;
          const currentCount = waterCountRef.current;
          setWaterCount(currentCount);

          // Spawn brief splash indicator
          setSplashVfx({ x: barrel.x, y: barrel.y });
          setTimeout(() => setSplashVfx(null), 450);

          try {
            sandAudio.playPowerup();
          } catch {}

          if (currentCount >= 3) {
            handleTransitionToClash();
            return; // Terminate runner loop
          }
        }

        // Keep barrels that haven't scrolled completely offscreen
        if (barrel.x > -60 && !barrel.collected) {
          updatedBarrels.push(barrel);
        }
      }

      barrelsRef.current = updatedBarrels;
      setBarrels([...updatedBarrels]);

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    };
  }, [stage, handleTransitionToClash]);

  // Transition from CLASH to STORM, then auto-finish after 2.6s
  const handleTriggerStorm = () => {
    setStage('STORM');
    try {
      sandAudio.playExplosion();
    } catch {}

    // Exactly 2.6 seconds storm punch duration
    setTimeout(() => {
      setStage('FINISHED');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#38bdf8', '#f59e0b', '#22c55e', '#ffffff'],
        });
      } catch {}
    }, 2600);
  };

  // Reset back to INTRO
  const handleReset = () => {
    setStage('INTRO');
    setWaterCount(0);
    setIsJumping(false);
    setBarrels([]);
    playerYRef.current = 0;
    velocityYRef.current = 0;
    isJumpingRef.current = false;
  };

  // Dialogue text map (Strictly zero em dashes: commas and colons used instead)
  const getDialogueText = () => {
    switch (stage) {
      case 'INTRO':
        return "Oi... I dried up crossing the red dunes and Crocodile's sandstorm is choking the cloud cluster. Toss me some water and let's board down!";
      case 'SKATING':
        return 'Catch 3 water barrels across the slip-faces! Tap Jump or press Space.';
      case 'CLASH':
        return "Water reserves at 100%! Crocodile's Logia sand defense is neutralized, finish him to restore the region!";
      case 'STORM':
        return 'Gomu Gomu no... Storm!!';
      case 'FINISHED':
        return "Rain returns to Alabasta! Off the terminal, you'll find me carving down Riyadh's red dunes on a sandboard, minus Crocodile.";
      default:
        return '';
    }
  };

  // Status indicator styling
  const getStatusIndicator = () => {
    if (stage === 'FINISHED') {
      return (
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
          <span className="text-xs font-sans text-neutral-300 font-medium">Alabasta Restored</span>
        </div>
      );
    }
    if (stage === 'STORM') {
      return (
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <span className="text-xs font-sans text-neutral-300 font-medium">Storm Finisher</span>
        </div>
      );
    }
    if (stage === 'CLASH') {
      return (
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="text-xs font-sans text-neutral-300 font-medium">Boss Encounter</span>
        </div>
      );
    }
    if (stage === 'SKATING') {
      return (
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-xs font-sans text-neutral-300 font-medium">Sandboard Run</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span className="text-xs font-sans text-neutral-300 font-medium">Alabasta Sandboard</span>
      </div>
    );
  };

  return (
    <div
      className={`w-full max-w-[720px] mx-auto rounded-[20px] overflow-hidden transition-all duration-300 select-none ${
        stage === 'STORM' ? 'animate-screen-shake-storm' : ''
      }`}
      style={{
        backgroundColor: '#121215',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 45px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* 1. Minimal Top Bar (48px height) */}
      <div
        className="h-[48px] px-5 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
      >
        {/* Left: Status dot + Stage title */}
        {getStatusIndicator()}

        {/* Right: Sleek Water Reserves progress bar (0/3 to 3/3) */}
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-sans text-neutral-400">
            Water Reserves <span className="text-neutral-200 font-medium">{waterCount}/3</span>
          </span>
          <div className="w-16 h-1.5 rounded-full overflow-hidden bg-white/10">
            <div
              className="h-full bg-sky-400 transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, (waterCount / 3) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2. Center Viewport (320px height) */}
      <div
        ref={viewportRef}
        onClick={stage === 'SKATING' ? triggerJump : undefined}
        className={`h-[320px] relative overflow-hidden ${
          stage === 'SKATING' ? 'cursor-pointer' : ''
        }`}
      >
        {/* State 1: INTRO (Full-bleed Luffy Exhausted GIF) */}
        {stage === 'INTRO' && (
          <div className="w-full h-full relative">
            <img
              src={ASSETS.luffyExhausted}
              alt="Luffy exhausted in Alabasta desert"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-80 pointer-events-none" />
          </div>
        )}

        {/* State 2: SKATING (Interactive Sandboarding Runner Stage) */}
        {stage === 'SKATING' && (
          <div
            className="w-full h-full relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #1b0e06 0%, #3a1909 50%, #5c2409 100%)',
            }}
          >
            {/* Distant Desert Dune Silhouette */}
            <div
              className="absolute inset-x-0 bottom-12 h-20 opacity-30 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% 100%, #f59e0b 0%, transparent 80%)',
              }}
            />

            {/* Infinite CSS-Animated Scrolling Sand Dune Floor (Back layer) */}
            <div
              className="absolute inset-x-0 bottom-0 h-16 pointer-events-none overflow-hidden"
              style={{ opacity: 0.55 }}
            >
              <div
                className="flex w-[200%] h-full"
                style={{
                  animation: 'duneScrollBack 4.5s linear infinite',
                }}
              >
                <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_top,_#b45309_0%,_#78350f_70%,_#451a03_100%)] rounded-t-[50%_15px]" />
                <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_top,_#b45309_0%,_#78350f_70%,_#451a03_100%)] rounded-t-[50%_15px]" />
              </div>
            </div>

            {/* Infinite CSS-Animated Scrolling Sand Dune Floor (Foreground layer) */}
            <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none overflow-hidden">
              <div
                className="flex w-[200%] h-full"
                style={{
                  animation: 'duneScrollFront 2.8s linear infinite',
                }}
              >
                <div className="w-1/2 h-full bg-gradient-to-t from-[#78350f] via-[#c25e1a] to-[#ea580c] rounded-t-[60%_12px]" />
                <div className="w-1/2 h-full bg-gradient-to-t from-[#78350f] via-[#c25e1a] to-[#ea580c] rounded-t-[60%_12px]" />
              </div>
            </div>

            {/* Collectible Water Barrels (Moving 6.5px per frame) */}
            {barrels.map((barrel) => (
              <div
                key={barrel.id}
                className="absolute transition-transform pointer-events-none"
                style={{
                  left: `${barrel.x}px`,
                  bottom: `${34 + barrel.y}px`,
                  width: '32px',
                  height: '38px',
                }}
              >
                {/* Styled Water Barrel Graphic */}
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <div
                    className="w-7 h-9 rounded-md border flex items-center justify-center shadow-lg"
                    style={{
                      background: 'linear-gradient(180deg, #78350f 0%, #451a03 100%)',
                      borderColor: '#d97706',
                      boxShadow: '0 0 12px rgba(56, 189, 248, 0.45)',
                    }}
                  >
                    {/* Metal bands */}
                    <div className="absolute inset-x-0 top-1.5 h-0.5 bg-amber-400/70" />
                    <div className="absolute inset-x-0 bottom-1.5 h-0.5 bg-amber-400/70" />
                    {/* Glowing Water Droplet */}
                    <Droplets className="w-4 h-4 text-sky-400 animate-pulse relative z-10" />
                  </div>
                </div>
              </div>
            ))}

            {/* Splash VFX indicator on collect */}
            {splashVfx && (
              <div
                className="absolute pointer-events-none text-sky-400 font-sans text-xs font-bold animate-ping"
                style={{
                  left: `${splashVfx.x}px`,
                  bottom: `${50 + splashVfx.y}px`,
                }}
              >
                +1 Water
              </div>
            )}

            {/* Straw Hat Sandboarder (Luffy on sleek CSS sandboard) */}
            <div
              className="absolute left-[64px] pointer-events-none flex flex-col items-center transition-all duration-75"
              style={{
                bottom: `${34 + playerYRef.current}px`,
                width: '68px',
              }}
            >
              {/* Character Sticker (Transparent Giphy GIF) */}
              <div className="w-16 h-16 relative flex items-center justify-center">
                <img
                  src={isJumping ? ASSETS.luffyJump : ASSETS.luffySticker}
                  alt="Luffy sandboarding"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Sleek CSS Sandboard Graphic */}
              <div
                className="relative -mt-1 w-18 h-2 rounded-full shadow-md"
                style={{
                  width: '72px',
                  background: 'linear-gradient(90deg, #18181b 0%, #78350f 40%, #d97706 85%, #f59e0b 100%)',
                  boxShadow: '0 3px 8px rgba(0,0,0,0.7)',
                  transform: `rotate(${isJumping ? -6 : 3}deg)`,
                }}
              >
                {/* Board nose curl */}
                <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-amber-400 rounded-r-full" />
              </div>
            </div>

            {/* Subtle bottom vignette to blend with card */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>
        )}

        {/* State 3: CLASH (Full-bleed Crocodile Clash GIF) */}
        {stage === 'CLASH' && (
          <div className="w-full h-full relative">
            <img
              src={ASSETS.crocClash}
              alt="Luffy clashing with Crocodile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-80 pointer-events-none" />
          </div>
        )}

        {/* State 4A: STORM (Full-bleed Luffy Punch GIF with screen shake) */}
        {stage === 'STORM' && (
          <div className="w-full h-full relative">
            <img
              src={ASSETS.luffyPunch}
              alt="Luffy delivering Gomu Gomu no Storm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-70 pointer-events-none" />
          </div>
        )}

        {/* State 4B: FINISHED (Full-bleed Alabasta Rain GIF) */}
        {stage === 'FINISHED' && (
          <div className="w-full h-full relative">
            <img
              src={ASSETS.alabastaRain}
              alt="Rain returning to Alabasta"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-80 pointer-events-none" />
          </div>
        )}
      </div>

      {/* 3. Bottom Dialogue / Control Bar (76px height) */}
      <div
        className="h-[76px] px-5 flex items-center justify-between gap-4"
        style={{
          backgroundColor: '#121215',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Left: Short 1-2 sentence RPG-style dialogue prompt */}
        <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-snug line-clamp-2 max-w-[460px]">
          {getDialogueText()}
        </p>

        {/* Right: ONE primary action button */}
        <div className="shrink-0">
          {stage === 'INTRO' && (
            <button
              type="button"
              onClick={() => setStage('SKATING')}
              className="px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-medium text-white transition-all duration-200 active:scale-95 shadow-sm"
              style={{
                backgroundColor: '#27272a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3f3f46';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#27272a';
              }}
            >
              Give Water &amp; Skate
            </button>
          )}

          {stage === 'SKATING' && (
            <button
              type="button"
              onClick={triggerJump}
              className="px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-medium text-white transition-all duration-200 active:scale-95 shadow-sm"
              style={{
                backgroundColor: '#0284c7',
                border: '1px solid rgba(56, 189, 248, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0369a1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0284c7';
              }}
            >
              Jump (Space)
            </button>
          )}

          {stage === 'CLASH' && (
            <button
              type="button"
              onClick={handleTriggerStorm}
              className="px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-medium text-white transition-all duration-200 active:scale-95"
              style={{
                backgroundColor: '#ef4444',
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.45)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dc2626';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ef4444';
              }}
            >
              Gomu Gomu no Storm!
            </button>
          )}

          {stage === 'STORM' && (
            <button
              type="button"
              disabled
              className="px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-medium text-white/60 cursor-not-allowed opacity-80"
              style={{
                backgroundColor: '#991b1b',
              }}
            >
              Storming...
            </button>
          )}

          {stage === 'FINISHED' && (
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-medium text-white flex items-center gap-1.5 transition-all duration-200 active:scale-95"
              style={{
                backgroundColor: '#27272a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3f3f46';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#27272a';
              }}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay Run</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
