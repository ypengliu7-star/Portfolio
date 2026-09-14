import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { withBasePath } from "@/lib/base-path";
import type { Project } from "@/lib/projects";

const asset = (file: string) =>
  `${withBasePath(`/media/cases/memory-escape/details/${file}`)}?v=20260914-memory-native1`;

const layers = [
  ["MR / 现实层", "锚点", "真实房间、动物朋友、钥匙与箱子", "让玩家始终拥有可返回的现实参照。"],
  ["VR / 记忆层 01", "追问", "卫生间、镜中数字 1044、禁闭室、514", "用空间探索拼出第一段被压抑的记忆。"],
  ["MR / 现实层", "触发", "对讲机噪音与兔子面具", "熟悉物件与声音成为下一段记忆的入口。"],
  ["VR / 记忆层 02", "逃离", "宿舍、工作区、庆功派对、Boss 房间、地下管道", "把真相推向高潮，并以追逐完成逃亡。"],
];

const phases = [
  ["01", "适应与身份揭示", ["听声定位并找到目标", "镜子提示真实身份：编号 1044", "避开警棍与目睹暴力", "与 514 建立逃亡契约"]],
  ["02", "压迫与逃离动机建立", ["在宿舍寻找 514 的制服", "机械劳动与洗脑氛围", "庆功派对中的幻象与骚乱", "取得地下管道钥匙 #96"]],
  ["03", "逃亡与高潮", ["火警触发与通风管潜行", "在地下管道躲避追逐", "与 514 会合并打开铁门", "冲向出口，现实与记忆再次重叠"]],
];

const iterations = [
  { version:"V1", time:"2月", title:"低保真故事流测试", found:["暴力表达令人不适","任务目标不清晰","场景氛围偏弱","故事流程过长"], fixed:["改为 NPC 拖暴，保留压迫感","增加语音指引","升级灯光与材质","压缩为 3 个核心场景"] },
  { version:"V2", time:"5月", title:"VR 原型测试", found:["玩家不知道要做什么","VR / MR 边界不清","沉浸感不足","出现晕动症"], fixed:["提高关键物体亮度","加入 UI Prompt","MR 只用于现实时间线","Walking 改为 Teleport + Fade"] },
  { version:"V3", time:"6月", title:"成品体验测试", found:["VR→MR 切换突兀","交互动作不够自然","场景过于写实，削弱梦境感"], fixed:["增加声音淡出与快速切换","优化 UE 动画表现","加入漂浮物与扭曲纹理"] },
];

const scenes = [
  ["scene-tunnel.webp", "01", "地下管道", "逃亡高潮与红色记忆空间"],
  ["scene-restroom.webp", "02", "卫生间", "编号 1044 与身份揭示"],
  ["scene-cell.webp", "03", "禁闭室", "第一次直面被压抑的记忆"],
  ["scene-dorm.webp", "04", "宿舍", "秩序、制服与集体洗脑"],
  ["scene-workspace.webp", "05", "工作区", "重复劳动与环境叙事"],
  ["scene-boss.webp", "06", "Boss 房间", "取得钥匙并推进逃亡"],
];

const boards = [
  ["narrative-system.webp", "VR + MR 跨现实叙事架构"],
  ["interaction-design.webp", "关卡、交互与玩家旅程"],
  ["testing-iteration.webp", "三轮用户测试与设计迭代"],
  ["production-output.webp", "从事件表到可玩原型"],
  ["final-scenes.webp", "最终场景、成果与个人贡献"],
  ["experience-stills.webp", "完整体验掠影"],
] as const;

