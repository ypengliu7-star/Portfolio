import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/lib/projects";

export default function WorkIndex() {
  return <main className="work-index">
    <SiteNav />
    {projects.map((project) => <section className="work-screen" id={project.slug} key={project.slug} style={{ "--work-image": `url(${project.cover})` } as React.CSSProperties}>
      <div className="work-screen__image" aria-hidden="true" />
      <div className="work-screen__shade" />
      <p className="work-screen__count">{project.index} / {projects.length.toString().padStart(2, "0")}</p>
      <p className="work-screen__year">{project.year}</p>
      <div className="work-screen__title">
        <p>{project.subtitle}</p>
        <h1>{project.title}</h1>
        <Link href={`/work/${project.slug}`}>VIEW PROJECT <span>↗</span></Link>
      </div>
      <Link className="work-screen__hit" href={`/work/${project.slug}`} aria-label={`打开项目：${project.title}`} />
    </section>)}
  </main>;
}
