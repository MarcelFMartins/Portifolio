"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { scrollToTarget, useLenis } from "./SmoothScroll";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const lenis = useLenis();
  const [status, setStatus] = useState<Status>("idle");

  // Envio sem back-end via FormSubmit.
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="contact" aria-label="Contato">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container">
        <p className="label mono" data-reveal>(06) Contato</p>
        <h2 className="contact__title" data-reveal>
          Vamos criar algo
          <br />
          <em className="serif grad-text">juntos?</em>
        </h2>

        <div className="contact__grid">
          <div className="contact__info">
            <a href={`mailto:${profile.email}`} className="contact__email" data-reveal>
              <span>{profile.email}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <ul className="contact__socials" data-reveal>
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-arrow">
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="muted mono contact__place" data-reveal>
              {profile.location}
            </p>
          </div>

          <form className="form" onSubmit={onSubmit} data-reveal>
            <input type="hidden" name="_subject" value="Novo contato pelo portfólio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="form__honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label className="form__field">
              <span className="mono">Nome</span>
              <input type="text" name="nome" required autoComplete="name" />
            </label>
            <label className="form__field">
              <span className="mono">E-mail</span>
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label className="form__field">
              <span className="mono">Mensagem</span>
              <textarea name="mensagem" rows={4} required />
            </label>
            <div className="form__foot">
              <button type="submit" className="btn" disabled={status === "sending"}>
                {status === "sending" ? "Enviando…" : "Enviar mensagem"} <span aria-hidden="true">→</span>
              </button>
              <p className="form__status mono" role="status">
                {status === "ok" && "Mensagem enviada. Obrigado!"}
                {status === "error" && "Não foi possível enviar. Tente pelo e-mail."}
              </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="footer container mono">
        <span>© 2026 {profile.fullName}</span>
        <span className="footer__made">Next.js · GSAP · Lenis</span>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToTarget(lenis, 0);
          }}
        >
          Voltar ao topo ↑
        </a>
      </footer>
    </section>
  );
}