export function MemoryEscapeCase({ project, next }: { project: Project; next: Project }) {
  return <main className="case-study memory-native">
    <SiteNav />

    <section className="memory-hero">
      <div className="memory-hero__image" style={{"--memory-hero":`url(${asset("scene-tunnel.webp")})`} as React.CSSProperties} />
      <div className="memory-hero__shade" />
      <p className="memory-eyebrow">05 / VR × MR NARRATIVE EXPERIENCE</p>
      <div className="memory-hero__title"><span>REALITY IS THE ANCHOR. MEMORY IS THE MAZE.</span><h1>MEMORY<br/>ESCAPE</h1><p>在现实与记忆之间，主动拼合一场被压抑的逃亡。</p></div>
      {project.video && <a className="memory-hero__play" href={project.video} target="_blank" rel="noreferrer" aria-label="播放 MEMORY ESCAPE 完整体验视频"><i>▶</i><span>PLAY EXPERIENCE</span></a>}
      <a className="memory-hero__scroll" href="#memory-overview">EXPLORE THE CASE <i>↓</i></a>
    </section>

    <section className="memory-overview" id="memory-overview">
      <p className="memory-label">OVERVIEW / 2025</p>
      <div className="memory-overview__lead"><h2>创伤不是一段被观看的故事，<br/>而是一处必须亲自穿过的空间。</h2><p>MEMORY ESCAPE 是一款 VR × MR 沉浸式叙事体验。现实房间提供时间线与身体锚点，VR 记忆层承载压迫、追逐与情绪高潮；玩家通过声音、物件和空间切换逐步拼合真相。</p></div>
      <div className="memory-meta"><dl><dt>ROLE</dt><dd>Narrative / Level / Game UX Designer</dd></dl><dl><dt>PLATFORM</dt><dd>Meta Quest 3 / PC VR</dd></dl><dl><dt>ENGINE</dt><dd>Unreal Engine 5</dd></dl><dl><dt>TEAM / LENGTH</dt><dd>4人 / 约10–15分钟</dd></dl></div>
    </section>

    <section className="memory-statement">
      <p className="memory-label">01 / DESIGN PREMISE</p><h2>MR负责把现实钉住，<br/>VR负责让记忆失控。</h2>
      <div className="memory-principles"><article><b>MR</b><h3>现实锚点</h3><p>提供时间线与现实参照，让玩家能够返回房间、重新校准方向与可信度。</p></article><article><b>VR</b><h3>记忆空间</h3><p>承载创伤、压迫与情绪高潮，用无法在现实搭建的场景放大沉浸感。</p></article><article><b>TRIGGER</b><h3>物体＋声音</h3><p>对讲机、钥匙、箱子和兔子面具成为记忆入口，让媒介切换发生在叙事内部。</p></article></div>
      <figure className="memory-board"><a href={asset("narrative-system.webp")} target="_blank" rel="noreferrer"><img src={asset("narrative-system.webp")} alt="MEMORY ESCAPE VR与MR跨现实叙事架构" /></a><figcaption>完整跨现实叙事架构 / 点击查看原图</figcaption></figure>
    </section>

    <section className="memory-layers">
      <header><p className="memory-label">02 / DUAL-LAYER NARRATIVE</p><h2>现实与记忆交替出现，<br/>每次切换都改变玩家对真相的判断。</h2></header>
      <div className="memory-layer-list">{layers.map(([layer,beat,places,meaning],index)=><article key={layer+index}><span>{String(index+1).padStart(2,"0")}</span><div><b>{layer}</b><h3>{beat}</h3></div><p>{places}</p><p>{meaning}</p></article>)}</div>
    </section>

    <section className="memory-journey">
      <header><p className="memory-label">03 / LEVEL & INTERACTION</p><h2>让玩家“经历”故事，<br/>而不是只观看故事。</h2><span>玩家旅程从适应与身份揭示，经过压迫与逃离动机，最终进入逃亡高潮。</span></header>
      <div className="memory-phases">{phases.map(([number,title,points])=><article key={number as string}><b>PHASE {number}</b><h3>{title}</h3><ul>{(points as string[]).map(point=><li key={point}>{point}</li>)}</ul></article>)}</div>
      <div className="memory-interactions">{["听声定位","抓取与传递","开门与切场","物件收集","潜入与躲避","逃亡奔跑"].map((item,index)=><div key={item}><b>0{index+1}</b><span>{item}</span></div>)}</div>
      <figure className="memory-board"><a href={asset("interaction-design.webp")} target="_blank" rel="noreferrer"><img src={asset("interaction-design.webp")} alt="MEMORY ESCAPE 关卡与交互设计" loading="lazy" /></a><figcaption>完整关卡与交互设计 / 点击查看原图</figcaption></figure>
    </section>

    <section className="memory-test">
      <header><p className="memory-label">04 / USER TESTING</p><h2>三轮测试，把“看不懂”变成具体的设计决策。</h2><span>体验测试 → 结构化问卷 → 深度访谈 → 聚类优化</span></header>
      <div className="memory-iterations">{iterations.map(item=><article key={item.version}><div><b>{item.version}</b><span>{item.time}</span><h3>{item.title}</h3></div><section><h4>发现</h4><ul>{item.found.map(x=><li key={x}>{x}</li>)}</ul></section><section><h4>优化</h4><ul>{item.fixed.map(x=><li key={x}>{x}</li>)}</ul></section></article>)}</div>
      <div className="memory-result"><strong>87%</strong><div><h3>玩家能够理解“现实—记忆”的关联</h3><p>叙事层级更容易被识别，关键目标的辨认效率也得到明显提升。</p></div></div>
      <figure className="memory-board"><a href={asset("testing-iteration.webp")} target="_blank" rel="noreferrer"><img src={asset("testing-iteration.webp")} alt="MEMORY ESCAPE 用户测试与设计迭代" loading="lazy" /></a><figcaption>三轮测试与完整迭代记录 / 点击查看原图</figcaption></figure>
    </section>

    <section className="memory-build">
      <header><p className="memory-label">05 / FROM DESIGN TO PLAYABLE</p><h2>从叙事与流程，<br/>推进到真正可玩的空间。</h2></header>
      <div className="memory-pipeline"><article><b>01</b><h3>叙事与流程设计</h3><p>Event List / Flow Chart</p></article><article><b>02</b><h3>灰盒原型搭建</h3><p>UE 灰盒 / 空间与动线验证</p></article><article><b>03</b><h3>交互实现与打磨</h3><p>Blueprint / 交互 / 声音 / UI</p></article><article><b>04</b><h3>可玩体验构建</h3><p>最终关卡 / 灯光 / 氛围整合</p></article></div>
      <div className="memory-details"><article><h3>交互逻辑</h3><p>抓取、传递、开门、物件收集与媒介切换由 Blueprint 连接成连续体验。</p></article><article><h3>空间音频</h3><p>使用 3D 声音引导方向，以对讲机噪音和环境声完成层级过渡。</p></article><article><h3>UI 与移动</h3><p>用 UI Prompt 提升可读性，并将 Walking 调整为 Teleport + Fade 以减少晕动症。</p></article></div>
      <figure className="memory-board"><a href={asset("production-output.webp")} target="_blank" rel="noreferrer"><img src={asset("production-output.webp")} alt="MEMORY ESCAPE 制作流程与实现细节" loading="lazy" /></a><figcaption>从 Event List、灰盒、Blueprint 到最终可玩构建 / 点击查看原图</figcaption></figure>
    </section>

    <section className="memory-scenes">
      <header><p className="memory-label">06 / FINAL EXPERIENCE</p><h2>六个空间，承载不同的记忆碎片与情绪痕迹。</h2><span>所有场景保持自然比例，不裁切主体；点击可查看独立大图。</span></header>
      <div className="memory-scene-grid">{scenes.map(([file,n,title,caption],index)=><figure key={file} className={index===0?"is-featured":""}><a href={asset(file)} target="_blank" rel="noreferrer"><img src={asset(file)} alt={`MEMORY ESCAPE ${title}`} loading="lazy" /></a><figcaption><b>{n} / {title}</b><span>{caption}</span></figcaption></figure>)}</div>
    </section>

    <section className="memory-contribution">
      <div><p className="memory-label">07 / OUTCOME & CONTRIBUTION</p><h2>把创伤体验从“被观看”，<br/>转化为“被经历”。</h2></div>
      <div><p>最终完成 MR 现实层＋VR 记忆层的跨现实叙事体验，构建从压迫到逃亡的完整情绪曲线，并通过三轮测试持续优化交互与叙事清晰度。</p><ul><li>Theme Research / Narrative Design</li><li>Level Design / Script & Event List</li><li>User Testing / UE Scene Building</li><li>Game UX / Final Presentation</li></ul></div>
      {project.video && <a className="memory-video" href={project.video} target="_blank" rel="noreferrer"><div style={{"--memory-video":`url(${asset("scene-tunnel.webp")})`} as React.CSSProperties}/><span>▶</span><p>PLAYABLE PROTOTYPE / 10–15 MIN</p><strong>点击画面播放完整体验视频</strong></a>}
    </section>

    <section className="memory-archive"><header><p className="memory-label">PROJECT ARCHIVE</p><h2>完整设计展板</h2><span>作为项目档案保留，不再承担正文阅读。点击任意展板查看原图。</span></header><div>{boards.map(([file,label],index)=><figure key={file}><a href={asset(file)} target="_blank" rel="noreferrer"><img src={asset(file)} alt={`MEMORY ESCAPE ${label}`} loading="lazy" /></a><figcaption>{String(index+1).padStart(2,"0")} / {label}</figcaption></figure>)}</div></section>

    <section className="case-outro"><p>END OF CASE STUDY / 05</p><Link href="/work">BACK TO INDEX</Link></section>
    <Link className="case-next" href={`/work/${next.slug}`} style={{"--next-image":`url(${next.cover})`} as React.CSSProperties}><div/><p>NEXT PROJECT / {next.index}</p><h2>{next.title}</h2><span>VIEW CASE ↗</span></Link>

    <style>{`
      .memory-native{--red:#ef2f2f;--ink:#07090b;--panel:#0d1013;--line:rgba(255,255,255,.13);background:var(--ink);color:#f1f1ef;color-scheme:dark}.memory-native .site-nav{color:#fff;border-color:rgba(255,255,255,.18)}
      .memory-hero{position:relative;min-height:100svh;overflow:hidden;background:#050607}.memory-hero__image{position:absolute;inset:0;background:var(--memory-hero) center/cover no-repeat;filter:saturate(.9)}.memory-hero__shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,3,4,.94),rgba(2,3,4,.43) 58%,rgba(2,3,4,.1)),linear-gradient(0deg,rgba(2,3,4,.75),transparent 55%)}
      .memory-eyebrow{position:absolute;z-index:2;top:105px;left:7vw;margin:0;font-size:10px;letter-spacing:.2em;color:#ddd}.memory-hero__title{position:absolute;z-index:2;left:7vw;bottom:12vh}.memory-hero__title>span,.memory-label{font-size:10px;letter-spacing:.18em;color:var(--red)}.memory-hero__title h1{margin:24px 0 22px;font-size:clamp(74px,11vw,178px);line-height:.76;letter-spacing:-.065em;font-weight:650}.memory-hero__title p{margin:0;font-size:18px;color:#ddd}
      .memory-hero__play{position:absolute;z-index:3;inset:70px 0 0;display:grid;place-content:center;justify-items:center;gap:14px}.memory-hero__play i{display:grid;place-items:center;width:80px;height:80px;padding-left:5px;border:1px solid rgba(255,255,255,.75);border-radius:50%;background:rgba(0,0,0,.24);backdrop-filter:blur(5px);font-style:normal;transition:.35s}.memory-hero__play span{font-size:9px;letter-spacing:.18em}.memory-hero__play:hover i{transform:scale(1.1);background:rgba(239,47,47,.78)}.memory-hero__scroll{position:absolute;z-index:4;right:4vw;bottom:6vh;font-size:10px;letter-spacing:.15em}.memory-hero__scroll i{margin-left:20px;font-style:normal}
      .memory-overview,.memory-statement,.memory-layers,.memory-journey,.memory-test,.memory-build,.memory-scenes,.memory-contribution,.memory-archive{padding:130px 7vw;border-bottom:1px solid var(--line)}.memory-overview__lead{display:grid;grid-template-columns:1.15fr .6fr;gap:8vw;margin:55px 0 85px;align-items:end}.memory-overview h2,.memory-statement h2,.memory-layers h2,.memory-journey h2,.memory-test h2,.memory-build h2,.memory-scenes h2,.memory-contribution h2,.memory-archive h2{margin:0;font-size:clamp(42px,5.2vw,78px);line-height:1.05;letter-spacing:-.05em;font-weight:460}.memory-overview__lead p,.memory-contribution>div:nth-child(2)>p{margin:0;font-size:17px;line-height:1.9;color:#a8a9a7}.memory-meta{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line)}.memory-meta dl{margin:0;padding:25px 20px 25px 0;border-right:1px solid var(--line)}.memory-meta dl+dl{padding-left:20px}.memory-meta dt{font-size:9px;letter-spacing:.15em;color:#777}.memory-meta dd{margin:13px 0 0;font-size:13px;line-height:1.6}
      .memory-statement{background:#0b0d0f}.memory-statement>h2{margin:38px 0 75px}.memory-principles{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line)}.memory-principles article{min-height:280px;padding:34px;background:#0b0d0f}.memory-principles b{font-size:32px;color:var(--red)}.memory-principles h3{margin:60px 0 16px;font-size:24px}.memory-principles p{margin:0;font-size:15px;line-height:1.8;color:#999}
      .memory-board{margin:75px 0 0}.memory-board a{display:block;overflow:hidden;border:1px solid var(--line);background:#050607}.memory-board img{display:block;width:100%;height:auto;transition:transform .7s}.memory-board:hover img{transform:scale(1.008)}.memory-board figcaption{margin-top:13px;font-size:10px;letter-spacing:.1em;color:#777}
      .memory-layers header,.memory-journey header,.memory-test header,.memory-scenes header{display:grid;grid-template-columns:180px 1fr .55fr;gap:4vw;align-items:start;margin-bottom:75px}.memory-journey header>span,.memory-test header>span,.memory-scenes header>span{font-size:15px;line-height:1.8;color:#8f9190}.memory-layer-list{border-top:1px solid var(--line)}.memory-layer-list article{display:grid;grid-template-columns:80px .7fr 1fr 1fr;gap:3vw;align-items:center;padding:28px 0;border-bottom:1px solid var(--line)}.memory-layer-list article>span{font-size:28px;color:var(--red)}.memory-layer-list b{font-size:10px;letter-spacing:.13em;color:#888}.memory-layer-list h3{margin:8px 0 0;font-size:24px}.memory-layer-list p{margin:0;font-size:14px;line-height:1.75;color:#999}
      .memory-journey{background:#101214}.memory-phases{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line)}.memory-phases article{min-height:390px;padding:34px;background:#101214}.memory-phases article>b{font-size:11px;letter-spacing:.14em;color:var(--red)}.memory-phases h3{margin:54px 0 28px;font-size:27px}.memory-phases ul,.memory-iterations ul,.memory-contribution ul{margin:0;padding:0;list-style:none}.memory-phases li,.memory-iterations li{padding:10px 0;border-top:1px solid var(--line);font-size:14px;line-height:1.55;color:#aaa}.memory-phases li:before,.memory-iterations li:before{content:'›';margin-right:9px;color:var(--red)}.memory-interactions{display:grid;grid-template-columns:repeat(6,1fr);margin-top:55px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.memory-interactions div{padding:25px 14px}.memory-interactions div+div{border-left:1px solid var(--line)}.memory-interactions b{display:block;margin-bottom:20px;font-size:10px;color:var(--red)}.memory-interactions span{font-size:14px}
      .memory-test{background:#080a0c}.memory-iterations{display:grid;gap:18px}.memory-iterations>article{display:grid;grid-template-columns:.52fr 1fr 1fr;gap:1px;background:var(--line)}.memory-iterations>article>div,.memory-iterations>article>section{padding:30px;background:#0d1013}.memory-iterations b{font-size:40px;color:var(--red)}.memory-iterations span{margin-left:12px;color:#777}.memory-iterations h3{margin:35px 0 0;font-size:23px}.memory-iterations h4{margin:0 0 22px;font-size:10px;letter-spacing:.16em;color:#777}.memory-result{display:flex;gap:40px;align-items:center;margin-top:55px;padding:38px;border:1px solid rgba(239,47,47,.55);background:linear-gradient(90deg,rgba(239,47,47,.12),transparent)}.memory-result strong{font-size:clamp(68px,8vw,120px);line-height:.8;color:var(--red);font-weight:500}.memory-result h3{margin:0 0 12px;font-size:24px}.memory-result p{margin:0;color:#999}
      .memory-pipeline{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin:75px 0;background:var(--line)}.memory-pipeline article{min-height:250px;padding:30px;background:#080a0c}.memory-pipeline b{color:var(--red);font-size:26px}.memory-pipeline h3{margin:70px 0 14px;font-size:22px}.memory-pipeline p,.memory-details p{margin:0;color:#888;font-size:14px;line-height:1.7}.memory-details{display:grid;grid-template-columns:repeat(3,1fr);gap:4vw}.memory-details article{padding-top:26px;border-top:1px solid var(--line)}.memory-details h3{margin:0 0 17px;font-size:21px}
      .memory-scenes{background:#0e1012}.memory-scene-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.memory-scene-grid figure{margin:0;background:#07090b}.memory-scene-grid figure.is-featured{grid-column:1/-1}.memory-scene-grid a{display:block;overflow:hidden}.memory-scene-grid img{display:block;width:100%;height:auto;transition:transform .7s}.memory-scene-grid figure:hover img{transform:scale(1.018)}.memory-scene-grid figcaption{display:flex;justify-content:space-between;gap:24px;padding:17px 2px 28px;font-size:11px}.memory-scene-grid figcaption b{color:#ddd}.memory-scene-grid figcaption span{color:#777}
      .memory-contribution{display:grid;grid-template-columns:1fr .65fr;gap:8vw}.memory-contribution>div:nth-child(2){padding-top:40px}.memory-contribution li{padding:12px 0;border-top:1px solid var(--line);font-size:13px;color:#aaa}.memory-video{position:relative;grid-column:1/-1;min-height:clamp(340px,46vw,650px);margin-top:35px;display:block;overflow:hidden}.memory-video>div{position:absolute;inset:0;background:var(--memory-video) center/cover no-repeat;transition:transform .8s}.memory-video:after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.86),rgba(0,0,0,.08) 55%)}.memory-video>span{position:absolute;z-index:2;left:50%;top:48%;transform:translate(-50%,-50%);display:grid;place-items:center;width:78px;height:78px;padding-left:5px;border:1px solid #fff;border-radius:50%;font-size:20px}.memory-video p,.memory-video strong{position:absolute;z-index:2;left:30px}.memory-video p{bottom:58px;margin:0;font-size:9px;letter-spacing:.18em;color:#bbb}.memory-video strong{bottom:28px;font-size:17px;font-weight:450}.memory-video:hover>div{transform:scale(1.025)}
      .memory-archive{background:#151719}.memory-archive header{display:grid;grid-template-columns:180px 1fr .55fr;gap:4vw;align-items:start;margin-bottom:70px}.memory-archive header>span{font-size:14px;line-height:1.8;color:#888}.memory-archive>div{display:grid;grid-template-columns:repeat(2,1fr);gap:35px 12px}.memory-archive figure{margin:0}.memory-archive a{display:block;border:1px solid var(--line)}.memory-archive img{display:block;width:100%;height:auto}.memory-archive figcaption{margin-top:12px;font-size:10px;letter-spacing:.08em;color:#777}
      @media(max-width:800px){.memory-eyebrow{top:85px;left:18px}.memory-hero__title{left:18px;right:18px;bottom:12vh}.memory-hero__title h1{font-size:17vw}.memory-hero__title p{font-size:14px}.memory-hero__play{inset:62px 0 0}.memory-hero__play i{width:62px;height:62px}.memory-hero__scroll{display:none}.memory-overview,.memory-statement,.memory-layers,.memory-journey,.memory-test,.memory-build,.memory-scenes,.memory-contribution,.memory-archive{padding:90px 18px}.memory-overview__lead,.memory-layers header,.memory-journey header,.memory-test header,.memory-scenes header,.memory-archive header,.memory-contribution{grid-template-columns:1fr;gap:28px}.memory-overview__lead{margin:45px 0 65px}.memory-overview h2,.memory-statement h2,.memory-layers h2,.memory-journey h2,.memory-test h2,.memory-build h2,.memory-scenes h2,.memory-contribution h2,.memory-archive h2{font-size:39px}.memory-meta,.memory-principles,.memory-phases,.memory-pipeline,.memory-details{grid-template-columns:1fr}.memory-meta dl{border-right:0;border-bottom:1px solid var(--line);padding:21px 0!important}.memory-principles article,.memory-phases article,.memory-pipeline article{min-height:220px}.memory-principles h3,.memory-pipeline h3{margin-top:38px}.memory-layer-list article{grid-template-columns:46px 1fr}.memory-layer-list article>p{grid-column:2}.memory-interactions{grid-template-columns:repeat(2,1fr)}.memory-interactions div:nth-child(odd){border-left:0}.memory-interactions div:nth-child(n+3){border-top:1px solid var(--line)}.memory-iterations>article{grid-template-columns:1fr}.memory-result{align-items:flex-start;flex-direction:column}.memory-scene-grid,.memory-archive>div{grid-template-columns:1fr}.memory-scene-grid figure.is-featured{grid-column:auto}.memory-scene-grid figcaption{flex-direction:column;gap:7px}.memory-video{min-height:270px}.memory-video>span{width:60px;height:60px}.memory-video p,.memory-video strong{left:18px}.memory-video p{bottom:48px}.memory-video strong{bottom:20px;font-size:14px}}
    `}</style>
  </main>;
}
