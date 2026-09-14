import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { withBasePath } from "@/lib/base-path";
import type { Project } from "@/lib/projects";

const archiveImage = (number: string) =>
  `${withBasePath(`/media/cases/london-underworld/${number}.webp`)}?v=20260915-underworld-native1`;

const uploadedImage = (file: string) =>
  `${withBasePath(`/media/cases/london-underworld/${file}`)}?v=20260914-underworld-upload1`;

const projectBoards = [
  ["伦敦地下局_01_项目概览.png", "项目概览"],
  ["伦敦地下局_02_互动叙事系统.png", "互动叙事系统"],
  ["伦敦地下局_03_现场导演与证据.png", "现场导演与证据"],
  ["LONDON_UNDERWORLD_project_evidence_v2.png", "项目证据汇总"],
  ["ChatGPT Image 2026年8月16日 10_54_41 (1).png", "早期项目设计 01"],
  ["ChatGPT Image 2026年8月16日 10_54_42 (2).png", "早期项目设计 02"],
  ["ChatGPT Image 2026年8月16日 10_54_42 (3).png", "早期项目设计 03"],
] as const;

const fieldPhotos = [
  "微信图片_20260815101351_36_2.jpg",
  "微信图片_20260815101351_37_2.jpg","微信图片_20260815101351_38_2.jpg","微信图片_20260815101351_39_2.jpg",
  "微信图片_20260815101351_40_2.jpg","微信图片_20260815101351_41_2.jpg","微信图片_20260815101351_42_2.jpg",
  "微信图片_20260815101351_43_2.jpg","微信图片_20260815161708_46_2.png","微信图片_20260815161708_47_2.png",
  "微信图片_20260815161708_48_2.png","微信图片_20260815161708_49_2.png","微信图片_20260815161708_50_2.png",
  "微信图片_20260815161708_51_2.png",
] as const;

const scale = [
  ["100+", "对外演出场次"],
  ["5", "每场玩家人数"],
  ["10H+", "单场连续体验"],
  ["600㎡", "沉浸式空间"],
  ["£148", "单人票价"],
  ["146P", "组织者手册"],
];

const npcRules = [
  ["01", "接住玩家", "玩家的临时选择必须获得回应。NPC先确认行动意图，再把变化接回角色关系和任务目标。"],
  ["02", "不脱离角色", "即使流程被打乱，也通过人物立场、语言习惯和已知信息回应，而不是跳出世界解释规则。"],
  ["03", "自主使用道具", "演员理解每件道具的叙事功能，可以依据现场状态主动调用，而不是等待固定台词触发。"],
];

const versions = [
  ["1.0", "信息先于行动", "大量背景依赖阅读；玩家进入世界慢，NPC识别和故事关系较弱。"],
  ["2.0", "关系承载信息", "将核心背景分配给人物冲突、家宴互动和可操作任务，重新连接原本割裂的剧情。"],
  ["3.0", "现场自主运行", "优化提示、灯光、角色任务与老玩家流程，并沉淀成可由团队稳定复制的组织系统。"],
];

