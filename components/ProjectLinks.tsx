import type { Project } from "@/lib/data";

export default function ProjectLinks({ p }: { p: Project }) {
  if (p.private && !p.live && !p.repo) return <span className="pill mono">Código privado</span>;
  return (
    <div className="links">
      {p.live && (
        <a className="link-arrow" href={p.live} target="_blank" rel="noreferrer">
          Ver online <span aria-hidden="true">↗</span>
        </a>
      )}
      {p.repo && (
        <a className="link-arrow" href={p.repo} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}
