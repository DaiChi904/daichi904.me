import { Grid, Typography } from "@/components/atoms";
import Image from "next/image";

interface Props {
  iconSrc: string;
  label: string;
  details: string[];
}

export function ExperienceCard({ iconSrc, label, details }: Props) {
  return (
    <Grid container xs={1} ys={1} xfs={1} yfs={1} className="size-full m-2">
      <Grid container xs={1} ys={1} xfs={7} yfs={5} className="grid-flow-col p-2 border-2 rounded-md">
        <Grid xs={2} ys={3} xfs={1} yfs={1} className="justify-items-center content-center">
          <Image width={10000} height={10000} src={iconSrc} alt="icon" className="size-24" />
        </Grid>
        <Grid xs={2} ys={2} xfs={1} yfs={1} className="justify-items-center content-center">
          <Typography>{label}</Typography>
        </Grid>
        <Grid xs={5} ys={5} xfs={1} yfs={1} className="content-center">
          {details.map((detail, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: It is suitable to use index at this place.
            <Typography key={index}>{detail}</Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
