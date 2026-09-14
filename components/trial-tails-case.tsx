import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { withBasePath } from "@/lib/base-path";
import type { Project } from "@/lib/projects";

const image = (number: string) =>
  `${withBasePath(`/media/cases/trial-tails/${number}.webp`)}?v=20260914-tails-native1`;

const insights = [
  ["01", "信息足够，责任感仍然缺席", "传统领养页面可以罗列年龄、品种和健康状态，却很难让用户理解日常照护会怎样改变自己的时间、情绪和预算。"],
  ["02", "匹配不是一次推荐", "真正的适配来自生活节奏、居住条件、照护经验与宠物个性的共同判断，而不是只看外形偏好。"],
  ["03", "领养之后仍需要支持", "从初次适应到突发健康问题，领养后的持续指导决定了一段关系能否真正稳定下来。"],
];

const journey = [
  ["DISCOVER", "认识真实需求", "先理解领养者的生活方式与照护能力，而不是立刻推送宠物。"],
  ["MATCH", "解释匹配理由", "AI不仅给出结果，也说明生活习惯、性格与照护需求之间的关系。"],
  ["EXPERIENCE", "进入照护情境", "VR让喂养、清洁、陪伴和突发状况变成可以提前经历的日常。"],
  ["DECIDE", "做出更谨慎的选择", "把线上理解、沉浸体验与线下见面连接成连续的决策过程。"],
  ["SUPPORT", "延续领养后的关系", "通过提醒、知识和社区支持减少适应期的不确定性。"],
];

const principles = [
  ["清晰，而非说服", "界面首先帮助用户判断自己是否适合领养，不以提高冲动转化为目标。"],
  ["解释，而非黑箱", "AI建议同时展示匹配依据，让用户能够理解、质疑和调整条件。"],
  ["体验，而非测试", "VR不是给用户打分，而是让抽象责任变成具体、可感知的情境。"],
];

const researchSignals = [
  ["准备度", "时间、预算、空间与照护经验"],
  ["匹配度", "生活节奏、性格与特殊需求"],
  ["真实感", "把抽象责任转化为日常行动"],
  ["连续性", "从决定前延伸至领养后支持"],
];

const matchFactors = [
  ["DAILY ROUTINE", 86, "生活节奏"],
  ["HOME & SPACE", 74, "居住环境"],
  ["CARE EXPERIENCE", 68, "照护经验"],
  ["PERSONALITY FIT", 92, "性格适配"],
];

const careMoments = [
  ["07:30", "Morning care", "喂食、换水与清洁"],
  ["18:20", "After work", "陪伴、运动与情绪观察"],
  ["23:10", "Unexpected event", "处理噪音、焦虑或健康异常"],
];

