export const SITE = {
  website: "https://blog.buildfromidea.com",
  author: "BigBoBro",
  profile: "https://github.com/bigbobro",
  desc: "从想法到方案：AI 使用、真实项目踩坑，以及还在形成中的判断。",
  title: "BuildFromIdea",
  titleZh: "开物成务",
  fullTitle: "BuildFromIdea · 开物成务",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "编辑页面",
    url: "https://github.com/bigbobro/bigbobro.github.io/edit/main/",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // primary content language for this personal publication
  timezone: "Asia/Shanghai",
} as const;
