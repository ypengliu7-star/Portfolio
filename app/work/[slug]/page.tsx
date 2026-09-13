import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return <main className={`case-study case-study--${project.slug}`}>
    <SiteNav />
    <section className="case-cover" style={{ "--case-image": `url(${project.cover})` } as React.CSSProperties}>
      <div className="case-cover__image" />
      <div className="case-cover__shade" />
      <p className="case-cover__index">{project.index} / CASE STUDY</p>
      <div className="case-cover__title"><p>{project.subtitle}</p><h1>{project.title}</h1></div>
      <a className="case-cover__scroll" href="#overview"><span /> EXPLORE THE PROJECT</a>
    </section>

    <section className="case-overview" id="overview">
      <p className="case-label">OVERVIEW / {project.year}</p>
      <h2>{project.statement}</h2>
      <div className="case-specs">
        <dl><dt>ROLE</dt><dd>{project.role}</dd></dl>
        <dl><dt>FORMAT</dt><dd>{project.format}</dd></dl>
        <dl><dt>DURATION</dt><dd>{project.duration}</dd></dl>
        <dl><dt>TOOLS</dt><dd>{project.tools}</dd></dl>
      </div>
    </section>

    <section className="case-facts">
      {project.facts.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
    </section>

    {project.video && <section className="case-film" style={{ "--film-image": `url(${project.cover})` } as React.CSSProperties}>
      <div /><a href={project.video} target="_blank" rel="noreferrer"><span>WATCH FINAL FILM</span><i>↗</i></a>
    </section>}

    <section className="case-sections">
      {project.sections.map((section, index) => <article className={`case-section ${index % 2 ? "case-section--reverse" : ""}`} key={section.label}>
        <div className="case-section__copy">
          <p>{section.label}</p>
          <h2>{section.title}</h2>
          <div className="case-section__body"><p>{section.body}</p>
            {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
          </div>
        </div>
        {section.image && <figure><img src={section.image} alt={section.caption || section.title} /><figcaption>{section.caption}</figcaption></figure>}
      </article>)}
    </section>

    <section className="case-outro">
      <p>END OF CASE STUDY / {project.index}</p>
      <Link href="/work">BACK TO INDEX</Link>
    </section>

    <Link className="case-next" href={`/work/${next.slug}`} style={{ "--next-image": `url(${next.cover})` } as React.CSSProperties}>
      <div />
      <p>NEXT PROJECT / {next.index}</p>
      <h2>{next.title}</h2>
      <span>VIEW CASE ↗</span>
    </Link>
  </main>;
}
