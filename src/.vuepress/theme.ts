import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://xuda.live",
  logo: "/common/none.png",
  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "页脚占位符",
  displayFooter: true,

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  pageInfo: false,

  // 仅保留用到的功能。
    markdown: {
      component: true,
      align: true,
      tasklist: true,
      imgLazyload: true,
      imgSize: true,
      tabs: true,
      include: true,
      chartjs: true,
    },

  // 在这里配置主题提供的插件
  plugins: {
    components: {
      components: ["VPCard", "VPBanner"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
