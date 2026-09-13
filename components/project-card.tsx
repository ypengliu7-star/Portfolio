import Link from "next/link";
import type { Project } from "@/lib/projects";
export function ProjectCard({ project }: { project: Project }) {
  return <Link className="project-card" href={`/work/${project.slug}`}>
    <div className="project-card__media" style={{ "--project-image": `url(${project.cover})` } as React.CSSProperties}>
      <span className="project-card__wash" /><span className="project-card__play"><i /> LIVE FRAME</span>
    </div>
    <div className="project-card__meta"><span>{project.index}</span><div><h3>{project.title}</h3><p>{project.subtitle}</p></div><span>{project.year}</span><span className="project-card__arrow">↗</span></div>
  </Link>;
}
