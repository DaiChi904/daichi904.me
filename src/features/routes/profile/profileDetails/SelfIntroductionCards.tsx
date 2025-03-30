import { Grid } from "@/components/atoms";
import { FavoriteLanguageCard, GithubCard, HobbyCard, OthersCard } from "./IntroductionCard";

export default function MyIntroductionCards() {
  return (
    <Grid container xs={1} ys={1} xfs={2} yfs={2} className="h-min">
      <HobbyCard xs={1} ys={1} />
      <FavoriteLanguageCard xs={1} ys={1} />
      <OthersCard xs={1} ys={1} />
      <GithubCard xs={1} ys={1} />
    </Grid>
  );
}
