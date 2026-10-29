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

  // Cursor sword slashes on pointer move (reverse-engineered from sharara.me)
  const slashLayerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia?.('(pointer: fine)').matches) return;
    const layer = slashLayerRef.current;
    if (!layer) return;

    let lastX = -9999;
    let lastY = -9999;
    let lastTime = 0;
    let rafId = 0;
    let pendingPoint = null;

    const spawnSlash = (x, y) => {
      if (layer.childElementCount > 24) return;
      const slash = document.createElement('span');
      slash.className = 'cursor-slash';
      const width = 22 + Math.random() * 12;
      const angle = -38 + Math.random() * 14;
      slash.style.left = `${x}px`;
      slash.style.top = `${y}px`;
      slash.style.width = `${width}px`;
      slash.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      layer.appendChild(slash);
      window.setTimeout(() => slash.remove(), 500);
    };

    const handlePointerMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
      const now = performance.now();
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist < 28 && now - lastTime < 100) return;

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;
      pendingPoint = { x: e.clientX, y: e.clientY };

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          if (pendingPoint) {
            spawnSlash(pendingPoint.x, pendingPoint.y);
            pendingPoint = null;
          }
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
      layer.innerHTML = '';
    };
  }, []);

  return (
    <>
      {/* Drifting embers canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-60"
      />

      {/* Interactive Cursor Sword Slashes Layer (sharara.me) */}
      <div ref={slashLayerRef} className="cursor-slash-layer" aria-hidden="true" />

      {/* Authentic Hanging Katana in Navbar (sharara.me) */}
      <div className="nav-katana hidden md:block" aria-hidden="true">
        <div className="nav-katana-swing">
          <span className="nav-katana-rope" />
          <img
            className="nav-katana-blade"
            src="/assets/decorations/katana-hang.webp"
            alt=""
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
}
