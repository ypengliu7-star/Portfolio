import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { withBasePath } from "@/lib/base-path";
import type { Project } from "@/lib/projects";

const media = (name: string) => `${withBasePath(`/media/cases/dingfengpo/extracted/${name}.webp`)}?v=20260914-hd2`;

const chapters = [
  ["01", "白天彩排", "鼓声与火作为意外出现，用滑稽表演掩藏真实意图。"],
  ["02", "帐内密议", "明确箭、鼓与火的配合，将前面的异常重新串联。"],
  ["03", "夜宴反转", "暗杀引发行动，老兵挡箭，披风与报号揭示身份。"],
  ["04", "记忆与终章", "木牌连接战友记忆，壁画承接个人牺牲与历史。"],
];

const characters = [
  ["character-guo", "郭长戍", "老年面容、木片甲与残破披风。外观先服务“落魄表演者”的身份，再通过木牌与披风的含义变化揭示其真实军人经历。"],
  ["character-zhang", "张议潮", "克制的青年形象，以出场镜头逐步建立力量感。"],
  ["character-commander", "镇将", "紫红暗金服装与体量强化夜宴中的权力位置。"],
  ["character-soldier", "吐蕃士兵", "遮面、旧布与低反光甲片构成普通士兵系统，并通过统一轮廓维持群体镜头中的角色一致性。"],
];

const scenes = [
  ["scene-day", "白天舞台", "暖灰与土黄"],
  ["scene-tent", "帐内密议", "局部火光"],
  ["scene-night", "夜宴", "冷蓝夜色与暖火"],
];

const archive = [
  "archive-01", "archive-02", "archive-03", "archive-04", "archive-05",
  "archive-06", "archive-07", "archive-08", "archive-09",
];

const finalFrames = [
  ["final-eye", "人物表演与眼神"],
  ["final-signal", "行动信号与反转"],
  ["final-flag", "唐旗身份揭示"],
  ["final-battle", "战斗段落"],
  ["final-memory", "战友记忆"],
  ["final-mural", "壁画终章"],
];

