import { Box, Typography } from "@/components/atoms";
import BaseContainer from "@/components/layouts/BaseContainer";
import HomeNaviButton from "./HomeNaviButton";

export default function HomePageLayout() {
  return (
    <BaseContainer>
      <Box className="flex flex-col justify-center items-center grow gap-4">
        <Typography size="largePlus">DaiChi</Typography>
        <HomeNaviButton href="/profile">About me</HomeNaviButton>
        <HomeNaviButton href="/portfolio?tab=overview">Portfolio</HomeNaviButton>
        <HomeNaviButton href="/contact">Contact</HomeNaviButton>
      </Box>
    </BaseContainer>
  );
}
