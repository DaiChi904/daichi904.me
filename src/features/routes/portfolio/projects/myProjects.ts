interface MyProject {
  name: string;
  description: string;
  repositoryLink?: string;
  haveCooperated: boolean;
}

export const myProjects: MyProject[] = [
  {
    name: "daichi904.me",
    description: "このサイト\nNext.js✕TypeScriptで構築",
    repositoryLink: "https://github.com/DaiChi904/daichi904.me",
    haveCooperated: false,
  },
];
