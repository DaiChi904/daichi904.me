import type { HTMLAttributes } from "react";

interface OrederedListProps extends HTMLAttributes<HTMLOListElement> {
  type: "1" | "a" | "A" | "i" | "I";
  start?: number;
}

export default function OrederedList({ type, start, children, ...props }: OrederedListProps) {
  return (
    <ol {...props} type={type} start={start}>
      {children}
    </ol>
  );
}
