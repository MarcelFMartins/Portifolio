"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const colors = ["#ff3d8b", "#ff8a3d", "#ffd23f", "#2ee6a6", "#2ec5ff", "#4d6bff"];

// Cursor colorido: ponto, anel que muda de cor, brilho que segue o mouse e faíscas no clique.
export default function CursorFX() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");
    const els = [glow.current, dot.current, ring.current];
    gsap.set(els, { autoAlpha: 0 });

    const dotX = gsap.quickTo(dot.current, "x", { duration: 0.08 });
    const dotY = gsap.quickTo(dot.current, "y", { duration: 0.08 });
    const ringX = gsap.quickTo(ring.current, "x", { duration: 0.35, ease: "power3" });
    const ringY = gsap.quickTo(ring.current, "y", { duration: 0.35, ease: "power3" });
    const glowX = gsap.quickTo(glow.current, "x", { duration: 1.2, ease: "power3" });
    const glowY = gsap.quickTo(glow.current, "y", { duration: 1.2, ease: "power3" });

    let shown = false;
    let colorIdx = 0;
    let lastHover: Element | null = null;

    const onMove = (e: PointerEvent) => {
      if (!shown) {
        shown = true;
        gsap.set(els, { x: e.clientX, y: e.clientY });
        gsap.to(els, { autoAlpha: 1, duration: 0.4 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
      glowX(e.clientX);
      glowY(e.clientY);

      const target = (e.target as Element).closest("a, button, [role='button'], input, textarea, label");
      if (target !== lastHover) {
        lastHover = target;
        ring.current?.classList.toggle("is-hover", !!target);
        if (target) {
          colorIdx = (colorIdx + 1) % colors.length;
          ring.current?.style.setProperty("--cursor-c", colors[colorIdx]);
        }
      }
    };

    const onDown = (e: PointerEvent) => {
      ring.current?.classList.add("is-down");
      for (let i = 0; i < 10; i++) {
        const s = document.createElement("span");
        s.className = "cursor-spark";
        s.style.background = colors[i % colors.length];
        document.body.appendChild(s);
        const angle = (Math.PI * 2 * i) / 10 + Math.random() * 0.4;
        const dist = 30 + Math.random() * 40;
        gsap.fromTo(
          s,
          { x: e.clientX, y: e.clientY, scale: 1 },
          {
            x: e.clientX + Math.cos(angle) * dist,
            y: e.clientY + Math.sin(angle) * dist,
            scale: 0,
            duration: 0.7,
            ease: "expo.out",
            onComplete: () => s.remove(),
          }
        );
      }
    };
    const onUp = () => ring.current?.classList.remove("is-down");
    const onLeave = () => {
      shown = false;
      gsap.to(els, { autoAlpha: 0, duration: 0.3 });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={glow} className="cursor-glow" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