export function LondonUnderworldCase({ project, next }: { project: Project; next: Project }) {
  return <main className="case-study underworld">
    <SiteNav />

    <section className="uw-hero" style={{ "--uw-cover": `url(${project.cover})` } as React.CSSProperties}>
      <div className="uw-hero__image" /><div className="uw-hero__shade" />
      <p className="uw-kicker">04 / COMMERCIAL IMMERSIVE RPG</p>
      <div className="uw-hero__title"><span>LONDON · 2026</span><h1>伦敦<br />地下局</h1><p>LONDON UNDERWORLD</p></div>
      <a className="uw-hero__scroll" href="#uw-overview">ENTER THE EXPERIENCE <i>↓</i></a>
    </section>

    <section className="uw-overview" id="uw-overview">
      <p className="uw-label">OVERVIEW / 2026.01—06</p>
      <div className="uw-overview__lead">
        <h2>一场持续十小时的故事，<br />必须像真实世界一样能够运转。</h2>
        <p>这是一个在伦敦真实落地并持续商业运营的五人制沉浸式RPG。体验发生在约600平方米的空间内，单场超过十小时。项目不只需要故事成立，还必须让演员、灯光、道具、餐饮、玩家节奏与现场应变共同工作。</p>
      </div>
      <div className="uw-meta">
        <dl><dt>我的工作</dt><dd>剧本改编与精简 / 机制设计 / NPC培训 / 场景装饰 / 灯光实验 / 现场执行</dd></dl>
        <dl><dt>项目形式</dt><dd>五人制商业沉浸式RPG</dd></dl>
        <dl><dt>合作与团队</dt><dd>The Black Cat Club / 十余人跨职能团队</dd></dl>
      </div>
    </section>

    <section className="uw-scale">
      {scale.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </section>

    <section className="uw-context">
      <div className="uw-context__copy">
        <p className="uw-label">01 / DESIGN CONTEXT</p>
        <h2>沉浸式叙事的难点，不是写完故事，而是让故事持续回应玩家。</h2>
        <p>五位玩家会探索不同区域、与不同NPC建立关系，并在长时间体验中不断改变行动计划。固定脚本无法覆盖所有现场变化，因此设计的核心从“玩家会看到什么”转向“当玩家做出任何合理选择时，世界如何回应”。</p>
        <ul><li>快速建立角色身份与阵营关系</li><li>让信息通过行动而不是说明进入体验</li><li>维持十小时内的节奏、体力与情绪变化</li><li>让新玩家和老玩家都能获得有效路径</li></ul>
      </div>
      <figure><a href={uploadedImage("伦敦地下局_01_项目概览.png")} target="_blank" rel="noreferrer"><img src={uploadedImage("伦敦地下局_01_项目概览.png")} alt="伦敦地下局项目概览高清设计图" loading="lazy" /></a><figcaption>PROJECT CONTEXT / 点击查看高清项目概览</figcaption></figure>
    </section>

    <section className="uw-redesign">
      <header><p className="uw-label">02 / NARRATIVE REDESIGN</p><h2>把三十分钟阅读，改成一场必须参与的家宴。</h2></header>
      <div className="uw-before-after">
        <article><span>BEFORE</span><strong>30 MIN</strong><h3>玩家停下来阅读背景</h3><p>信息集中在文本中，角色、空间和行动被暂时中断；玩家记住了设定，却还没有真正进入关系。</p></article>
        <div className="uw-arrow">→</div>
        <article><span>AFTER</span><strong>LIVE</strong><h3>信息变成人物之间的压力</h3><p>家宴把背景分散到座次、冲突、试探、任务和道具中。玩家通过参与关系理解世界，同时做出第一轮选择。</p></article>
      </div>
      <div className="uw-redesign__steps">
        <div><b>01</b><h3>识别</h3><p>开场迅速确认关键NPC及其利益关系。</p></div>
        <div><b>02</b><h3>进入</h3><p>让玩家通过餐桌行动拥有明确的位置和目标。</p></div>
        <div><b>03</b><h3>冲突</h3><p>把设定信息转化为角色之间可回应的矛盾。</p></div>
        <div><b>04</b><h3>选择</h3><p>宴会结束时，玩家已经形成自己的判断与阵营。</p></div>
      </div>
      <figure><a href={uploadedImage("伦敦地下局_02_互动叙事系统.png")} target="_blank" rel="noreferrer"><img src={uploadedImage("伦敦地下局_02_互动叙事系统.png")} alt="伦敦地下局互动叙事系统高清设计图" loading="lazy" /></a><figcaption>REDESIGN EVIDENCE / 点击查看高清互动叙事系统</figcaption></figure>
    </section>

    <section className="uw-npc">
      <header><p className="uw-label">03 / NPC SYSTEM</p><h2>开放体验需要的不是更多台词，<br />而是演员能够自主判断。</h2><span>培训规则被压缩成三条可以在现场立即执行的原则。</span></header>
      <div className="uw-npc__grid">{npcRules.map(([n,title,body])=><article key={n}><b>{n}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
      <figure><a href={uploadedImage("伦敦地下局_03_现场导演与证据.png")} target="_blank" rel="noreferrer"><img src={uploadedImage("伦敦地下局_03_现场导演与证据.png")} alt="伦敦地下局现场导演与证据高清设计图" loading="lazy" /></a><figcaption>NPC TRAINING / 点击查看高清现场导演与证据</figcaption></figure>
    </section>

    <section className="uw-iteration">
      <header><p className="uw-label">04 / LIVE ITERATION</p><h2>每一场演出，都是下一版本的用户测试。</h2><p>反馈不只来自问卷，也来自玩家在现场停留的位置、错误理解的任务、主动寻找的角色，以及演员临时补救的时刻。</p></header>
      <div className="uw-timeline">{versions.map(([version,title,body])=><article key={version}><strong>{version}</strong><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
    </section>

    <section className="uw-operations">
      <div>
        <p className="uw-label">05 / COMMERCIAL DELIVERY</p>
        <h2>把一次精彩演出，变成可以稳定复制的产品。</h2>
      </div>
      <div className="uw-operations__copy">
        <p>故事必须在真实商业条件中运行：演员轮换、玩家差异、道具损耗、灯光变化、餐饮节点和长时间体力都会影响体验。最终交付不只是剧本，而是一整套组织和运营方法。</p>
        <ul><li>146页组织者手册与角色资料</li><li>NPC培训、复盘和现场应变规则</li><li>场景装饰、灯光实验与商业物料</li><li>老玩家新流程及1.0—3.0版本记录</li></ul>
      </div>
      <figure><a href={uploadedImage("LONDON_UNDERWORLD_project_evidence_v2.png")} target="_blank" rel="noreferrer"><img src={uploadedImage("LONDON_UNDERWORLD_project_evidence_v2.png")} alt="伦敦地下局项目证据汇总高清图" loading="lazy" /></a><figcaption>DELIVERY ARCHIVE / 点击查看高清项目证据汇总</figcaption></figure>
    </section>

    <section className="uw-gallery">
      <header><p className="uw-label">06 / LIVE PHOTO ARCHIVE</p><h2>真实空间、演员、道具与演出现场</h2><span>已移除5张棚拍角色照，保留14张真实场地、道具与演出素材；点击任意照片查看原尺寸。</span></header>
      <div className="uw-photo-wall">{fieldPhotos.map((file,index)=><a href={uploadedImage(file)} target="_blank" rel="noreferrer" key={file} className={index % 7 === 0 ? "is-wide" : ""}><img src={uploadedImage(file)} alt={`伦敦地下局真实现场照片 ${String(index+1).padStart(2,"0")}`} loading="lazy" /><span>LIVE / {String(index+1).padStart(2,"0")}</span></a>)}</div>
    </section>

    <section className="uw-evidence-library">
      <header><p className="uw-label">07 / DESIGN EVIDENCE</p><h2>项目信息、叙事系统与现场交付</h2><span>7张项目设计与证据图均使用新上传高清文件。</span></header>
      <div>{projectBoards.map(([file,label],index)=><article key={file}>
        <div><b>{String(index+1).padStart(2,"0")}</b><h3>{label}</h3><a href={uploadedImage(file)} target="_blank" rel="noreferrer">打开高清原图 ↗</a></div>
        <a href={uploadedImage(file)} target="_blank" rel="noreferrer"><img src={uploadedImage(file)} alt={`伦敦地下局${label}高清图`} loading="lazy" /></a>
      </article>)}</div>
      <details><summary>查看原有4张作品集归档 <span>＋</span></summary><div className="uw-old-archive">{["01","02","03","04"].map((n)=><a href={archiveImage(n)} target="_blank" rel="noreferrer" key={n}><img src={archiveImage(n)} alt={`伦敦地下局旧版作品集页面 ${n}`} loading="lazy" /></a>)}</div></details>
    </section>

    <section className="uw-reflection">
      <p className="uw-label">08 / REFLECTION</p>
      <h2>沉浸式体验真正的“剧本”，<br />是规则、角色与现场共同形成的回应系统。</h2>
      <p>这次实践让我从编写内容转向设计可运行的叙事系统。一个稳定的沉浸式项目既要允许玩家改变故事，也要让团队在变化中保持角色、节奏与商业交付质量。</p>
    </section>

    <section className="case-outro"><p>END OF CASE STUDY / 04</p><Link href="/work">BACK TO INDEX</Link></section>
    <Link className="case-next" href={`/work/${next.slug}`} style={{ "--next-image": `url(${next.cover})` } as React.CSSProperties}>
      <div /><p>NEXT PROJECT / {next.index}</p><h2>{next.title}</h2><span>VIEW CASE ↗</span>
    </Link>

    <style>{`
      .underworld{--wine:#3a1719;--wine2:#241011;--gold:#b78b4e;--paper:#d7d0c3;--ink:#171312;background:var(--wine2);color:var(--paper)}
      .underworld .site-nav{color:#fff;border-color:rgba(255,255,255,.18)}
      .uw-hero{position:relative;min-height:100svh;overflow:hidden;background:#160b0c}.uw-hero__image{position:absolute;inset:0;background-image:var(--uw-cover);background-size:cover;background-position:center;filter:saturate(.7) contrast(1.08)}.uw-hero__shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(20,7,8,.88),rgba(20,7,8,.3) 58%,rgba(20,7,8,.55)),linear-gradient(0deg,rgba(12,5,5,.65),transparent 60%)}
      .uw-kicker{position:absolute;top:110px;left:7vw;margin:0;font-size:9px;letter-spacing:.2em}.uw-hero__title{position:absolute;left:7vw;bottom:10vh}.uw-hero__title span{font-size:10px;letter-spacing:.2em;color:#d8ae70}.uw-hero__title h1{margin:18px 0 10px;font-family:Georgia,"Songti SC",serif;font-size:clamp(76px,10.5vw,168px);line-height:.82;letter-spacing:-.07em;font-weight:400}.uw-hero__title p{margin:0;font-size:12px;letter-spacing:.24em}.uw-hero__scroll{position:absolute;right:4vw;bottom:6vh;font-size:9px;letter-spacing:.18em}.uw-hero__scroll i{margin-left:18px;font-style:normal}
      .uw-label{margin:0;font-size:9px;letter-spacing:.19em;color:var(--gold)}.uw-overview,.uw-context,.uw-redesign,.uw-npc,.uw-iteration,.uw-operations,.uw-gallery,.uw-reflection{padding:130px 7vw}
      .uw-overview{background:#d6d0c4;color:var(--ink)}.uw-overview__lead{display:grid;grid-template-columns:1.18fr .62fr;gap:8vw;align-items:end;margin:50px 0 85px}.uw-overview h2,.uw-context h2,.uw-redesign h2,.uw-npc h2,.uw-iteration h2,.uw-operations h2,.uw-gallery h2,.uw-reflection h2{margin:0;font-family:Georgia,"Songti SC",serif;font-size:clamp(43px,5.6vw,84px);line-height:1.04;letter-spacing:-.05em;font-weight:400}.uw-overview__lead p,.uw-context__copy>p,.uw-iteration header>p,.uw-operations__copy>p,.uw-reflection>p:last-child{margin:0;font-size:16px;line-height:1.95;color:#5d544d}.uw-meta{display:grid;grid-template-columns:1.2fr .7fr .7fr;border-top:1px solid rgba(23,19,18,.28)}.uw-meta dl{margin:0;padding:26px 28px 10px 0}.uw-meta dl+dl{padding-left:28px;border-left:1px solid rgba(23,19,18,.2)}.uw-meta dt{font-size:9px;letter-spacing:.15em;color:#835e35}.uw-meta dd{margin:14px 0 0;font-size:13px;line-height:1.7}
      .uw-scale{display:grid;grid-template-columns:repeat(6,1fr);background:#2d1214}.uw-scale div{min-height:190px;display:flex;flex-direction:column;justify-content:center;padding:24px;border-right:1px solid rgba(215,208,195,.15)}.uw-scale strong{font-family:Georgia,serif;font-size:clamp(34px,4vw,62px);font-weight:400;color:#d7b177}.uw-scale span{margin-top:16px;font-size:10px;letter-spacing:.1em;color:#aa9c91}
      .uw-context{display:grid;grid-template-columns:.72fr 1.28fr;gap:7vw;background:#211112}.uw-context__copy h2{margin:35px 0}.uw-context__copy>p{color:#b7aaa0}.uw-context ul,.uw-operations ul{padding:0;list-style:none;margin-top:38px}.uw-context li,.uw-operations li{padding:13px 0;border-top:1px solid rgba(215,208,195,.18);font-size:13px}.uw-context figure,.uw-redesign figure,.uw-npc figure,.uw-operations figure{margin:0}.uw-context img,.uw-redesign figure img,.uw-npc figure img,.uw-operations figure img{display:block;width:100%;height:auto}.uw-context figcaption,.uw-redesign figcaption,.uw-npc figcaption,.uw-operations figcaption{margin-top:12px;font-size:8px;letter-spacing:.14em;color:#8c7b70}
      .uw-redesign{background:#3a1719}.uw-redesign>header{display:grid;grid-template-columns:180px 1fr;gap:4vw}.uw-before-after{display:grid;grid-template-columns:1fr 60px 1fr;gap:20px;align-items:stretch;margin:80px 0}.uw-before-after article{padding:38px;border:1px solid rgba(215,208,195,.22)}.uw-before-after span{font-size:9px;letter-spacing:.18em;color:#b78b4e}.uw-before-after strong{display:block;margin:38px 0 12px;font-family:Georgia,serif;font-size:70px;font-weight:400}.uw-before-after h3{font-size:22px}.uw-before-after p{font-size:14px;line-height:1.85;color:#bbaea4}.uw-arrow{display:grid;place-items:center;font-size:32px;color:#b78b4e}.uw-redesign__steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-bottom:70px;background:rgba(215,208,195,.18)}.uw-redesign__steps>div{padding:28px;background:#3a1719}.uw-redesign__steps b{color:#b78b4e}.uw-redesign__steps h3{margin:45px 0 12px}.uw-redesign__steps p{font-size:13px;line-height:1.75;color:#b8aaa1}
      .uw-npc{background:#cfc8bc;color:#1c1715}.uw-npc>header{display:grid;grid-template-columns:180px 1fr .55fr;gap:4vw}.uw-npc>header>span{font-size:14px;line-height:1.8;color:#665b54}.uw-npc__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin:80px 0;background:rgba(28,23,21,.2)}.uw-npc__grid article{min-height:340px;padding:32px;background:#cfc8bc}.uw-npc__grid b{font-family:Georgia,serif;font-size:40px;color:#886234}.uw-npc__grid h3{margin:70px 0 18px;font-size:25px}.uw-npc__grid p{font-size:14px;line-height:1.85;color:#625750}
      .uw-iteration{background:#211112}.uw-iteration header{display:grid;grid-template-columns:180px 1fr .55fr;gap:4vw}.uw-iteration header>p:last-child{color:#aa9e95}.uw-timeline{margin-top:90px;border-top:1px solid rgba(215,208,195,.25)}.uw-timeline article{display:grid;grid-template-columns:25% 1fr;padding:40px 0;border-bottom:1px solid rgba(215,208,195,.2)}.uw-timeline strong{font-family:Georgia,serif;font-size:clamp(55px,8vw,120px);line-height:.8;font-weight:400;color:#b78b4e}.uw-timeline h3{margin:0 0 16px;font-size:27px}.uw-timeline p{max-width:700px;margin:0;font-size:15px;line-height:1.85;color:#ad9f96}
      .uw-operations{display:grid;grid-template-columns:1fr .7fr;gap:8vw;background:#3a1719}.uw-operations__copy{align-self:end}.uw-operations__copy>p{color:#c1b4aa}.uw-operations figure{grid-column:1/-1;margin-top:25px}
      .uw-gallery{background:#171011}.uw-gallery header{display:grid;grid-template-columns:180px 1fr .55fr;gap:4vw;align-items:end;margin-bottom:70px}.uw-gallery header>span{font-size:13px;line-height:1.8;color:#96877d}.uw-gallery>div{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.uw-gallery a{position:relative;display:block;overflow:hidden;background:#251617}.uw-gallery img{display:block;width:100%;height:auto;transition:transform .7s}.uw-gallery a:hover img{transform:scale(1.015)}.uw-gallery a span{position:absolute;left:12px;bottom:12px;padding:7px 9px;background:rgba(20,8,9,.82);font-size:8px;letter-spacing:.13em}
      .uw-reflection{display:grid;grid-template-columns:180px 1fr .55fr;gap:4vw;align-items:end;background:#cfc8bc;color:#1c1715}.uw-reflection>p:last-child{color:#625750}
      .uw-gallery{background:#171011}.uw-gallery header,.uw-evidence-library header{display:grid;grid-template-columns:180px 1fr .55fr;gap:4vw;align-items:end;margin-bottom:70px}.uw-gallery header>span,.uw-evidence-library header>span{font-size:13px;line-height:1.8;color:#96877d}.uw-photo-wall{display:block!important;columns:3;column-gap:10px}.uw-photo-wall a{position:relative;display:block;break-inside:avoid;margin:0 0 10px;overflow:hidden;background:#251617}.uw-photo-wall a.is-wide{grid-column:auto;aspect-ratio:auto}.uw-photo-wall img{display:block;width:100%!important;height:auto!important;object-fit:contain}.uw-photo-wall a span{position:absolute;left:10px;bottom:10px;padding:6px 8px;background:rgba(20,8,9,.82);font-size:8px;letter-spacing:.13em}
      .uw-evidence-library{padding:130px 7vw;background:#2a1214}.uw-evidence-library h2{margin:0;font-family:Georgia,"Songti SC",serif;font-size:clamp(43px,5.6vw,84px);line-height:1.04;letter-spacing:-.05em;font-weight:400}.uw-evidence-library>div{display:grid;gap:70px}.uw-evidence-library article{border-top:1px solid rgba(215,208,195,.2);padding-top:24px}.uw-evidence-library article>div{display:grid;grid-template-columns:60px 1fr auto;gap:20px;align-items:center;margin-bottom:22px}.uw-evidence-library article b{font-family:Georgia,serif;font-size:31px;color:#b78b4e}.uw-evidence-library article h3{margin:0;font-size:22px;font-weight:500}.uw-evidence-library article>div a{font-size:9px;letter-spacing:.13em;color:#d2a96c}.uw-evidence-library article>a{display:block;overflow:hidden;background:#160b0c}.uw-evidence-library article img{display:block;width:100%;height:auto}.uw-evidence-library details{margin-top:80px;border-top:1px solid rgba(215,208,195,.2)}.uw-evidence-library summary{display:flex;justify-content:space-between;padding:24px 0;cursor:pointer;font-size:11px;letter-spacing:.12em}.uw-old-archive{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.uw-old-archive img{display:block;width:100%;height:auto}
      @media(max-width:800px){.uw-kicker{top:85px;left:20px}.uw-hero__title{left:20px;bottom:14vh}.uw-hero__title h1{font-size:21vw}.uw-hero__scroll{right:20px}.uw-overview,.uw-context,.uw-redesign,.uw-npc,.uw-iteration,.uw-operations,.uw-gallery,.uw-evidence-library,.uw-reflection{padding:82px 20px}.uw-overview__lead,.uw-context,.uw-redesign>header,.uw-npc>header,.uw-iteration header,.uw-operations,.uw-gallery header,.uw-reflection{grid-template-columns:1fr}.uw-overview__lead{gap:28px;margin:38px 0 55px}.uw-meta{grid-template-columns:1fr}.uw-meta dl+dl{padding-left:0;border-left:0;border-top:1px solid rgba(23,19,18,.2)}.uw-scale{grid-template-columns:repeat(2,1fr)}.uw-scale div{min-height:140px}.uw-context{gap:55px}.uw-before-after{grid-template-columns:1fr}.uw-arrow{transform:rotate(90deg)}.uw-redesign__steps,.uw-npc__grid{grid-template-columns:1fr}.uw-npc__grid article{min-height:auto}.uw-npc__grid h3{margin-top:40px}.uw-timeline article{grid-template-columns:1fr;gap:30px}.uw-photo-wall{columns:1}.uw-photo-wall a.is-wide{grid-column:auto}.uw-gallery header,.uw-evidence-library header{grid-template-columns:1fr}.uw-evidence-library article>div{grid-template-columns:45px 1fr}.uw-evidence-library article>div a{grid-column:2}.uw-old-archive{grid-template-columns:1fr}.uw-gallery>div{grid-template-columns:1fr}.uw-overview h2,.uw-context h2,.uw-redesign h2,.uw-npc h2,.uw-iteration h2,.uw-operations h2,.uw-gallery h2,.uw-reflection h2{font-size:39px}}
    `}</style>
  </main>;
}
