import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { profile } from "@/lib/data";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: `${profile.name} — Desenvolvedor`,
  description:
    "Portfólio de Marcel Ferreira Martins, desenvolvedor júnior e estudante de Engenharia de Software. Projetos, experiências e automação com IA.",
  keywords: ["Marcel Martins", "desenvolvedor", "portfólio", "Next.js", "React", "Engenharia de Software", "União da Vitória"],
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: `${profile.name} — Desenvolvedor`,
    description: "Projetos, experiências e conhecimentos de Marcel Ferreira Martins.",
    url: profile.site,
    siteName: profile.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07060b" },
    { media: "(prefers-color-scheme: light)", color: "#f5f4f7" },
  ],
};

// Aplica o tema antes da primeira pintura para não piscar.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
