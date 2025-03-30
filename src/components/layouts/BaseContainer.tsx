import { Box } from "../atoms";

export default function BaseContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Box className="flex flex-col flex-1 pt-12 pb-2 px-10">{children}</Box>;
}
