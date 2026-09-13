import Link from "next/link";

export function SiteNav({ light = false }: { light?: boolean }) {
  return <header className={`site-nav ${light ? "site-nav--light" : ""}`}>
    <Link className="site-mark" href="/" aria-label="刘轶鹏作品集首页">YIPENG LIU <span>/ 刘轶鹏</span></Link>
    <nav aria-label="主导航">
      <Link href="/">HOME</Link>
      <Link href="/work">WORK</Link>
      <Link href="/cv">CV</Link>
      <a href="mailto:912566980@qq.com">CONTACT</a>
    </nav>
  </header>;
}
