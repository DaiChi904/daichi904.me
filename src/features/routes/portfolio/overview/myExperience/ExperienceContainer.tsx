import { Box } from "@/components/atoms";

export default function ExperienceContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <Box className="sticky top-0 left-0 right-0 h-5 rounded-ss-md z-10 bg-gradient-to-b from-slate-900 to-slate-50/0" />
      <Box className="px-6 py-5">{children}</Box>
      <Box className="sticky bottom-0 left-0 right-0 h-5 rounded-es-md z-10 bg-gradient-to-b from-slate-50/0 to-slate-900" />
    </Box>
  );
}
