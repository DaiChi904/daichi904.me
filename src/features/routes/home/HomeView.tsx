import { Grid } from "@/components/atoms";
import Image from "next/image";
import HomeNaviButton from "./HomeNaviButton";

export default function HomeView() {
  return (
    <Grid container xs={1} ys={1} xfs={9} yfs={1} className="grow">
      <Grid xs={4} ys={1} xfs={1} yfs={1} className="h-full content-center justify-items-center">
        <Image
          width={10000}
          height={10000}
          src="/others/blurredMonochromeMyIconWithTextBlackTheme.PNG"
          alt="Blurred monochrome my icon."
          className="size-fit"
        />
      </Grid>
      <Grid container xs={5} ys={1} xfs={1} yfs={4} className="h-full">
        <HomeNaviButton href="/profile">About me</HomeNaviButton>
        <HomeNaviButton href="/portfolio?tab=overview">Portfolio</HomeNaviButton>
        <HomeNaviButton href="/blog">Blog</HomeNaviButton>
        <HomeNaviButton href="/contact">Contact</HomeNaviButton>
      </Grid>
    </Grid>
  );
}
