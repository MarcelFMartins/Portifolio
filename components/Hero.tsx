"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Split from "./Split";
import { profile } from "@/lib/data";
import { scrollToTarget, useLenis } from "./SmoothScroll";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.15 });
        intro
          .from(".hero__glow", { scale: 0.4, autoAlpha: 0, duration: 2.2, ease: "power2.out" })
          .from(".hero__title .split-char", { yPercent: 115, duration: 1.4, stagger: 0.035 }, 0.1)
          .from(".hero__fade", { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08 }, 0.6)
          .from(".hero__rule", { scaleX: 0, transformOrigin: "left", duration: 1.4, ease: "expo.inOut" }, 0.4);

        // Tela parada: o hero segura enquanto o nome encolhe e o conteúdo se dissolve.
        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top top", end: "+=70%", scrub: 0.6, pin: true, pinSpacing: true },
          })
          // fromTo com valores explícitos: a entrada acima esconde esses elementos,
          // então um .to() capturaria o estado "escondido" como ponto de partida.
          .fromTo(".hero__title", { scale: 1, yPercent: 0 }, { scale: 0.86, yPercent: -18, ease: "none", immediateRender: false }, 0)
          .fromTo(".hero__fade, .hero__rule", { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -30, ease: "none", immediateRender: false }, 0)
          .fromTo(".hero__glow", { scale: 1, autoAlpha: 1 }, { scale: 1.6, autoAlpha: 0.35, ease: "none", immediateRender: false }, 0)
          .fromTo(".hero__title", { autoAlpha: 1 }, { autoAlpha: 0, ease: "none", immediateRender: false }, 0.55);
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="hero" aria-label="Apresentação">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__top container mono">
        <span className="hero__fade">Portfólio — ©2026</span>
        <span className="hero__fade status">
          <i className="status__dot" aria-hidden="true" /> Disponível para projetos
        </span>
      </div>

      <h1 className="hero__title container">
        <Split text="Marcel" className="hero__line" />
        <Split text="Martins" className="hero__line hero__line--serif" />
      </h1>

      <div className="container">
        <div className="hero__rule" aria-hidden="true" />
        <div className="hero__bottom">
          <p className="hero__lead hero__fade">
            {profile.role} na Help Multas e estudante de Engenharia de Software. Crio sistemas, sites e{" "}
            <span className="grad-text">automações com IA</span> que resolvem problemas reais.
          </p>
          <div className="hero__meta mono hero__fade">
            <span>{profile.location}</span>
            <span>{profile.tagline}</span>
          </div>
          <a
            href="#sobre"
            className="hero__cue mono hero__fade"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget(lenis, "#sobre");
            }}
          >
            Role <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
