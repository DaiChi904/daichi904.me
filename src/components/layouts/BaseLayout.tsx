import { Box } from "../atoms";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Box className="flex flex-col !min-h-dvh">{children}</Box>;
}
