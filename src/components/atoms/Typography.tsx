import type { HTMLAttributes, ReactNode } from "react";

type TextSize = "small" | "default" | "defaultPlus" | "medium" | "mediumPlus" | "large" | "largePlus";
type TextAlign = "start" | "center" | "end";

const dynamicTextSize: { [key: string]: string } = {
  small: "text-xs",
  default: "text-base",
  defaultPlus: "text-xl",
  medium: "text-2xl",
  mediumPlus: "text-4xl",
  large: "text-6xl",
  largePlus: "text-8xl",
};

const dynamicTextAlign: { [key: string]: string } = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
};

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  textAlign?: TextAlign;
  children: ReactNode;
}

export default function Typography({ size, textAlign, children, ...props }: TypographyProps) {
  const appliedStyle = `${dynamicTextSize[`${size ? size : "default"}`]} ${dynamicTextAlign[`${textAlign ? textAlign : "start"}`]} ${props.className}`;
  return (
    <p {...props} className={`text-black dark:text-white ${appliedStyle}`}>
      {children}
    </p>
  );
}