export function TrialTailsCase({ project, next }: { project: Project; next: Project }) {
  return <main className="case-study tails-native">
    <SiteNav />

    <section className="tails-hero" style={{ "--tails-cover": `url(${project.cover})` } as React.CSSProperties}>
      <div className="tails-hero__image" />
      <div className="tails-hero__wash" />
      <p className="tails-eyebrow">03 / AI × VR SERVICE EXPERIENCE</p>
      <div className="tails-hero__title">
        <span>DESIGNING FOR A BETTER MATCH</span>
        <h1>TRIAL<br />TAILS</h1>
        <p>在真正领养之前，先理解陪伴意味着什么。</p>
      </div>
      <a className="tails-hero__scroll" href="#tails-overview">EXPLORE THE CASE <i>↓</i></a>
    </section>

    <section className="tails-overview" id="tails-overview">
      <p className="tails-label">OVERVIEW / 2025</p>
      <div className="tails-overview__lead">
        <h2>不是让更多人更快领养，<br />而是让一次领养更有可能持续下去。</h2>
        <p>TRIAL TAILS 将 AI 匹配、VR 试养体验与线下领养流程连接为一套完整服务。项目关注错误匹配和再次弃养背后的真实原因：用户在决定之前，往往没有机会理解长期照护的时间、情绪与经济成本。</p>
      </div>
      <div className="tails-meta">
        <dl><dt>ROLE</dt><dd>UX研究 / 产品设计 / VR体验</dd></dl>
        <dl><dt>FORMAT</dt><dd>AI × VR宠物领养服务</dd></dl>
        <dl><dt>METHODS</dt><dd>用户旅程 / 服务蓝图 / 原型测试</dd></dl>
        <dl><dt>TOOLS</dt><dd>Figma / Unity / VR Prototyping</dd></dl>
      </div>
    </section>

    <section className="tails-problem">
      <header><p className="tails-label">01 / PROBLEM DEFINITION</p><h2>一次“喜欢”，不足以支撑十多年的照护。</h2></header>
      <div className="tails-problem__line">
        <span>浏览宠物</span><b>→</b><span>产生好感</span><b>→</b><span>快速申请</span><b>→</b><span className="is-risk">现实落差</span>
      </div>
      <div className="tails-insights">{insights.map(([n,title,body]) => <article key={n}><b>{n}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="tails-research">
      <div className="tails-research__copy">
        <p className="tails-label">02 / RESEARCH SYNTHESIS</p>
        <h2>把分散的焦虑，整理成一条完整服务旅程。</h2>
        <p>研究不止停留在“用户担心什么”。通过用户旅程、痛点聚类和服务蓝图，我们把领养前的犹豫、匹配中的信息不对称，以及领养后的支持缺失放到同一张系统地图里。</p>
        <ul><li>领养前：不知道自己是否真的准备好</li><li>匹配中：看见结果，却不理解推荐逻辑</li><li>决定时：缺少接近日常的照护体验</li><li>领养后：遇到问题时难以及时获得支持</li></ul>
      </div>
      <div className="tails-research-map" aria-label="用户研究洞察与服务机会">
        <div className="tails-research-map__header"><span>RESEARCH SYNTHESIS</span><b>04 CORE SIGNALS</b></div>
        {researchSignals.map(([title,body],index)=><article key={title}><em>0{index+1}</em><div><h3>{title}</h3><p>{body}</p></div><i>{index < researchSignals.length-1 ? "↓" : "→"}</i></article>)}
        <div className="tails-research-map__outcome"><span>SERVICE OPPORTUNITY</span><strong>让“是否适合”比“是否喜欢”更早出现。</strong></div>
      </div>
      <figure className="tails-source-visual tails-source-visual--wide"><a href={image("02")} target="_blank" rel="noreferrer"><img src={image("02")} alt="TRIAL TAILS 用户研究、旅程与服务机会完整设计图" loading="lazy" /></a><figcaption>ORIGINAL RESEARCH VISUAL / 点击查看完整内容</figcaption></figure>
    </section>

    <section className="tails-system">
      <header><p className="tails-label">03 / PRODUCT SYSTEM</p><h2>AI负责理解，VR负责让责任被感知。</h2><span>两种技术不是两个孤立卖点，而是同一决策过程中的不同层次。</span></header>
      <div className="tails-system__pair">
        <article><span>AI / MATCHING LAYER</span><h3>从“我喜欢什么”走向“我们是否适合”</h3><p>综合生活节奏、居住环境、照护经验、预算和偏好，生成匹配建议并解释推荐依据。用户可以调整条件，而不是被一个分数决定。</p><ul><li>生活方式与照护能力评估</li><li>宠物性格与特殊需求匹配</li><li>可解释的建议与风险提醒</li></ul></article>
        <article><span>VR / EXPERIENCE LAYER</span><h3>把未来的日常提前放进身体</h3><p>以喂养、清洁、陪伴、噪音和突发状况组织模拟场景。用户不是观看说明，而是在行动中感受照护所需要的注意力和时间。</p><ul><li>日常照护与空间适应</li><li>情绪和行为变化的回应</li><li>突发情况中的选择与反馈</li></ul></article>
      </div>
      <div className="tails-prototype">
        <div className="tails-match">
          <div className="tails-prototype__bar"><span>TRIAL TAILS / MATCH</span><i>AI EXPLANATION</i></div>
          <div className="tails-match__score"><strong>84</strong><span>% MATCH</span><p>适合继续了解，但需要确认工作日独处时间。</p></div>
          <div className="tails-match__factors">{matchFactors.map(([label,value,title])=><article key={label}><div><span>{label}</span><b>{value}%</b></div><i><em style={{width: `${value}%`}} /></i><p>{title}</p></article>)}</div>
        </div>
        <div className="tails-vr">
          <div className="tails-prototype__bar"><span>VR TRIAL / DAY 01</span><i>12:42</i></div>
          <h3>把照护放进一天的时间线</h3>
          <div>{careMoments.map(([time,title,body],index)=><article key={time}><b>{time}</b><span className={index===2 ? "is-alert" : ""}>{index===2 ? "!" : "✓"}</span><div><h4>{title}</h4><p>{body}</p></div></article>)}</div>
          <p className="tails-vr__note">体验结束后，系统不会替用户做决定，而是生成一份可讨论的准备度回顾。</p>
        </div>
      </div>
    </section>

    <section className="tails-journey">
      <header><p className="tails-label">04 / END-TO-END JOURNEY</p><h2>从第一次浏览，到领养后的长期支持。</h2></header>
      <div className="tails-journey__grid">{journey.map(([stage,title,body],index) => <article key={stage}><b>0{index+1}</b><span>{stage}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="tails-interface">
      <div className="tails-interface__head"><p className="tails-label">05 / INTERFACE & TOUCHPOINTS</p><h2>轻松的品牌语言，承载严肃的责任教育。</h2><p>移动端负责资料、匹配解释和预约，VR负责情境体验。视觉上保持明亮、亲近与可信，避免让准备评估变成一场冰冷的资格考试。</p></div>
      <div className="tails-screens" aria-label="TRIAL TAILS 移动端关键界面">
        <article className="tails-phone">
          <div className="tails-phone__top"><span>9:41</span><i>● ●</i></div>
          <header><b>trial tails</b><span>01 / PREPARE</span></header>
          <h3>Are you ready<br/>for a new friend?</h3>
          <div className="tails-phone__pet"><span>YOUR LIFE,<br/>THEIR LIFE.</span></div>
          <button>START MY PROFILE <i>→</i></button>
        </article>
        <article className="tails-phone tails-phone--match">
          <div className="tails-phone__top"><span>9:41</span><i>● ●</i></div>
          <header><b>trial tails</b><span>02 / MATCH</span></header>
          <div className="tails-phone__ring"><strong>84</strong><span>%</span></div>
          <h3>Meet Momo</h3><p>安静、亲人，需要稳定陪伴。与你的空间和生活节奏较匹配。</p>
          <ul><li><span>Personality</span><b>92%</b></li><li><span>Daily routine</span><b>86%</b></li><li><span>Care needs</span><b>74%</b></li></ul>
          <button>WHY THIS MATCH? <i>→</i></button>
        </article>
        <article className="tails-phone tails-phone--care">
          <div className="tails-phone__top"><span>9:41</span><i>● ●</i></div>
          <header><b>trial tails</b><span>03 / SUPPORT</span></header>
          <p className="tails-phone__date">TODAY / TUESDAY</p><h3>Good morning,<br/>you two.</h3>
          <div className="tails-phone__task"><span>07:30</span><div><b>Morning care</b><p>Food · Water · Clean</p></div><i>✓</i></div>
          <div className="tails-phone__task"><span>18:20</span><div><b>Play & observe</b><p>20–30 min activity</p></div><i>○</i></div>
          <div className="tails-phone__help"><span>NEED HELP?</span><b>Talk to an adoption advisor →</b></div>
        </article>
      </div>
      <figure className="tails-source-visual"><a href={image("04")} target="_blank" rel="noreferrer"><img src={image("04")} alt="TRIAL TAILS 移动端界面与VR触点完整设计图" loading="lazy" /></a><figcaption>ORIGINAL INTERFACE VISUAL / 点击查看完整内容</figcaption></figure>
      <div className="tails-principles">{principles.map(([title,body],index)=><article key={title}><b>0{index+1}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="tails-result">
      <div><p className="tails-label">06 / OUTCOME</p><h2>科技不是替用户做决定，<br />而是帮助他们看见决定的后果。</h2></div>
      <div><p>最终方案将平台浏览、AI建议、VR体验、线下见面和领养后支持组织成一条连续服务。它的价值不在于增加一个新奇功能，而在于把原本缺失的理解和准备放回领养过程。</p><a href={project.video} target="_blank" rel="noreferrer">WATCH PROJECT VIDEO <span>↗</span></a></div>
    </section>

    <section className="tails-archive">
      <div><p className="tails-label">PROJECT ARCHIVE</p><h2>原始设计画布</h2><p>仅作为档案保留。正文已经重构为清晰的网页信息，不再依赖长图阅读。</p></div>
      <details><summary>展开查看 5 张原始画布 <span>＋</span></summary><div>{["01","02","03","04","05"].map((n)=><a href={image(n)} target="_blank" rel="noreferrer" key={n}><span>PAGE {n}</span><img src={image(n)} alt={`TRIAL TAILS 项目画布 ${n}`} loading="lazy" /></a>)}</div></details>
    </section>

    <section className="case-outro"><p>END OF CASE STUDY / 03</p><Link href="/work">BACK TO INDEX</Link></section>
    <Link className="case-next" href={`/work/${next.slug}`} style={{ "--next-image": `url(${next.cover})` } as React.CSSProperties}>
      <div /><p>NEXT PROJECT / {next.index}</p><h2>{next.title}</h2><span>VIEW CASE ↗</span>
    </Link>

    <style>{`
      .tails-native{--cream:#f4f0e7;--orange:#ef6b35;--pink:#e9a4ae;--brown:#3c2924;background:var(--cream);color:#251b18;color-scheme:light}
      .tails-native .site-nav{color:#fff;border-color:rgba(255,255,255,.25);mix-blend-mode:difference}
      .tails-hero{position:relative;min-height:100svh;overflow:hidden;background:#241812;color:#fff}
      .tails-hero__image{position:absolute;inset:0;background-image:var(--tails-cover);background-size:cover;background-position:center;filter:saturate(.9)}
      .tails-hero__wash{position:absolute;inset:0;background:linear-gradient(90deg,rgba(30,18,13,.82) 0%,rgba(30,18,13,.32) 50%,rgba(30,18,13,.1)),linear-gradient(0deg,rgba(20,12,9,.5),transparent 55%)}
      .tails-eyebrow{position:absolute;top:110px;left:7vw;margin:0;font-size:10px;letter-spacing:.18em}
      .tails-hero__title{position:absolute;left:7vw;bottom:11vh}.tails-hero__title>span,.tails-label{font-size:10px;letter-spacing:.17em;color:var(--orange)}
      .tails-hero__title h1{margin:24px 0 20px;font-size:clamp(78px,12vw,190px);line-height:.73;letter-spacing:-.075em;font-weight:650}
      .tails-hero__title p{margin:0;font-size:18px}.tails-hero__scroll{position:absolute;right:4vw;bottom:6vh;font-size:10px;letter-spacing:.15em}.tails-hero__scroll i{margin-left:22px;font-style:normal}
      .tails-overview,.tails-problem,.tails-system,.tails-journey,.tails-interface,.tails-result,.tails-archive{padding:130px 7vw}
      .tails-overview__lead{display:grid;grid-template-columns:1.2fr .62fr;gap:8vw;margin:55px 0 85px;align-items:end}
      .tails-overview h2,.tails-problem h2,.tails-system h2,.tails-journey h2,.tails-interface h2,.tails-result h2,.tails-archive h2{margin:0;font-size:clamp(42px,5.5vw,82px);line-height:1.04;letter-spacing:-.055em;font-weight:500}
      .tails-overview__lead p,.tails-interface__head>p:last-child,.tails-result>div:last-child>p{margin:0;font-size:17px;line-height:1.9;color:#655751}
      .tails-meta{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(37,27,24,.25)}
      .tails-meta dl{margin:0;padding:25px 22px 25px 0;border-right:1px solid rgba(37,27,24,.2)}.tails-meta dl+dl{padding-left:22px}.tails-meta dt{font-size:9px;letter-spacing:.16em;color:#9c7466}.tails-meta dd{margin:14px 0 0;font-size:13px;line-height:1.65}
      .tails-problem{background:#30201b;color:#f5eee3}.tails-problem header{display:grid;grid-template-columns:180px 1fr;gap:4vw}
      .tails-problem__line{display:flex;align-items:center;justify-content:space-between;gap:18px;margin:80px 0;padding:28px 0;border-top:1px solid rgba(255,255,255,.2);border-bottom:1px solid rgba(255,255,255,.2);font-size:14px}.tails-problem__line b{color:#8e6a5d}.tails-problem__line .is-risk{color:#ff8c62}
      .tails-insights{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.18)}.tails-insights article{min-height:330px;padding:30px;background:#30201b}.tails-insights b{color:#ef7b4d;font-size:34px;font-weight:400}.tails-insights h3{margin:65px 0 20px;font-size:24px}.tails-insights p{margin:0;color:#c9bbb4;font-size:15px;line-height:1.85}
      .tails-research{display:grid;grid-template-columns:.68fr 1.32fr;gap:7vw;padding:130px 4vw 130px 7vw;background:#e3a0aa;color:#35201f}.tails-research__copy h2{margin:34px 0;font-size:clamp(40px,4.8vw,70px);line-height:1.05;letter-spacing:-.05em;font-weight:500}.tails-research__copy>p:not(.tails-label){font-size:16px;line-height:1.85}.tails-research ul,.tails-system ul{padding:0;list-style:none}.tails-research li,.tails-system li{padding:13px 0;border-top:1px solid rgba(48,32,27,.25);font-size:13px}.tails-research figure,.tails-system figure,.tails-interface figure{margin:0}.tails-research img,.tails-system__visual img,.tails-interface figure img{display:block;width:100%;height:auto;box-shadow:0 22px 55px rgba(65,34,28,.14)}.tails-research figcaption,.tails-system figcaption,.tails-interface figcaption{margin-top:12px;font-size:9px;letter-spacing:.12em;color:#725451}
      .tails-system{background:#f2ede2}.tails-system>header{display:grid;grid-template-columns:180px 1fr .55fr;gap:4vw;align-items:start}.tails-system>header>span{font-size:15px;line-height:1.8;color:#746760}.tails-system__pair{display:grid;grid-template-columns:1fr 1fr;gap:1px;margin:80px 0;background:rgba(37,27,24,.2)}.tails-system__pair article{padding:45px;background:#f2ede2}.tails-system__pair article>span{font-size:10px;letter-spacing:.16em;color:#dc5f32}.tails-system__pair h3{margin:60px 0 24px;font-size:30px;line-height:1.15}.tails-system__pair p{font-size:15px;line-height:1.85;color:#655751}
      .tails-system__visual{max-width:1180px;margin-left:auto!important}
      .tails-journey{background:#ed6b38;color:#241713}.tails-journey header{display:grid;grid-template-columns:180px 1fr;gap:4vw}.tails-journey .tails-label{color:#542c1e}.tails-journey__grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;margin-top:75px;background:rgba(37,23,19,.25)}.tails-journey__grid article{min-height:350px;padding:26px;background:#ed6b38}.tails-journey__grid b{font-size:28px;font-weight:400}.tails-journey__grid span{display:block;margin-top:10px;font-size:9px;letter-spacing:.15em}.tails-journey__grid h3{margin:90px 0 16px;font-size:21px}.tails-journey__grid p{font-size:14px;line-height:1.8}
      .tails-interface{background:#f4f0e7}.tails-interface__head{display:grid;grid-template-columns:180px 1fr .55fr;gap:4vw;align-items:end;margin-bottom:75px}.tails-screens{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,3vw,50px);align-items:start;padding:70px clamp(10px,6vw,90px);background:#30201b}.tails-phone{min-height:610px;padding:18px;border:8px solid #eee6dc;border-radius:30px;background:#ed6b38;color:#291a16;box-shadow:0 24px 50px rgba(0,0,0,.28)}.tails-phone__top{display:flex;justify-content:space-between;font-size:8px}.tails-phone header{display:flex;justify-content:space-between;align-items:center;margin-top:24px;padding-bottom:15px;border-bottom:1px solid rgba(41,26,22,.3)}.tails-phone header b{font-size:13px}.tails-phone header span{font-size:7px;letter-spacing:.12em}.tails-phone>h3{margin:35px 0 18px;font-size:30px;line-height:1}.tails-phone__pet{display:flex;align-items:end;height:300px;margin:25px -4px 18px;padding:18px;background:radial-gradient(circle at 50% 45%,#f5bc9a 0 24%,transparent 25%),radial-gradient(circle at 50% 57%,#482d26 0 27%,transparent 28%),#e8a2aa;border-radius:45% 45% 10px 10px}.tails-phone__pet span{font-size:8px;letter-spacing:.14em}.tails-phone button{display:flex;justify-content:space-between;width:100%;padding:16px;border:0;background:#30201b;color:#fff;font-size:8px;letter-spacing:.12em}.tails-phone--match{background:#f5eee3}.tails-phone__ring{display:grid;place-content:center;width:160px;height:160px;margin:34px auto 20px;border:12px solid #ed6b38;border-right-color:#e6a1aa;border-radius:50%;text-align:center}.tails-phone__ring strong{font-size:52px;line-height:.8}.tails-phone__ring span{font-size:10px}.tails-phone--match>h3{text-align:center;margin:22px 0 8px}.tails-phone--match>p{text-align:center;font-size:11px;line-height:1.65}.tails-phone--match ul{list-style:none;padding:0;margin:28px 0}.tails-phone--match li{display:flex;justify-content:space-between;padding:11px 0;border-top:1px solid rgba(41,26,22,.18);font-size:10px}.tails-phone--care{background:#e8a2aa}.tails-phone__date{margin:36px 0 0;font-size:7px;letter-spacing:.14em}.tails-phone--care>h3{margin-top:10px}.tails-phone__task{display:grid;grid-template-columns:45px 1fr 18px;gap:10px;padding:18px 0;border-top:1px solid rgba(41,26,22,.25);align-items:center}.tails-phone__task>span,.tails-phone__task p{font-size:9px}.tails-phone__task p{margin:4px 0 0}.tails-phone__help{margin-top:65px;padding:18px;background:#30201b;color:#fff}.tails-phone__help span{display:block;margin-bottom:10px;font-size:7px;letter-spacing:.15em}.tails-phone__help b{font-size:11px}.tails-principles{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:75px;background:rgba(37,27,24,.2)}.tails-principles article{padding:30px;background:#f4f0e7}.tails-principles b{color:#db6036}.tails-principles h3{margin:45px 0 15px;font-size:22px}.tails-principles p{font-size:14px;line-height:1.8;color:#6c5c56}
      .tails-source-visual{margin:55px 0 0}.tails-source-visual a{display:block;background:#eadfd3;overflow:hidden}.tails-source-visual img{display:block;width:100%;height:auto}.tails-source-visual figcaption{margin-top:12px;font-size:9px;letter-spacing:.13em;color:#806b63}.tails-research .tails-source-visual{grid-column:1/-1}.tails-result{display:grid;grid-template-columns:1.2fr .65fr;gap:9vw;background:#30201b;color:#f5eee3}.tails-result>div:last-child{align-self:end}.tails-result>div:last-child>p{color:#c9bbb4}.tails-result a{display:flex;justify-content:space-between;margin-top:45px;padding:24px 0;border-top:1px solid rgba(255,255,255,.35);border-bottom:1px solid rgba(255,255,255,.35);font-size:11px;letter-spacing:.16em}
      .tails-archive{display:grid;grid-template-columns:.45fr 1.55fr;gap:7vw;background:#dca0a8}.tails-archive>div:first-child>p:last-child{font-size:14px;line-height:1.8}.tails-archive>div:last-child{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}.tails-archive a{position:relative;overflow:hidden;background:#c88992}.tails-archive a span{position:absolute;z-index:1;left:10px;top:10px;padding:5px;background:#2e1d19;color:#fff;font-size:8px;letter-spacing:.12em}.tails-archive img{display:block;width:100%;height:100%;object-fit:cover;object-position:top;transition:transform .6s}.tails-archive a:hover img{transform:scale(1.03)}
      @media(max-width:800px){
        .tails-eyebrow{top:88px;left:20px}.tails-hero__title{left:20px;bottom:14vh}.tails-hero__title h1{font-size:22vw}.tails-hero__scroll{right:20px}
        .tails-overview,.tails-problem,.tails-system,.tails-journey,.tails-interface,.tails-result,.tails-archive{padding:85px 20px}
        .tails-overview__lead,.tails-problem header,.tails-system>header,.tails-journey header,.tails-interface__head,.tails-result,.tails-archive,.tails-research{grid-template-columns:1fr}
        .tails-overview__lead{gap:30px;margin:38px 0 55px}.tails-meta{grid-template-columns:1fr 1fr}.tails-meta dl:nth-child(2){border-right:0}.tails-meta dl:nth-child(n+3){border-top:1px solid rgba(37,27,24,.2)}
        .tails-problem__line{flex-wrap:wrap;justify-content:flex-start}.tails-insights,.tails-system__pair,.tails-principles{grid-template-columns:1fr}.tails-insights article{min-height:auto}.tails-insights h3{margin-top:38px}
        .tails-research{padding:85px 20px;gap:50px}.tails-research-map{padding:22px}.tails-system>header,.tails-interface__head{gap:28px}.tails-system__pair{margin:55px 0}.tails-system__pair article{padding:28px}.tails-prototype{grid-template-columns:1fr}.tails-match,.tails-vr{padding:24px}.tails-screens{grid-template-columns:1fr;padding:45px 10vw}.tails-phone{min-height:590px}
        .tails-journey__grid{grid-template-columns:1fr}.tails-journey__grid article{min-height:auto}.tails-journey__grid h3{margin-top:45px}
        .tails-archive details>div{grid-template-columns:repeat(2,1fr)}.tails-archive a{aspect-ratio:4/3}.tails-overview h2,.tails-problem h2,.tails-system h2,.tails-journey h2,.tails-interface h2,.tails-result h2,.tails-archive h2{font-size:40px}
      }
    `}</style>
  </main>;
}
