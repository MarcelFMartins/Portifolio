"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { featured } from "@/lib/data";
import ProjectLinks from "./ProjectLinks";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop/tablet deitado: tela parada com os projetos correndo na horizontal.
      mm.add("(min-width: 900px) and (min-height: 560px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;

        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.7,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(".work__progress-bar", { scaleX: self.progress });
              const idx = Math.min(featured.length, Math.floor(self.progress * featured.length) + 1);
              const counter = root.current?.querySelector(".work__current");
              if (counter) counter.textContent = pad(idx);
            },
          },
        });

        gsap.utils.toArray<HTMLElement>(".card").forEach((card) => {
          gsap.from(card.querySelectorAll(".card__reveal"), {
            y: 40,
            autoAlpha: 0,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: card, containerAnimation: tween, start: "left 85%", end: "left 45%", scrub: 0.6 },
          });
          gsap.fromTo(
            card.querySelector(".card__index"),
            { xPercent: 20 },
            { xPercent: -20, ease: "none", scrollTrigger: { trigger: card, containerAnimation: tween, start: "left right", end: "right left", scrub: true } }
          );
        });
      });

      // Telas menores: cartões empilhados com revelação simples.
      mm.add("(max-width: 899px), (max-height: 559px)", () => {
        gsap.utils.toArray<HTMLElement>(".card").forEach((card) => {
          gsap.from(card, { y: 60, autoAlpha: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: card, start: "top 88%" } });
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="projetos" className="work" aria-label="Projetos selecionados">
      <div className="work__head container">
        <p className="label mono">(02) Projetos selecionados</p>
        <p className="work__counter mono" aria-hidden="true">
          <span className="work__current">01</span> / {pad(featured.length)}
        </p>
      </div>

      <div ref={track} className="work__track">
        <div className="work__intro">
          <h2 className="display">
            Trabalhos
            <br />
            <em className="serif grad-text">em destaque</em>
          </h2>
          <p className="muted">Sistemas, sites e painéis que levei do zero à produção — com foco em resolver o problema de quem usa.</p>
        </div>

        {featured.map((p, i) => (
          <article key={p.slug} className="card" style={{ ["--hue" as string]: `${262 + ((i * 14) % 42)}` }}>
            <div className="card__cover" aria-hidden="true">
              <span className="card__index">{pad(i + 1)}</span>
              <span className="card__orb" />
            </div>
            <div className="card__body">
              <div className="card__meta mono card__reveal">
                <span>{p.kind}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="card__title card__reveal">{p.title}</h3>
              <p className="card__desc card__reveal">{p.description}</p>
              {p.highlights && (
                <ul className="card__highlights card__reveal">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <ul className="tags card__reveal" aria-label="Tecnologias">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="card__reveal">
                <ProjectLinks p={p} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="work__progress container" aria-hidden="true">
        <span className="work__progress-bar" />
      </div>
    </section>
  );
}
