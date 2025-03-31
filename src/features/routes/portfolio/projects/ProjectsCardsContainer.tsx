import { Box, Typography } from "@/components/atoms";
import type { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

export default function ProjectsCardsContainer({ label, children }: Props) {
  return (
    <Box className="flex flex-col">
      <Typography
        size="medium"
        className="shadow-md pl-2 bg-white border-l-8 border-l-purple-600 border-b-[1px] border-b-black dark:bg-slate-800 dark:border-b-white"
      >
        {label}
      </Typography>
      <Box className="flex flex-col pl-5 pt-1 px-2">{children}</Box>
    </Box>
  );
}
