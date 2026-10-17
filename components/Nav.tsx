"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeToggle from "./ThemeToggle";
import { scrollToTarget, useLenis } from "./SmoothScroll";
import { profile } from "@/lib/data";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#conhecimentos", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Esconde a nav ao rolar para baixo e mostra ao subir.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > last + 2);
      if (y < last - 2 || y < 160) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(menuRef.current, { visibility: "visible" })
        .fromTo(
          menuRef.current,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "expo.inOut" }
        )
        .from(".mobile-menu__link", { yPercent: 110, duration: 0.6, stagger: 0.06, ease: "expo.out" }, "-=0.25")
        .from(".mobile-menu__foot", { autoAlpha: 0, duration: 0.4 }, "-=0.3");
    },
    { scope: menuRef }
  );

  useEffect(() => {
    if (!tl.current) return;
    if (open) {
      tl.current.timeScale(1).play();
      lenis?.stop();
    } else {
      tl.current.timeScale(1.6).reverse();
      lenis?.start();
    }
    document.body.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => scrollToTarget(lenis, href), open ? 350 : 0);
  };

  return (
    <>
      <header className={`nav ${hidden && !open ? "is-hidden" : ""}`}>
        <div className="nav__tab">
          <a href="#top" className="nav__logo" onClick={(e) => go(e, "#top")} aria-label="Início">
            <span className="nav__mark" aria-hidden="true">&gt;_</span>
            <span className="nav__name">{profile.name}</span>
          </a>
          <nav className="nav__links" aria-label="Seções">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav__actions">
            <ThemeToggle />
            <button
              type="button"
              className={`nav__burger ${open ? "is-open" : ""}`}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" ref={menuRef} className="mobile-menu" aria-hidden={!open}>
        <nav className="mobile-menu__nav" aria-label="Menu">
          {links.map((l, i) => (
            <div key={l.href} className="mobile-menu__row">
              <a href={l.href} className="mobile-menu__link" onClick={(e) => go(e, l.href)} tabIndex={open ? 0 : -1}>
                <span className="mono">0{i + 1}</span>
                {l.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <a href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1}>{profile.email}</a>
          <div>
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
