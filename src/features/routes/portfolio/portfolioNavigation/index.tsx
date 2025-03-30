import { Box } from "@/components/atoms";
import TabSelectionButton from "./TabSelectionButton";

export default function PortfolioNavigation() {
  return (
    <Box className="flex w-full h-full items-center justify-center">
      <TabSelectionButton tab="overview">Overview</TabSelectionButton>
      <TabSelectionButton tab="projects">Projects</TabSelectionButton>
      <TabSelectionButton tab="resume">Resume</TabSelectionButton>
    </Box>
  );
}
