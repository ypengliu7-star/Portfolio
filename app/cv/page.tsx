import { SiteNav } from "@/components/site-nav";
import { withBasePath } from "@/lib/base-path";
const experiences = [
  ["2026", "伦敦地下局", "剧本改编、互动机制、NPC培训与现场执行"],
  ["2025", "百度", "AI数字人直播产品策略与增长"],
  ["2025", "曦和推理社", "主理人 / 商业项目"],
  ["2024", "英国宠物品牌市场项目", "用户沟通与线下商业验证"],
];
export default function CVPage() {
  return <main className="cv-page"><SiteNav light />
    <section className="cv-hero"><div className="cv-title"><p>2024—2026<br />YIPENG LIU</p><h1>CV</h1></div><div className="cv-portrait"><img src={withBasePath("/media/profile.webp")} alt="刘轶鹏" /></div><p className="cv-number">02 / 02</p></section>
    <section className="cv-grid">
      <article><h2>EXPERIENCE</h2>{experiences.map(([year,title,content]) => <div className="cv-entry" key={title}><p>{year}</p><h3>{title}</h3><p>{content}</p></div>)}</article>
      <article><h2>EDUCATION</h2><div className="cv-entry"><p>2023—2025</p><h3>英国创意艺术大学</h3><p>MA Virtual Reality</p></div><div className="cv-entry"><p>2018—2022</p><h3>鲁迅美术学院</h3><p>本科 · 二等奖学金 ×2 / 校三好学生 ×2</p></div><h2 className="cv-subhead">SELECTED RECOGNITION</h2><div className="cv-entry"><p>2025</p><h3>London Design Awards</h3></div><div className="cv-entry"><p>2025</p><h3>Aesthetica</h3></div></article>
      <article><h2>CAPABILITIES</h2><ul><li>叙事与剧本开发</li><li>AI影像工作流</li><li>互动体验设计</li><li>VR / MR原型</li><li>UX研究与产品策略</li><li>现场沉浸式运营</li></ul><h2 className="cv-subhead">CONTACT</h2><a href="mailto:912566980@qq.com">912566980@qq.com</a></article>
    </section>
  </main>;
}
