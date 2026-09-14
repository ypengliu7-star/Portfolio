import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { withBasePath } from "@/lib/base-path";
import type { Project } from "@/lib/projects";

const asset = (name: string, extension = "webp") =>
  `${withBasePath(`/media/cases/all-roads/native/${name}.${extension}`)}?v=20260914-rome2`;

const archive = [
  ["still-01", "主角第一次读懂任务"],
  ["still-02", "石板任务界面"],
  ["still-03", "现代人误入古罗马"],
  ["still-04", "市集追逐"],
  ["still-05", "浴场误会"],
  ["still-06", "浴场人物关系"],
  ["still-07", "身份改造"],
  ["still-08", "战场奔逃"],
  ["still-09", "最终任务的尺度升级"],
];

const chapters = [
  {
    number: "01",
    title: "条条大路通罗马",
    body: "一个只想离开的现代人，被石板不断派发任务。无论选择哪条路，他都会回到同一个罗马起点。重复不是填充，而是笑点和叙事规则。",
    image: "still-01",
  },
  {
    number: "02",
    title: "浴场里的错误选择",
    body: "为了避开任务，他进入浴场并试图融入当地人，却把一次普通社交变成新的误会与追逐。任务在逃避中被意外完成。",
    image: "still-05",
  },
  {
    number: "03",
    title: "我来，我见，我征服",
    body: "最后一关把私人困境突然放大到战场。主角仍然只想逃跑，却在混乱中完成了最夸张的系统指令，形成最终反转。",
    image: "film-war-run",
  },
];

const decisions = [
  ["重复的起点", "让同一条罗马道路反复出现，把生成素材的空间一致性限制转化为剧情机制。"],
  ["石板即界面", "用一块可被角色拿在手里的石板承担任务提示，避免额外的数字UI破坏古罗马世界。"],
  ["动作推动喜剧", "笑点主要来自奔跑、误入、回头与追逐，而不是依赖大段对白。"],
  ["三个尺度", "从城市道路到公共浴场，再升级到战场，让每次任务都比上一次更失控。"],
];

