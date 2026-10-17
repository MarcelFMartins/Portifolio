// Divide texto em letras ou palavras dentro de máscaras, para animar com GSAP.
type Props = { text: string; by?: "char" | "word"; className?: string };

export default function Split({ text, by = "char", className = "" }: Props) {
  if (by === "word") {
    return (
      <span className={className} aria-label={text}>
        {text.split(" ").map((w, i) => (
          <span key={i} className="split-mask" aria-hidden="true">
            <span className="split-word">{w}</span>{" "}
          </span>
        ))}
      </span>
    );
  }
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((c, i) => (
        <span key={i} className="split-mask" aria-hidden="true">
          <span className="split-char">{c === " " ? "\u00a0" : c}</span>
        </span>
      ))}
    </span>
  );
}
