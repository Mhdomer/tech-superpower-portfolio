import React, { useEffect, useRef } from 'react';

export default function HangingKatanaAmbient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle drifting terracotta embers / petals
    const petals = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3 - 0.2,
      vy: Math.random() * 0.5 + 0.3,
      size: Math.random() * 2.5 + 1.2,
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.35 + 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `rgba(224, 93, 82, ${p.opacity})`;
        ctx.beginPath();
        // Petal shape
        ctx.ellipse(0, 0, p.size * 1.5, p.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Drifting embers canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-60"
      />

      {/* Hanging Katana in the top-right corner (Ziad Sharara aesthetic) */}
      <div className="fixed top-0 right-8 sm:right-16 z-30 pointer-events-none hidden md:block">
        <svg
          width="48"
          height="240"
          viewBox="0 0 48 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-75 hover:opacity-100 transition-opacity drop-shadow-[0_4px_12px_rgba(224,93,82,0.25)]"
        >
          {/* Thread holding the sword */}
          <line x1="24" y1="0" x2="24" y2="40" stroke="#e05d52" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

          {/* Kashira pommel ring */}
          <circle cx="24" cy="42" r="3.5" stroke="#f87171" strokeWidth="1.5" fill="#10141d" />

          {/* Tsuka handle with cross-wrap */}
          <rect x="22" y="44" width="4" height="34" rx="1" fill="#1d2433" stroke="#262f42" strokeWidth="1" />
          {[48, 54, 60, 66, 72].map((y) => (
            <line key={y} x1="22" y1={y} x2="26" y2={y + 3} stroke="#e05d52" strokeWidth="1" opacity="0.8" />
          ))}

          {/* Tsuba guard */}
          <ellipse cx="24" cy="80" rx="9" ry="3.5" fill="#262f42" stroke="#e05d52" strokeWidth="1.2" />

          {/* Habaki collar */}
          <rect x="22.5" y="82" width="3" height="5" fill="#f87171" opacity="0.9" />

          {/* Curved steel blade */}
          <path
            d="M 23 87 Q 24 140 21 210 Q 20 225 24 235 Q 26 220 25 140 Q 25 95 25 87 Z"
            fill="url(#hangingBladeGrad)"
            stroke="#94a3b8"
            strokeWidth="0.8"
          />

          {/* Razor temper line (hamon) */}
          <path
            d="M 23.5 87 Q 24.5 140 21.5 210 Q 20.5 225 24 235"
            stroke="#e05d52"
            strokeWidth="1.2"
            opacity="0.85"
          />

          {/* Hanging silk tassel */}
          <path d="M 24 45 Q 16 65 18 90" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.75" />
          <circle cx="18" cy="91" r="2" fill="#38bdf8" opacity="0.85" />

          <defs>
            <linearGradient id="hangingBladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
