import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://xuda.live",
  repo: "yezerpo/xuda_website",
  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "苏ICP备2024137980号",
  copyright: "CC BY-NC-ND 4.0",
  displayFooter: true,

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

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
      apiKey: "17c69ffc62f4246b894bec9f66efe23b135b58856f9fdcbdc4fbc38c9cf299cd",
      indexUid: "xuda_website",
      hotKeys: [],
    },
    
    comment: {
      provider: "Twikoo",
      envId: "https://cmts.yezer.cn",
    },

    components: {
      components: ["VPCard","Badge"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});