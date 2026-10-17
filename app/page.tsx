import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Work from "@/components/Work";
import Archive from "@/components/Archive";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Reveals from "@/components/Reveals";
import CursorFX from "@/components/CursorFX";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Manifesto />
        <Work />
        <Archive />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Reveals />
      <CursorFX />
    </>
  );
}
