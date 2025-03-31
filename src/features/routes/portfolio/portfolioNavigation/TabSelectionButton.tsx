"use client";

import { Typography } from "@/components/atoms";
import Button from "@/components/atoms/Button";
import type { PortfolioTabs } from "@/features/routes/portfolio/portfolioTabs.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type ReactNode, useCallback } from "react";

interface Props {
  tab: PortfolioTabs;
  children: ReactNode;
}

export default function TabSelectionButton({ tab, children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string): string => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <Button
      onClick={() => router.push(`${pathname}?${createQueryString("tab", tab)}`)}
      className={`w-1/3 h-full shadow-md border-black border-[0.5px] ${searchParams.get("tab") === tab ? "bg-purple-300 dark:bg-slate-700 border-b-4 border-b-purple-600  dark:border-white" : "bg-white dark:bg-slate-800 dark:border-white"}`}
    >
      <Typography size="medium" textAlign="center">
        {children}
      </Typography>
    </Button>
  );
}
