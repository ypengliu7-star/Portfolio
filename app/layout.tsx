import type { Metadata } from "next";
import "./globals.css";
import { withBasePath } from "@/lib/base-path";
export const metadata: Metadata = {
  title: "刘轶鹏 / Yipeng Liu — Portfolio",
  description: "刘轶鹏个人作品集：影像、交互与沉浸式项目。",
  icons: { icon: withBasePath("/favicon.svg"), shortcut: withBasePath("/favicon.svg") },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