export function DingfengpoCase({ project, next }: { project: Project; next: Project }) {
  return <main className="case-study case-study--dingfengpo dfp">
    <SiteNav />
    <section className="case-cover" style={{ "--case-image": `url(${project.cover})` } as React.CSSProperties}>
      <div className="case-cover__image" /><div className="case-cover__shade" />
      <p className="case-cover__index">01 / AIGC HISTORICAL SHORT FILM</p>
      <div className="case-cover__title"><p>谁人敢去定风波</p><h1>定风波</h1></div>
      <a className="case-cover__scroll" href="#overview"><span /> EXPLORE THE PROJECT</a>
    </section>

    <section className="case-overview" id="overview">
      <p className="case-label">OVERVIEW / 2026</p>
      <h2>一个老兵的戏台，<br />也是他最后的战场。</h2>
      <p className="dfp-lead">以沙州起义为背景，讲述虚构老兵郭长戍的经历。他以演戏掩藏身份，在夜宴中协助反抗，以生命守护战友的信念。</p>
      <div className="case-specs">
        <dl><dt>我的工作</dt><dd>故事与剧本、人物与场景开发、分镜与运镜、AI图像及视频生成、配音调试、剪辑与字幕</dd></dl>
        <dl><dt>形式</dt><dd>国产历史题材3D动画短片</dd></dl>
        <dl><dt>制作方式</dt><dd>个人独立创作</dd></dl>
        <dl><dt>工具</dt><dd>即梦 / Seedance / GPT Image / Minimax / Premiere</dd></dl>
      </div>
    </section>

    <section className="dfp-intent">
      <article><p>创作切入</p><h3>从受辱的表演者切入</h3><span>以身份揭示改变观众对主角的理解。</span></article>
      <article><p>叙事表达</p><h3>让记忆落在具体物件上</h3><span>披风、木牌和曲词重复出现，在反转后获得新的意义。</span></article>
      <article><p>制作重点</p><h3>把连续性变成一套规则</h3><span>在统一动画画风下，控制跨镜头人物、空间与动作的连续性。</span></article>
    </section>

    <section className="dfp-section">
      <header><p>01 / WORLD & VISUAL LANGUAGE</p><h2>世界观与视觉基调</h2><span>低饱和暖灰、土黄、赭石与灰蓝；冷蓝夜色与暖橙火光形成叙事对照。</span></header>
      <div className="dfp-archive">{archive.map((item, index) => <a key={item} href={media(item)} target="_blank" rel="noreferrer" aria-label={`查看定风波视觉档案 ${index + 1} 高清原图`}><figure><img src={media(item)} alt={`定风波视觉档案 ${index + 1}`} loading="lazy" decoding="async" /></figure></a>)}</div>
    </section>

    <section className="dfp-section">
      <header><p>02 / CHARACTER SYSTEM</p><h2>人物与场景视觉开发</h2><span>人物三视图负责身份一致性，场景母版负责空间关系与光线方向。</span></header>
      <div className="dfp-characters">{characters.map(([image, title, body]) => <article key={title}><a href={media(image)} target="_blank" rel="noreferrer" aria-label={`查看${title}高清三视图`}><img src={media(image)} alt={`${title}三视图`} loading="lazy" decoding="async" /></a><p>{title}</p><span>{body}</span></article>)}</div>
      <div className="dfp-scenes">{scenes.map(([image, title, body]) => <figure key={title}><img src={media(image)} alt={title} loading="lazy" decoding="async" /><figcaption><b>{title}</b><span>{body}</span></figcaption></figure>)}</div>
      <p className="dfp-style"><b>统一风格</b> 偏写实的3D动画 / 雕塑化面部与成束发须 / 克制的材质反光 / 低饱和色彩</p>
    </section>

    <section className="dfp-section">
      <header><p>03 / NARRATIVE DESIGN</p><h2>叙事结构与镜头设计</h2><span>用“表演”的表层情节埋下计划，让同一物件在反转后获得新的含义。</span></header>
      <div className="dfp-chapters">{chapters.map(([number, title, body]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
      <div className="dfp-board"><a href={media("workboard")} target="_blank" rel="noreferrer" aria-label="查看定风波高清制作工作台"><img src={media("workboard")} alt="定风波完整制作工作台" loading="lazy" decoding="async" /></a><div><p>制作工作台</p><h3>物件特写负责识别，人物镜头承接情绪，连续帧为成片选帧，而不是逐帧分镜。</h3><a href={project.video} target="_blank" rel="noreferrer">查看最终影片 ↗</a></div></div>
      <div className="dfp-sound">
        <h3>声音与画面的配合设计</h3>
        <dl><dt>段落</dt><dd>拔剑与报号 / 夜宴行动 / 受击与记忆 / 片尾军阵</dd></dl>
        <dl><dt>画面任务</dt><dd>先展示人物状态，再揭示武器；从隐蔽准备进入公开反抗；以冲击连接现实和回忆；个人经历延伸到战友群体。</dd></dl>
        <dl><dt>声音设计意图</dt><dd>拔剑声提前建立动作期待；用鼓声衔接行动并强调信号作用；让预兆音先出现推动情绪转换；以中文男声合唱探索群体感。</dd></dl>
      </div>
    </section>

    <section className="dfp-section dfp-process">
      <header><p>04 / AI PIPELINE</p><h2>AI制作流程与迭代</h2><span>脚本与镜头拆分 → 参考图分工 → 分段生成 → 问题检查与修正 → 剪辑整合</span></header>
      <div className="dfp-problems">
        <article><b>01</b><h3>夜宴入席的连续性</h3><p><strong>问题</strong>相邻镜头衔接生硬，人物与主座位置需要保持一致。</p><p><strong>调整</strong>将入席拆为脚步、纯侧行走、落座与拉远，分别指定人物参考和全景母版，并限制镜头只出现一人。</p></article>
        <article><b>02</b><h3>打戏的动作密度</h3><p><strong>问题</strong>初版动作偏慢、交手次数不足，镜头停滞影响张力。</p><p><strong>调整</strong>按时间拆分交手节点，明确攻击、受击与转身动作，同时要求摄影机跟随移动。</p></article>
        <article><b>03</b><h3>木牌的参考冲突</h3><p><strong>问题</strong>不同参考图里的木牌比例与文字不一致，容易互相覆盖。</p><p><strong>调整</strong>木牌特写单独负责文字和比例，人物图只负责身份与姿态，全景图只负责终点构图。</p></article>
      </div>
      <aside><div><p>后期整合与制作复盘</p><span>让对白、声音与剪辑共同服务人物情绪，而不是逐段拼接生成素材。</span></div><div><p>有效方法</p><span>把参考图按身份、空间、构图分工，减少相互冲突；用具体动作节点替代笼统的“有张力”。</span></div><div><p>当前局限</p><span>复杂接触动作与群体声音仍有不稳定性，最终效果需要结合逐镜检查与实际听感判断。</span></div><div><p>下一轮制作</p><span>保存失败版与修改版，记录生成参数和剪辑取舍；优先测试高风险镜头，再扩展整段制作。</span></div></aside>
    </section>

    <section className="dfp-final">
      <div className="dfp-final__title"><p>05 / FINAL OUTPUT</p><h2>最终影片与成果展示</h2><span>完整短片、横竖版海报、角色设定与场景资产、中英文字幕</span></div>
      <div className="dfp-final__grid">{finalFrames.map(([image, title]) => <a key={image} href={media(image)} target="_blank" rel="noreferrer" aria-label={`查看${title}高清剧照`}><figure><img src={media(image)} alt={title} loading="lazy" decoding="async" /><figcaption>{title}</figcaption></figure></a>)}</div>
      <a className="dfp-watch" href={project.video} target="_blank" rel="noreferrer"><span>WATCH FINAL FILM</span><i>↗</i></a>
    </section>

    <section className="case-outro"><p>END OF CASE STUDY / 01</p><Link href="/work">BACK TO INDEX</Link></section>
    <Link className="case-next" href={`/work/${next.slug}`} style={{ "--next-image": `url(${next.cover})` } as React.CSSProperties}>
      <div /><p>NEXT PROJECT / {next.index}</p><h2>{next.title}</h2><span>VIEW CASE ↗</span>
    </Link>
  </main>;
}
