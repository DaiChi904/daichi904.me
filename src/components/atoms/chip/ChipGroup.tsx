import Box from "../Box";

export default function ChipGroup({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Box className="flex size-min flex-row">{children}</Box>;
}
