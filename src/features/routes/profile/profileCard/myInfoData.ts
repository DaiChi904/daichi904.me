import getMyAge from "@/utils/getMyAge";

interface MyInfoData {
  label: string;
  value: string;
}

export const myInfoData: MyInfoData[] = [
  { label: "名前", value: "DaiChi(DaiChi904)" },
  { label: "年齢", value: `${getMyAge()}` },
  { label: "出身地", value: "広島" },
];
