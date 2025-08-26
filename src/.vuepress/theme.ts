import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://xuda.live",
  favicon: "/favicon.ico",
  logo: "/logo.svg",
  docsDir: "src",
  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "合法备案 | 苏ICP备2024137980号",
  copyright: `使用 <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans">CC BY-NC-ND 4.0</a> 协议`,
  displayFooter: true,

  pageInfo: false,

  // 仅保留用到的功能。
    markdown: {
      component: true,
      imgLazyload: true,
      imgSize: true,
      tabs: true,
      hint: true,
      footnote: true,
      mark: true,
    },

  // 在这里配置主题提供的插件
  plugins: {
    meilisearch: {
      host: "https://srch.yezer.cn",
      apiKey: "e7c181e18e5d409514f2299943f864f48d1c7d659fc10bfda6ff6859c2771aae",
      indexUid: "xuda_website",
      hotKeys: [],
    },

    components: {
      components: ["VPCard","Badge"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});