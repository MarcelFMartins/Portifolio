"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { manifesto } from "@/lib/data";

const stats = [
  { value: "13+", label: "projetos publicados" },
  { value: "4", label: "experiências profissionais" },
  { value: "2026", label: "dev júnior na Help Multas" },
];

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Tela parada: as palavras acendem uma a uma com o scroll.
        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top top", end: "+=140%", scrub: 0.5, pin: true },
          })
          .fromTo(".manifesto__word", { opacity: 0.12 }, { opacity: 1, stagger: 0.1, ease: "none" })
          .from(".manifesto__stat", { y: 30, autoAlpha: 0, stagger: 0.15, ease: "power2.out" }, ">-0.4");
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="sobre" className="manifesto" aria-label="Sobre mim">
      <div className="container manifesto__inner">
        <p className="label mono">(01) Sobre</p>
        <p className="manifesto__text">
          {manifesto.split(" ").map((w, i) => (
            <span key={i} className="manifesto__word">
              {w}{" "}
            </span>
          ))}
        </p>
        <ul className="manifesto__stats">
          {stats.map((s) => (
            <li key={s.label} className="manifesto__stat">
              <strong className="grad-text">{s.value}</strong>
              <span className="mono">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
