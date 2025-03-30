import type { HTMLAttributes } from "react";

type LineStyle = "default" | "dashed" | "double" | "hidden";

const dynamicLineStyle: { [key: string]: string } = {
  default: "border-splid",
  double: "border-double",
  dotted: "border-dotted",
  dashed: "border-dashed",
  hidden: "border-hidden",
};

interface LineProps extends HTMLAttributes<HTMLHRElement> {
  lineStyle?: LineStyle;
}

export default function Line({ lineStyle, ...props }: LineProps) {
  return <hr {...props} className={`relative my-4 ${dynamicLineStyle[`${lineStyle ? lineStyle : "border-solid"}`]}`} />;
}
