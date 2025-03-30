import { Grid } from "@/components/atoms";
import MyExperience from "./myExperience";
import MyHistory from "./myHistory";

export default function Overview() {
  return (
    <Grid container xs={1} ys={1} xfs={2} yfs={1} className="relative h-[calc(100dvh-178px)] gap-x-1">
      <MyHistory xs={1} />
      <MyExperience xs={1} />
    </Grid>
  );
}
