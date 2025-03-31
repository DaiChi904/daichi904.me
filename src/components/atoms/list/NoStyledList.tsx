interface NoStyledListProps extends React.HTMLAttributes<HTMLUListElement> {}

export default function NoStyledList({ children, ...props }: NoStyledListProps) {
  return (
    <ol {...props} className={`text-black dark:text-white list-none ${props.className}`}>
      {children}
    </ol>
  );
}
