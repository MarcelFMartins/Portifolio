"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { education, experiences } from "@/lib/data";

export default function Experience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".xp__line-fill",
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".xp__list", start: "top 70%", end: "bottom 70%", scrub: true } }
        );
        gsap.utils.toArray<HTMLElement>(".xp__item").forEach((item) => {
          gsap.from(item.querySelectorAll(".xp__reveal"), {
            y: 36,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.07,
            ease: "expo.out",
            scrollTrigger: { trigger: item, start: "top 80%", onEnter: () => item.classList.add("is-active") },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="experiencia" className="xp section" aria-label="Experiência">
      <div className="container xp__grid">
        <aside className="xp__aside">
          <div className="xp__sticky">
            <p className="label mono" data-reveal>(04) Experiência</p>
            <h2 className="display display--sm" data-reveal>
              Onde venho
              <br />
              <em className="serif grad-text">construindo</em>
            </h2>
            <p className="muted xp__intro" data-reveal>
              Do suporte administrativo ao desenvolvimento full-stack: cada etapa somou organização, atendimento e
              visão de negócio ao código.
            </p>
          </div>
        </aside>

        <div className="xp__main">
          <div className="xp__timeline">
            <span className="xp__line" aria-hidden="true">
              <span className="xp__line-fill" />
            </span>
            <ol className="xp__list">
              {experiences.map((x) => (
                <li key={x.company} className="xp__item">
                  <span className="xp__dot" aria-hidden="true" />
                  <div className="xp__head xp__reveal">
                    <span className="mono">{x.period}</span>
                    {x.current && <span className="pill pill--accent mono">Atual</span>}
                  </div>
                  <h3 className="xp__company xp__reveal">{x.company}</h3>
                  <p className="xp__role xp__reveal">
                    {x.role} <span className="muted">— {x.place}</span>
                  </p>
                  <ul className="xp__points xp__reveal">
                    {x.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="edu">
            <p className="label mono" data-reveal>Formação</p>
            <ul className="edu__list">
              {education.map((e) => (
                <li key={e.title} className="edu__row" data-reveal>
                  <span className="edu__title">{e.title}</span>
                  <span className="muted">{e.place}</span>
                  <span className="mono edu__period">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
