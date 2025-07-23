import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  head: [
    [
      'link', { rel: 'icon', href: 'favicon.ico' }
    ]
  ],
  lang: "zh-CN",
  title: "",
  description: "",
  theme,

});