"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { withBasePath } from "@/lib/base-path";

export default function Home() {
  useEffect(() => {
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX / window.innerWidth - 0.5}`);
      document.documentElement.style.setProperty("--my", `${event.clientY / window.innerHeight - 0.5}`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <main className="landing">
    <SiteNav />
    <div className="landing__frames" aria-hidden="true">
      <i style={{ backgroundImage: `url(${withBasePath("/media/dingfengpo-cover.webp")})` }} />
      <i style={{ backgroundImage: `url(${withBasePath("/media/london-underworld-cover.webp")})` }} />
      <i style={{ backgroundImage: `url(${withBasePath("/media/memory-escape-cover.webp")})` }} />
    </div>
    <div className="landing__veil" />
    <p className="landing__meta landing__meta--left">PORTFOLIO<br />2024 - 2026</p>
    <p className="landing__meta landing__meta--right">FILM · INTERACTIVE NARRATIVE<br />VR / MR · EXPERIENCE DESIGN</p>
    <section className="landing__identity">
      <p>SELECTED WORKS</p>
      <h1>YIPENG LIU</h1>
      <h2>刘轶鹏</h2>
      <Link className="landing__enter" href="/work"><span>ENTER PORTFOLIO</span><i>↗</i></Link>
    </section>
    <div className="landing__footer">
      <Link href="/work#dingfengpo">AI FILM</Link>
      <Link href="/work#london-underworld">IMMERSIVE</Link>
      <Link href="/work#selected-vr">VR / INTERACTION</Link>
      <Link href="/cv">CV ↗</Link>
    </div>
  </main>;
}
