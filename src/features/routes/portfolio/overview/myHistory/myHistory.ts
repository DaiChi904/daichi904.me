type Event = "birth" | "admission" | "graduate" | "engage" | "quit" | "life" | "other";

interface History {
  event: Event;
  shortDescription: string;
  details: string[];
  date: {
    time: Date;
    roughly: boolean;
  };
}

export const myHistory: History[] = [
  {
    event: "birth",
    shortDescription: "爆誕",
    details: [],
    date: { time: new Date("2004-09-04"), roughly: false },
  },
  {
    event: "admission",
    shortDescription: "小学校入学",
    details: [],
    date: { time: new Date("2011-04-01"), roughly: false },
  },
  {
    event: "admission",
    shortDescription: "水泳（週1）を始める",
    details: [
      "確か2年生のこの時期だったはず",
      "母に謎理論でめちゃめちゃに怒られ、渋々水泳を始める",
      "なんだかんだで高校3年生の始め頃まで続ける",
    ],
    date: { time: new Date("2013-06-01"), roughly: true },
  },
  {
    event: "graduate",
    shortDescription: "小学校卒業",
    details: [],
    date: { time: new Date("2017-03-31"), roughly: false },
  },
  {
    event: "admission",
    shortDescription: "中学校入学",
    details: [],
    date: { time: new Date("2017-04-01"), roughly: false },
  },
  {
    event: "life",
    shortDescription: "受験を意識し始める",
    details: [
      "塾の先生の模試の結果が悪いことを叱られ、重い腰をあげやっとのことで受験勉強を始める",
      "英語だけは飛躍的に成績が良くなり、その後の人生を左右することになる",
    ],
    date: { time: new Date("2019-07-01"), roughly: true },
  },
  {
    event: "graduate",
    shortDescription: "中学校卒業",
    details: ["志望校に合格し、無事に卒業"],
    date: { time: new Date("2020-03-31"), roughly: false },
  },
  {
    event: "admission",
    shortDescription: "高校入学",
    details: ["コロナ渦の高校生活がスタート", "制限ばかりで辟易とした日々を送ることになる"],
    date: { time: new Date("2020-04-01"), roughly: false },
  },
  {
    event: "life",
    shortDescription: "中学の頃の先輩の勧めで入ったテニス部を退部",
    details: [
      "成績が芳しくなかったことと 部活＋水泳＋塾 の生活が体力的・気力的にきつくなり退部を決意",
      "一部の先生に退部をすると成績が落ちるという謎理論を展開される",
    ],
    date: { time: new Date("2020-12-01"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "科学部に入部",
    details: ["理科の先生に誘われ、二つ返事で入部を快諾"],
    date: { time: new Date("2021-02-01"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "文系コースに進む",
    details: [
      "数弱の末路",
      "自分の性質は理系寄りだったため、先生には何故！？という反応をされる",
      "後になって振り返ると、文系に進んだのはある意味正解だったのかもしれない",
    ],
    date: { time: new Date("2021-04-01"), roughly: false },
  },
  {
    event: "life",
    shortDescription: "大学の進路を考え始める",
    details: ["ぼんやりと外国語系の学部に進もうと考えていたが、この頃から情報系とかいきたくね？と考え始める"],
    date: { time: new Date("2021-06-01"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "模試の古文で0点達成",
    details: ["古文って必要ないと思うんですよね（笑）"],
    date: { time: new Date("2021-07-01"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "模試の国語の偏差値が40を割る",
    details: ["確かこの時期のもしだったはず", "最早自分の誇り by 文系", "一方英語の偏差値は65くらいでした"],
    date: { time: new Date("2021-09-01"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "修学旅行",
    details: ["運よく感染者数が落ち着いていた時期だったため、北海道へのスキー旅行に行けました（変更前は台湾旅行）"],
    date: { time: new Date("2021-012-20"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "2学期三者面談",
    details: [
      "国語の成績もっとどうにかならないですかね？と先生は苦笑い",
      "一方塾の先生にはこんな生徒は初めてだと言われる",
      "普通国語ができない人って英語もできないらしいですね...",
    ],
    date: { time: new Date("2021-012-25"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "共通テストの社会科目で、日本史Aを使いたいと先生に打診",
    details: ["前例がないから勧められないと返されるがどうにか納得してもらう"],
    date: { time: new Date("2022-09-01"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "日本史Aの勉強ちゃんとしてるのかと先生につつかれる",
    details: ["全くやっていなかったが、自信満々で勿論ですと答えてやり過ごす"],
    date: { time: new Date("2022-12-01"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "日本史やばくね？？？と思い本気で焦る",
    details: [
      "学校を体調不良ということにして共通テストまで休み、日本史Aを0から本気で頑張る",
      'モチベーションは "点数が低いと自分の面子が潰れる" 最低なモチベーションですね...',
    ],
    date: { time: new Date("2023-01-07"), roughly: false },
  },
  {
    event: "life",
    shortDescription: "共通テスト1日目",
    details: ["何事もなく無難に終わる", "国語分からん、英語の分量多くね？"],
    date: { time: new Date("2023-01-14"), roughly: false },
  },
  {
    event: "life",
    shortDescription: "共通テスト2日目",
    details: [
      "朝早く起きて勉強しようと意気込むも寝坊しあえなく撃沈",
      "自己採点の結果自己ベストを100点弱更新し、有頂天になる",
      "日本史Aは84点でしっかり自分の面子を保つ",
    ],
    date: { time: new Date("2023-01-15"), roughly: false },
  },
  {
    event: "life",
    shortDescription: "登校",
    details: ["お通夜状態で重苦しい雰囲気でした..."],
    date: { time: new Date("2023-01-16"), roughly: false },
  },
  {
    event: "life",
    shortDescription: "共通テスト後の三者面談",
    details: [
      "志望校に対する共通テストの点が思いのほか良かったため爆速で終わる",
      "自分の言うと通りにしなかった人ほど上手くいっており癪にさわると先生が言ってました（笑）",
    ],
    date: { time: new Date("2023-01-20"), roughly: true },
  },
  {
    event: "life",
    shortDescription: "国立2次試験",
    details: ["数学と英語が試験科目", "結果は数学ぼろぼろ、英語は高得点"],
    date: { time: new Date("2023-02-25"), roughly: false },
  },
  {
    event: "life",
    shortDescription: "国立合格発表",
    details: [
      "試験制度に救われ（英語のみでの合否判定）、無事に合格",
      "大学2年時でCSのコースに進み、一応理転という形になる",
    ],
    date: { time: new Date("2023-03-08"), roughly: false },
  },
  {
    event: "graduate",
    shortDescription: "高校卒業",
    details: ["色々あったが無事に卒業", "地元を離れる"],
    date: { time: new Date("2023-03-31"), roughly: false },
  },
  {
    event: "admission",
    shortDescription: "大学入学",
    details: [],
    date: { time: new Date("2023-04-01"), roughly: false },
  },
  {
    event: "engage",
    shortDescription: "初バイト",
    details: ["お寿司屋さんで始めてのアルバイトを経験する"],
    date: { time: new Date("2023-06-01"), roughly: false },
  },
  {
    event: "quit",
    shortDescription: "初バイト退職",
    details: ["色々あり退職"],
    date: { time: new Date("2024-01-15"), roughly: false },
  },
  {
    event: "life",
    shortDescription: "Web系の勉強を始める",
    details: ["HTML、CSS、TypeScript(JavaScript)、React、Next.jsの勉強をここで始める"],
    date: { time: new Date("2024-03-01"), roughly: true },
  },
  {
    event: "engage",
    shortDescription: "インターンを始める",
    details: ["Webアプリケーションの開発"],
    date: { time: new Date("2024-04-01"), roughly: true },
  },
  {
    event: "engage",
    shortDescription: "2つ目のエンジニアのインターンを始める",
    details: ["アシスタント業務"],
    date: { time: new Date("2024-09-26"), roughly: false },
  },
];
