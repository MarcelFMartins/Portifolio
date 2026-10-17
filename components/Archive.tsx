import { archive } from "@/lib/data";

export default function Archive() {
  return (
    <section className="archive section" aria-label="Outros projetos">
      <div className="container">
        <div className="section-head">
          <p className="label mono" data-reveal>(03) Arquivo</p>
          <h2 className="display display--sm" data-reveal>
            Outros <em className="serif">projetos</em>
          </h2>
        </div>

        <ul className="archive__list">
          {archive.map((p) => {
            const href = p.live ?? p.repo;
            return (
              <li key={p.slug} className="archive__row" data-reveal>
                <a href={href} target="_blank" rel="noreferrer" className="archive__link">
                  <span className="archive__title">{p.title}</span>
                  <span className="archive__desc muted">{p.description}</span>
                  <span className="archive__stack mono">{p.stack.join(" · ")}</span>
                  <span className="archive__arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
