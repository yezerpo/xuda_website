import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "新生知道",
    icon: "book",
    link: "freshman/",
  },
  {
      text: "资料库",
      icon: "circle-info",
      children: [""],
  },
  {
    text: "下载中心",
    icon: "vaadin:download",
    link: "dlcenter/",
  },
]);
