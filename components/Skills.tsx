import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="conhecimentos" className="skills section" aria-label="Conhecimentos">
      <div className="container">
        <div className="section-head">
          <p className="label mono" data-reveal>(05) Conhecimentos</p>
          <h2 className="display display--sm" data-reveal>
            Ferramentas do <em className="serif">dia a dia</em>
          </h2>
        </div>
        <div className="skills__grid">
          {skills.map((g, i) => (
            <div key={g.group} className="skills__col" data-reveal>
              <p className="skills__group mono">
                <span>0{i + 1}</span> {g.group}
              </p>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
