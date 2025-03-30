interface Experience {
  label: string;
  iconSrc: string;
  details: string[];
}

// TODO Replace this test data with real data
export const experience: Experience[] = [
  { label: "HTML", iconSrc: "/logos/html/HTML5_Badge.svg", details: ["HTML それ以上でもそれ以下でもない"] },
  {
    label: "CSS",
    iconSrc: "/logos/css/css.svg",
    details: [
      "完全に理解しました",
    ],
  },
  {
    label: "JavaScript",
    iconSrc: "/logos/javascript/js.svg",
    details: ["TypeScriptへの踏み台", "特に言及することはない"],
  },
  {
    label: "TypeScript",
    iconSrc: "/logos/typescript/ts-logo-512.svg",
    details: ["自分の親のような存在", "この言語が一番使い勝手が良い思っている"],
  },
  {
    label: "Python",
    iconSrc: "/logos/python/python-logo-only.svg",
    details: ["AtCoderで使用"],
  },
  {
    label: "C",
    iconSrc: "/logos/c/C_Programming_Language.svg",
    details: ["大学の課題や講義でちょくちょく触る", "正直好きではない"],
  },
  { label: "Go", iconSrc: "/logos/go/Go-Logo_Aqua.svg", details: ["少しだけ触ったくらい"] },
  {
    label: "React",
    iconSrc: "/logos/react/react-logo.svg",
    details: [
      "TypeScriptと相性が良く、個人的には結構好き",
      "好きだけどレンダリングのことを考えないといけないのは苦しい...",
    ],
  },
  {
    label: "Next.js",
    iconSrc: "/logos/nextjs/icon/dark-background/nextjs-icon-dark-background.svg",
    details: ["色々なプロジェクトでよく使う"],
  },
  {
    label: "Ionic Framework",
    iconSrc: "/logos/ionicFramework/ionic dark logo blue.svg",
    details: ["2ヵ月くらい触ってた"],
  },
  { label: "Tailwind CSS", iconSrc: "/logos/tailwindCss/tailwindcss.svg", details: ["結構好き"] },
  { label: "MUI", iconSrc: "/logos/mui/mui.svg", details: ["便利"] },
];
