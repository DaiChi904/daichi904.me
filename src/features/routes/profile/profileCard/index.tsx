import { Box, Grid, Line, Typography } from "@/components/atoms";
import MyIconImage from "@/features/common/MyIconImage";
import { myInfoData } from "./myInfoData";

export default function ProfileCard({ xs }: { xs: number }) {
  return (
    <Grid container xs={xs} ys={1} xfs={1} yfs={1} className="h-min">
      <Box className="h-min">
        <MyIconImage width={1000} height={1000} fit circle />
      </Box>
      <Line className="m-2" />
      <Grid container xs={1} ys={1} xfs={1} yfs={3} className="h-min">
        {myInfoData.map((info) => (
          <Grid key={info.label} container xs={1} ys={1} xfs={2} yfs={1}>
            <Grid xs={1} ys={1} xfs={1} yfs={1}>
              <Typography textAlign="center">{info.label}</Typography>
            </Grid>
            <Grid xs={1} ys={1} xfs={1} yfs={1}>
              <Typography textAlign="center">{info.value}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
