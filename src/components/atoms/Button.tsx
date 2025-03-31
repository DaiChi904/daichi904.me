import type { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  const defaultStyle =
    "items-center justify-center hover:bg-purple-200 active:bg-purple-400 dark:hover:bg-slate-700 dark:active:bg-slate-600 transition-colors ease-in-out duration-200";
  return (
    <button {...props} className={`text-black dark:text-white ${defaultStyle} ${props.className}`}>
      {children}
    </button>
  );
}
