import { Box, Grid, Line } from "@/components/atoms";
import SelfIntroductionCards from "./SelfIntroductionCards";
import SelfIntroductionMessage from "./SelfIntroductionMessage";

export default function ProfileDetails({ xs }: { xs: number }) {
  return (
    <Grid container xs={xs} ys={1} xfs={1} yfs={1} className="px-5">
      <Box>
        <SelfIntroductionMessage />
        <Line />
        <SelfIntroductionCards />
      </Box>
    </Grid>
  );
}