export function AllRoadsCase({ project, next }: { project: Project; next: Project }) {
  return <main className="case-study case-study--all-roads roads">
    <SiteNav />

    <section className="case-cover roads-cover" style={{ "--case-image": `url(${asset("still-03")})` } as React.CSSProperties}>
      <div className="case-cover__image" /><div className="case-cover__shade" />
      <p className="case-cover__index">02 / 24H AI FILM SPRINT</p>
      <div className="case-cover__title"><p>ROMAN ABSURDIST SHORT FILM</p><h1>ALL ROADS</h1></div>
      <a className="case-cover__scroll" href="#overview"><span /> EXPLORE THE PROJECT</a>
    </section>

    <section className="case-overview roads-overview" id="overview">
      <p className="case-label">OVERVIEW / 2026</p>
      <h2>他拒绝每一项任务，<br />却准确完成了全部任务。</h2>
      <p className="roads-lead">为 TapNow 罗马主题 AI 电影活动完成的24小时极限短片。故事把游戏任务、古罗马名句与现代人的逃避心理组合成一场不断升级的荒诞旅程。</p>
      <div className="case-specs">
        <dl><dt>我的工作</dt><dd>概念与剧本、人物和场景开发、镜头设计、AI图像及视频生成、剪辑与声音</dd></dl>
        <dl><dt>形式</dt><dd>古罗马荒诞喜剧短片</dd></dl>
        <dl><dt>制作限制</dt><dd>24小时内完成构思、生成与成片</dd></dl>
        <dl><dt>工具</dt><dd>TapNow / 即梦 / Seedance / Premiere</dd></dl>
      </div>
    </section>

    <section className="roads-sprint">
      <div><strong>24H</strong><span>从空白概念到最终成片</span></div>
      <div><strong>03</strong><span>不断升级的任务关卡</span></div>
      <div><strong>01</strong><span>反复回到的罗马起点</span></div>
    </section>

    <section className="roads-section roads-idea">
      <header><p>01 / CORE IDEA</p><h2>把“逃避任务”写成完成任务的方法</h2></header>
      <div className="roads-idea__grid">
        <blockquote><span>MISSION FAILED?</span><strong>ALL ROADS<br />LEAD TO ROME.</strong></blockquote>
        <div><p>主角不是传统英雄。他被突然丢进古罗马，只想回到现实。石板每次出现，他都选择拒绝、绕路或逃跑，但系统总能把他的行为解释为完成任务。</p><p>这个设定让短片在很少对白的情况下保持清晰：观众先理解规则，再等待下一次错误选择如何导致更大的结果。</p></div>
      </div>
    </section>

    <section className="roads-section roads-narrative">
      <header><p>02 / NARRATIVE STRUCTURE</p><h2>三次任务，三次失控</h2><span>每一关都用更大的空间、更快的动作和更荒谬的结果推进。</span></header>
      <div className="roads-chapters">{chapters.map((chapter) => <article key={chapter.number}>
        <figure><a href={asset(chapter.image)} target="_blank" rel="noreferrer"><img src={asset(chapter.image)} alt={chapter.title} loading="lazy" decoding="async" /></a></figure>
        <div><b>{chapter.number}</b><h3>{chapter.title}</h3><p>{chapter.body}</p></div>
      </article>)}</div>
    </section>

    <section className="roads-section roads-language">
      <header><p>03 / VISUAL LANGUAGE</p><h2>现代人进入古罗马之后，画面仍然必须属于同一个世界</h2></header>
      <div className="roads-language__hero"><a href={asset("film-arrival")} target="_blank" rel="noreferrer"><img src={asset("film-arrival")} alt="主角初到罗马的高清影片截图" loading="lazy" decoding="async" /></a><p>35mm电影质感 / 低饱和暖灰与土黄 / 自然侧光 / 真实但略带游戏关卡感的空间</p></div>
      <div className="roads-decisions">{decisions.map(([title, body], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="roads-section roads-production">
      <header><p>04 / SHOT & PRODUCTION</p><h2>用空间锚点控制生成镜头</h2><span>先固定人物、道路、石板、浴场和战场，再分别处理动作和摄影机。</span></header>
      <div className="roads-production__grid">
        <article><img src={asset("still-02")} alt="石板任务特写" loading="lazy" decoding="async" /><h3>可读的任务道具</h3><p>石板同时是叙事道具和信息界面。特写镜头负责文字，人物镜头只负责姿态，避免参考图互相干扰。</p></article>
        <article><img src={asset("still-04")} alt="罗马市集追逐" loading="lazy" decoding="async" /><h3>追逐镜头的动作节点</h3><p>将“奔跑”拆成回头、穿过人群、绕过障碍与离开画面，让速度来自连续动作，而不是单纯加快镜头。</p></article>
        <article><img src={asset("still-09")} alt="古罗马战场" loading="lazy" decoding="async" /><h3>从街道扩展到战场</h3><p>最后一关先锁定指挥者与军阵方向，再让主角进入空间，维持视线、运动方向与规模关系。</p></article>
      </div>
    </section>

    <section className="roads-canvas">
      <header><p>05 / TAPNOW WORKFLOW</p><h2>不是单张图的堆叠，<br />而是一张可以回看的制作地图。</h2><span>画布把角色、场景锚点、镜头变体和最终选帧放在同一条生成链路上。</span></header>
      <div className="roads-canvas__items">
        <figure><a href={asset("canvas-01", "png")} target="_blank" rel="noreferrer"><img src={asset("canvas-01", "png")} alt="ALL ROADS TapNow画布一，角色和场景资产" loading="lazy" decoding="async" /></a><figcaption><b>CANVAS 01</b><span>角色、服装、石板与主要场景资产</span></figcaption></figure>
        <figure><a href={asset("canvas-02", "png")} target="_blank" rel="noreferrer"><img src={asset("canvas-02", "png")} alt="ALL ROADS TapNow画布二，镜头生成和迭代" loading="lazy" decoding="async" /></a><figcaption><b>CANVAS 02</b><span>镜头生成、变体比较与选帧路径</span></figcaption></figure>
      </div>
      <a className="roads-canvas__link" href="https://app.tapnow.ai/tapflow/view/515bb771" target="_blank" rel="noreferrer"><span>OPEN THE FULL TAPNOW CANVAS</span><i>↗</i></a>
    </section>

    <section className="roads-section roads-archive">
      <header><p>06 / FINAL FRAMES</p><h2>高清剧照档案</h2><span>九张图片均使用原始高清素材；点击可以单独查看。</span></header>
      <div className="roads-archive__grid">{archive.map(([image, title]) => <a key={image} href={asset(image)} target="_blank" rel="noreferrer" aria-label={`查看${title}高清原图`}><figure><img src={asset(image)} alt={title} loading="lazy" decoding="async" /><figcaption>{title}</figcaption></figure></a>)}</div>
    </section>

    <section className="roads-result">
      <div><p>07 / RESULT & REFLECTION</p><h2>在24小时里，限制本身成为了作品的结构。</h2></div>
      <div><p>最有效的方法，是把重复场景直接写入叙事，并让石板承担所有任务信息。这样既减少生成变量，也让观众快速理解笑点。</p><p>下一轮会优先完善复杂接触动作和群众镜头，并在生成前建立更严格的服装、光线与空间连续性表。</p></div>
      <a href={project.video} target="_blank" rel="noreferrer">WATCH FINAL FILM <span>↗</span></a>
    </section>

    <section className="case-outro"><p>END OF CASE STUDY / 02</p><Link href="/work">BACK TO INDEX</Link></section>
    <Link className="case-next" href={`/work/${next.slug}`} style={{ "--next-image": `url(${next.cover})` } as React.CSSProperties}>
      <div /><p>NEXT PROJECT / {next.index}</p><h2>{next.title}</h2><span>VIEW CASE ↗</span>
    </Link>
  </main>;
}
