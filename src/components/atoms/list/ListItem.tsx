import type { HTMLAttributes } from "react";

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {}

export default function ListItem({ children, ...props }: ListItemProps) {
  return <li {...props}>{children}</li>;
}
