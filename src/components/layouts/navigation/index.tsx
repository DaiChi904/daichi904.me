import NaviButton from "./NaviButton";
import NavigationSpan from "./NavigationSpan";

import { Grid, Typography } from "@/components/atoms";
import { Homemade_Apple } from "next/font/google";
import ThemeChangeButton from "./ThemeChangeButton";

const HomemadeApple = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
});

export default function Navigation() {
  return (
    <Grid
      container
      xs={1}
      ys={1}
      xfs={9}
      yfs={1}
      className="fixed items-center justify-center m-0 p-0 h-10 top-0 left-0 right-0 shadow-md bg-gradient-to-r from-purple-100 to-purple-50 border-b-4 border-opacity-80 border-purple-700"
    >
      <Typography className={`${HomemadeApple.className} pt-4 pl-4`} size="medium">
        DaiChi
      </Typography>
      <NavigationSpan colSpan={3} rowSpan={1} />
      <NaviButton href="/">Home</NaviButton>
      <NaviButton href="/profile">Profile</NaviButton>
      <NaviButton href="/portfolio?tab=overview">Portfolio</NaviButton>
      <NaviButton href="/contact">Contact</NaviButton>
      <ThemeChangeButton />
    </Grid>
  );
}
