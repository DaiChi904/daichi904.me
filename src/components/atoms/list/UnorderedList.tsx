interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {}

export default function UnorderedList({ children, ...props }: UnorderedListProps) {
  return (
    <ol {...props} className={`list-disc ${props.className}`}>
      {children}
    </ol>
  );
}
