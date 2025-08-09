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
  title: "徐工指南",
  description: "旨在为徐工在校学生提供必要的生活指南",
  theme,

  plugins: [
    umamiAnalyticsPlugin({
      id: '591b5dd1-567f-44ee-9b65-e9eae43ee773',
      link: 'https://sta.yezer.cn/script.js',
      autoTrack: true,
      cache: true,
      domains: ['xuda.live'],
      hostUrl: 'https://sta.yezer.cn/script.js',
    }),
  ],

});