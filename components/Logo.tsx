// Monograma "M" entre colchetes de código, com cursor de terminal.
export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="logo-fg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c4b5fd" />
          <stop offset="0.55" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="#0d0a14" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 22 11 32l7 10" stroke="#8b5cf6" strokeOpacity="0.7" strokeWidth="3" />
        <path d="M46 22l7 10-7 10" stroke="#8b5cf6" strokeOpacity="0.7" strokeWidth="3" />
        <path d="M22 43V21l10 12 10-12v22" stroke="url(#logo-fg)" strokeWidth="5" />
      </g>
      <rect x="25" y="49" width="14" height="3" rx="1.5" fill="url(#logo-fg)" />
    </svg>
  );
}
