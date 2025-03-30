"use client";

import { Box } from "@/components/atoms";
import BaseContainer from "@/components/layouts/BaseContainer";
import type { PortfolioTabs } from "@/features/routes/portfolio/portfolioTabs.type";
import { useSearchParams } from "next/navigation";
import { type ReactNode, useMemo, useState } from "react";
import Overview from "./overview";
import PortfolioNavigation from "./portfolioNavigation";
import Projects from "./projects";
import Resume from "./resume";

const tabMap = new Map<PortfolioTabs, ReactNode>([
  ["overview", <Overview key="overview" />],
  ["projects", <Projects key="projects" />],
  ["resume", <Resume key="resume" />],
]);

export default function PortfolioPageLayout() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<PortfolioTabs>(searchParams.get("tab") as PortfolioTabs);

  useMemo(() => {
    setTab(searchParams.get("tab") as PortfolioTabs);
  }, [searchParams]);

  return (
    <BaseContainer>
      <Box className="h-20 content-center py-2">
        <PortfolioNavigation />
      </Box>
      {tabMap.get(tab)}
    </BaseContainer>
  );
}
