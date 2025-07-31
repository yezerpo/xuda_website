import { defineUserConfig } from "vuepress";
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'

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

  plugins: [
    umamiAnalyticsPlugin({
      id: 'your-website-unique-id',
      link: 'https://sta.yezer.cn/script.js',
      autoTrack: true,
      cache: true,
      domains: ['xuda.live'],
      hostUrl: 'https://sta.yezer.cn/script.js',
    }),
  ],

});