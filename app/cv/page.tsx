import { SiteNav } from "@/components/site-nav";
import { withBasePath } from "@/lib/base-path";

const experience = [
  {
    date: "2026.01 — 2026.06",
    title: "伦敦地下局 / LONDON UNDERWORLD",
    role: "剧本改编 · 互动机制 · NPC培训 · 现场执行",
    body: "参与伦敦商业沉浸式RPG的剧本改编、NPC机制与培训、玩家流程迭代及现场执行。项目累计对外演出100+场，并沉淀为146页组织者手册。",
  },
  {
    date: "2025.01 — 2025.03",
    title: "百度 / BAIDU",
    role: "AI内容产品策略",
    body: "参与覆盖300+直播间的分析与A/B测试，围绕数字人直播内容、产品策略和增长路径开展研究，推动项目整体GMV提升32%。",
  },
  {
    date: "2025",
    title: "曦和推理社",
    role: "主理人 · 商业项目",
    body: "围绕互动叙事与玩家体验搭建2000+玩家社群，参与内容策划、产品运营与商业落地。",
  },
  {
    date: "2024",
    title: "英国宠物品牌市场项目",
    role: "用户沟通 · 线下商业验证",
    body: "参与英国宠物品牌市集运营，以真实顾客反馈验证产品表达、陈列方式与购买路径。",
  },
];

const education = [
  ["2024 — 2025", "伦敦艺术大学", "MA Virtual Reality"],
  ["2022 — 2023", "索尔福德大学", "MSc Creative Technology · Merit"],
  ["2018 — 2022", "鲁迅美术学院 × 索尔福德大学", "BA 数字媒体艺术 · 一等荣誉学位"],
];

const recognition = [
  ["2025", "London Design Awards", "银奖"],
  ["2025", "AESTHETICA 短片节", "入围"],
  ["2025", "Innovate UK 沉浸式科技奖", "入围"],
  ["2021", "索尔福德大学", "优秀学生"],
  ["2021", "京东狂欢夜", "KOL"],
  ["2019", "ChinaJoy 全国舞台剧大赛", "最佳剧情奖"],
  ["2019", "鲁迅美术学院", "二等奖学金 · 校三好学生"],
  ["2018", "时报金犊奖", "校长奖 / 优秀奖"],
  ["2018", "鲁迅美术学院", "二等奖学金 · 校三好学生"],
  ["2018", "《剑网3》官方校园行", "Coser"],
  ["2017", "天津市艺考创意设计", "全市第一"],
];

const capabilities = [
  {
    title: "AI影像制作",
    body: "覆盖剧本与分镜、角色及场景资产、AI视频生成与后期成片；在历史与喜剧短片中实践视觉一致性、3D片场与复杂镜头控制。",
  },
  {
    title: "互动叙事与舞台",
    body: "参与伦敦商业沉浸式RPG剧本改编、NPC机制与培训、玩家流程迭代；兼具VR/MR创作与舞台表演经验。",
  },
  {
    title: "产品策略与商业落地",
    body: "具备AI内容产品策略经验，参与直播间分析与A/B测试；拥有互动社群运营和英国宠物品牌市集实践。",
  },
];

export default function CVPage() {
  return <main className="cv-page">
    <SiteNav light />
    <section className="cv-hero">
      <div className="cv-hero__copy">
        <p className="cv-kicker">PROFILE / CURRICULUM VITAE</p>
        <h1>刘轶鹏<br /><span>YIPENG LIU</span></h1>
        <p className="cv-position">AI影像创作 / 互动叙事 / 沉浸式体验</p>
        <p className="cv-intro">从数字媒体与舞台表演出发，创作覆盖AI短片、VR/MR与商业沉浸式剧场。关注故事如何通过镜头、空间和参与方式被体验，将视觉制作与角色演绎经验用于叙事设计，并通过真实玩家反馈和产品数据持续改进作品。</p>
        <a className="cv-email" href="mailto:912566980@qq.com">912566980@qq.com ↗</a>
      </div>
      <figure className="cv-portrait"><img src={withBasePath("/media/profile-photo.webp")} alt="刘轶鹏个人照片" /></figure>
    </section>

    <section className="cv-section cv-capabilities">
      <p className="cv-section__label">01 / PRACTICE</p>
      <h2>创作与实践</h2>
      <div className="cv-capability-grid">{capabilities.map((item, index) => <article key={item.title}>
        <span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p>
      </article>)}</div>
    </section>

    <section className="cv-section">
      <p className="cv-section__label">02 / EXPERIENCE</p>
      <h2>工作与商业经历</h2>
      <div className="cv-timeline">{experience.map((item) => <article key={item.title}>
        <time>{item.date}</time><div><h3>{item.title}</h3><p className="cv-role">{item.role}</p><p>{item.body}</p></div>
      </article>)}</div>
    </section>

    <section className="cv-split">
      <section className="cv-section">
        <p className="cv-section__label">03 / EDUCATION</p><h2>教育背景</h2>
        <div className="cv-list">{education.map(([date, school, degree]) => <article key={school}><time>{date}</time><h3>{school}</h3><p>{degree}</p></article>)}</div>
      </section>
      <section className="cv-section">
        <p className="cv-section__label">04 / RECOGNITION</p><h2>荣誉与活动</h2>
        <div className="cv-awards">{recognition.map(([date, title, result]) => <article key={`${date}-${title}`}><time>{date}</time><h3>{title}</h3><p>{result}</p></article>)}</div>
      </section>
    </section>

    <footer className="cv-footer"><p>SELECTED WORKS / 2024—2026</p><a href="mailto:912566980@qq.com">CONTACT ↗</a></footer>
  </main>;
}
