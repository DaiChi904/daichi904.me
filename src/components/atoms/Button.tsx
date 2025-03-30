import type { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  const defaultStyle =
    "items-center justify-center hover:bg-purple-200 active:bg-purple-400 transition-colors ease-in-out duration-200";
  return (
    <button {...props} className={`${defaultStyle} ${props.className}`}>
      {children}
    </button>
  );
}
